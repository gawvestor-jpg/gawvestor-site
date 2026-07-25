import { LegalLayout } from '../components/LegalLayout'
import { LEGAL } from '../config/content'

export function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer">
      <ul className="list-disc space-y-4 pl-5 text-base leading-relaxed text-navy-700">
        {LEGAL.disclaimer.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </LegalLayout>
  )
}
