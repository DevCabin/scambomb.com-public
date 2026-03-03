import Link from 'next/link'

export const metadata = {
  title: 'How to spot fake bank texts in 30 seconds',
  description: 'Learn the quick red flags that separate real bank alerts from scam texts trying to steal your money.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
            GUIDE
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">How to spot fake bank texts in 30 seconds</h1>
          <p className="text-white/80 text-lg mb-4">Learn the quick red flags that separate real bank alerts from scam texts trying to steal your money.</p>
          <time className="text-sm text-white/60" dateTime="2023-11-12">
            November 12, 2023
          </time>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h1>How to spot fake bank texts in 30 seconds</h1>

          <p>Bank scams via text message are one of the most common ways scammers try to trick people. But there's a simple way to check if a text is really from your bank.</p>

          <h2>Step 1: Check the sender</h2>

          <p>Real banks never text from random numbers. They use official sender IDs like "Chase" or "Bank of America". If it's from a weird number like +1234567890, it's probably fake.</p>

          <h2>Step 2: Look for urgency</h2>

          <p>Scammers create panic: "Your account is locked!" or "Action required in 15 minutes!" Real banks give you time and don't threaten immediate closure.</p>

          <h2>Step 3: Never click links in texts</h2>

          <p>Legitimate banks won't ask you to click links in texts to "verify" or "unlock" your account. They direct you to use their official app or website.</p>

          <h2>What to do instead</h2>

          <p>If you're worried about your account, open your bank's official app or call the number on the back of your card. Don't use any numbers from the suspicious text.</p>

          <p>Remember: Your bank already has your information. They don't need you to "confirm" anything via text.</p>
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
