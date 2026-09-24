import { useState, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { submitNewsletterSignup } from '../services/leadCapture'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-full border border-green-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30'

export function NewsletterSignup() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    const result = await submitNewsletterSignup({ firstName, email })
    if (result.success) {
      setStatus('success')
      setFirstName('')
      setEmail('')
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <label htmlFor="newsletter-first-name" className="sr-only">
          First name
        </label>
        <input
          id="newsletter-first-name"
          type="text"
          autoComplete="given-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`${inputClass} sm:w-40`}
        />
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
          className={inputClass}
        />
      </div>
      <Button type="submit" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </Button>
      <p aria-live="polite" className="min-h-0 text-sm">
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
