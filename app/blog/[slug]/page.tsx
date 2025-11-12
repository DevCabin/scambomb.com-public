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
    slug: post._raw.flattenedPath.replace('blog/', ''),
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === `blog/${params.slug}`)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function PostPage({ params }: PageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === `blog/${params.slug}`)

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
          {post.body.raw.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return <h1 key={i} className="text-3xl font-bold mb-4">{line.slice(2)}</h1>
            } else if (line.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-semibold mb-3 mt-6">{line.slice(3)}</h2>
            } else if (line.startsWith('1. ')) {
              return <li key={i} className="mb-1 list-decimal list-inside">{line.slice(3)}</li>
            } else if (line.startsWith('- ')) {
              return <li key={i} className="mb-1 list-disc list-inside">{line.slice(2)}</li>
            } else if (line.trim() === '') {
              return <br key={i} />
            } else if (line.trim()) {
              // Handle bold text with **text**
              const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              return <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: processedLine }} />
            }
            return null
          })}
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
