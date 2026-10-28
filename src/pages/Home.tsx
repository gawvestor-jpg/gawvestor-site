import { useState } from 'react'
import { BrandForm } from '../components/BrandForm'
import { usePageMeta } from '../hooks/usePageMeta'
import { SOCIAL_LINKS, FOOTER } from '../config/content'
import { PRESS, TOP_VIDEOS } from '../config/mediakit'
import { ChartIcon, DiscordIcon, SproutIcon, ArrowUpRightIcon, PlayIcon, SOCIAL_ICONS } from '../components/ui/icons'
import headshot from '../assets/headshot.jpg'
import { useStats, floorK } from '../hooks/useStats'

const LINKS = [
  {
    title: 'Open a brokerage account',
    subtitle: 'Compare the top apps side by side',
    href: 'https://secure.money.com/pr/q43d3ae1ac80?s1=site-brokerage',
    variant: 'light',
    Icon: ChartIcon,
  },
  {
    title: 'Open an IRA',
    subtitle: 'Tax perks that help your money grow',
    href: 'https://secure.money.com/pr/j9e3f8df762c?s1=site-ira',
    variant: 'dark',
    Icon: SproutIcon,
  },
  {
    title: 'Join me on Discord',
    subtitle: 'Daily stock talk + community',
    href: 'https://discord.gg/dHwmR6Ktw2',
    variant: 'violet',
    Icon: DiscordIcon,
  },
] as const

const CARD_STYLES = {
  light:
    'border-[#d5e3ff] bg-[linear-gradient(120deg,#c7dbff,#e4eaff)] text-[#152542] shadow-[0_10px_30px_-12px_rgba(166,199,252,0.55)] hover:border-white hover:shadow-[0_14px_36px_-12px_rgba(166,199,252,0.75)]',
  violet:
    'border-[#4a4f8a] bg-[linear-gradient(120deg,#2d3166,#232b42)] text-[#f0f4fb] hover:border-[#7076c9]',
  dark: 'border-[#35445d] bg-[linear-gradient(120deg,#1c2c45,#18253a)] text-[#f0f4fb] hover:border-[#5f7aa3]',
} as const

const BADGE_STYLES = {
  light: 'bg-[#152542] text-[#c7dbff]',
  violet: 'bg-[#5865f2] text-white',
  dark: 'bg-[#2f6b4f] text-[#d6f5e3]',
} as const

