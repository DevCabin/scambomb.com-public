import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Welcome to ScamBomb Membership',
  description: 'Thanks for joining ScamBomb — your membership is ready.',
  alternates: { canonical: '/thank-you-membership' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
