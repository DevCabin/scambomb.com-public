import type { MetadataRoute } from 'next'

// Route-generated sitemap (HeyCatch `t_sitemap_fresh`).
// Sources of truth for URLs/lastmod are the live page files below.
// Blog posts: add each slug here when a new post ships; keep lastmod in sync
// with the post's <time dateTime> value.
const BLOG_POSTS: { slug: string; lastmod: string }[] = [
  { slug: 'how-to-spot-fake-bank-texts-in-30-seconds', lastmod: '2026-08-04' },
  { slug: 'is-this-a-scam', lastmod: '2026-08-04' },
  { slug: 'new-usps-delivery-scam-what-to-do', lastmod: '2026-08-04' },
  { slug: 'older-adult-fraud-report-2024-2025', lastmod: '2026-08-04' },
  { slug: 'scam-triage-file-001-android-had-3-viruses-but-didnt', lastmod: '2026-08-03' },
  { slug: 'scam-triage-file-003-your-computer-is-infected', lastmod: '2026-08-03' },
  { slug: 'she-heard-her-daughter-crying-ai-voice-clone-scam', lastmod: '2026-08-03' },
  { slug: 'three-questions-to-ask-before-you-click', lastmod: '2026-08-04' },
]

const STATIC_PAGES: { path: string; lastmod: string }[] = [
  { path: '', lastmod: '2026-10-07' },
  { path: '/about', lastmod: '2026-10-07' },
  { path: '/contact', lastmod: '2026-10-07' },
  { path: '/extension', lastmod: '2026-10-07' },
  { path: '/resources', lastmod: '2026-10-07' },
  { path: '/member-signup', lastmod: '2026-10-07' },
  { path: '/scam-stories', lastmod: '2026-10-07' },
  { path: '/terms', lastmod: '2026-10-07' },
  { path: '/extension-privacy', lastmod: '2026-10-07' },
  { path: '/credit-unions', lastmod: '2026-10-07' },
  { path: '/protect-parents', lastmod: '2026-10-07' },
  { path: '/poll', lastmod: '2026-10-07' },
  { path: '/career-scam-case-study', lastmod: '2026-10-07' },
  { path: '/reports/older-adult-fraud-2024-2025', lastmod: '2026-10-07' },
  { path: '/resources/is-this-a-scam-checklist', lastmod: '2026-10-07' },
  { path: '/resources/ai-voice-cloning-survival-guide', lastmod: '2026-10-07' },
  { path: '/resources/dont-let-a-text-steal-everything', lastmod: '2026-10-07' },
  { path: '/resources/phishing-link-survival-guide', lastmod: '2026-10-07' },
]

const BASE = 'https://scambomb.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const p of STATIC_PAGES) {
    entries.push({
      url: `${BASE}${p.path}`,
      lastModified: new Date(p.lastmod),
      changeFrequency: 'monthly',
      priority: p.path === '' ? 1 : 0.6,
    })
  }

  entries.push({
    url: `${BASE}/blog`,
    lastModified: new Date('2026-10-07'),
    changeFrequency: 'weekly',
    priority: 0.7,
  })

  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.lastmod),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  }

  return entries
}
