import { LegalLayout } from '../components/LegalLayout'
import { LEGAL } from '../config/content'

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      {LEGAL.privacy.map((section) => (
        <section key={section.heading}>
          <h2 className="font-display text-xl font-medium text-navy-950">{section.heading}</h2>
          <p className="mt-3 text-base leading-relaxed text-navy-700">{section.body}</p>
        </section>
      ))}
    </LegalLayout>
  )
}
