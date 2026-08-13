import { SOCIAL_ICONS } from './ui/icons'
import { HERO, SOCIAL_LINKS } from '../config/content'
import headshot from '../assets/headshot.jpg'

export function Hero() {
  return (
    <section id="home" className="relative bg-white text-center">
      <div className="relative h-20 bg-green-800 sm:h-24">
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
          <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-cream-100 shadow-elevated ring-1 ring-green-950/10 sm:h-24 sm:w-24">
            <img
              src={headshot}
              alt={HERO.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-sm px-5 pb-9 pt-14 sm:max-w-md sm:pb-11 sm:pt-16">
        <h1 className="font-display text-5xl font-medium tracking-tight text-navy-900 sm:text-6xl">
          {HERO.name}
        </h1>

        <p className="mx-auto mt-4 max-w-[19rem] text-[15px] font-medium leading-relaxed text-navy-500 sm:mt-5 sm:max-w-none sm:text-base">
          {HERO.tagline}
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 sm:mt-7">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-200 bg-sky-100 text-sky-800 shadow-subtle transition-colors hover:border-sky-300 hover:bg-sky-200 hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {Icon && <Icon className="h-[18px] w-[18px]" />}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
