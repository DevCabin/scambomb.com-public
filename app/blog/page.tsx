import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const imgSize = size === "sm" ? "h-10 w-32" : "h-12 w-40";
  return (
    <div className="flex items-center gap-2" role="img" aria-label="ScamBomb logo">
      <img
        src="/logo.png"
        alt="ScamBomb Logo"
        className={`${imgSize} object-contain`}
      />
    </div>
  );
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-white/80 text-lg">Stay ahead of scams with our latest guides and alerts</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post._id} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
                {post.tags?.[0] || 'GUIDE'}
              </div>
              <h2 className="text-xl font-semibold mb-3">
                <Link href={post.url} className="hover:text-yellow-300 transition-colors">
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
