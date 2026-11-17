import type { Metadata } from 'next'
import TechHelpPage from './TechHelpPage'

export const metadata: Metadata = {
  title: 'Remote Tech Support for Seniors | Friendly Tech Help | ScamBomb',
  description: 'Friendly remote tech help for seniors and families. Get personal help with phones, computers, email, apps, and more. Sessions start at $39.',
  alternates: { canonical: 'https://www.scambomb.com/tech-help' },
  openGraph: {
    title: 'Real Tech Help. From a Real Person. | ScamBomb',
    description: 'Patient, plain-English technology help for older adults and families. Sessions start at $39.',
    url: 'https://www.scambomb.com/tech-help',
    type: 'website',
  },
}

export default function Page() {
  return <TechHelpPage />
}
