import { FadeIn } from './ui/FadeIn'
import { SOCIAL_ICONS } from './ui/icons'
import { HERO, SOCIAL_LINKS } from '../config/content'
import headshot from '../assets/headshot.jpg'

export function Hero() {
  return (
    <section id="home" className="relative bg-white text-center">
      <div className="relative h-20 bg-green-800 sm:h-24">
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
          <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white bg-cream-100 shadow-elevated sm:h-24 sm:w-24">
            <img
              src={headshot}
              alt={HERO.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-sm px-5 pb-6 pt-12 sm:max-w-md sm:pb-8 sm:pt-14">
        <h1 className="font-display text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
          {HERO.name}
        </h1>

        <div className="mt-3 flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-700 transition-colors hover:border-green-400 hover:bg-green-100 hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {Icon && <Icon className="h-4 w-4" />}
              </a>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
