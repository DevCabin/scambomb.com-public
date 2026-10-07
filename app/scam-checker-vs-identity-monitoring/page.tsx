import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: '/scam-checker-vs-identity-monitoring' },
  title: 'Scam Checker vs Identity-Theft Monitoring | ScamBomb',
  description:
    'Identity-theft monitoring tells you after the damage is done. ScamBomb helps you catch the scam before it happens — for $9/month instead of $40.',
}

const rows = [
  { label: 'Catches the scam before you act', scamBomb: 'Yes — instant red-flag check', identity: 'No — alerts you after data is exposed' },
  { label: 'Checks suspicious texts, emails & links', scamBomb: 'Yes', identity: 'No' },
  { label: 'Plain-English "what to do next" guidance', scamBomb: 'Yes', identity: 'Limited' },
  { label: 'Family worksheets & monthly workshops', scamBomb: 'Yes', identity: 'No' },
  { label: 'Typical monthly cost', scamBomb: '$9 ($5 for seniors 60+)', identity: '$30–$40' },
  { label: 'Helps older adults & their families', scamBomb: 'Built for this', identity: 'Not its focus' },
]

export default function ComparisonPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is identity-theft monitoring the same as a scam checker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Identity-theft monitoring watches your credit and personal data, and alerts you after something has already been exposed. ScamBomb checks the suspicious message in front of you, in real time, before you click, call, or pay.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which one should I get?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They do different jobs. If you want a calm second opinion before you act on a suspicious text or email, ScamBomb is the fit — and at $9/month it is far less than the $30–$40 typical of identity-theft monitoring.',
        },
      },
    ],
  }

  return (
    <div className="bg-[#0B1324] text-white antialiased">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Scam Checker vs <span className="text-[#F5C84C]">Identity-Theft Monitoring</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Identity-theft monitoring tells you after the damage is done. ScamBomb helps you catch the scam before it happens.
          </p>
        </section>

        <section className="mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 pr-4 text-sm uppercase tracking-wider text-white/60">What you get</th>
                  <th className="py-3 px-4 text-sm uppercase tracking-wider text-[#F5C84C]">ScamBomb</th>
                  <th className="py-3 pl-4 text-sm uppercase tracking-wider text-white/60">Identity monitoring</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-white/10">
                    <td className="py-3 pr-4 font-semibold">{r.label}</td>
                    <td className="py-3 px-4 text-[#F5C84C]">{r.scamBomb}</td>
                    <td className="py-3 pl-4 text-white/70">{r.identity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-[#F5C84C] rounded-2xl p-8 text-[#0B1324] text-center">
            <h2 className="text-2xl font-extrabold mb-4 uppercase">The difference in one sentence</h2>
            <p className="text-lg leading-relaxed">
              ScamBomb is the second opinion you get <strong>before</strong> you click, call, or pay — not the alert you get <strong>after</strong>.
            </p>
            <a
              href="https://app.scambomb.com"
              className="mt-6 inline-block rounded-xl px-8 py-4 text-lg font-semibold bg-[#0B1324] text-white hover-lift"
            >
              Try ScamBomb Free
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#F5C84C] uppercase">Frequently asked</h2>
          <div className="space-y-4 text-lg text-white/90">
            <p><strong>Is identity-theft monitoring the same as a scam checker?</strong> No — monitoring alerts you after data is exposed; ScamBomb checks the message in front of you, in real time.</p>
            <p><strong>Which one should I get?</strong> They do different jobs. If you want a calm second opinion before you act, ScamBomb is the fit at a fraction of the cost.</p>
          </div>
        </section>

        <footer className="pt-8 border-t border-white/10">
          <Link href="/" className="text-[#F5C84C] underline underline-offset-4 hover:text-white">
            ← Back to home
          </Link>
          <span className="mx-3 text-white/30">|</span>
          <Link href="/#pricing" className="text-[#F5C84C] underline underline-offset-4 hover:text-white">
            See membership pricing
          </Link>
        </footer>
      </div>
    </div>
  )
}
