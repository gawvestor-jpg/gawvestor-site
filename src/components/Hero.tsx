import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'
import { MarketGraphic } from './ui/MarketGraphic'
import { HERO } from '../config/content'
import headshot from '../assets/headshot.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-navy-950 px-6 py-16 sm:py-24 lg:py-section-y-lg text-center"
    >
      <MarketGraphic className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 w-full sm:h-56 lg:h-64" />

      <FadeIn className="relative z-10 mx-auto max-w-2xl">
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-navy-800 shadow-subtle sm:h-28 sm:w-28">
          <img
            src={headshot}
            alt={HERO.name}
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="mt-8 font-display text-4xl font-medium tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
          {HERO.name}
        </h1>
        <p className="mx-auto mt-4 inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 font-sans text-sm font-medium uppercase tracking-wide text-gold-400 sm:text-base">
          {HERO.title}
        </p>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-navy-300 sm:text-lg">
          {HERO.valueProp}
        </p>

        <div className="mt-8">
          <Button variant="secondary" href="#contact">
            {HERO.ctaLabel}
          </Button>
        </div>
      </FadeIn>
    </section>
  )
}
