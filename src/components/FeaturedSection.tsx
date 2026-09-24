import { PlayIcon } from './ui/icons'
import { FEATURED } from '../config/content'

// Placeholder art per category until real thumbnails land in content.ts.
// Kept as quiet, brand-toned gradients so the cards look finished either way.
const PLACEHOLDER_ART: Record<string, string> = {
  Markets: 'from-green-700 to-green-900',
  Technology: 'from-navy-700 to-navy-950',
  'Personal Finance': 'from-navy-800 to-green-950',
}

export function FeaturedSection() {
  return (
    <section id="featured" className="border-t border-navy-100 bg-white px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-md sm:max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-700">
          {FEATURED.eyebrow}
        </p>
        <h2 className="mt-1.5 font-display text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
          {FEATURED.heading}
        </h2>

        {/* Mobile: compact editorial rows (small poster + text). Desktop: 3-up
            poster grid. Full-width 4:5 posters on a phone would be enormous. */}
        <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-5">
          {FEATURED.items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 sm:block"
            >
              <div
                className={`relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br shadow-subtle transition-shadow duration-200 group-hover:shadow-card sm:w-full sm:rounded-2xl ${
                  PLACEHOLDER_ART[item.category] ?? 'from-green-700 to-green-900'
                }`}
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-200 group-hover:scale-105 group-hover:bg-white/25 motion-reduce:group-hover:scale-100 sm:h-12 sm:w-12">
                    <PlayIcon className="h-4 w-4 translate-x-px sm:h-5 sm:w-5" />
                  </span>
                </span>
                <span className="absolute left-3 top-3 hidden rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-navy-900 sm:inline-block">
                  {item.category}
                </span>
                <span className="absolute bottom-3 left-3 hidden text-[11px] font-medium uppercase tracking-wider text-white/80 sm:inline">
                  {item.platform}
                </span>
              </div>
              <div className="min-w-0 sm:mt-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-green-700 sm:hidden">
                  {item.category} · {item.platform}
                </p>
                <p className="mt-1 font-display text-base font-medium leading-snug text-navy-900 transition-colors group-hover:text-green-800 sm:mt-0">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
