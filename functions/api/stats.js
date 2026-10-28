// Cloudflare Pages Function: GET /api/stats
//
// Live follower counts from each platform's OFFICIAL API, cached at the edge
// for 6 hours. A platform with no credentials set (or a failed call) falls back
// to its last good value, then to the hand-set FALLBACK below. The site rounds
// every number DOWN, so a stale count can only ever understate.
//
// Credentials live in Cloudflare Pages → Settings → Variables and Secrets
// (see SETUP-STATS.md). Nothing here is required for the site to work.
//
//   YouTube   YT_API_KEY                                   (YouTube Data API v3)
//   TikTok    TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET,     (Display API,
//             TIKTOK_REFRESH_TOKEN                          scope user.info.stats)
//   Instagram IG_ACCESS_TOKEN                              (Instagram API with
//                                                           Instagram Login)
//   Optional  STATS_KV  KV namespace binding: lets the function store rotated
//             TikTok/Instagram tokens so you never have to re-paste them.

const FALLBACK = { tiktok: 24100, tiktokLikes: 218000, instagram: 1539, youtube: 324, asOf: '2026-10-28' }

const FRESH_SECONDS = 6 * 60 * 60
const LAST_GOOD_SECONDS = 30 * 24 * 60 * 60
const UA = 'gawvestor.com follower stats (+https://gawvestor.com)'

async function kvGet(env, key) {
  try {
    return env.STATS_KV ? await env.STATS_KV.get(key) : null
  } catch {
    return null
  }
}
async function kvPut(env, key, value) {
  try {
    if (env.STATS_KV) await env.STATS_KV.put(key, value)
  } catch {
    /* ignore */
  }
}

async function youtube(env) {
  if (env.YT_API_KEY) {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=%40gawvestor&key=${env.YT_API_KEY}`
    const data = await fetch(url).then((r) => r.json())
    const n = Number(data?.items?.[0]?.statistics?.subscriberCount)
    if (!n) throw new Error('youtube api: no subscriberCount')
    return { youtube: n }
  }
  // No key: read the public channel page.
  const html = await fetch('https://www.youtube.com/@gawvestor', {
    headers: { 'user-agent': UA, 'accept-language': 'en-US' },
  }).then((r) => r.text())
  const m = html.match(/"([\d.,]+[KM]?) subscribers"/)
  if (!m) throw new Error('youtube page: no subscriber count')
  const raw = m[1].replace(/,/g, '')
  const mult = /M$/i.test(raw) ? 1e6 : /K$/i.test(raw) ? 1e3 : 1
  return { youtube: Math.round(parseFloat(raw) * mult) }
}

async function tiktok(env) {
  if (!env.TIKTOK_CLIENT_KEY || !env.TIKTOK_CLIENT_SECRET) throw new Error('tiktok: not configured')
  const refreshToken = (await kvGet(env, 'tiktok_refresh_token')) || env.TIKTOK_REFRESH_TOKEN
  if (!refreshToken) throw new Error('tiktok: no refresh token')

  const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_key: env.TIKTOK_CLIENT_KEY,
      client_secret: env.TIKTOK_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  }).then((r) => r.json())
  if (!tokenRes.access_token) throw new Error(`tiktok token: ${tokenRes.error || 'failed'}`)
  if (tokenRes.refresh_token && tokenRes.refresh_token !== refreshToken) {
    await kvPut(env, 'tiktok_refresh_token', tokenRes.refresh_token)
  }

  const info = await fetch('https://open.tiktokapis.com/v2/user/info/?fields=follower_count,likes_count', {
    headers: { authorization: `Bearer ${tokenRes.access_token}` },
  }).then((r) => r.json())
  const user = info?.data?.user
  if (!user || typeof user.follower_count !== 'number') throw new Error('tiktok: no follower_count')
  return { tiktok: user.follower_count, tiktokLikes: user.likes_count }
}

async function instagram(env) {
  const token = (await kvGet(env, 'ig_access_token')) || env.IG_ACCESS_TOKEN
  if (!token) throw new Error('instagram: not configured')
  const data = await fetch(`https://graph.instagram.com/me?fields=followers_count&access_token=${token}`).then((r) =>
    r.json(),
  )
  if (typeof data.followers_count !== 'number') throw new Error('instagram: no followers_count')

  // Long-lived tokens last 60 days. Refresh about weekly so it never lapses
  // (only persists if STATS_KV is bound).
  if (env.STATS_KV) {
    const last = Number(await kvGet(env, 'ig_refreshed_at')) || 0
    if (Date.now() - last > 7 * 24 * 3600 * 1000) {
      const r = await fetch(
        `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`,
      ).then((x) => x.json())
      if (r.access_token) {
        await kvPut(env, 'ig_access_token', r.access_token)
        await kvPut(env, 'ig_refreshed_at', String(Date.now()))
      }
    }
  }
  return { instagram: data.followers_count }
}

function json(body, maxAge) {
  return new Response(JSON.stringify(body), {
    headers: { 'content-type': 'application/json', 'cache-control': `public, max-age=${maxAge}` },
  })
}

export async function onRequestGet(context) {
  const { env } = context
  const cache = caches.default
  const origin = new URL(context.request.url).origin
  const freshKey = new Request(`${origin}/__stats/fresh`)
  const lastGoodKey = new Request(`${origin}/__stats/last-good`)

  const fresh = await cache.match(freshKey)
  if (fresh) return json(await fresh.json(), 600)

  let lastGood = {}
  try {
    const fromKv = await kvGet(env, 'last_good')
    if (fromKv) lastGood = JSON.parse(fromKv)
    else {
      const hit = await cache.match(lastGoodKey)
      if (hit) lastGood = await hit.json()
    }
  } catch {
    lastGood = {}
  }

  const results = await Promise.allSettled([tiktok(env), youtube(env), instagram(env)])
  const live = {}
  const notes = []
  for (const r of results) {
    if (r.status === 'fulfilled') Object.assign(live, r.value)
    else notes.push(String(r.reason?.message || r.reason))
  }

  const merged = { ...FALLBACK, ...lastGood }
  for (const [k, v] of Object.entries(live)) {
    if (typeof v === 'number' && v > 0) merged[k] = v
  }
  merged.total = merged.tiktok + merged.instagram + merged.youtube
  merged.live = Object.keys(live).filter((k) => k !== 'tiktokLikes')
  if (merged.live.length) merged.asOf = new Date().toISOString().slice(0, 10)
  merged.notes = notes

  const body = JSON.stringify(merged)
  const writes = [
    cache.put(freshKey, new Response(body, { headers: { 'cache-control': `max-age=${FRESH_SECONDS}` } })),
  ]
  if (merged.live.length) {
    writes.push(cache.put(lastGoodKey, new Response(body, { headers: { 'cache-control': `max-age=${LAST_GOOD_SECONDS}` } })))
    writes.push(kvPut(env, 'last_good', body))
  }
  context.waitUntil(Promise.all(writes))

  return json(merged, 600)
}
