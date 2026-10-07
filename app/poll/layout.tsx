import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'ScamBomb Poll',
  description: 'Share your answer with the ScamBomb community.',
  alternates: { canonical: '/poll' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
