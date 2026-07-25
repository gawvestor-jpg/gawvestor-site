import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'
import { HERO } from '../config/content'

export function Hero() {
  return (
    <section className="bg-cream px-6 py-16 sm:py-24 lg:py-section-y-lg text-center">
      <FadeIn className="mx-auto max-w-2xl">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-navy-900/10 bg-navy-100 shadow-subtle sm:h-28 sm:w-28">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-10 w-10 text-navy-400 sm:h-12 sm:w-12"
            aria-hidden="true"
          >
            <path
              d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2.25c-4.14 0-7.5 2.35-7.5 5.25v.75a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-.75c0-2.9-3.36-5.25-7.5-5.25Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <h1 className="mt-8 font-display text-4xl font-medium tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
          {HERO.name}
        </h1>
        <p className="mt-3 font-sans text-sm font-medium uppercase tracking-wide text-gold-600 sm:text-base">
          {HERO.title}
        </p>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-navy-600 sm:text-lg">
          {HERO.valueProp}
        </p>
        <div className="mt-10">
          <Button>{HERO.ctaLabel}</Button>
        </div>
      </FadeIn>
    </section>
  )
}
