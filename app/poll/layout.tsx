import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'ScamBomb Poll — Take Our Quick Survey',
  description: 'Take a quick ScamBomb poll to test how well you can spot a scam, then see how your instincts compare with everyone else.',
  alternates: { canonical: '/poll' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
