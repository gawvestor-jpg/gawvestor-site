import type { ComponentType } from 'react'
import { Card } from './ui/Card'
import { FadeIn } from './ui/FadeIn'
import { SOCIAL_ICONS, WrenchIcon, BriefcaseIcon, ChatIcon, MailIcon } from './ui/icons'
import { SOCIAL_LINKS, SECONDARY_LINKS } from '../config/content'

const SECONDARY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  'Tools I Use': WrenchIcon,
  'Brand Partnerships': BriefcaseIcon,
  'Career Questions': ChatIcon,
  Contact: MailIcon,
}

export function LinkHub() {
  return (
    <section className="bg-white px-5 py-6 sm:py-8">
      <div className="mx-auto max-w-md">
        <FadeIn>
          <h2 className="text-center font-display text-xl font-medium text-navy-900 sm:text-2xl">
            Find me here
          </h2>
        </FadeIn>

        <div className="mt-4 flex flex-col gap-2.5 sm:mt-5">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = SOCIAL_ICONS[link.label]
            return (
              <FadeIn key={link.label} delayMs={index * 60}>
                <Card
                  icon={Icon && <Icon className="h-5 w-5" />}
                  title={link.label}
                  label={link.handle}
                  description={link.description}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                />
              </FadeIn>
            )
          })}
          {SECONDARY_LINKS.map((link, index) => {
            const Icon = SECONDARY_ICONS[link.label]
            return (
              <FadeIn key={link.label} delayMs={(SOCIAL_LINKS.length + index) * 60}>
                <Card
                  icon={Icon && <Icon className="h-5 w-5" />}
                  title={link.label}
                  label={link.handle}
                  description={link.description}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                />
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
