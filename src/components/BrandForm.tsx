import { useState, type ChangeEvent, type FormEvent } from 'react'
import { submitBrandInquiry, type BrandInquiryData } from '../services/leadCapture'

const PARTNERSHIP_TYPES = [
  'Sponsored Content',
  'Affiliate Partnership',
  'Creator Collaboration',
  'Other',
]

// text-base on mobile keeps iOS from auto-zooming the page on field focus.
const inputClass =
  'mt-1 w-full rounded-xl border border-navy-200 bg-white px-3.5 py-2.5 text-base text-navy-900 placeholder:text-navy-400 transition-colors focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 sm:text-sm'

const labelClass = 'block text-[13px] font-medium text-navy-600'

const initialForm: BrandInquiryData = {
  name: '',
  company: '',
  email: '',
  partnershipType: '',
  message: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function BrandForm() {
  const [form, setForm] = useState<BrandInquiryData>(initialForm)
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
    // Honeypot: bots fill every field, humans never see this one.
    const gotcha = (e.currentTarget as HTMLFormElement).elements.namedItem('_gotcha')
    if (gotcha instanceof HTMLInputElement && gotcha.value) {
      setStatus('success')
      setForm(initialForm)
      return
    }
    setStatus('submitting')
    const result = await submitBrandInquiry(form)
    if (result.success) {
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3.5">
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="brand-name" className={labelClass}>
            Name
          </label>
          <input
            id="brand-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="brand-company" className={labelClass}>
            Company
          </label>
          <input
            id="brand-company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="brand-email" className={labelClass}>
            Email
          </label>
          <input
            id="brand-email"
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
          <label htmlFor="brand-partnership-type" className={labelClass}>
            Partnership Type
          </label>
          <select
            id="brand-partnership-type"
            name="partnershipType"
            required
            value={form.partnershipType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select one</option>
            {PARTNERSHIP_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="brand-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="brand-message"
          name="message"
          rows={3}
          required
          placeholder="A sentence or two about the campaign or idea."
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-full border border-green-700 bg-green-700 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-200 ease-out hover:border-green-800 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
        </button>
        <p aria-live="polite" className="text-sm">
          {status === 'success' && (
            <span className="text-green-700">Thanks — I'll get back to you shortly.</span>
          )}
          {status === 'error' && (
            <span className="text-red-600">
              {errorMessage || 'Something went wrong. Please try again.'}
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
