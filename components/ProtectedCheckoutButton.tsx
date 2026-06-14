'use client'

import { useState } from 'react'
import { useAuth } from './AuthProvider'
import { LoginPromptModal } from './LoginPromptModal'

type ProtectedCheckoutButtonProps = {
  plan: 'standard' | 'senior'
  billing: 'monthly' | 'annual'
  planName: string
  priceDisplay: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function ProtectedCheckoutButton({
  plan,
  billing,
  planName,
  priceDisplay,
  children,
  className = '',
  style,
}: ProtectedCheckoutButtonProps) {
  const { isLoggedIn, email, isLoading } = useAuth()
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (isLoading) {
      e.preventDefault()
      return
    }

    if (!isLoggedIn) {
      e.preventDefault()
      setShowLoginPrompt(true)
      return
    }

    // User is logged in, proceed to checkout
    // Email will be passed via the href
  }

  // Build checkout URL with email if logged in
  const baseUrl = `/api/stripe/checkout?plan=${plan}&billing=${billing}`
  const checkoutUrl = email ? `${baseUrl}&email=${encodeURIComponent(email)}` : baseUrl

  return (
    <>
      <a
        href={checkoutUrl}
        onClick={handleClick}
        className={className}
        style={style}
      >
        {children}
      </a>

      <LoginPromptModal
        isOpen={showLoginPrompt}
        onClose={() => setShowLoginPrompt(false)}
        planName={planName}
      />
    </>
  )
}