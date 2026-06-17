import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ScamBomb | Why We Built It',
  description: 'ScamBomb was built after my father-in-law was scammed twice. I couldn\'t always be there to check every suspicious message — so I built the tool I wished he already had.',
};

export default function AboutPage() {
  const appUrl = `https://app.scambomb.com/?safe_source=true&SBID=${crypto.randomUUID()}`;

  return (
    <div className="bg-[#0B1324] text-white antialiased">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            About <span className="text-[#F5C84C]">ScamBomb</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Built by someone who got tired of watching scammers win.
          </p>
        </section>

        {/* Why I Built ScamBomb */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#F5C84C]">
            Why I Built ScamBomb
          </h2>
          
          <div className="space-y-6 text-lg text-white/90 leading-relaxed">
            <p className="text-2xl font-semibold text-white">
              It started with my father-in-law.
            </p>
            
            <p>
              He'd been scammed twice. Not because he's careless, and not because he's not smart — because the people doing this for a living have gotten very, very good at it. Urgent bank texts. A "grandson" who needed money wired fast. The kind of message that's designed to make you act before you think.
            </p>
            
            <p>
              After the second time, I realized something: I couldn't always be there. I couldn't be the one he texted a screenshot to at 9pm asking "is this real?" — not every time, not forever.
            </p>
            
            <p>
              So I built the tool I wished he already had.
            </p>
          </div>

          <div className="mt-10 bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              I'm George Featherstone. I've spent the last 20 years as a web developer and AI systems engineer — building, securing, and troubleshooting digital systems for a living. I know how scam pages are built because I know how real pages are built. I know the tricks because I've spent two decades on the other side of them, making sure legitimate businesses don't accidentally look like the thing ScamBomb was built to catch.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              ScamBomb is that knowledge, pointed in one direction: giving people like my father-in-law a second opinion they can get in seconds, without having to wait for me — or anyone — to be available.
            </p>
          </div>
        </section>

        {/* What ScamBomb Actually Does */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#F5C84C]">
            What ScamBomb Actually Does
          </h2>
          
          <div className="bg-[#F5C84C] rounded-2xl p-8 text-[#0B1324]">
            <p className="text-lg leading-relaxed mb-6">
              Paste a suspicious text, email, or screenshot. ScamBomb checks it against the red flags scammers actually use — urgency, spoofed links, impersonation — and tells you in plain English what's wrong with it and exactly what to do next.
            </p>
            <p className="text-lg leading-relaxed font-semibold">
              It doesn't just say "safe" or "scam" and leave you to trust a verdict from a website you've never heard of. It shows you why — the same way I'd explain it if I were standing next to you.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#F5C84C]">
            Why It's Priced the Way It Is
          </h2>
          
          <div className="space-y-6 text-lg text-white/90 leading-relaxed">
            <p>
              Standard is $9/month or $99/year. Seniors 60+ are locked in at $5/month or $49/year — for good. Not an introductory rate that creeps up later.
            </p>
            
            <p>
              I didn't build this to compete with $40/month identity-theft monitoring services packed with features most people never touch. I built it to be something my father-in-law would actually use, and actually be able to afford, for as long as he needs it.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-extrabold text-[#F5C84C] mb-2">$9/mo</div>
              <div className="text-white/70 mb-4">or $99/year</div>
              <div className="text-white/90">Standard Plan</div>
            </div>
            <div className="bg-[#F5C84C]/10 rounded-2xl p-6 border border-[#F5C84C]/30 text-center">
              <div className="text-3xl font-extrabold text-[#F5C84C] mb-2">$5/mo</div>
              <div className="text-white/70 mb-4">or $49/year</div>
              <div className="text-white/90">Seniors 60+ <span className="text-[#F5C84C] font-semibold">(Locked In)</span></div>
            </div>
          </div>
        </section>

        {/* Privacy Commitment */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#F5C84C]">
            My Commitment to You
          </h2>
          
          <div className="space-y-6 text-lg text-white/90 leading-relaxed">
            <p>
              Nothing you paste into ScamBomb is stored, logged, or used to train anything. It's not sold. It's gone the moment you close the tab. If you're pasting a text from your bank or a message from your doctor, that privacy isn't a feature — it's the baseline.
            </p>
            
            <p>
              Cancel anytime, in one click, no phone call required. I'd rather earn your subscription every month than trap you in one.
            </p>
          </div>
        </section>

        {/* For Caregivers */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#F5C84C]">
            If You're Reading This for Someone Else
          </h2>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Maybe you're not the one getting the scam texts — maybe it's your mom, your dad, your grandfather. If you're the "what does this mean?" contact in your family, ScamBomb is built so the people you love don't have to wait for you to be free. Share it with them. That's exactly what it's for.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90">
                <span>👨‍👩‍👧</span> Parents
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90">
                <span>👴</span> Grandparents
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90">
                <span>💝</span> Family
              </span>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center">
          <div className="text-2xl font-bold text-[#F5C84C] mb-6">— George</div>
          
          <div className="bg-[#F5C84C] rounded-2xl p-8 text-[#0B1324] max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-6">
              Ready to check a suspicious message?
            </p>
            <a 
              href={appUrl}
              className="inline-block rounded-xl px-8 py-4 text-lg font-bold bg-[#0B1324] text-[#F5C84C] hover:bg-[#0B1324]/90 transition-colors"
            >
              Try ScamBomb Free →
            </a>
            <p className="text-sm mt-4 text-[#0B1324]/80">
              No card required. No email needed. Instant access.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}