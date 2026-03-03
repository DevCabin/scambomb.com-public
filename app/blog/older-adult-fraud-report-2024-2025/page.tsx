import Link from 'next/link'

export const metadata = {
  title: 'Older Adult Fraud Is Now a Multi-Billion-Dollar Crisis — Our 2024–2025 Report',
  description: 'We commissioned a deep-dive into the numbers. The findings are sobering: $4.9B in losses, a 43% year-over-year surge, and AI voice cloning responsible for $897M in cumulative deepfake fraud.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <header className="mb-10">
          <div className="text-xs font-semibold tracking-widest text-yellow-300/80 mb-3">
            SPECIAL REPORT
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            Older Adult Fraud Is Now a Multi-Billion-Dollar Crisis
          </h1>
          <p className="text-white/80 text-lg mb-5 leading-relaxed">
            We commissioned a deep-dive into the latest FTC, FBI, and IC3 data on financial fraud targeting adults 60 and over. The findings are sobering — and they point squarely at a threat most people still don&apos;t take seriously: AI-generated voices calling your family members.
          </p>
          <time className="text-sm text-white/60" dateTime="2026-02-25">
            February 25, 2026
          </time>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">

          <p>
            Every year, the FTC and FBI release data on fraud losses. Every year, the numbers go up. But the 2024–2025 figures represent something different — not just growth, but acceleration. The largest single-year jump on record. And a new category of threat that official reporting hasn&apos;t even caught up to yet.
          </p>

          <p>
            We pulled the key findings together into a structured report. Here&apos;s a preview of what&apos;s in it.
          </p>

          <h2>The headline numbers</h2>

          <p>
            Adults aged 60 and over reported <strong>$2.4 billion in fraud losses to the FTC in 2024</strong> — up from $600 million in 2020. That&apos;s a 300% increase in four years. But the FTC figure is only what gets reported. FBI-linked cybercrime data tells a starker story.
          </p>

        </div>

        {/* Stat callout block — sneak peek at the report graphics */}
        <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2">FBI Cybercrime 2024</div>
            <div className="text-4xl font-extrabold text-red-400 leading-none mb-2">$4.9B</div>
            <div className="text-sm text-white/60 leading-snug">Lost by adults 60+ — the largest cybercrime loss category on record</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2">Year-over-year jump</div>
            <div className="text-4xl font-extrabold text-amber-400 leading-none mb-2">+43%</div>
            <div className="text-sm text-white/60 leading-snug">Single-year surge in cybercrime losses — the steepest increase ever recorded</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-2">Total estimated range</div>
            <div className="text-4xl font-extrabold text-white leading-none mb-2">$81.5B</div>
            <div className="text-sm text-white/60 leading-snug">Model-based upper estimate when severe underreporting is factored in</div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">

          <h2>The scam types doing the most damage</h2>

          <p>
            Investment scams lead the pack at <strong>$1.8 billion in losses in 2024</strong>, followed by tech support scams approaching $1 billion. But the breakdown that surprised us most: phone-initiated scams produce a <strong>median loss of $2,210</strong> per victim — more than three times the median loss from social-media-initiated scams. Scammers know this. It&apos;s why they call.
          </p>

          <p>
            Call centres overwhelmingly target older adults. In 2023, adults 60+ accounted for 58% of all call-centre fraud losses — roughly $770 million — despite being a minority of the overall victim pool.
          </p>

          <h2>The threat that doesn&apos;t show up in official figures yet</h2>

          <p>
            This is where it gets urgent. AI-powered voice cloning — the technology that lets a scammer clone a grandchild&apos;s voice from a 15-second social media clip — doesn&apos;t yet appear as its own line item in FTC or FBI data. It gets folded into phone fraud, impersonation scams, and call-centre schemes. The official numbers don&apos;t capture what&apos;s really happening.
          </p>

          <p>
            But cross-industry research does.
          </p>

        </div>

        {/* AI/voice cloning callout — the critical stat */}
        <div className="my-10 rounded-xl border-l-4 border-red-500 bg-red-500/10 border border-red-500/20 p-6 not-prose">
          <div className="text-xs font-bold tracking-widest text-red-400 uppercase mb-3">AI Voice Cloning — The Dollar Figure</div>
          <p className="text-white text-xl font-bold leading-snug mb-2">
            Cumulative deepfake fraud losses have now reached <span className="text-red-400">$897 million</span> — with <span className="text-red-400">$410 million</span> of that occurring in H1 2025 alone.
          </p>
          <p className="text-white/60 text-sm mt-3">
            Voice deepfakes increased approximately 680% year-over-year. Researchers project AI-driven voice phishing losses could reach <strong className="text-white">$40 billion globally by 2027</strong>. Source: ScamWatchHQ, DeepStrike.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">

          <p>
            The &quot;grandkid scam&quot; is the human face of this data. A scammer harvests audio from a grandchild&apos;s TikTok or voicemail greeting. They clone the voice. They call a grandparent claiming to be in trouble — an accident, an arrest, an emergency. They need bail money. They need it now. Individual losses typically range from several thousand dollars upward, with some victims sending multiple transfers before anyone spots what&apos;s happening.
          </p>

          <p>
            Three red flags appear in nearly every case: unexpected contact from an unfamiliar number, intense emotional pressure, and manufactured urgency designed to prevent the target from pausing to verify.
          </p>

          <h2>What&apos;s in the full report</h2>

          <p>
            The complete report covers all five sections of our research: the executive summary, a full breakdown of losses by scam type, the overall fraud burden on older adults, the AI and voice-based threat landscape, and a comparison of official reported figures against model-based full estimates. It includes data tables, loss-scale graphics, and source citations for every figure.
          </p>

          <p>
            It&apos;s designed to be shared — with family members, community groups, financial advisers, anyone who works with or cares about older adults.
          </p>

        </div>

        {/* CTA to interactive report */}
        <div className="my-12 rounded-2xl border-2 border-yellow-300/40 bg-gradient-to-br from-yellow-300/10 to-yellow-300/5 p-10 text-center not-prose">
          <div className="text-xs font-bold tracking-widest text-yellow-300/70 uppercase mb-4">Free Special Report — Interactive Edition</div>
          <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">
            Older Adult Fraud Intelligence Brief<br/>
            <span className="text-yellow-300">2024–2025</span>
          </h3>
          <p className="text-white/70 text-lg mb-3 max-w-lg mx-auto">
            The complete data report with interactive charts, animated loss breakdowns, and the full AI voice cloning threat analysis.
          </p>
          <p className="text-white/40 text-sm mb-8 max-w-md mx-auto">
            Scam type breakdowns · Dollar loss tables · AI threat landscape · Sources for every figure
          </p>
          <a
            href="/reports/older-adult-fraud-2024-2025"
            className="inline-block bg-yellow-300 text-[#0B1324] font-extrabold text-xl px-12 py-5 rounded-xl hover:bg-yellow-200 hover:scale-105 transition-all duration-200 shadow-lg shadow-yellow-300/20"
          >
            View the Interactive Report →
          </a>
          <p className="text-white/30 text-xs mt-5">No sign-up required · Shareable with family and colleagues</p>
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
