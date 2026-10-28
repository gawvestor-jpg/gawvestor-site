import { usePageMeta } from '../hooks/usePageMeta'
import { FOOTER } from '../config/content'
import {
  PRESS,
  PLATFORMS,
  VIDEO_STATS,
  AUDIENCE,
  TOP_VIDEOS,
  PARTNERS,
  OFFERINGS,
} from '../config/mediakit'
import { SOCIAL_ICONS, ArrowUpRightIcon, PlayIcon } from '../components/ui/icons'
import headshot from '../assets/headshot.jpg'
import { useStats, floorK, compact } from '../hooks/useStats'

const eyebrow = 'text-[10px] font-bold uppercase tracking-[2px] text-[#a9c9f2]'
const h2 = 'mt-1.5 text-[22px] font-bold tracking-[-0.6px] text-white'
const card = 'rounded-[18px] border border-white/10 bg-white/[0.04]'

export function MediaKit() {
  usePageMeta('Media Kit', 'Gawvestor media kit: audience, top videos, press, and partnership options.')
  const stats = useStats()
  const asOf = new Date(stats.asOf + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  const headline = [
    { value: floorK(stats.total), label: 'Followers across platforms' },
    ...VIDEO_STATS,
    { value: floorK(stats.tiktokLikes), label: 'TikTok likes' },
  ]
  const extra: Record<string, string> = { tiktok: `${floorK(stats.tiktokLikes)} likes`, instagram: 'Reels', youtube: 'Shorts' }

  return (
    <div className="min-h-screen bg-[#0c1424] bg-[radial-gradient(at_50%_0%,#213752_0px,transparent_47%)] font-sans text-[#f4f6fc] antialiased">
      <main className="mx-auto max-w-[760px] px-5 pb-12 pt-6 sm:px-[42px]">
        <a href="/" className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#e7edf9] hover:text-white">
          ← Gawvestor
        </a>

        {/* Header */}
        <header className="mt-6 flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-[3px] border-[#a9cbef] shadow-[0_0_0_6px_rgba(169,203,239,0.12)]">
            <img src={headshot} alt="Brandon Gaw" className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 sm:mt-0">
            <p className={eyebrow}>Media kit</p>
            <h1 className="mt-1 text-[40px] font-[750] leading-none tracking-[-2px] sm:text-[48px]">
              Gawvestor<span className="text-[#a6c7fc]">.</span>
            </h1>
            <p className="mt-2 max-w-[440px] text-[14px] leading-snug text-[#c9d4e6]">
              Brandon Gaw. Stocks, tech and personal finance in plain English, from someone who spent a year
              working in the chip industry.
            </p>
          </div>
        </header>

        {/* Press */}
        <a
          href={PRESS.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-7 block rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] px-5 py-5 transition-colors hover:border-white/25"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#a9c9f2]">Featured in {PRESS.outlet}</span>
            <span className="text-[11px] text-[#95a8c2]">{PRESS.date}</span>
          </div>
          <p className="mt-3 text-[20px] font-semibold leading-snug tracking-[-0.5px] text-white">
            <span className="text-[#a6c7fc]">“</span>
            {PRESS.quote}
            <span className="text-[#a6c7fc]">”</span>
          </p>
          <p className="mt-3 text-[12.5px] text-[#c9d4e6]">{PRESS.headline}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white">
            Read the story
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </p>
        </a>

        {/* Headline stats */}
        <section className="mt-9" aria-labelledby="stats-heading">
          <p className={eyebrow}>By the numbers · Live, {asOf}</p>
          <h2 id="stats-heading" className={h2}>Reach</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {headline.map((s) => (
              <div key={s.label} className={`${card} px-4 py-4`}>
                <p className="text-[28px] font-[750] leading-none tracking-[-1px] text-[#a6c7fc]">{s.value}</p>
                <p className="mt-2 text-[11.5px] leading-snug text-[#c9d4e6]">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {PLATFORMS.map((p) => {
              const Icon = SOCIAL_ICONS[p.label]
              return (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${card} flex items-center gap-3 px-4 py-3 transition-colors hover:border-white/25`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white/10">
                    {Icon && <Icon className="h-5 w-5" />}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[17px] font-bold leading-tight">{compact(stats[p.key])}</span>
                    <span className="block text-[11px] text-[#95a8c2]">
                      {p.label} · {extra[p.key]}
                    </span>
                  </span>
                </a>
              )
            })}
          </div>
        </section>

        {/* Top videos */}
        <section className="mt-10" aria-labelledby="videos-heading">
          <p className={eyebrow}>Top content</p>
          <h2 id="videos-heading" className={h2}>Most-watched videos</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {TOP_VIDEOS.map((v, i) => (
              <li key={v.href}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${card} group flex items-center gap-4 px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-white/25`}
                >
                  <span className="w-7 shrink-0 text-[22px] font-[750] tracking-[-1px] text-white/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[1.2px] text-[#7fd1a6]">
                      {v.category}
                    </span>
                    <span className="mt-0.5 block text-[14.5px] font-semibold leading-snug">{v.title}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[12px] font-bold">
                    <PlayIcon className="h-2.5 w-2.5" />
                    {v.views}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Audience */}
        <section className="mt-10" aria-labelledby="audience-heading">
          <p className={eyebrow}>Audience</p>
          <h2 id="audience-heading" className={h2}>Who's watching</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {AUDIENCE.map((a) => (
              <div key={a.label} className={`${card} px-4 py-4`}>
                <p className="text-[24px] font-[750] leading-none tracking-[-0.8px]">{a.value}</p>
                <p className="mt-2 text-[11.5px] leading-snug text-[#c9d4e6]">{a.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10.5px] text-[#95a8c2]">Young, mostly male, early-career investors. Source: TikTok Studio.</p>
        </section>

        {/* Partners */}
        <section className="mt-10" aria-labelledby="partners-heading">
          <p className={eyebrow}>Brand partners</p>
          <h2 id="partners-heading" className={h2}>Worked with</h2>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {PARTNERS.map((p) => (
              <span key={p} className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[13px] font-semibold">
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* Offerings */}
        <section className="mt-10" aria-labelledby="offer-heading">
          <p className={eyebrow}>Partnerships</p>
          <h2 id="offer-heading" className={h2}>Ways to work together</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {OFFERINGS.map((o) => (
              <div key={o.title} className={`${card} px-4 py-4`}>
                <p className="text-[15px] font-bold">{o.title}</p>
                <p className="mt-1.5 text-[12px] leading-snug text-[#c9d4e6]">{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-10 rounded-[22px] border border-[#d5e3ff] bg-[linear-gradient(120deg,#c7dbff,#e4eaff)] px-5 py-6 text-center text-[#152542]">
          <h2 className="text-[22px] font-bold tracking-[-0.6px]">Let's make something worth watching.</h2>
          <p className="mt-1.5 text-[13px] text-[#3a506f]">Rates and full analytics on request.</p>
          <a
            href={`mailto:${FOOTER.email}?subject=Partnership%20inquiry`}
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#152542] px-6 text-[13px] font-bold text-white hover:bg-[#1f3560]"
          >
            {FOOTER.email}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </section>

        <p className="mt-6 text-center text-[9.5px] leading-relaxed text-[#95a8c2]">
          Follower counts update automatically from public profiles. Video views as of Oct 2026. All content is educational and not financial advice.
          Sponsored content is always disclosed.
        </p>
      </main>
    </div>
  )
}
