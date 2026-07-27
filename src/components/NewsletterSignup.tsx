import { useState, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { submitNewsletterSignup } from '../services/leadCapture'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    const result = await submitNewsletterSignup({ email })
    if (result.success) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
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
          className="w-full rounded-sm border border-white/15 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
        />
        <Button type="submit" disabled={status === 'submitting'} className="shrink-0">
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </div>
      {status === 'success' && (
        <p className="mt-3 text-sm text-gold-400">Subscribed. Welcome aboard.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
