'use client'

import { useState } from 'react'

type LoginPromptModalProps = {
  isOpen: boolean
  onClose: () => void
  planName: string
}

export function LoginPromptModal({ isOpen, onClose, planName }: LoginPromptModalProps) {
  const [isRedirecting, setIsRedirecting] = useState(false)

  if (!isOpen) return null

  const handleSignIn = () => {
    setIsRedirecting(true)
    // Redirect to app with return URL back to pricing
    const returnUrl = encodeURIComponent(window.location.origin + '/#pricing')
    window.location.href = `https://app.scambomb.com/?redirect=${returnUrl}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-yellow-300/30 bg-[#0B1324] p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="text-5xl mb-4 text-center">🔐</div>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Sign In Required
        </h2>
        
        {/* Description */}
        <p className="text-white/80 text-center mb-6 leading-relaxed">
          To upgrade to the <strong className="text-[#F5C84C]">{planName}</strong>, please sign in to your ScamBomb account first. This ensures your subscription is properly linked to your account.
        </p>

        {/* Benefits */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-6">
          <p className="text-sm text-white/60 mb-2 font-semibold">Why sign in first?</p>
          <ul className="text-sm text-white/70 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#F5C84C]">✓</span>
              <span>Your subscription automatically activates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F5C84C]">✓</span>
              <span>Unlimited scans available immediately</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F5C84C]">✓</span>
              <span>Manage your subscription anytime</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleSignIn}
            disabled={isRedirecting}
            className="w-full rounded-xl py-4 text-lg font-semibold text-center transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: '#F5C84C', color: '#0B1324' }}
          >
            {isRedirecting ? 'Redirecting...' : 'Sign In to ScamBomb →'}
          </button>
          
          <button
            onClick={onClose}
            className="w-full rounded-xl py-3 text-base font-medium text-center text-white/60 hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}