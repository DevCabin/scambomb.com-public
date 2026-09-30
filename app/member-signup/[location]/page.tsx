'use client'

import { FormEvent, useEffect, useState } from 'react'
import { track } from '@vercel/analytics'

const APP_API_URL = 'https://app.scambomb.com'

export default function MemberSignupPage({ params, initialLocation = '' }: { params?: Promise<{ location: string }>; initialLocation?: string }) {
  const [location, setLocation] = useState(initialLocation.trim().toLowerCase())
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    memberCode: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!params) return
    params
      .then(({ location: routeLocation }) => setLocation(routeLocation.trim().toLowerCase()))
      .catch(() => setError('This member signup link is not available.'))
  }, [params])

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    track('member_signup_started', { location: location || 'coupon-code', member_code: form.memberCode })

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      const registerResponse = await fetch(`${APP_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          dateOfBirth: form.dateOfBirth,
          password: form.password,
          confirmPassword: form.confirmPassword,
          partnerLocation: location,
          memberCode: form.memberCode,
          newsletterOptIn: false,
        }),
      })
      const registerData = await registerResponse.json()

      if (!registerResponse.ok || !registerData.token) {
        const details = Array.isArray(registerData.details) ? registerData.details.join(' ') : ''
        throw new Error(details || registerData.error || 'We could not create your account.')
      }

      track('member_signup_completed', { location: location || 'coupon-code', member_code: form.memberCode })

      const checkoutResponse = await fetch(`${APP_API_URL}/api/stripe/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${registerData.token}`,
        },
        body: JSON.stringify({
          plan: 'monthly',
          memberCode: form.memberCode,
          ...(location ? { memberLocation: location } : {}),
        }),
      })
      const checkoutData = await checkoutResponse.json()

      if (!checkoutResponse.ok || !checkoutData.url) {
        throw new Error(checkoutData.error || 'We could not start sponsored checkout.')
      }

      track('member_checkout_started', { location: location || 'coupon-code', member_code: form.memberCode })
      window.location.href = checkoutData.url
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0B1324] px-4 py-12 text-white sm:py-20">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <div className="mb-5 text-5xl">💣</div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#F5C84C]">Member Signup</p>
          <h1 className="text-3xl font-black sm:text-4xl">Activate your ScamBomb protection</h1>
          <p className="mt-4 leading-relaxed text-white/70">
            Create your account using the member code provided by your financial institution. You will be sent to Stripe to complete activation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl sm:p-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="firstName" className="mb-2 block font-semibold">First name</label>
              <input id="firstName" required value={form.firstName} onChange={(event) => updateField('firstName', event.target.value)} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#F5C84C]" autoComplete="given-name" />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-semibold">Email address</label>
              <input id="email" required type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#F5C84C]" autoComplete="email" />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="mb-2 block font-semibold">Date of birth</label>
              <input id="dateOfBirth" required type="date" value={form.dateOfBirth} onChange={(event) => updateField('dateOfBirth', event.target.value)} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#F5C84C]" />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block font-semibold">Create a password</label>
              <input id="password" required type="password" value={form.password} onChange={(event) => updateField('password', event.target.value)} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#F5C84C]" autoComplete="new-password" />
              <p className="mt-2 text-xs text-white/55">Use at least 6 characters with uppercase, lowercase, a number, and a symbol.</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-2 block font-semibold">Confirm password</label>
              <input id="confirmPassword" required type="password" value={form.confirmPassword} onChange={(event) => updateField('confirmPassword', event.target.value)} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#F5C84C]" autoComplete="new-password" />
            </div>

            <div className="rounded-xl border-2 border-[#F5C84C] bg-[#F5C84C]/10 p-4">
              <label htmlFor="memberCode" className="mb-2 block text-lg font-black text-[#F5C84C]">Member code</label>
              <p className="mb-3 text-sm text-white/75">Enter the code provided by your financial institution.</p>
              <input id="memberCode" required value={form.memberCode} onChange={(event) => updateField('memberCode', event.target.value.toUpperCase())} className="w-full rounded-xl border border-[#F5C84C] bg-[#0B1324] px-4 py-4 text-lg font-bold tracking-wider text-white outline-none focus:ring-2 focus:ring-[#F5C84C]" autoComplete="off" />
            </div>
          </div>

          {error && <div className="mt-5 rounded-xl border border-red-400/50 bg-red-500/15 p-4 text-sm text-red-100">{error}</div>}

          <button type="submit" disabled={loading || !location} className="mt-6 w-full rounded-xl bg-[#F5C84C] px-5 py-4 font-black uppercase tracking-wide text-[#0B1324] transition hover:bg-[#F5C84C]/90 disabled:cursor-wait disabled:opacity-60">
            {loading ? 'SETTING UP YOUR ACCOUNT…' : 'CONTINUE TO ACTIVATION'}
          </button>
          <p className="mt-4 text-center text-xs leading-relaxed text-white/50">Your account is created securely before you continue to Stripe.</p>
        </form>
      </div>
    </main>
  )
}
