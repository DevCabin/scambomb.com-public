import Link from 'next/link'

export const metadata = {
  title: 'Scam Triage File #003: Your Computer Is Infected',
  description:
    'A real-world scareware cleanup: fake Microsoft Defender and McAfee popups, a hijacked browser notification permission, and the 8-step fix that saved the day.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-yellow-300/80 mb-3">SCAM TRIAGE FILE #003</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            Your Computer Is Infected
          </h1>
          <p className="text-white/80 text-lg mb-5 leading-relaxed">
            Incident type: browser hijack + scareware popups. Threat category: fake virus warnings + remote-access scam setup. Resolved in about 30 minutes.
          </p>
          <time className="text-sm text-white/60" dateTime="2026-08-03">
            August 3, 2026
          </time>
        </header>

        <section className="mb-8 not-prose">
          <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-5 sm:p-6">
            <div className="text-xs font-bold tracking-widest text-yellow-300/70 uppercase mb-2">At a glance</div>
            <p className="text-white/80 leading-relaxed">
              The popups were never the real danger. The phone number written across them was. One calm, step-by-step cleanup — and a refusal to call the number — was the whole ballgame.
            </p>
          </div>
        </section>

        <section className="mb-10 not-prose">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Time to Fix" value="~30 min" color="text-red-400" />
            <Stat label="Diagnosis Move" value="Notification Perms" color="text-amber-300" />
            <Stat label="Threat Type" value="Scareware" color="text-yellow-300" />
            <Stat label="Outcome" value="Recovered" color="text-emerald-300" />
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <h2>🚨 The symptom</h2>
          <p>
            It started, like most of these stories do, with a text message that made my stomach drop a little: <em>“Hey, can you help? Someone I work with is freaking out, her screen is covered in virus warnings and she doesn’t know what to do.”</em>
          </p>
          <p>
            The message was from my wife. The “someone” was a coworker of hers — a genuinely non-technical, very sweet, very scared woman staring at a computer screen that was actively trying to convince her the world was ending.
          </p>
          <p>
            I run ScamBomb, a tool built specifically to protect people from scams like the one unfolding on her screen in real time. So naturally, I said <em>“put me on FaceTime with her.”</em>
          </p>
        </div>

        <section className="mb-10 not-prose">
          <div className="text-xs font-bold tracking-widest text-white/50 uppercase mb-3">The popup parade</div>
          <div className="grid gap-4 sm:grid-cols-3">
            <TriageCard step="Signal 1" title="Fake Microsoft Defender">
              One popup claimed to be from Microsoft Defender. The rest were all flavors of “McAfee has detected a critical infection.”
            </TriageCard>
            <TriageCard step="Signal 2" title="Relentless reappearing">
              They kept reappearing almost as fast as she could close them — like popping bubble wrap that somehow refills itself.
            </TriageCard>
            <TriageCard step="Signal 3" title="No taskbar notification">
              No flashing shield icon from the real Windows Security. That small detail told me almost everything I needed to know.
            </TriageCard>
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <h2>🔬 The diagnosis</h2>
          <p>
            Troubleshooting over FaceTime means flying half-blind. I couldn’t grab the mouse or right-click anything myself. I had to be her eyes, her hands, and her calm, steady voice, all at once, through a slightly shaky phone camera.
          </p>
          <p>
            But I noticed something important almost immediately: there was no flashing icon in her taskbar. Real system alerts come from a real place on your screen, consistently, in the same visual style every time. This was something else. This had the fingerprint of a scam.
          </p>
          <p>
            This is <strong>scareware</strong>: fake security warnings designed to trigger fear, force rushed decisions, and push users into paid subscriptions, redirects, or secondary malicious installs. It does not scan your computer. It does not detect real infections. It monetizes panic.
          </p>
        </div>

        <section className="mb-10 not-prose">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">The real root cause</div>
            <p className="text-white/80 text-sm leading-relaxed">
              The actual fix wasn’t the popups at all — it was a <strong>hijacked browser notification permission</strong>. Somewhere, weeks or months earlier, one accidental “Allow” click had quietly given a site permission to send these popups anytime it wanted, even with the browser closed. We found it. We removed it. That, more than anything else, was the fix.
            </p>
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <h2>🧹 Working through it</h2>
          <p>
            Step by step, out loud, over FaceTime, while she narrated back what she was seeing.
          </p>
          <ul>
            <li><code>Alt + F4</code> closed the loud one, but a second was still lurking in a tab.</li>
            <li>She closed that specific tab — until the browser itself needed a hard reset through Task Manager.</li>
            <li><code>Ctrl + Shift + Esc</code>, find the browser, end the task. On reopen, decline “restore previous tabs” so the ghost didn’t come back.</li>
            <li>Then the part that mattered most: digging into browser notification settings and removing the site that had quietly earned “Allow.”</li>
          </ul>
          <p>
            From there we ran Windows Security’s built-in quick scan, which came back clean — but I wasn’t fully satisfied. Junk toolbars, adware, and browser hijackers live in the “potentially unwanted program” gray zone that Defender sometimes waves through. So I had her download Malwarebytes’ free version and run a full scan.
          </p>
        </div>

        <section className="mb-10 not-prose">
          <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-6 sm:p-8 text-center">
            <div className="text-5xl sm:text-6xl font-extrabold text-red-400">60</div>
            <div className="text-xs font-bold tracking-widest text-red-300 uppercase mt-2 mb-3">Actual detected issues</div>
            <p className="text-white/85 leading-relaxed max-w-xl mx-auto">
              Not sixty popups — sixty actual detected issues sitting on her machine. That number told the real story: something had actually taken up residence. We quarantined everything, rebooted, and ran it again. This time: clean.
            </p>
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <h2>⚠️ The part people skip</h2>
          <p>
            The popup itself was never the real danger. The real danger is the <strong>phone number written across it</strong>, urging you to call for “immediate support.” That number doesn’t connect you to Microsoft or McAfee. It connects you to a scammer, trained to sound calm and official, who will walk you through installing remote access software like AnyDesk or TeamViewer — software that, once installed, hands a stranger the keys to your entire computer.
          </p>
          <p>
            She didn’t call the number. That’s the whole ballgame right there. Everything else — the popups, the fake alerts, the scary red screens — is just noise designed to rattle you into making that one call. <strong>No call, no scam.</strong> That’s it.
          </p>
        </div>

        <section className="mb-10 not-prose">
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-5 sm:p-6">
            <div className="text-xs font-bold tracking-widest text-emerald-300 uppercase mb-3">The cheat sheet (repeatable formula)</div>
            <ol className="list-decimal ml-5 space-y-2 text-white/85">
              <li><strong>Don’t click anything inside the popup.</strong> Not the X, not “Remove Virus,” nothing. Close the window with <code>Alt + F4</code> instead, or right-click the browser in the taskbar.</li>
              <li><strong>Check your open tabs.</strong> If one looks like the scary warning page, close just that tab.</li>
              <li><strong>Force-quit the browser if it won’t close normally.</strong> <code>Ctrl + Shift + Esc</code> → find the browser → End Task.</li>
              <li><strong>Reopen the browser and decline “restore tabs.”</strong> Start fresh.</li>
              <li><strong>Remove the fake notification permission.</strong> This is almost always the real cause. Browser site settings → Notifications → remove anything unfamiliar.</li>
              <li><strong>Run the built-in Windows Security scan.</strong> Search “Windows Security” in the Start menu, then Virus & Threat Protection → Quick Scan.</li>
              <li><strong>Run a free Malwarebytes scan too.</strong> It catches the adware and junk-program category that Defender sometimes misses. Quarantine anything it finds, reboot, and scan once more.</li>
              <li><strong>Never call the number on the popup.</strong> That’s the actual scam. Everything else is just the setup.</li>
            </ol>
          </div>
        </section>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Final takeaway</h2>
          <p>
            If you ever find yourself mid-crisis with a screen full of scary red warnings — take a breath. It’s almost never as bad as it looks, and it’s almost always fixable.
          </p>
          <p>
            That’s kind of the whole point of what we’re building over here at ScamBomb: <strong>less panic, more plan.</strong>
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
            <a href="/blog/scam-triage-file-001-android-had-3-viruses-but-didnt" className="inline-block rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition-colors">
              Scam Triage File #001: The Android That “Had 3 Viruses”
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