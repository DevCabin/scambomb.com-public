import Link from 'next/link'

export const metadata = {
  title: 'New USPS delivery scam: what to do',
  description: 'A new scam impersonates USPS delivery notifications. Here\'s how to spot it and protect yourself.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
            ALERT
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">New USPS delivery scam: what to do</h1>
          <p className="text-white/80 text-lg mb-4">A new scam impersonates USPS delivery notifications. Here's how to spot it and protect yourself.</p>
          <time className="text-sm text-white/60" dateTime="2023-11-10">
            November 10, 2023
          </time>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h1>New USPS delivery scam: what to do</h1>

          <p>Scammers are now pretending to be USPS with fake delivery notifications. They claim you have a package that requires "redelivery fees" or "customs clearance."</p>

          <h2>What the scam looks like</h2>

          <ul>
            <li>Text or email saying: "Your package from Amazon/ebay/etc is held at the post office"</li>
            <li>Asks you to pay a small fee ($10-50) to "release" the package</li>
            <li>Provides a link to pay or a phone number to call</li>
            <li>Creates urgency: "Pay within 24 hours or package returns to sender"</li>
          </ul>

          <h2>Why it's dangerous</h2>

          <p>USPS never asks for payment via text or email for standard deliveries. They also don't hold packages for "customs clearance" on domestic mail.</p>

          <h2>What to do</h2>

          <ol>
            <li><strong>Don't click any links</strong> in the message</li>
            <li><strong>Don't call numbers</strong> provided in the message</li>
            <li>Check your actual USPS account at usps.com</li>
            <li>If you were expecting a package, contact USPS directly using the number on their official website</li>
          </ol>

          <h2>Real USPS communications</h2>

          <ul>
            <li>Come from official @usps.com email addresses</li>
            <li>Never ask for payment via unofficial channels</li>
            <li>Provide tracking numbers you can verify on usps.com</li>
          </ul>

          <p>Stay safe: When in doubt, go directly to the official website or app.</p>
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
