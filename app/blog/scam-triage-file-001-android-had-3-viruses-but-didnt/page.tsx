import Link from 'next/link'
export const metadata = {
  title: 'Scam Triage File #001: The Android That “Had 3 Viruses” — But Didn’t',
  description:
    'A real-world Android scareware cleanup: fake “3 viruses detected” popups, Safe Mode diagnosis, rogue app removal, and a full recovery in about 15 minutes.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-yellow-300/80 mb-3">SCAM TRIAGE FILE #001</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            The Android That “Had 3 Viruses” — But Didn’t
          </h1>
          <p className="text-white/80 text-lg mb-5 leading-relaxed">
            Incident type: Android pop-up hijack. Threat category: scareware + adware bundle. Resolved in ~15 minutes.
          </p>
          <time className="text-sm text-white/60" dateTime="2026-02-27">
            February 27, 2026
          </time>
        </header>

        <section className="mb-8 not-prose">
          <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-5 sm:p-6">
            <div className="text-xs font-bold tracking-widest text-yellow-300/70 uppercase mb-2">At a glance</div>
            <p className="text-white/80 leading-relaxed">
              One Safe Mode test separated panic from signal. This wasn’t a system-level Android infection — it was scareware triggered by a rogue app.
            </p>
          </div>
        </section>

        <section className="mb-10 not-prose">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Time to Fix" value="~15 min" color="text-red-400" />
            <Stat label="Diagnosis Move" value="Safe Mode" color="text-amber-300" />
            <Stat label="Threat Type" value="Scareware" color="text-yellow-300" />
            <Stat label="Outcome" value="Recovered" color="text-emerald-300" />
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <h2>🚨 The symptom</h2>
          <p>
            A friend handed me his Android phone and said, <em>“Something is seriously wrong.”</em>
          </p>
          <p>
            The moment the screen lit up, fake alerts started firing: “Your Android is infected with viruses (3),” fake Google branding,
            urgent countdowns, and “protect now” buttons trying to force a click.
          </p>
          <p>
            It looked like malware. It felt like malware. But it wasn’t a system-level infection.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 not-prose">
          <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="/scam-stories/SPAM_DROID_IMG_2927.jpeg" alt="Android screen showing fake virus warning pop-up" className="w-full h-auto" />
            <figcaption className="px-4 py-3 text-sm text-white/60">Fake “virus detected” scare page with urgency prompts.</figcaption>
          </figure>
          <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="/scam-stories/SPAM_DROID_IMG_2928.jpeg" alt="Android scareware page impersonating trusted branding" className="w-full h-auto" />
            <figcaption className="px-4 py-3 text-sm text-white/60">Authority impersonation + panic messaging = classic scareware funnel.</figcaption>
          </figure>
        </div>

        <section className="mb-10 not-prose">
          <div className="text-xs font-bold tracking-widest text-white/50 uppercase mb-3">Triage workflow</div>
          <div className="grid gap-4 sm:grid-cols-3">
            <TriageCard step="Step 1" title="Isolate in Safe Mode">
              Boot into Safe Mode so Android runs core services only and third-party apps are disabled.
            </TriageCard>
            <TriageCard step="Step 2" title="Observe signal change">
              Pop-ups stopped instantly. That confirmed the OS was not compromised.
            </TriageCard>
            <TriageCard step="Step 3" title="Remove rogue app">
              Reviewed recently installed apps, removed suspicious entries, rebooted, and validated normal behavior.
            </TriageCard>
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <h2>🔬 Step 1: Isolate the problem</h2>
          <p>
            Before installing random cleaner apps or paying for “protection,” we booted into <strong>Safe Mode</strong>. In Safe Mode, Android
            disables third-party apps and runs core system services only.
          </p>
          <p>
            Result: the pop-ups stopped instantly.
          </p>
          <p>
            That single test told us the operating system was fine and a third-party app was launching the scare pages.
          </p>

          <h2>🧠 What this actually was</h2>
          <p>
            This is <strong>scareware</strong>: fake security warnings designed to trigger fear, force rushed decisions, and push users into paid
            subscriptions, redirects, or secondary malicious installs.
          </p>
          <p>It does not scan your phone. It does not detect real infections. It monetizes panic.</p>

          <h2>🔎 Step 2: Hunt the rogue app</h2>
          <p>
            We went to <strong>Settings → Apps → See all apps</strong>, sorted by recently installed, and reviewed anything unfamiliar.
          </p>
          <ul>
            <li>Generic app names</li>
            <li>Unknown developers</li>
            <li>Recently installed with no clear purpose</li>
            <li>Small footprint “utility” style apps</li>
          </ul>
          <p>
            We removed each suspicious app, rebooted, and the pop-ups were gone.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 not-prose">
          <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="/scam-stories/SPAM_DROID_IMG_2929.jpeg" alt="Android app list used to identify suspicious recent installs" className="w-full h-auto" />
            <figcaption className="px-4 py-3 text-sm text-white/60">App audit: remove unknown installs first, test, then continue.</figcaption>
          </figure>
          <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="/scam-stories/SPAM_DROID_IMG_2930.jpeg" alt="Android phone after cleanup with scare pop-ups removed" className="w-full h-auto" />
            <figcaption className="px-4 py-3 text-sm text-white/60">Post-clean reboot: no scare popups, normal behavior restored.</figcaption>
          </figure>
        </div>

        <section className="mb-10 not-prose grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">Likely chain of events</div>
            <ol className="list-decimal ml-5 space-y-1 text-white/80 text-sm">
              <li>User visited a sketchy page.</li>
              <li>Scare redirects fired.</li>
              <li>An adware-style app got installed.</li>
              <li>The app launched redirects on wake/unlock.</li>
              <li>Warnings appeared even when apps seemed closed.</li>
            </ol>
          </div>
          <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-5">
            <div className="text-xs font-bold tracking-widest text-red-300 uppercase mb-2">3 signs it’s fake</div>
            <ol className="list-decimal ml-5 space-y-1 text-white/85 text-sm">
              <li>Alert appears in a web page, not Android security settings.</li>
              <li>URL/domain looks off, even when branding looks legit.</li>
              <li>Safe Mode stops the behavior immediately.</li>
            </ol>
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>❌ What we did NOT do</h2>
          <ul>
            <li>Install random antivirus apps from pop-ups</li>
            <li>Enter payment info into scare pages</li>
            <li>Click “Clean now”</li>
            <li>Panic-reset the phone before diagnosing</li>
          </ul>
        </div>

        <section className="my-10 not-prose rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-5 sm:p-6">
          <div className="text-xs font-bold tracking-widest text-emerald-300 uppercase mb-3">Fix checklist (repeatable formula)</div>
          <ol className="list-decimal ml-5 space-y-1 text-white/85">
            <li>Boot into Safe Mode</li>
            <li>Confirm symptoms disappear</li>
            <li>Remove suspicious apps</li>
            <li>Clear browser data/cache</li>
            <li>Reboot and test normally</li>
          </ol>
          <p className="text-white/70 mt-3">Total time: under 15 minutes.</p>
        </section>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Final takeaway</h2>
          <p>
            The phone wasn’t infected. The user was manipulated.
          </p>
          <p>
            That distinction matters. When you recognize the pattern, you stop panicking and start diagnosing.
          </p>
        </div>

        <div className="my-10 rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-6 sm:p-8 not-prose">
          <div className="text-xs font-bold tracking-widest text-yellow-300/70 uppercase mb-2">ScamBomb Move</div>
          <h3 className="text-2xl font-bold mb-2">Check suspicious messages before you click</h3>
          <p className="text-white/70 mb-5">
            Paste suspicious texts, emails, or screenshots into ScamBomb and get plain-English risk analysis in seconds.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://app.scambomb.com" className="inline-block rounded-xl bg-yellow-300 text-[#0B1324] font-bold px-5 py-3 hover:bg-yellow-200 transition-colors">
              Try ScamBomb Free →
            </a>
            <a href="/blog/older-adult-fraud-report-2024-2025" className="inline-block rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition-colors">
              Fraud Target Older Adults: Annual Intelligence Brief 2024–2025
            </a>
          </div>
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

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className={`text-xl sm:text-2xl font-extrabold ${color}`}>{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/50 mt-1">{label}</div>
    </div>
  )
}

function TriageCard({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-bold tracking-widest text-yellow-300/70 uppercase mb-2">{step}</div>
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">{children}</p>
    </div>
  )
}
