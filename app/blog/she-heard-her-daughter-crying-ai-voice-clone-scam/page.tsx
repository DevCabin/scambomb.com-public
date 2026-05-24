import Link from 'next/link'

export const metadata = {
  title: 'Scam Triage File #002: She Heard Her Daughter Crying for Help. It Wasn’t Her Daughter.',
  description:
    'A Florida woman lost $15,000 to an AI voice clone scam — and every single red flag was catchable. Full breakdown of the playbook, the 7 red flags, and how to set up a family safe word today.',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-sm font-semibold tracking-widest text-yellow-300/80 mb-3">SCAM TRIAGE FILE #002</div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            She Heard Her Daughter Crying for Help. <span className="text-yellow-300">It Wasn’t Her Daughter.</span>
          </h1>
          <p className="text-white/85 text-xl sm:text-2xl mb-5 leading-relaxed">
            A Florida woman lost $15,000 to an AI voice clone scam — and every single red flag was catchable.
          </p>
          <p className="text-white/70 text-base mb-4 italic">
            Original story reported by Fox 13 Tampa Bay, based on an interview with Sharon Brightwell of Dover, FL.
          </p>
          <time className="text-base text-white/70" dateTime="2026-05-23">
            May 23, 2026
          </time>
        </header>

        <section className="mb-8 not-prose">
          <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-5 sm:p-6">
            <div className="text-sm font-bold tracking-widest text-yellow-300/80 uppercase mb-2">At a glance</div>
            <p className="text-white/85 text-lg sm:text-xl leading-relaxed">
              Scammers used AI to clone a daughter’s voice, fabricated a car-accident emergency, and walked a mother through a $15,000 cash handoff in hours. The story is heartbreaking — but the playbook is repeatable, and every step had a catchable red flag.
            </p>
          </div>
        </section>

        <section className="mb-10 not-prose">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Stat label="Loss" value="$15,000" color="text-red-400" />
            <Stat label="Scam Type" value="AI Voice Clone" color="text-amber-300" />
            <Stat label="Trigger" value="Family Emergency" color="text-yellow-300" />
            <Stat label="Audio to Clone a Voice" value="~3 sec" color="text-emerald-300" />
          </div>
        </section>

        {/* Local news segment block */}
        <section className="mb-10 not-prose">
          <div className="text-sm font-bold tracking-widest text-white/60 uppercase mb-3">Local news segment</div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="relative">
              <img
                src="/scam-stories/fox13-dover-ai-voice-clone.png"
                alt="Local news segment: woman loses $15K in elaborate AI scam — Fox 13 Tampa Bay"
                className="w-full h-auto"
              />
            </div>
            <div className="px-4 sm:px-5 py-4">
              <div className="text-white text-lg sm:text-xl font-semibold mb-1">
                Woman loses $15K in elaborate AI scam
              </div>
              <div className="text-white/70 text-base">
                Fox 13 Tampa Bay — Aaron Mesmer interviews Sharon Brightwell (Dover, FL).
              </div>
            </div>
          </div>
        </section>

        <div className="prose prose-invert prose-xl max-w-none mb-8">
          <h2>📞 The call</h2>
          <p>
            Sharon Brightwell picked up the phone and heard her daughter sobbing.
          </p>
          <p>
            Crying. Hysterical. Begging for help.
          </p>
          <p>
            Her daughter said she’d been in a car accident — she’d hit a pregnant woman while texting and driving. Her phone had been confiscated by authorities. She was calling from a different number.
          </p>
          <p>
            Then a man got on the line. Said he was a public defender. Said Sharon’s daughter had been taken into custody and needed <strong>$15,000 in bail. Immediately.</strong>
          </p>
          <p>
            Sharon did what any terrified mother would do. She went to the bank. She withdrew the cash. She waited at home for a “legal courier” to pick it up.
          </p>
          <p>
            She handed over $15,000 in cash to a stranger.
          </p>
          <p>
            It was all fake. Every word. Every sob. Every detail. The scammers had used <strong>artificial intelligence to clone her daughter’s voice</strong> — likely pulling audio clips from social media — and built an entire performance around it.
          </p>
          <p>
            Sharon later told reporters: <em>“There was nothing that could have convinced me that was not my daughter’s voice that day.”</em>
          </p>
          <p>
            After taking the $15K, the scammers called back and demanded another $30,000. That’s when Sharon stopped. She called the real authorities. But the money was already gone.
          </p>
        </div>

        {/* 7 Red Flags */}
        <section className="mb-12 not-prose">
          <div className="text-sm font-bold tracking-widest text-white/60 uppercase mb-3">The 7 red flags</div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FlagCard num="🚩 Red Flag #1" title="The call came from an unknown number">
              The “daughter” explained her phone was confiscated, so she was calling from a new number. Anytime a loved one calls from an unknown number and immediately asks for money — that is your cue to hang up and verify, not to react.
            </FlagCard>
            <FlagCard num="🚩 Red Flag #2" title="Extreme emotion was the weapon">
              Crying. Hysterical. Panic. Scammers <strong>weaponize emotion</strong> to flood you with adrenaline so you can’t think. If your heart is racing, slow down — don’t speed up.
            </FlagCard>
            <FlagCard num="🚩 Red Flag #3" title="The story blocked verification">
              Accident + injured pregnant woman + confiscated phone + new number. Every detail existed to stop her from calling her real daughter. Real emergencies don’t come with instructions to avoid contacting the people involved.
            </FlagCard>
            <FlagCard num="🚩 Red Flag #4" title="A fake “authority” took over">
              A man identifying himself as a public defender added institutional credibility. Real public defenders don’t cold-call parents and demand cash bail at the door.
            </FlagCard>
            <FlagCard num="🚩 Red Flag #5" title="They demanded cash, in person">
              Not a check. Not a card. Not a wire. <strong>Physical cash, handed to a courier at the house.</strong> Almost no legitimate legal or financial process in the U.S. works this way. Cash is untraceable — that’s why scammers want it.
            </FlagCard>
            <FlagCard num="🚩 Red Flag #6" title="“Immediately”">
              The entire script ran on a clock. Pay now. Courier coming today. Don’t call anyone. Urgency is the engine of every scam — real systems have business hours, paperwork, and time built in.
            </FlagCard>
            <FlagCard num="🚩 Red Flag #7" title="They came back for more">
              After taking $15,000, they asked for another $30,000. Once you pay, you’ve proven you’ll pay — and they escalate. By the time this flag appears, the damage is usually done. Catch it early.
            </FlagCard>
            <FlagCard num="💡 The ScamBomb Rule" title="A familiar voice is no longer proof of identity">
              Today’s AI tools can clone a convincing voice from as little as <strong>~3 seconds of audio</strong>. That birthday clip on Facebook, that Instagram story, that TikTok — it’s all raw material. The voice on the phone is just sound.
            </FlagCard>
          </div>
        </section>

        {/* Side-by-side blocks */}
        <section className="mb-10 not-prose grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="text-sm font-bold tracking-widest text-white/60 uppercase mb-3">Why this story worked</div>
            <ol className="list-decimal ml-5 space-y-2 text-white/85 text-lg leading-relaxed">
              <li>Voice triggers parental fear instantly.</li>
              <li>Accident + injury = guilt and shame (you won’t want to tell others).</li>
              <li>Confiscated phone explains why you can’t verify.</li>
              <li>“Public defender” adds authority.</li>
              <li>Cash courier creates a deadline you can’t pause.</li>
              <li>Second ask only happens because the first one worked.</li>
            </ol>
          </div>
          <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-5 sm:p-6">
            <div className="text-sm font-bold tracking-widest text-red-300 uppercase mb-3">What ~3 seconds of audio can do</div>
            <ul className="list-disc ml-5 space-y-2 text-white/90 text-lg leading-relaxed">
              <li>Generate a synthetic version of your loved one’s voice.</li>
              <li>Read any script in their tone — crying, panicked, calm.</li>
              <li>Hold a short live conversation with believable inflection.</li>
              <li>Sound familiar enough that your brain bypasses doubt.</li>
            </ul>
          </div>
        </section>

        <div className="prose prose-invert prose-xl max-w-none">
          <h2>❌ What no real process ever asks you to do</h2>
          <ul>
            <li>Hand cash to a courier at your door for “bail.”</li>
            <li>Pay a “public defender” directly over the phone.</li>
            <li>Avoid calling other family members to verify.</li>
            <li>Skip checking the real loved one’s known phone number first.</li>
          </ul>
        </div>

        {/* Fix checklist */}
        <section className="my-10 not-prose rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-5 sm:p-6">
          <div className="text-sm font-bold tracking-widest text-emerald-300 uppercase mb-3">Family fix checklist (do this today)</div>
          <ol className="list-decimal ml-5 space-y-2 text-white/90 text-lg sm:text-xl leading-relaxed">
            <li>Pick a <strong>family safe word</strong> — something nobody would post online.</li>
            <li>Agree: if anyone calls in a panic asking for money, you ask for the word.</li>
            <li>Always verify on a <strong>known number</strong>. Hang up. Call them. Call another family member.</li>
            <li>Treat <strong>cash + courier</strong> as a 100% scam pattern. Period.</li>
            <li>Have the conversation once, this week — make it a plan, not a reaction.</li>
          </ol>
          <p className="text-white/80 mt-4 text-lg">Total time: under 10 minutes at the dinner table.</p>
        </section>

        <div className="prose prose-invert prose-xl max-w-none">
          <h2>Final takeaway</h2>
          <p>
            Sharon isn’t naïve. She’s a loving mother who got hit with a script engineered to bypass her brain’s last line of defense — verification. We’re not blaming her. We’re studying the playbook so it doesn’t work on the next family.
          </p>
          <p>
            The scammers are already using AI. Now you know how.
          </p>
        </div>

        {/* ScamBomb Move CTA */}
        <div className="my-10 rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-6 sm:p-8 not-prose">
          <div className="text-sm font-bold tracking-widest text-yellow-300/80 uppercase mb-2">ScamBomb Move</div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Set up your family safe word system today</h3>
          <p className="text-white/80 text-lg sm:text-xl mb-6 leading-relaxed">
            Our free <strong>AI Voice Cloning Survival Guide</strong> walks you through the family safe word setup, a 60-second verification script, and exactly what to do if you get one of these calls.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/resources/ai-voice-cloning-survival-guide"
              className="inline-block rounded-xl bg-yellow-300 text-[#0B1324] font-bold text-lg px-6 py-4 hover:bg-yellow-200 transition-colors"
            >
              Get the Free AI Voice Cloning Survival Guide →
            </a>
            <a
              href="https://app.scambomb.com"
              className="inline-block rounded-xl border border-white/20 px-6 py-4 text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Try ScamBomb Free
            </a>
          </div>
        </div>

        <p className="text-white/50 text-sm italic">
          Source: This article is based on original reporting by Fox 13 Tampa Bay (Aaron Mesmer), from an interview with Sharon Brightwell of Dover, Florida. Hillsborough County detectives are investigating the case.
        </p>

        <footer className="mt-12 pt-8 border-t border-white/10">
          <Link href="/blog" className="text-yellow-300 hover:text-yellow-400 underline underline-offset-4 text-lg">
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  )
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className={`text-2xl sm:text-3xl font-extrabold ${color}`}>{value}</div>
      <div className="text-sm uppercase tracking-wider text-white/60 mt-2">{label}</div>
    </div>
  )
}

function FlagCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="text-sm font-bold tracking-widest text-yellow-300/80 uppercase mb-3">{num}</div>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-snug">{title}</h3>
      <p className="text-lg text-white/85 leading-relaxed">{children}</p>
    </div>
  )
}
