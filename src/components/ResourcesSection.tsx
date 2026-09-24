import { ArrowUpRightIcon } from './ui/icons'
import { RESOURCES } from '../config/content'

// Deliberately a quiet, editorial list — not another stack of green cards.
export function ResourcesSection() {
  return (
    <section id="resources" className="border-t border-navy-100 bg-white px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-md sm:max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-700">
          {RESOURCES.eyebrow}
        </p>
        <h2 className="mt-1.5 font-display text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
          {RESOURCES.heading}
        </h2>

        <ul className="mt-4 divide-y divide-navy-100 border-b border-navy-100 sm:mt-6">
          {RESOURCES.items.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span className="min-w-0 flex-1">
                  <span className="font-display text-lg font-medium text-navy-900 transition-colors group-hover:text-green-800">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-sm leading-normal text-navy-500">
                    {item.description}
                  </span>
                </span>
                <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-navy-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-700 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs leading-relaxed text-navy-400">{RESOURCES.disclosure}</p>
      </div>
    </section>
  )
}
