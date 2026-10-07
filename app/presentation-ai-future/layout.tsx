import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'The AI Future of Scams | ScamBomb Presentation',
  description: 'How AI voice cloning and deepfakes are changing scams — and how to stay protected.',
  alternates: { canonical: '/presentation-ai-future' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
