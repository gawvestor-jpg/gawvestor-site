import { useState, type FormEvent } from 'react'
import { submitNewsletterSignup } from '../services/leadCapture'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    const result = await submitNewsletterSignup({ firstName: '', email })
    if (result.success) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-full border border-navy-200 bg-white px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 sm:py-2.5 sm:text-sm transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="shrink-0 rounded-full border border-green-700 bg-green-700 px-5 py-3 text-sm font-medium sm:py-2.5 tracking-wide text-white transition-all duration-200 ease-out hover:border-green-800 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
      <p aria-live="polite" className="mt-2 text-sm">
        {status === 'success' && (
          <span className="text-green-800">You're in — welcome aboard.</span>
        )}
        {status === 'error' && (
          <span className="text-red-600">
            {errorMessage || 'Something went wrong. Please try again.'}
          </span>
        )}
      </p>
    </form>
  )
}
