import { useState, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { submitNewsletterSignup } from '../services/leadCapture'

type Status = 'idle' | 'submitting' | 'success' | 'error'

// text-base on mobile keeps iOS from auto-zooming the page on field focus.
const inputClass =
  'w-full rounded-full border border-white bg-white px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 sm:text-sm'

export function NewsletterSignup() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

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
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
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
        className={inputClass}
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
      <Button type="submit" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </Button>
      {status === 'success' && (
        <p className="text-sm text-green-800">Subscribed. Welcome aboard.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
