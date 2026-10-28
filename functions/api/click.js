// POST /api/click?c=<id>  — counts a tap on a homepage link.
// Stored in the STATS_KV namespace as clicks:<YYYY-MM-DD>:<id>. No cookies, no personal data.
const ALLOWED = new Set([
  'sie', 'brokerage', 'ira', 'discord', 'reuters', 'video-1', 'video-2', 'video-3', 'videos-all',
  'tiktok', 'instagram', 'youtube', 'mediakit', 'work-with-me', 'email', 'mediakit-email',
])

export async function onRequest(context) {
  const { env, request } = context
  const id = new URL(request.url).searchParams.get('c')
  if (!env.STATS_KV || !id || !ALLOWED.has(id)) return new Response(null, { status: 204 })

  const day = new Date().toISOString().slice(0, 10)
  const key = `clicks:${day}:${id}`
  context.waitUntil(
    (async () => {
      try {
        const n = Number(await env.STATS_KV.get(key)) || 0
        await env.STATS_KV.put(key, String(n + 1), { expirationTtl: 400 * 24 * 3600 })
      } catch {
        /* over the daily write limit or KV hiccup: drop this one */
      }
    })(),
  )
  return new Response(null, { status: 204 })
}
