import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'ScamBomb Poll — Take Our Quick Survey',
  description: 'Take the ScamBomb live poll to test how well you can spot common scams, then see how your answer compares.',
  alternates: { canonical: '/poll' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
