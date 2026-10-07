import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Job Scam Presentation | ScamBomb',
  description: 'How to spot and avoid job scams — a ScamBomb presentation.',
  alternates: { canonical: '/presentation-jobs' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
