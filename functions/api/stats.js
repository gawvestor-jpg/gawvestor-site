// Cloudflare Pages Function: GET /api/stats
//
// Reads live follower counts from the public TikTok, YouTube and Instagram
// profiles, caches the result at the edge for 6 hours, and remembers the last
// good value for 30 days. If a platform blocks the request, that platform falls
// back to the last good value, then to the hand-set numbers below.
//
// Update FALLBACK whenever you notice it's far behind; it's only a safety net.

const FALLBACK = { tiktok: 24100, tiktokLikes: 218000, instagram: 1539, youtube: 324, asOf: '2026-10-28' }

const FRESH_SECONDS = 6 * 60 * 60
const LAST_GOOD_SECONDS = 30 * 24 * 60 * 60

const BROWSER_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'

async function getText(url, ua = BROWSER_UA) {
  const res = await fetch(url, {
    headers: { 'user-agent': ua, 'accept-language': 'en-US,en;q=0.9', accept: 'text/html' },
    cf: { cacheTtl: 0 },
  })
  if (!res.ok) throw new Error(`${url} ${res.status}`)
  return res.text()
}

// "1.2K" / "3.4M" / "1,539" -> number
function parseHuman(str) {
  const m = String(str).replace(/,/g, '').match(/([\d.]+)\s*([KM])?/i)
  if (!m) return null
  const n = parseFloat(m[1])
  const mult = m[2] ? (m[2].toUpperCase() === 'M' ? 1e6 : 1e3) : 1
  return Math.round(n * mult)
}

async function tiktok() {
  const html = await getText('https://www.tiktok.com/@gawvestor')
  const followers = html.match(/"followerCount":(\d+)/)
  const likes = html.match(/"heartCount":(\d+)/)
  if (!followers) throw new Error('tiktok: no followerCount')
  return { tiktok: Number(followers[1]), tiktokLikes: likes ? Number(likes[1]) : undefined }
}

async function youtube() {
  const html = await getText('https://www.youtube.com/@gawvestor')
  const m =
    html.match(/"subscriberCountText":\{[^}]*?"simpleText":"([^"]+)"/) ||
    html.match(/"content":"([\d.,]+[KM]?) subscribers"/)
  if (!m) throw new Error('youtube: no subscriber count')
  const n = parseHuman(m[1])
  if (n == null) throw new Error('youtube: unparsable')
  return { youtube: n }
}

async function instagram() {
  // Instagram serves the og:description to link-preview crawlers.
  const html = await getText('https://www.instagram.com/gawvestor/', 'facebookexternalhit/1.1')
  const m = html.match(/content="([\d.,]+[KM]?) Followers/i)
  if (!m) throw new Error('instagram: no follower count')
  const n = parseHuman(m[1])
  if (n == null) throw new Error('instagram: unparsable')
  return { instagram: n }
}

function json(body, maxAge) {
  return new Response(JSON.stringify(body), {
    headers: {
      'content-type': 'application/json',
      'cache-control': `public, max-age=${maxAge}`,
      'access-control-allow-origin': '*',
    },
  })
}

export async function onRequestGet(context) {
  const cache = caches.default
  const origin = new URL(context.request.url).origin
  const freshKey = new Request(`${origin}/__stats/fresh`)
  const lastGoodKey = new Request(`${origin}/__stats/last-good`)

  const fresh = await cache.match(freshKey)
  if (fresh) return json(await fresh.json(), 600)

  let lastGood = {}
  try {
    const hit = await cache.match(lastGoodKey)
    if (hit) lastGood = await hit.json()
  } catch {
    lastGood = {}
  }

  const results = await Promise.allSettled([tiktok(), youtube(), instagram()])
  const live = {}
  const errors = []
  for (const r of results) {
    if (r.status === 'fulfilled') Object.assign(live, r.value)
    else errors.push(String(r.reason?.message || r.reason))
  }

  const merged = { ...FALLBACK, ...lastGood }
  for (const [k, v] of Object.entries(live)) {
    if (typeof v === 'number' && v > 0) merged[k] = v
  }
  merged.total = merged.tiktok + merged.instagram + merged.youtube
  merged.live = Object.keys(live).filter((k) => k !== 'tiktokLikes')
  if (merged.live.length) merged.asOf = new Date().toISOString().slice(0, 10)
  if (errors.length) merged.errors = errors

  const store = (key, ttl) =>
    cache.put(key, new Response(JSON.stringify(merged), { headers: { 'cache-control': `max-age=${ttl}` } }))

  // Only treat this as "fresh" if at least TikTok (the big number) came back live.
  const writes = []
  if (merged.live.length) writes.push(store(lastGoodKey, LAST_GOOD_SECONDS))
  writes.push(store(freshKey, live.tiktok ? FRESH_SECONDS : 15 * 60))
  context.waitUntil(Promise.all(writes))

  return json(merged, 600)
}
