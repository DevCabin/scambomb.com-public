// Modern blog system - redesigned 2026
import Link from 'next/link'

const posts = [
  {
    slug: 'scam-triage-file-001-android-had-3-viruses-but-didnt',
    title: 'Scam Triage File #001: The Android That "Had 3 Viruses" — But Didn\'t',
    description: 'Real incident breakdown: fake "3 viruses detected" Android scareware, Safe Mode diagnosis, rogue app cleanup, and full recovery in about 15 minutes.',
    date: '2026-02-27',
    tag: 'SCAM TRIAGE',
    readTime: '8 min read'
  },
  {
    slug: 'older-adult-fraud-report-2024-2025',
    title: 'Older Adult Fraud Is Now a Multi-Billion-Dollar Crisis — Our 2024–2025 Report',
    description: '$4.9B in losses, a 43% year-over-year surge, and AI voice cloning responsible for $897M in cumulative deepfake fraud. We commissioned the research. Here\'s what we found.',
    date: '2026-02-25',
    tag: 'SPECIAL REPORT',
    readTime: '12 min read'
  },
  {
    slug: 'how-to-spot-fake-bank-texts-in-30-seconds',
    title: 'How to spot fake bank texts in 30 seconds',
    description: 'Learn the quick red flags that separate real bank alerts from scam texts trying to steal your money.',
    date: '2023-11-12',
    tag: 'GUIDE',
    readTime: '4 min read'
  },
  {
    slug: 'new-usps-delivery-scam-what-to-do',
    title: 'New USPS delivery scam: what to do',
    description: 'A new scam impersonates USPS delivery notifications. Here\'s how to spot it and protect yourself.',
    date: '2023-11-10',
    tag: 'ALERT',
    readTime: '5 min read'
  },
  {
    slug: 'three-questions-to-ask-before-you-click',
    title: 'Three questions to ask before you click',
    description: 'A simple checklist to run through before clicking any link in an email or text message.',
    date: '2023-11-08',
    tag: 'HOW-TO',
    readTime: '3 min read'
  }
]

export default function BlogPage() {
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-[#0B1324]">
      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              ScamBomb Blog
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay ahead of scammers with expert guides, real incident breakdowns, and actionable security tips.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-sm font-semibold text-[#F5C84C] tracking-wider uppercase">
            Featured
          </span>
        </div>
        
        <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#F5C84C]/50 transition-all duration-300">
          <Link href={`/blog/${featuredPost.slug}`} className="block p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-[#F5C84C]/10 px-3 py-1 text-xs font-medium text-[#F5C84C] ring-1 ring-inset ring-[#F5C84C]/20">
                    {featuredPost.tag}
                  </span>
                  <span className="text-sm text-white/50">{featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#F5C84C] transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
                  {featuredPost.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <time className="text-sm text-white/50" dateTime={featuredPost.date}>
                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-[#F5C84C] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read article 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>

      {/* Regular Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-8">
          <span className="text-sm font-semibold text-white/50 tracking-wider uppercase">
            Latest Articles
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {regularPosts.map((post) => (
            <article 
              key={post.slug} 
              className="group flex flex-col rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/10">
                    {post.tag}
                  </span>
                  <span className="text-xs text-white/40">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#F5C84C] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-white/60 mb-6 line-clamp-2 flex-1">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <time className="text-sm text-white/40" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-[#F5C84C] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#F5C84C]/10 to-transparent p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Get scam alerts delivered to your inbox
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Join thousands of people who receive our weekly scam alerts and safety tips. No spam, ever.
          </p>
          <a 
            href="https://scambomb.beehiiv.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B1324] bg-[#F5C84C] rounded-lg hover:bg-[#F5C84C]/90 transition-colors"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </div>
    </div>
  )
}