import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function PostPage({ params }: PageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0B1324] text-white py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
            {post.tags?.[0] || 'GUIDE'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-white/80 text-lg mb-4">{post.description}</p>
          <time className="text-sm text-white/60" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.body.code }} />
        </div>

        <footer className="mt-12 pt-8 border-t border-white/10">
          <Link href="/blog" className="text-yellow-300 hover:text-yellow-400 underline underline-offset-4">
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  )
}
