import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { submitContactForm, type ContactFormData, type ContactSource } from '../services/leadCapture'
import { CONTACT } from '../config/content'

// text-base on mobile keeps iOS from auto-zooming the page on field focus.
const inputClass =
  'mt-1.5 w-full rounded-full border border-navy-200 bg-white px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 sm:text-sm'

const textareaClass =
  'mt-1.5 w-full rounded-2xl border border-navy-200 bg-white px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 sm:text-sm'

const labelClass = 'block text-[13px] font-medium text-navy-600'

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  investmentInterests: '',
  message: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

type ContactFormProps = {
  source: ContactSource
}

export function ContactForm({ source }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    const result = await submitContactForm(form, source)
    if (result.success) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
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

      <div className="grid gap-4 sm:grid-cols-2">
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
          className={textareaClass}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        {status === 'success' && (
          <p className="text-sm text-green-700">Thanks, I'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600">{errorMessage || 'Something went wrong. Please try again.'}</p>
        )}
      </div>
    </form>
  )
}
