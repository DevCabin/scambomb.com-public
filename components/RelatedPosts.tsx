import Link from 'next/link'

type RelatedPost = { slug: string; title: string }

export default function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  return (
    <section aria-label="Related articles" className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs font-bold tracking-widest text-yellow-300/70 uppercase mb-3">Related reading</div>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-white/85 hover:text-white underline underline-offset-4">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
