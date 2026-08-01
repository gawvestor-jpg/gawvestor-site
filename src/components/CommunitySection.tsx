import type { ComponentType } from 'react'
import { Card } from './ui/Card'
import { DiscordIcon, ChartIcon, BoltIcon } from './ui/icons'
import { DISCORD_LINK, TOOLS } from '../config/content'

const TOOL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  TradingView: ChartIcon,
  Webull: BoltIcon,
}

export function CommunitySection() {
  return (
    <section id="tools" className="border-t border-navy-100 bg-cream-50 px-5 py-6 sm:py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-xl font-medium tracking-tight text-navy-900 sm:text-2xl">
          Community and Tools
        </h2>
        <div className="mt-4 flex flex-col gap-2.5 sm:mt-5">
          <Card
            icon={<DiscordIcon className="h-5 w-5" />}
            title={DISCORD_LINK.label}
            label={DISCORD_LINK.handle}
            description={DISCORD_LINK.description}
            href={DISCORD_LINK.href}
          />
          {TOOLS.map((tool) => {
            const Icon = TOOL_ICONS[tool.name]
            return (
              <Card
                key={tool.name}
                icon={Icon && <Icon className="h-5 w-5" />}
                title={tool.name}
                label={tool.cta}
                description={tool.description}
                href={tool.href}
                target="_blank"
                rel="noreferrer"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
