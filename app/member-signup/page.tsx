import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ScamBomb Membership Signup — Family Protection',
  description: 'Sign up for a ScamBomb family protection membership with scam checking and ongoing education.',
  alternates: { canonical: '/member-signup' },
}

import MemberSignupPage from './[location]/page'

export default function MemberSignupIndexPage() {
  return <MemberSignupPage />
}
