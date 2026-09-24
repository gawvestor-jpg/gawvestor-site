import { PlayIcon, ArrowUpRightIcon } from './ui/icons'
import { Reveal } from './ui/Reveal'
import { FEATURED } from '../config/content'

// Editorial treatment: numbered entries, poster imagery, serif hooks.
// Real thumbnails come from content.ts (see the FEATURED comment there);
// until then each poster is a designed gradient with an oversized index
// numeral so the section looks finished with zero images.
const PLACEHOLDER_ART: Record<string, string> = {
  Markets: 'from-green-700 to-green-900',
  Technology: 'from-navy-700 to-navy-950',
  'Personal Finance': 'from-navy-800 to-green-950',
}

export function FeaturedSection() {
  return (
    <section id="featured" className="border-t border-navy-100 bg-white px-5 pb-10 pt-8 sm:py-14">
      <div className="mx-auto max-w-md sm:max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-700">
          {FEATURED.eyebrow}
        </p>
        <h2 className="mt-1.5 font-display text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
          {FEATURED.heading}
        </h2>

        {/* Mobile: compact editorial rows. Desktop: 3-up poster grid. */}
        <div className="mt-5 flex flex-col gap-5 sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-6">
          {FEATURED.items.map((item, index) => {
            const number = String(index + 1).padStart(2, '0')
            return (
              <Reveal key={item.title} delay={index * 90}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-4 sm:block"
              >
                {/* Poster */}
                <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-xl shadow-subtle transition-[box-shadow,transform] duration-300 group-hover:-translate-y-0.5 group-hover:shadow-card motion-reduce:group-hover:translate-y-0 sm:w-full sm:rounded-2xl">
                  {item.thumbnail ? (
                    <>
                      <img
                        src={item.thumbnail}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                      />
                      {/* Legibility scrim for the platform pill */}
                      <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    </>
                  ) : (
                    <span
                      className={`absolute inset-0 bg-gradient-to-br ${PLACEHOLDER_ART[item.category] ?? 'from-green-700 to-green-900'}`}
                    >
                      {/* Oversized index numeral, magazine-style */}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-4 -right-1 font-display text-[5rem] font-medium leading-none text-white/10 sm:-bottom-7 sm:text-[8.5rem]"
                      >
                        {number}
                      </span>
                    </span>
                  )}
                  <span className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-navy-950/45 py-1 pl-2 pr-2.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:bottom-3 sm:left-3 sm:text-[11px]">
                    <PlayIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    {item.platform}
                  </span>
                </div>

                {/* Entry text */}
                <div className="min-w-0 flex-1 sm:mt-4">
                  <p className="flex items-baseline gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-green-700">
                    <span aria-hidden="true" className="font-display text-xs tracking-normal text-navy-400">
                      {number}
                    </span>
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-[17px] font-medium leading-snug text-navy-950 transition-colors group-hover:text-green-800 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-navy-400 transition-colors group-hover:text-green-700">
                    Watch on {item.platform}
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0" />
                  </p>
                </div>
              </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
