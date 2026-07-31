import { LegalLayout } from '../components/LegalLayout'
import { LEGAL } from '../config/content'

export function Terms() {
  return (
    <LegalLayout title="Terms of Service">
      {LEGAL.terms.map((section) => (
        <section key={section.heading}>
          <h2 className="font-display text-xl font-medium text-navy-900">{section.heading}</h2>
          <p className="mt-3 text-base leading-relaxed text-navy-500">{section.body}</p>
        </section>
      ))}
    </LegalLayout>
  )
}
