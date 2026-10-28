// GET /api/clicks?key=<CLICKS_KEY> — private click report (bookmark it).
const LABELS = {
  sie: 'SIE Exam Prep', brokerage: 'Brokerage (money.com)', ira: 'IRA (money.com)', discord: 'Discord',
  reuters: 'Reuters story', 'video-1': 'Top video #1', 'video-2': 'Top video #2', 'video-3': 'Top video #3',
  'videos-all': 'See all videos', tiktok: 'TikTok button', instagram: 'Instagram button', youtube: 'YouTube button',
  mediakit: 'Media kit', 'work-with-me': 'Work with me', email: 'Email (homepage)', 'mediakit-email': 'Email (media kit)',
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

export async function onRequestGet({ env, request }) {
  const key = new URL(request.url).searchParams.get('key')
  if (!env.CLICKS_KEY || key !== env.CLICKS_KEY) return new Response('Not found', { status: 404 })
  if (!env.STATS_KV) return new Response('STATS_KV not bound', { status: 500 })

  const rows = {}
  let cursor
  do {
    const page = await env.STATS_KV.list({ prefix: 'clicks:', cursor })
    for (const k of page.keys) {
      const [, day, id] = k.name.split(':')
      const n = Number(await env.STATS_KV.get(k.name)) || 0
      rows[id] ??= { today: 0, d7: 0, d30: 0, all: 0 }
      const age = (Date.now() - Date.parse(day + 'T00:00:00Z')) / 86400000
      if (age < 1) rows[id].today += n
      if (age < 7) rows[id].d7 += n
      if (age < 30) rows[id].d30 += n
      rows[id].all += n
    }
    cursor = page.list_complete ? undefined : page.cursor
  } while (cursor)

  const sorted = Object.entries(rows).sort((a, b) => b[1].d30 - a[1].d30)
  const tr = sorted
    .map(([id, r]) => `<tr><td>${esc(LABELS[id] || id)}</td><td>${r.today}</td><td>${r.d7}</td><td>${r.d30}</td><td>${r.all}</td></tr>`)
    .join('')
  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>Gawvestor clicks</title>
<style>body{font-family:system-ui,sans-serif;background:#0c1424;color:#f4f6fc;margin:0;padding:24px 16px}
h1{font-size:22px;margin:0 0 4px}p{color:#95a8c2;font-size:13px;margin:0 0 18px}
table{width:100%;max-width:640px;border-collapse:collapse;font-size:14px}
th,td{padding:10px 8px;border-bottom:1px solid #22314a;text-align:right}th:first-child,td:first-child{text-align:left}
th{color:#a9c9f2;font-size:11px;text-transform:uppercase;letter-spacing:1px}</style></head><body>
<h1>Link taps</h1><p>Counts from gawvestor.com. Days are UTC. No personal data is stored.</p>
<table><thead><tr><th>Link</th><th>Today</th><th>7d</th><th>30d</th><th>All</th></tr></thead><tbody>${tr || '<tr><td colspan="5">No taps yet</td></tr>'}</tbody></table>
</body></html>`
  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } })
}
