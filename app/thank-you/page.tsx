import Link from 'next/link'

export const metadata = {
  title: 'You\'re In! — ScamBomb',
  description: 'Thanks for joining the ScamBomb community. Monthly scam and AI fraud updates are on the way.',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Confirmation */}
        <div className="mb-10">
          <div className="text-6xl mb-6">💙</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            You&apos;re on the list!
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            Thanks for joining our community of concerned citizens and agreeing to get the latest scams and AI-powered fraud schemes — plus tips, tactics, and tricks to thwart them — sent right to your inbox monthly.
          </p>
          <p className="text-white/60 text-sm mt-3">
            (Don&apos;t see it? Check your spam or promotions folder and mark us as safe.)
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Pro pitch */}
        <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-8">
          <div className="text-xs font-bold tracking-widest text-yellow-300/70 mb-3">WHILE YOU WAIT</div>
          <h2 className="text-2xl font-bold mb-3">
            Want to stop scams in real-time?
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            ScamBomb Pro lets you paste any suspicious email, text, or link and get instant plain-English analysis — so you always know if something is safe before you click, call back, or send money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.scambomb.com"
              className="rounded-2xl px-6 py-3 font-semibold inline-block text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#F5C84C', color: '#0B1324' }}
            >
              Try ScamBomb Free →
            </a>
            <a
              href="/#pricing"
              className="rounded-2xl px-6 py-3 border-2 font-semibold inline-block text-center hover:bg-white/10 transition-colors"
              style={{ borderColor: '#F5C84C', color: '#F5C84C' }}
            >
              See Pro Plans
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link href="/" className="text-white/50 hover:text-white/80 text-sm underline underline-offset-4 transition-colors">
            ← Back to ScamBomb
          </Link>
        </div>

      </div>
    </div>
  )
}
