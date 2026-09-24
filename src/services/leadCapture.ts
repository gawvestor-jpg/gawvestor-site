export type BrandInquiryData = {
  name: string
  company: string
  email: string
  partnershipType: string
  message: string
}

export type NewsletterData = {
  firstName: string
  email: string
}

export type LeadCaptureResult = { success: true } | { success: false; error: string }

// Formspree form endpoint. This is a public form action URL (not a secret),
// so it's safe to expose client-side. Override via VITE_FORMSPREE_ENDPOINT
// in .env to point at a different Formspree form.
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mwvgaqdq'

async function post(payload: Record<string, string>): Promise<LeadCaptureResult> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      return { success: true }
    }

    const body = await response.json().catch(() => null)
    const error = body?.errors?.[0]?.message ?? 'Submission failed. Please try again.'
    return { success: false, error }
  } catch {
    return { success: false, error: 'Network error. Please try again.' }
  }
}

// Brand/partnership inquiries from the Work With Gawvestor form.
export function submitBrandInquiry(data: BrandInquiryData): Promise<LeadCaptureResult> {
  return post({
    name: data.name,
    company: data.company,
    email: data.email,
    'Partnership Type': data.partnershipType,
    message: data.message,
    _replyto: data.email,
    _subject: `BRAND - ${data.company || data.name} · ${data.partnershipType || 'Inquiry'}`,
  })
}

// Newsletter signups share the same inbox, tagged with their own subject
// prefix so they're easy to filter (and export to a real provider later).
export function submitNewsletterSignup(data: NewsletterData): Promise<LeadCaptureResult> {
  return post({
    name: data.firstName,
    email: data.email,
    _replyto: data.email,
    _subject: `NEWSLETTER - Signup from ${data.firstName || data.email}`,
  })
}
