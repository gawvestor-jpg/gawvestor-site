import type { ComponentType } from 'react'
import { Card } from './ui/Card'
import { FadeIn } from './ui/FadeIn'
import { ChartIcon, BoltIcon } from './ui/icons'
import { TOOLS, TOOLS_DISCLOSURE } from '../config/content'

const TOOL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  TradingView: ChartIcon,
  Webull: BoltIcon,
}

export function ToolsSection() {
  return (
    <section id="tools" className="border-t border-navy-100 bg-cream-50 px-5 py-6 sm:py-8">
      <div className="mx-auto max-w-md">
        <FadeIn>
          <h2 className="text-center font-display text-xl font-medium text-navy-900 sm:text-2xl">
            Tools I use
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-center text-xs leading-relaxed text-navy-500">
            {TOOLS_DISCLOSURE}
          </p>
        </FadeIn>
        <div className="mt-4 flex flex-col gap-2.5 sm:mt-5">
          {TOOLS.map((tool, index) => {
            const Icon = TOOL_ICONS[tool.name]
            return (
              <FadeIn key={tool.name} delayMs={index * 60}>
                <Card
                  icon={Icon && <Icon className="h-5 w-5" />}
                  title={tool.name}
                  label={tool.cta}
                  description={tool.description}
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer"
                />
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
