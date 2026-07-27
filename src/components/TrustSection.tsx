import { FadeIn } from './ui/FadeIn'
import { TRUST } from '../config/content'

export function TrustSection() {
  return (
    <section className="relative border-t border-white/10 bg-navy-900 px-6 py-12 sm:py-section-y">
      <div className="absolute inset-x-0 top-0 flex -translate-y-px justify-center">
        <span className="h-px w-16 bg-gold-400/60" />
      </div>
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {TRUST.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-medium text-gold-400 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-navy-300">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delayMs={80}>
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 sm:mt-16 sm:grid-cols-3 sm:gap-12 sm:pt-16">
            <div>
              <h3 className="font-display text-xl font-medium text-cream-50">Background</h3>
              <ul className="mt-4 space-y-2">
                {TRUST.background.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-navy-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-cream-50">
                Content philosophy
              </h3>
              <p className="mt-4 font-sans text-sm italic leading-relaxed text-navy-300">
                {TRUST.philosophy}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-teal-400">
                {TRUST.directAccess.heading}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-navy-300">
                {TRUST.directAccess.body}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
