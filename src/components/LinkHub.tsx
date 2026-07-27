import { Card } from './ui/Card'
import { FadeIn } from './ui/FadeIn'
import { SOCIAL_LINKS, SECONDARY_LINKS } from '../config/content'

export function LinkHub() {
  return (
    <section className="bg-navy-950 px-6 py-12 sm:py-section-y">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-medium text-cream-50 sm:text-3xl">
            Find me here
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-12">
          {SOCIAL_LINKS.map((link, index) => (
            <FadeIn key={link.label} delayMs={index * 60} className="sm:col-span-4">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col items-start gap-2 rounded-sm border border-white/5 bg-navy-800 p-6 text-left shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-navy-700 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <span className="font-display text-xl font-medium text-cream-50">
                  {link.label}
                </span>
                <span className="text-sm font-medium tracking-wide text-gold-400">
                  {link.handle}
                </span>
                <span className="text-sm leading-relaxed text-navy-300">{link.description}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-12">
          {SECONDARY_LINKS.map((link, index) => (
            <FadeIn key={link.label} delayMs={index * 60} className="sm:col-span-3">
              <Card
                eyebrow={link.label}
                title={link.handle}
                description={link.description}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
