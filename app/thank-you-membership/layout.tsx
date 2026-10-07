import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: { canonical: '/thank-you-membership' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
