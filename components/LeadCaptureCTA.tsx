'use client'

import { FormEvent, useMemo, useState } from 'react'

type LeadCaptureCTAProps = {
  eyebrow?: string
  title?: string
  titleAccent?: string
  description?: string
  meta?: string
  buttonLabel?: string
  footnote?: string
  redirectUrl?: string
  formId?: string
  locationId?: string
}

export default function LeadCaptureCTA({
  eyebrow = 'Next Step — Continue to the Full Report Download',
  title = 'Fraud Targeting Older Adults:',
  titleAccent = 'Annual Intelligence Brief',
  description = 'Read the FULL report now and continue to the free download with complete data tables, visual breakdowns, and AI voice-cloning threat analysis.',
  meta = 'Scam type breakdowns · Dollar loss tables · AI threat landscape · Sources for every figure',
  buttonLabel = 'Read the FULL Report Now (Free Download) →',
  footnote = 'This is not the end — continue to the full downloadable report after email unlock.',
  redirectUrl = '/reports/older-adult-fraud-2024-2025',
  formId = 'fMvTbzE0i0SO5sTMPscV',
  locationId = 'DaQ8hQRpgjJ0fIdTGhuo',
}: LeadCaptureCTAProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const isEmailValid = useMemo(() => /.+@.+\..+/.test(email), [email])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isEmailValid || isSubmitting) return

    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch('https://backend.leadconnectorhq.com/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location_id: locationId,
          id: formId,
          email,
        }),
      })

      if (!res.ok) throw new Error('Lead submit failed')

      window.location.href = redirectUrl
    } catch {
      setError('Could not submit right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="my-12 rounded-2xl border-2 border-yellow-300/40 bg-gradient-to-br from-yellow-300/10 to-yellow-300/5 p-10 text-center not-prose">
      <div className="text-xs font-bold tracking-widest text-yellow-300/70 uppercase mb-4">{eyebrow}</div>
      <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">
        {title}
        <br />
        <span className="text-yellow-300">{titleAccent}</span>
      </h3>
      <p className="text-white/70 text-lg mb-3 max-w-lg mx-auto">{description}</p>
      <p className="text-white/40 text-sm mb-6 max-w-md mx-auto">{meta}</p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your best email"
          className="flex-1 rounded-xl bg-white/95 text-[#0B1324] px-4 py-4 text-base font-medium outline-none border-2 border-transparent focus:border-yellow-300"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={!isEmailValid || isSubmitting}
          className="inline-block bg-yellow-300 text-[#0B1324] font-extrabold text-base px-7 py-4 rounded-xl hover:bg-yellow-200 transition-all duration-200 shadow-lg shadow-yellow-300/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting…' : buttonLabel}
        </button>
      </form>

      {error ? <p className="text-red-300 text-sm mt-3">{error}</p> : null}

      <p className="text-white/30 text-xs mt-5">{footnote}</p>
    </div>
  )
}
