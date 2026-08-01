export type ContactFormData = {
  name: string
  email: string
  phone: string
  investmentInterests: string
  message: string
}

export type ContactSource = 'contact' | 'brand-partnerships'

const CONTACT_SUBJECTS: Record<ContactSource, (name: string) => string> = {
  contact: (name) => `MEMBER - New message from ${name}`,
  'brand-partnerships': (name) => `BRAND - New inquiry from ${name}`,
}

export type NewsletterData = {
  firstName: string
  email: string
}

export type LeadCaptureResult = { success: true } | { success: false; error: string }

// Formspree form endpoint for the contact form. This is a public form action URL
// (not a secret), so it's safe to expose client-side. Override via
// VITE_FORMSPREE_ENDPOINT in .env to point at a different Formspree form.
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mwvgaqdq'

// Placeholder for a future email-provider integration (see .env.example).
// Simulates network latency so calling UIs can exercise their pending state.
function mockSubmit(): Promise<LeadCaptureResult> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 400)
  })
}

export async function submitContactForm(
  data: ContactFormData,
  source: ContactSource,
): Promise<LeadCaptureResult> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        'Investment Interests': data.investmentInterests,
        message: data.message,
        _replyto: data.email,
        _subject: CONTACT_SUBJECTS[source](data.name),
      }),
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

export async function submitNewsletterSignup(data: NewsletterData): Promise<LeadCaptureResult> {
  console.log('[leadCapture] newsletter signup', data)
  return mockSubmit()
}
