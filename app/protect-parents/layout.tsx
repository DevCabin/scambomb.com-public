import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Protect Your Parents From Scams | ScamBomb',
  description: 'Practical steps to help an older parent spot scams — from setting a family safe word to checking in without judgment.',
  alternates: { canonical: '/protect-parents' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
