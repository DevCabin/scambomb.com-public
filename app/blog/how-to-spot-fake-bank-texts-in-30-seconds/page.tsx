import Link from 'next/link'

export const metadata = {
  title: 'How to spot fake bank texts in 30 seconds',
  description: 'Learn the quick red flags that separate real bank alerts from scam texts trying to steal your money.',
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#0B1324]">
      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Tag */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-[#F5C84C]/10 px-3 py-1 text-xs font-medium text-[#F5C84C] ring-1 ring-inset ring-[#F5C84C]/20">
              GUIDE
            </span>
            <span className="text-sm text-white/50">4 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-6 uppercase tracking-tight">
            <span className="text-white">HOW TO SPOT </span>
            <span className="text-[#F5C84C]">FAKE BANK</span>
            <span className="text-white"> TEXTS IN 30 SECONDS</span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-white/70 text-center mb-6 max-w-2xl mx-auto leading-relaxed">
            Learn the quick red flags that separate real bank alerts from scam texts trying to steal your money.
          </p>

          {/* Date */}
          <div className="text-center">
            <time className="text-sm text-white/50" dateTime="2023-11-12">
              November 12, 2023
            </time>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Intro */}
          <p className="text-lg text-white/80 leading-relaxed">
            Bank scams via text message are one of the most common ways scammers try to trick people. But there's a simple way to check if a text is really from your bank.
          </p>

          {/* Step 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5C84C] text-[#0B1324] font-bold text-sm">1</span>
              <h2 className="text-xl font-bold text-white">Check the sender</h2>
            </div>
            <p className="text-white/70 leading-relaxed">
              Real banks never text from random numbers. They use official sender IDs like "Chase" or "Bank of America". If it's from a weird number like +1234567890, it's probably fake.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5C84C] text-[#0B1324] font-bold text-sm">2</span>
              <h2 className="text-xl font-bold text-white">Look for urgency</h2>
            </div>
            <p className="text-white/70 leading-relaxed">
              Scammers create panic: "Your account is locked!" or "Action required in 15 minutes!" Real banks give you time and don't threaten immediate closure.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5C84C] text-[#0B1324] font-bold text-sm">3</span>
              <h2 className="text-xl font-bold text-white">Never click links in texts</h2>
            </div>
            <p className="text-white/70 leading-relaxed">
              Legitimate banks won't ask you to click links in texts to "verify" or "unlock" your account. They direct you to use their official app or website.
            </p>
          </div>

          {/* What to do instead - Highlighted box */}
          <div className="rounded-2xl bg-gradient-to-br from-[#F5C84C]/20 to-[#F5C84C]/5 border border-[#F5C84C]/30 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#F5C84C]">✓</span> What to do instead
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              If you're worried about your account, open your bank's official app or call the number on the back of your card. Don't use any numbers from the suspicious text.
            </p>
            <p className="text-white/80 leading-relaxed">
              <strong className="text-[#F5C84C]">Remember:</strong> Your bank already has your information. They don't need you to "confirm" anything via text.
            </p>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#F5C84C] hover:text-[#F5C84C]/80 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </article>
    </div>
  )
}