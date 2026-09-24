import { useEffect, useRef, useState } from 'react'
import { BrandForm } from './BrandForm'
import { WORK_WITH, FOOTER } from '../config/content'
import { Reveal } from './ui/Reveal'

export function WorkWithSection() {
  const [formOpen, setFormOpen] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (formOpen) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [formOpen])

  return (
    <section id="work-with" className="bg-green-800 px-5 py-12 text-center sm:py-16">
      <div className="mx-auto max-w-md sm:max-w-xl"><Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green-300">
          {WORK_WITH.eyebrow}
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
          {WORK_WITH.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-green-100">
          {WORK_WITH.body}
        </p>

        {!formOpen && (
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium tracking-wide text-green-800 shadow-subtle transition-all duration-200 ease-out hover:bg-cream-100 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-800"
          >
            {WORK_WITH.cta}
          </button>
        )}

        <div
          ref={formRef}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            formOpen ? 'mt-8 grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-3xl bg-white p-5 text-left shadow-elevated sm:p-6">
              <BrandForm />
            </div>
          </div>
        </div>

        <p className="mt-6 text-[13px] text-green-200">
          {WORK_WITH.note}{' '}
          <a
            href={`mailto:${FOOTER.email}`}
            className="underline decoration-green-500 underline-offset-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-800"
          >
            {FOOTER.email}
          </a>
        </p>
      </Reveal></div>
    </section>
  )
}
