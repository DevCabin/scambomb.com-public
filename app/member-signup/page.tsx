import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/member-signup' },
}

import MemberSignupPage from './[location]/page'

export default function MemberSignupIndexPage() {
  return <MemberSignupPage />
}
