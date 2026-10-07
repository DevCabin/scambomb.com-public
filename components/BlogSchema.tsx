// Shared Article + Person JSON-LD for blog posts (HeyCatch `a_author_schema`).
// Author (Person) sameAs = founder's personal profiles. Company (Organization)
// sameAs lives in app/layout.tsx and intentionally excludes personal profiles.
const AUTHOR_URL = 'https://scambomb.com/author/george-featherstone'

export const AUTHOR_SAMEAS = [
  'https://www.linkedin.com/in/george-featherstone-63686135/',
]

type BlogSchemaProps = {
  title: string
  description?: string
  url: string
  datePublished: string
  dateModified?: string
}

export default function BlogSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: BlogSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    ...(description ? { description } : {}),
    url,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      '@id': `${AUTHOR_URL}#person`,
      name: 'George Featherstone',
      url: AUTHOR_URL,
      sameAs: AUTHOR_SAMEAS,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ScamBomb',
      url: 'https://scambomb.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://scambomb.com/logo.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
