import Link from 'next/link'

export const metadata = {
  title: 'Three questions to ask before you click',
  description: 'A simple checklist to run through before clicking any link in an email or text message.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
            HOW-TO
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Three questions to ask before you click</h1>
          <p className="text-white/80 text-lg mb-4">A simple checklist to run through before clicking any link in an email or text message.</p>
          <time className="text-sm text-white/60" dateTime="2023-11-08">
            November 8, 2023
          </time>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h1>Three questions to ask before you click</h1>

          <p>Links in emails and texts can lead to dangerous websites. But you don't need to be a tech expert to stay safe. Just ask yourself these three questions.</p>

          <h2>1. Did I expect this message?</h2>

          <p>If you get an unexpected email about "your account" or "a package delivery," be suspicious. Legitimate companies don't send random alerts. If it's about something you actually ordered or have an account for, check your official account first.</p>

          <h2>2. Does the link match the company?</h2>

          <p>Hover over (don't click) the link. Does the URL match the company's official website? For example:</p>
          <ul>
            <li>Real: amazon.com/returns</li>
            <li>Fake: amaz0n-support.com/update</li>
          </ul>

          <p>Scammers use similar-looking domains to trick you.</p>

          <h2>3. Does it create urgency or fear?</h2>

          <p>Messages that say "Act now or lose access!" or "Your account will be suspended!" are red flags. Real companies give you time and don't threaten immediate consequences.</p>

          <h2>Safe alternatives</h2>

          <p>Instead of clicking suspicious links:</p>
          <ul>
            <li>Type the company's website address directly into your browser</li>
            <li>Use their official app</li>
            <li>Call them using a number from their official website (not from the message)</li>
          </ul>

          <h2>Bonus tip</h2>

          <p>If something feels off, it probably is. Trust your instincts and take the safe route.</p>
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
