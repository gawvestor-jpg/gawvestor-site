import { useState } from 'react'
import { BrandForm } from '../components/BrandForm'
import { usePageMeta } from '../hooks/usePageMeta'
import { SOCIAL_LINKS, FOOTER } from '../config/content'
import { ChartIcon, DiscordIcon, ArrowUpRightIcon, SOCIAL_ICONS } from '../components/ui/icons'
import headshot from '../assets/headshot.jpg'

const LINKS = [
  {
    source: 'Money.com',
    title: 'Compare brokerage accounts',
    body: 'Explore brokerage options and find the fit for you.',
    cta: 'Explore options',
    note: 'Affiliate link',
    href: 'https://secure.money.com/pr/q43d3ae1ac80',
    variant: 'light',
    Icon: ChartIcon,
  },
  {
    source: 'The Wealth Collective',
    title: 'Join the Discord',
    body: 'Keep the market conversation going in a partner trading community.',
    cta: 'View community',
    note: 'Paid partner community · Affiliate',
    href: 'https://discord.gg/dHwmR6Ktw2',
    variant: 'violet',
    Icon: DiscordIcon,
  },
  {
    source: 'TradingView',
    title: 'The charts I use',
    body: 'Follow stocks, build watchlists, and see the bigger picture.',
    cta: 'Explore TradingView',
    note: 'Affiliate link',
    href: 'https://www.tradingview.com/?aff_id=168754',
    variant: 'dark',
    Icon: ChartIcon,
  },
] as const

const CARD_STYLES = {
  light:
    'border-[#d5e3ff] bg-[linear-gradient(120deg,#c7dbff,#e4eaff)] text-[#152542] hover:border-white',
  violet:
    'border-[#35445d] bg-[linear-gradient(120deg,#242a50,#232b42)] text-[#f0f4fb] hover:border-[#4b5d7d]',
  dark: 'border-[#35445d] bg-[#18253a] text-[#f0f4fb] hover:border-[#4b5d7d]',
} as const

export function Home() {
  usePageMeta()
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0c1424] bg-[radial-gradient(at_50%_0%,#213752_0px,transparent_47%)] font-sans text-[#f4f6fc] antialiased">
      <main className="mx-auto max-w-[680px] px-5 pb-10 pt-6 sm:px-[42px]">
        <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#e7edf9]">Gawvestor</p>

        <header className="mt-6 text-center">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-[3px] border-[#a9cbef] shadow-[0_0_0_6px_rgba(169,203,239,0.12)]">
            <img src={headshot} alt="Gawvestor" className="h-full w-full object-cover" />
          </div>
          <h1 className="mt-5 text-[52px] font-[750] leading-none tracking-[-2.6px] sm:text-[70px] sm:tracking-[-3.5px]">
            Gawvestor<span className="text-[#a6c7fc]">.</span>
          </h1>
          <p className="mt-4 text-[17px] tracking-[-0.3px] text-[#e1e8f4] sm:text-[19px]">
            Stocks, tech &amp; personal finance
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
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

        <section className="mt-12" aria-labelledby="links-heading">
          <h2 id="links-heading" className="text-[14px] font-semibold tracking-[-0.2px] text-[#e7edf9]">
            From the videos. Right here.
          </h2>
          <div className="mt-3 grid gap-3">
            {LINKS.map(({ source, title, body, cta, note, href, variant, Icon }) => {
              const isLight = variant === 'light'
              return (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`group block rounded-[19px] border px-6 py-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a6c7fc] sm:px-7 sm:py-6 ${CARD_STYLES[variant]}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-[9px] border ${
                          isLight ? 'border-[#213f69]/20 text-[#274979]' : 'border-white/15 text-[#c7d6f5]'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-[9px] font-[750] uppercase tracking-[1.3px]">{source}</span>
                    </div>
                    <ArrowUpRightIcon className="h-4 w-4 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-4 text-[21px] font-[650] tracking-[-0.8px] sm:text-[23px]">{title}</h3>
                  <p className={`mt-1.5 text-[13px] ${isLight ? 'text-[#3a506f]' : 'text-[#c9d4e6]'}`}>{body}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold">{cta} ↗</span>
                    <span className={`text-right text-[9.5px] ${isLight ? 'text-[#3a506f]' : 'text-[#c9d4e6]'}`}>
                      {note}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
          <p className="mt-4 px-1 text-[10.5px] leading-relaxed text-[#95a8c2]">
            I may earn a commission through these links, at no extra cost to you. The Discord is run by an
            independent partner; paid membership terms apply.
          </p>
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
            href={`mailto:${FOOTER.email}`}
            className="mt-6 inline-block text-[11.5px] text-[#c9d4e6] hover:text-white"
          >
            {FOOTER.email} ↗
          </a>
        </section>
      </main>

      <footer className="mx-auto max-w-[560px] border-t border-white/10 px-5 pb-10 pt-8 text-center">
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
