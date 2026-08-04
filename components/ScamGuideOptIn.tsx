'use client'

import { FormEvent, useMemo, useState } from 'react'

const FORM_ID = 'n7tvefZehc59m50ORmP8'
const LOCATION_ID = 'DaQ8hQRpgjJ0fIdTGhuo'

export default function ScamGuideOptIn() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const isEmailValid = useMemo(() => /.+@.+\..+/.test(email), [email])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isEmailValid || isSubmitting) return

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://backend.leadconnectorhq.com/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location_id: LOCATION_ID,
          id: FORM_ID,
          first_name: 'ScamBomb reader',
          email,
        }),
      })

      if (!response.ok) throw new Error('Lead submit failed')
      setIsSubmitted(true)
    } catch {
      // Keep the same form endpoint as a browser fallback if the API rejects CORS.
      try {
        const iframeName = `ghl-submit-${FORM_ID}`
        let iframe = document.querySelector(`iframe[name="${iframeName}"]`) as HTMLIFrameElement | null
        if (!iframe) {
          iframe = document.createElement('iframe')
          iframe.name = iframeName
          iframe.style.display = 'none'
          document.body.appendChild(iframe)
        }

        const form = document.createElement('form')
        form.method = 'POST'
        form.action = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`
        form.target = iframeName
        form.style.display = 'none'

        const emailInput = document.createElement('input')
        emailInput.type = 'hidden'
        emailInput.name = 'email'
        emailInput.value = email
        form.appendChild(emailInput)
        document.body.appendChild(form)
        form.submit()
        form.remove()
        setIsSubmitted(true)
      } catch {
        setError('Something went wrong. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="my-12 not-prose rounded-2xl border border-yellow-300/30 bg-gradient-to-br from-yellow-300/10 to-transparent p-5 sm:p-8">
      <div className="mb-6 text-center">
        <div className="text-xs font-bold tracking-widest text-yellow-300/80 uppercase mb-2">FREE GUIDE</div>
        <h2 className="text-2xl font-bold text-white">Get the “Is This a Scam?” Checklist</h2>
        <p className="mt-2 text-white/70 max-w-xl mx-auto">Keep the 10-second scam check handy. Print it, save it, and share it with your family.</p>
      </div>

      {isSubmitted ? (
        <div className="rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-6 text-center" role="status">
          <div className="text-3xl mb-2" aria-hidden="true">✓</div>
          <h3 className="text-xl font-bold text-white">Check your inbox</h3>
          <p className="mt-2 text-white/70">Your free “Is This a Scam?” checklist is on its way.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
          <label htmlFor={`scam-guide-email-${FORM_ID}`} className="sr-only">Email address</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id={`scam-guide-email-${FORM_ID}`}
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your best email"
              className="min-w-0 flex-1 rounded-xl border-2 border-white/10 bg-white px-4 py-3.5 text-[#0B1324] outline-none placeholder:text-[#0B1324]/50 focus:border-yellow-300"
            />
            <button
              type="submit"
              disabled={!isEmailValid || isSubmitting}
              className="rounded-xl bg-yellow-300 px-6 py-3.5 font-extrabold text-[#0B1324] shadow-lg shadow-yellow-300/10 transition-colors hover:bg-yellow-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending…' : 'Send Me the Checklist →'}
            </button>
          </div>
          {error ? <p className="mt-3 text-center text-sm text-red-300">{error}</p> : null}
          <p className="mt-4 text-center text-xs text-white/40">Free guide. Practical safety tips. No spam.</p>
        </form>
      )}
    </section>
  )
}
