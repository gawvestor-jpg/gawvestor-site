import { LegalLayout } from '../components/LegalLayout'
import { LEGAL } from '../config/content'
import { usePageMeta } from '../hooks/usePageMeta'

export function Disclaimer() {
  usePageMeta('Disclaimer', 'Gawvestor content is educational and entertainment only — not financial, investment, tax, or legal advice.')

  return (
    <LegalLayout title="Disclaimer">
      <ul className="list-disc space-y-4 pl-5 text-base leading-relaxed text-navy-500">
        {LEGAL.disclaimer.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </LegalLayout>
  )
}
