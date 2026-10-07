import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Protect Your Parents From Scams | ScamBomb',
  description: 'Practical steps to help your parents recognize and avoid scams before they become victims.',
  alternates: { canonical: '/protect-parents' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
