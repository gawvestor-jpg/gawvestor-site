import { LegalLayout } from '../components/LegalLayout'
import { LEGAL } from '../config/content'
import { usePageMeta } from '../hooks/usePageMeta'

export function PrivacyPolicy() {
  usePageMeta('Privacy Policy', 'How Gawvestor collects, uses, and protects the information you share through this site.')

  return (
    <LegalLayout title="Privacy Policy">
      {LEGAL.privacy.map((section) => (
        <section key={section.heading}>
          <h2 className="font-display text-xl font-medium text-navy-900">{section.heading}</h2>
          <p className="mt-3 text-base leading-relaxed text-navy-500">{section.body}</p>
        </section>
      ))}
    </LegalLayout>
  )
}
