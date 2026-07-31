import { FadeIn } from './ui/FadeIn'
import { TRUST } from '../config/content'

export function TrustSection() {
  return (
    <section className="relative border-t border-navy-100 bg-cream-50 px-5 py-6 sm:py-8">
      <div className="mx-auto max-w-md">
        <FadeIn>
          <div className="flex flex-col divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white p-5 shadow-subtle">
            <div className="pb-4">
              <h3 className="font-display text-base font-medium text-navy-900">Background</h3>
              <ul className="mt-2 space-y-1">
                {TRUST.background.map((item) => (
                  <li key={item} className="text-xs leading-relaxed text-navy-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-4">
              <h3 className="font-display text-base font-medium text-navy-900">
                Content philosophy
              </h3>
              <p className="mt-2 font-sans text-xs italic leading-relaxed text-navy-500">
                {TRUST.philosophy}
              </p>
            </div>
            <div className="pt-4">
              <h3 className="font-display text-base font-medium text-green-700">
                {TRUST.directAccess.heading}
              </h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-navy-500">
                {TRUST.directAccess.body}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
