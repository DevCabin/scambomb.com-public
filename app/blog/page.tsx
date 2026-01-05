// Simple blog system - rebuilt from scratch without contentlayer
import Link from 'next/link'

const posts = [
  {
    slug: 'how-to-spot-fake-bank-texts-in-30-seconds',
    title: 'How to spot fake bank texts in 30 seconds',
    description: 'Learn the quick red flags that separate real bank alerts from scam texts trying to steal your money.',
    date: '2023-11-12',
    tag: 'GUIDE'
  },
  {
    slug: 'new-usps-delivery-scam-what-to-do',
    title: 'New USPS delivery scam: what to do',
    description: 'A new scam impersonates USPS delivery notifications. Here\'s how to spot it and protect yourself.',
    date: '2023-11-10',
    tag: 'ALERT'
  },
  {
    slug: 'three-questions-to-ask-before-you-click',
    title: 'Three questions to ask before you click',
    description: 'A simple checklist to run through before clicking any link in an email or text message.',
    date: '2023-11-08',
    tag: 'HOW-TO'
  }
]

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-white/80 text-lg">Stay ahead of scams with our latest guides and alerts</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
                {post.tag}
              </div>
              <h2 className="text-xl font-semibold mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-yellow-300 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-white/80 mb-4">{post.description}</p>
              <time className="text-sm text-white/60" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-yellow-300 hover:text-yellow-400 underline underline-offset-4">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
