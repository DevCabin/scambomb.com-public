import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: { canonical: '/member-signup' },
  title: 'ScamBomb Membership Signup — Family Protection',
  description: 'Sign up for a ScamBomb family protection membership with scam checking and ongoing education.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
