import type { ComponentType } from 'react'
import { Card, type CardTone } from './ui/Card'
import { DiscordIcon, ChartIcon, CalendarIcon, MailIcon, UsersIcon } from './ui/icons'
import {
  AFFILIATE_COMMUNITY,
  BOOKING,
  DISCORD_LINK,
  NEWSLETTER_LINK,
  TOOLS,
} from '../config/content'

const TOOL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  TradingView: ChartIcon,
}

const TOOL_TONES: Record<string, CardTone> = {
  TradingView: 'blue',
}

const EXTERNAL_LINK_PROPS = { target: '_blank', rel: 'noreferrer' } as const

// The affiliate URL is still a placeholder, so only open a new tab once it's real.
const affiliateLinkProps = AFFILIATE_COMMUNITY.href.startsWith('http')
  ? EXTERNAL_LINK_PROPS
  : {}

export function CommunitySection() {
  return (
    <section id="tools" className="border-t border-navy-100 bg-cream-50 px-5 py-9 sm:py-12">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-xl font-medium tracking-tight text-navy-900 sm:text-2xl">
          Community and Tools
        </h2>
        <div className="mt-6 flex flex-col gap-3 sm:mt-7">
          <Card
            tone="softGreen"
            icon={<MailIcon className="h-5 w-5" />}
            title={NEWSLETTER_LINK.label}
            label={NEWSLETTER_LINK.handle}
            description={NEWSLETTER_LINK.description}
            href={NEWSLETTER_LINK.href}
          />
          {TOOLS.map((tool) => {
            const Icon = TOOL_ICONS[tool.name]
            return (
              <Card
                key={tool.name}
                tone={TOOL_TONES[tool.name] ?? 'mint'}
                icon={Icon && <Icon className="h-5 w-5" />}
                title={tool.name}
                label={tool.cta}
                description={tool.description}
                href={tool.href}
                {...EXTERNAL_LINK_PROPS}
              />
            )
          })}
          <Card
            tone="warm"
            icon={<UsersIcon className="h-5 w-5" />}
            title={AFFILIATE_COMMUNITY.label}
            description={AFFILIATE_COMMUNITY.description}
            href={AFFILIATE_COMMUNITY.href}
            {...affiliateLinkProps}
          />
          <Card
            tone="mint"
            icon={<DiscordIcon className="h-5 w-5" />}
            title={DISCORD_LINK.label}
            label={DISCORD_LINK.handle}
            description={DISCORD_LINK.description}
            href={DISCORD_LINK.href}
          />
          <Card
            tone="deepGreen"
            icon={<CalendarIcon className="h-5 w-5" />}
            title={BOOKING.label}
            label={BOOKING.handle}
            description={BOOKING.description}
            href={BOOKING.href}
            {...EXTERNAL_LINK_PROPS}
          />
        </div>
      </div>
    </section>
  )
}
