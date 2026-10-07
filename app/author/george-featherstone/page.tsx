import type { Metadata } from 'next'
import Link from 'next/link'
import BlogSchema, { AUTHOR_SAMEAS } from '../../../components/BlogSchema'

export const metadata: Metadata = {
  alternates: { canonical: '/author/george-featherstone' },
  title: 'George Featherstone — ScamBomb Founder & Author',
  description:
    'George Featherstone is the founder of ScamBomb and the author behind its scam guides. 20 years building, securing, and troubleshooting digital systems as a web developer and AI systems engineer.',
}

const POSTS = [
  { slug: 'scam-triage-file-003-your-computer-is-infected', title: 'Scam Triage File #003: Your Computer Is Infected' },
  { slug: 'she-heard-her-daughter-crying-ai-voice-clone-scam', title: 'Scam Triage File #002: She Heard Her Daughter Crying for Help' },
  { slug: 'scam-triage-file-001-android-had-3-viruses-but-didnt', title: 'Scam Triage File #001: The Android That “Had 3 Viruses” — But Didn’t' },
  { slug: 'is-this-a-scam', title: 'Is This a Scam? How to Instantly Spot Fake Texts, Emails & Calls' },
  { slug: 'older-adult-fraud-report-2024-2025', title: 'Older Adult Fraud Is Now a Multi-Billion-Dollar Crisis' },
  { slug: 'new-usps-delivery-scam-what-to-do', title: 'Does USPS Charge for Redelivery? How to Spot the Fake Fee Text' },
  { slug: 'how-to-spot-fake-bank-texts-in-30-seconds', title: 'Is This Text Really From My Bank? How to Check Safely' },
  { slug: 'three-questions-to-ask-before-you-click', title: 'Three Questions to Ask Before You Click' },
]

export default function AuthorPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://scambomb.com/author/george-featherstone#person',
    name: 'George Featherstone',
    url: 'https://scambomb.com/author/george-featherstone',
    jobTitle: 'Founder, ScamBomb',
    sameAs: AUTHOR_SAMEAS,
    description:
      'Founder of ScamBomb. 20 years as a web developer and AI systems engineer, building and securing digital systems.',
    worksFor: {
      '@type': 'Organization',
      name: 'ScamBomb',
      url: 'https://scambomb.com',
    },
  }

  return (
    <div className="bg-[#0B1324] text-white antialiased">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <BlogSchema
          title="George Featherstone — ScamBomb Founder & Author"
          description="Author page for George Featherstone, ScamBomb founder."
          url="https://scambomb.com/author/george-featherstone"
          datePublished="2026-10-07"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            George <span className="text-[#F5C84C]">Featherstone</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Founder of ScamBomb. Writer of the scam guides you read here.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-[#F5C84C] uppercase">
              About George
            </h2>
            <div className="space-y-5 text-lg text-white/90 leading-relaxed">
              <p>
                George Featherstone has spent the last 20 years as a web
                developer and AI systems engineer — building, securing, and
                troubleshooting digital systems for a living.
              </p>
              <p>
                He knows how scam pages are built because he knows how real
                pages are built. He knows the tricks because he has spent two
                decades on the other side of them, making sure legitimate
                businesses don&apos;t accidentally look like the thing ScamBomb
                was built to catch.
              </p>
              <p>
                He built ScamBomb after his father-in-law was scammed twice —
                so the people he loves would have a second opinion they can get
                in seconds, without having to wait for him to be available.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#F5C84C] uppercase">
            Articles by George
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
              >
                <span className="text-base font-semibold text-white/90">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
