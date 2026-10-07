import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Scam Trivia | ScamBomb Presentation',
  description: 'Test your scam-spotting skills with ScamBomb trivia.',
  alternates: { canonical: '/presentation-trivia' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
