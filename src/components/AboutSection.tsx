import { Fragment } from 'react'
import { ABOUT } from '../config/content'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-navy-100 bg-cream-50 px-5 py-10 text-center sm:py-14">
      <div className="mx-auto max-w-md sm:max-w-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-700">
          {ABOUT.eyebrow}
        </p>
        <p className="mt-3 font-display text-lg font-medium leading-relaxed tracking-tight text-navy-900 sm:mt-4 sm:text-2xl sm:leading-relaxed">
          {ABOUT.body}
        </p>
        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-sm font-medium tracking-wide text-green-800">
          {ABOUT.pillars.map((pillar, i) => (
            <Fragment key={pillar}>
              {i > 0 && (
                <span aria-hidden="true" className="text-green-300">
                  ·
                </span>
              )}
              <span className="whitespace-nowrap">{pillar}</span>
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}
