'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ThankYouMembershipPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  
  // Build app URL with session_id for subscription sync
  const appUrl = sessionId 
    ? `https://app.scambomb.com/?session_id=${sessionId}`
    : 'https://app.scambomb.com'

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Confirmation */}
        <div className="mb-10">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Welcome to ScamBomb!
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            Your membership is <strong style={{ color: '#F5C84C' }}>now active</strong>. You now have unlimited access to scam detection, plain-English analysis, and step-by-step guidance to keep you and your family safe.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Next Steps */}
        <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-8">
          <div className="text-xs font-bold tracking-widest text-yellow-300/70 mb-3">GET STARTED</div>
          <h2 className="text-2xl font-bold mb-3">
            Start checking messages now
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Head over to the app and paste your first suspicious message. In seconds, you'll know if it's safe or a scam — with clear next steps on what to do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={appUrl}
              className="rounded-2xl px-6 py-3 font-semibold inline-block text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#F5C84C', color: '#0B1324' }}
            >
              Go to ScamBomb App →
            </a>
            <a
              href="/"
              className="rounded-2xl px-6 py-3 border-2 font-semibold inline-block text-center hover:bg-white/10 transition-colors"
              style={{ borderColor: '#F5C84C', color: '#F5C84C' }}
            >
              Back to Homepage
            </a>
          </div>
        </div>

        {/* Member Benefits */}
        <div className="mt-10 text-left">
          <h3 className="text-lg font-semibold text-white/90 mb-4 text-center">What's included with your membership:</h3>
          <ul className="space-y-3 text-white/80 max-w-md mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-[#F5C84C]">✓</span>
              <span>Unlimited message and email scans</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F5C84C]">✓</span>
              <span>Plain-English scam analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F5C84C]">✓</span>
              <span>Step-by-step guidance on what to do next</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F5C84C]">✓</span>
              <span>Priority updates on new scam tactics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F5C84C]">✓</span>
              <span>Cancel anytime — no questions asked</span>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="mt-10 text-center">
          <p className="text-white/60 text-sm">
            Questions? Email us at{' '}
            <a href="mailto:support@scambomb.com" className="text-[#F5C84C] hover:underline">
              support@scambomb.com
            </a>
          </p>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-white/50 hover:text-white/80 text-sm underline underline-offset-4 transition-colors">
            ← Back to ScamBomb
          </Link>
        </div>

      </div>
    </div>
  )
}