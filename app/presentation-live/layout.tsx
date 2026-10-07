import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Live Scam Awareness Presentation | ScamBomb',
  description: 'Join a live ScamBomb scam awareness presentation.',
  alternates: { canonical: '/presentation-live' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
