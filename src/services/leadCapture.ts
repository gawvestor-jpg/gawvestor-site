export type ContactFormData = {
  name: string
  email: string
  phone: string
  company: string
  investmentInterests: string
  message: string
}

export type NewsletterData = {
  email: string
}

export type LeadCaptureResult = { success: true } | { success: false; error: string }

// Placeholder for a future email-provider integration (see .env.example).
// Simulates network latency so calling UIs can exercise their pending state.
function mockSubmit(): Promise<LeadCaptureResult> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 400)
  })
}

export async function submitContactForm(data: ContactFormData): Promise<LeadCaptureResult> {
  console.log('[leadCapture] contact form submission', data)
  return mockSubmit()
}

export async function submitNewsletterSignup(data: NewsletterData): Promise<LeadCaptureResult> {
  console.log('[leadCapture] newsletter signup', data)
  return mockSubmit()
}
