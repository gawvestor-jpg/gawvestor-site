import { SOCIAL_ICONS } from './ui/icons'
import { HERO, SOCIAL_LINKS } from '../config/content'
import headshot from '../assets/headshot.jpg'

// Deliberately quiet: warm white, charcoal type, green only on hover.
// The old full-width green band read as "green finance" theming.
export function Hero() {
  return (
    <section id="home" className="bg-white px-5 pb-8 pt-9 text-center sm:pb-12 sm:pt-14">
      <div className="animate-hero-enter mx-auto max-w-sm sm:max-w-md">
        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-cream-100 shadow-subtle ring-1 ring-navy-950/10 sm:h-24 sm:w-24">
          <img src={headshot} alt={HERO.name} className="h-full w-full object-cover" />
        </div>

        <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-none tracking-tight text-navy-950 sm:text-5xl">
          {HERO.name}
        </h1>

        <p className="mt-2.5 text-[15px] font-medium text-navy-500 sm:text-base">
          {HERO.tagline}
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-600 transition-colors hover:border-green-500 hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {Icon && <Icon className="h-[17px] w-[17px]" />}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
