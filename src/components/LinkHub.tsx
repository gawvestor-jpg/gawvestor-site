import { Card } from './ui/Card'
import { FadeIn } from './ui/FadeIn'
import { LINKS } from '../config/content'

export function LinkHub() {
  return (
    <section className="bg-cream px-6 py-12 sm:py-section-y">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-medium text-navy-950 sm:text-3xl">
            Find me here
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2">
          {LINKS.map((link, index) => (
            <FadeIn key={link.label} delayMs={index * 60}>
              <Card
                eyebrow={link.label}
                title={link.handle}
                description={link.description}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
