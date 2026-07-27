import { FadeIn } from './ui/FadeIn'
import { ABOUT } from '../config/content'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-white/10 bg-navy-950 px-6 py-12 sm:py-section-y"
    >
      <div className="absolute inset-x-0 top-0 flex -translate-y-px justify-center">
        <span className="h-px w-16 bg-gold-400/60" />
      </div>
      <FadeIn className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-2xl font-medium text-cream-50 sm:text-3xl">
          {ABOUT.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-display text-xl italic leading-snug text-gold-400 sm:text-2xl">
          "{ABOUT.lead}"
        </p>
        <p className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-navy-300">
          {ABOUT.body}
        </p>
      </FadeIn>
    </section>
  )
}
