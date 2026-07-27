import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { submitContactForm, type ContactFormData } from '../services/leadCapture'
import { CONTACT } from '../config/content'

const inputClass =
  'mt-2 w-full rounded-sm border border-white/15 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40'

const labelClass = 'block text-sm font-medium text-navy-200'

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  investmentInterests: '',
  message: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    const result = await submitContactForm(form)
    if (result.success) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="investmentInterests" className={labelClass}>
          Investment Interests
        </label>
        <select
          id="investmentInterests"
          name="investmentInterests"
          value={form.investmentInterests}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a topic</option>
          {CONTACT.investmentInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        {status === 'success' && (
          <p className="text-sm text-gold-400">Thanks, I'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  )
}
