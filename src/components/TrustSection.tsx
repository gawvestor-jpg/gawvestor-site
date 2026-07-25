import { FadeIn } from './ui/FadeIn'
import { TRUST } from '../config/content'

export function TrustSection() {
  return (
    <section className="border-t border-navy-900/10 bg-white px-6 py-12 sm:py-section-y">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <dl className="grid grid-cols-2 gap-8 text-center">
            {TRUST.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-medium text-gold-600 sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-navy-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delayMs={80}>
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-navy-900/10 pt-12 sm:mt-16 sm:grid-cols-2 sm:gap-12 sm:pt-16">
            <div>
              <h3 className="font-display text-xl font-medium text-navy-950">Background</h3>
              <ul className="mt-4 space-y-2">
                {TRUST.background.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-navy-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-navy-950">
                Content philosophy
              </h3>
              <p className="mt-4 font-sans text-sm italic leading-relaxed text-navy-600">
                {TRUST.philosophy}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