export function Home() {
  usePageMeta()
  const [formOpen, setFormOpen] = useState(false)
  const stats = useStats()

  return (
    <div className="min-h-screen bg-[#0c1424] bg-[radial-gradient(at_50%_0%,#213752_0px,transparent_47%)] font-sans text-[#f4f6fc] antialiased">
      <main className="mx-auto max-w-[680px] px-5 pb-10 pt-6 sm:px-[42px] lg:grid lg:max-w-[1120px] lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:pt-14">
        <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#e7edf9] lg:hidden">Gawvestor</p>

        <header className="mt-6 text-center lg:sticky lg:top-14 lg:mt-0 lg:self-start lg:text-left">
          <div className="mx-auto h-28 w-28 overflow-hidden lg:mx-0 lg:h-32 lg:w-32 rounded-full border-[3px] border-[#a9cbef] shadow-[0_0_0_6px_rgba(169,203,239,0.12)]">
            <img src={headshot} alt="Gawvestor" className="h-full w-full object-cover" />
          </div>
          <h1 className="mt-5 text-[52px] font-[750] leading-none tracking-[-2.6px] sm:text-[70px] sm:tracking-[-3.5px] lg:text-[64px]">
            Gawvestor<span className="text-[#a6c7fc]">.</span>
          </h1>
          <p className="mt-4 text-[17px] tracking-[-0.3px] text-[#e1e8f4] sm:text-[19px]">
            Stocks, tech &amp; personal finance
          </p>
          <p className="mt-2 text-[12.5px] text-[#95a8c2] lg:text-[13px]">
            Join <span className="font-semibold text-white">{floorK(stats.tiktok)}</span> people learning to invest on TikTok
          </p>
          <p className="mt-6 hidden max-w-[330px] text-[14.5px] leading-relaxed text-[#c9d4e6] lg:block">
            Hey, I'm Brandon. I spent a year working in the chip industry, and now I break down stocks, tech and
            money in plain English. Everything I use and recommend is on this page.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 lg:justify-start">
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.label]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 text-[12.5px] sm:px-4 sm:text-[13px] font-semibold text-white transition-colors hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc]"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {link.label}
                </a>
              )
            })}
          </div>

        </header>

        <div className="min-w-0">
        <section className="mt-9 lg:mt-0" aria-labelledby="links-heading">
          <h2 id="links-heading" className="text-[20px] font-bold tracking-[-0.5px] text-white">
            Start investing in minutes<span className="text-[#a6c7fc]">.</span>
          </h2>
          <p className="mt-1 text-[12.5px] text-[#95a8c2]">Pick one and get set up today.</p>
          <div className="mt-3.5 grid gap-3">
            <a
              href="/sie/"
              className="group relative flex min-h-[84px] items-center gap-4 overflow-hidden rounded-[20px] border border-[#3f8f6a] bg-[linear-gradient(120deg,#1f5a43,#173a33)] px-4 py-3.5 text-[#f0f4fb] shadow-[0_10px_30px_-12px_rgba(63,143,106,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6cc59a] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc] sm:px-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#d6f5e3] text-[#1f5a43]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" />
                  <path d="m9 9 2 2 4-4" />
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="block text-[18px] font-[700] leading-tight tracking-[-0.5px]">Free SIE Exam Prep</span>
                  <span className="rounded-full bg-[#d6f5e3] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#1f5a43]">Free</span>
                </span>
                <span className="mt-1 block text-[12.5px] leading-snug text-[#c9e8d8]">
                  Lessons, practice questions &amp; timed exams. No signup.
                </span>
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </a>
            {LINKS.map(({ subtitle, title, href, variant, Icon }) => {
              const isLight = variant === 'light'
              const muted = isLight ? 'text-[#3a506f]' : 'text-[#c9d4e6]'
              return (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`group relative flex min-h-[76px] items-center gap-4 overflow-hidden rounded-[20px] border px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc] sm:px-5 ${CARD_STYLES[variant]}`}
                >
                  {isLight && <span aria-hidden="true" className="card-shine" />}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${BADGE_STYLES[variant]}`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[18px] font-[700] leading-tight tracking-[-0.5px]">{title}</span>
                    <span className={`mt-1 block text-[12.5px] leading-snug ${muted}`}>{subtitle}</span>
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isLight ? 'bg-[#152542]/10' : 'bg-white/10'
                    }`}
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </a>
              )
            })}
          </div>
          <p className="mt-3 text-center text-[10.5px] text-[#95a8c2]">
            Some links earn me a commission at no cost to you.
          </p>
        </section>

        <section className="mt-9" aria-labelledby="press-heading">
          <a
            href={PRESS.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-5 py-5 transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc] sm:px-6"
          >
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-8 select-none text-[140px] font-bold leading-none text-white/[0.04]">
              ”
            </span>
            <span className="flex items-center justify-between">
              <span id="press-heading" className="text-[10.5px] font-bold uppercase tracking-[2px] text-[#a9c9f2]">
                Featured in {PRESS.outlet}
              </span>
              <span className="text-[11px] text-[#95a8c2]">{PRESS.date}</span>
            </span>
            <span className="mt-3 block text-[19px] font-semibold leading-snug tracking-[-0.4px] text-white sm:text-[21px]">
              “{PRESS.quote}”
            </span>
            <span className="mt-2.5 block text-[12.5px] leading-snug text-[#c9d4e6]">
              What I told Reuters about investing through the midterms.
            </span>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors group-hover:bg-white/15">
              Read the story
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </section>

        <section className="mt-9" aria-labelledby="popular-heading">
          <div className="flex items-baseline justify-between">
            <h2 id="popular-heading" className="text-[11px] font-bold uppercase tracking-[2px] text-[#a9c9f2]">
              Most watched
            </h2>
            <a
              href="https://www.tiktok.com/@gawvestor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11.5px] font-semibold text-[#c9d4e6] hover:text-white"
            >
              See all ↗
            </a>
          </div>
          <div className="mt-3 grid gap-2">
            {TOP_VIDEOS.slice(0, 3).map((v) => (
              <a
                key={v.href}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <PlayIcon className="h-3 w-3" />
                </span>
                <span className="min-w-0 flex-1 truncate text-[14px] font-semibold">{v.title}</span>
                <span className="shrink-0 text-[12px] font-semibold text-[#95a8c2]">{v.views}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-8 border-t border-white/10 pt-7" aria-labelledby="work-heading">
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#a9c9f2]">For brands &amp; creators</p>
          <h2 id="work-heading" className="mt-2 max-w-[300px] text-[21px] font-bold leading-tight tracking-[-0.5px]">
            Let's make something worth watching.
          </h2>
          <p className="mt-2 text-[12.5px] text-[#e1e8f4]">Have a collaboration in mind? Let's talk.</p>

          <button
            type="button"
            aria-expanded={formOpen}
            onClick={() => setFormOpen((open) => !open)}
            className="mt-5 flex min-h-11 w-full items-center justify-between rounded-[11px] border border-[#35445d] bg-[#1b2740] px-4 text-[12.5px] font-bold text-white transition-colors hover:border-[#4b5d7d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc]"
          >
            Work with me
            <span aria-hidden="true" className="text-base leading-none">
              {formOpen ? '−' : '+'}
            </span>
          </button>

          {formOpen && (
            <div className="mt-3 rounded-[16px] bg-white p-4 text-left sm:p-5">
              <BrandForm />
            </div>
          )}

          <a
            href="/mediakit"
            className="mt-3 flex min-h-11 w-full items-center justify-between rounded-[11px] border border-[#35445d] bg-transparent px-4 text-[12.5px] font-bold text-white transition-colors hover:border-[#4b5d7d] hover:bg-[#1b2740] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc]"
          >
            View media kit
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${FOOTER.email}`}
            className="mt-6 inline-block text-[11.5px] text-[#c9d4e6] hover:text-white"
          >
            {FOOTER.email} ↗
          </a>
        </section>
        </div>
      </main>

      <footer className="mx-auto max-w-[560px] lg:max-w-[1120px] border-t border-white/10 px-5 pb-10 pt-8 text-center">
        <p className="text-[22px] font-bold tracking-[-0.8px]">
          Gawvestor<span className="text-[#a6c7fc]">.</span>
        </p>
        <nav className="mt-5 flex flex-wrap justify-center gap-5 text-[11px] text-[#e1e8f4]">
          {FOOTER.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mx-auto mt-5 max-w-[360px] text-[9.5px] leading-relaxed text-[#95a8c2]">
          © {new Date().getFullYear()} {FOOTER.copyrightName}. {FOOTER.disclaimerNote}
        </p>
      </footer>
    </div>
  )
}
