import { Card } from './ui/Card'
import { FadeIn } from './ui/FadeIn'
import { TOOLS } from '../config/content'

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="scroll-mt-20 border-t border-white/10 bg-navy-950 px-6 py-12 sm:py-section-y"
    >
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="text-center font-display text-2xl font-medium text-cream-50 sm:text-3xl">
            Tools I use
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2">
          {TOOLS.map((tool, index) => (
            <FadeIn key={tool.name} delayMs={index * 60}>
              <Card
                eyebrow={tool.name}
                title={tool.cta}
                description={tool.description}
                href={tool.href}
                target="_blank"
                rel="noreferrer"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
