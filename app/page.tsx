'use client';

import { useState } from 'react';
import { PricingSection } from '../components/PricingSection';

export default function ScamBombLanding() {
  const base = "bg-[#0B1324] text-white"; // Navy default
  const brandYellow = "#F5C84C";
  const brandBorder = "border-white/20";
  const appUrl = `https://app.scambomb.com/?safe_source=true&SBID=${crypto.randomUUID()}`;
  const [isHowToOpen, setIsHowToOpen] = useState(false);

  return (
    <div className={`${base} antialiased`}>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl" style={{ background: `${brandYellow}33` }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-[2.35rem] leading-[1.1] sm:text-5xl sm:leading-tight font-extrabold">
                Modern Scams Fool<br />
                <span style={{ color: brandYellow }}>Smart People</span> Every Day.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
                ScamBomb helps you know what&apos;s real, what&apos;s dangerous, and what to do next—while protecting your household with one membership for you and up to four additional family members, plus ongoing education, practical resources, and live support.
              </p>
              <div className="mt-7 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
                  <div>
                    <a id="cta" href={appUrl} className="rounded-2xl px-6 py-4 text-lg font-semibold inline-block text-center w-full hover-lift btn-press" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
                      Check a Suspicious Message
                    </a>
                  </div>

                  <div>
                    <a href="#platform" className="rounded-2xl px-6 py-4 border-2 text-lg font-semibold inline-block text-center w-full hover:bg-white/10 hover-lift btn-press" style={{ borderColor: brandYellow, color: brandYellow }}>
                      Explore Family Protection
                    </a>
                  </div>
                </div>
              </div>
              {/* <ul className="mt-6 space-y-2 text-sm text-white/75 max-w-xs mx-auto">
                <li className="flex items-start gap-3"><span className="mt-0.5 flex-shrink-0 w-4 h-4"><Check /></span> No ads, no data selling</li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex-shrink-0 w-4 h-4"><Check /></span> Works on phone or desktop</li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex-shrink-0 w-4 h-4"><Check /></span> Clear, step-by-step guidance</li>
                <li className="flex items-start gap-3"><span className="mt-0.5 flex-shrink-0 w-4 h-4"><Check /></span> Cancel anytime</li>
              </ul> */}
            </div>
            <div>
              <div className={`rounded-2xl border ${brandBorder} bg-white/5 p-4 sm:p-6`}>
                <div className="text-xl font-semibold text-white/90 mb-3">Example message</div>
                <div className="rounded-xl bg-white text-black p-4 sm:p-5 shadow-lg">
                  <p className="text-lg leading-relaxed sm:text-xl">"URGENT! Your bank account has been locked. Click this link immediately to avoid permanent closure."</p>
                </div>
                <div className="mt-5 text-xl font-semibold text-white/90">ScamBomb analysis</div>
                <div className="mt-1 rounded-xl border border-black/10 bg-black/20 p-4">
                  <ul className="list-disc ml-5 space-y-4 text-lg leading-relaxed text-white/95">
                    <li>Urgency tactic detected ("immediately").</li>
                    <li>Suspicious link (domain doesn't match official site).</li>
                    <li>Requests action outside official app/website.</li>
                  </ul>
                  <div className="mt-5 rounded-lg bg-[#0B1324] p-5 text-lg leading-relaxed" style={{ border: `1px dashed ${brandYellow}` }}>
                    <p>
                      <strong style={{ color: brandYellow }}>Do this:</strong> Ignore the link and open your bank's official app. If worried, call the number on the back of your card.
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-base text-white/75">Plain-English results in seconds</span>
                  <a href={appUrl} className="inline-block rounded-xl px-5 py-3 text-base font-semibold" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
                    Check a message →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section aria-label="Trust signals" className="border-y border-black/20" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-3 gap-4 text-center">
          <TrustItem title="Privacy-first" text="We don't sell info to third parties. Ever." />
          <TrustItem title="Human-friendly" text="No jargon. Clear next steps." />
          <TrustItem title="Always improving" text="New scam patterns added monthly." />
        </div>
      </section>

      {/* Which conversation? hook */}
      <section className="border-y border-[#F5C84C]/30 bg-[#FDF8E8] text-[#0B1324]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">Which conversation?</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Which conversation would you rather have with someone you love?</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-[#0B1324]">
              <div className="rounded-2xl border border-[#0B1324]/10 bg-white p-6">
                <p className="font-semibold text-[#0B1324]">“This seems strange—can we check it together?”</p>
              </div>
              <div className="rounded-2xl border border-[#0B1324]/10 bg-white p-6">
                <p className="font-semibold text-[#0B1324]">“I sent the money. What do I do now?”</p>
              </div>
            </div>
          </div>
          <p className="mt-10 sm:mt-12 text-center text-2xl sm:text-3xl font-black text-[#0B1324]">
            ScamBomb helps families have the first conversation.
          </p>
        </div>
      </section>

      {/* More than a scam checker */}
      <section id="platform" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <HeaderEyebrow>More than a scam checker</HeaderEyebrow>
        <h2 className="text-4xl sm:text-4xl font-bold">A Complete <span style={{ color: brandYellow }}>Family Protection</span> Platform</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
          ScamBomb combines instant scam checking with ongoing education, monthly scam updates, printable family resources, live workshops, and practical senior technology guides. It gives older adults and the people who care about them a trusted place to turn before a suspicious situation becomes an expensive mistake.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-6 text-[#0B1324]">
            <h3 className="text-lg font-black uppercase">Check Suspicious Messages</h3>
            <p className="mt-3 leading-relaxed opacity-90">Paste or upload suspicious texts, emails, links, and screenshots and receive a calm, plain-English explanation of the warning signs and what to do next.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-6 text-[#0B1324]">
            <h3 className="text-lg font-black uppercase">Stay Ahead of New Scams</h3>
            <p className="mt-3 leading-relaxed opacity-90">Receive monthly updates covering emerging fraud tactics, AI-enabled scams, and simple protection tips that are easy to remember.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-6 text-[#0B1324]">
            <h3 className="text-lg font-black uppercase">Protect the Whole Family</h3>
            <p className="mt-3 leading-relaxed opacity-90">Use printable worksheets, checklists, and conversation guides to create shared family safety habits before a crisis occurs.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-6 text-[#0B1324]">
            <h3 className="text-lg font-black uppercase">Learn Live</h3>
            <p className="mt-3 leading-relaxed opacity-90">Attend monthly Zoom workshops featuring current scam examples, practical instruction, and live Q&A.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-6 text-[#0B1324]">
            <h3 className="text-lg font-black uppercase">Get Help With Everyday Technology</h3>
            <p className="mt-3 leading-relaxed opacity-90">Access step-by-step guides that help older adults work through common technology frustrations using printable, follow-along instructions.</p>
          </div>
          <div className="rounded-2xl border-2 border-[#F5C84C] bg-[#0B1324] p-6 text-center flex flex-col justify-center">
            <h3 className="text-lg font-black uppercase text-[#F5C84C]">Protect the whole family</h3>
            <p className="mt-4 text-4xl font-black text-white">$9.99</p>
            <p className="mt-2 text-sm text-white/70">per month</p>
          </div>
        </div>
      </section>

      {/* What members receive */}
      <section id="membership" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <HeaderEyebrow>Ongoing family protection</HeaderEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold">Useful help every month<span style={{ color: brandYellow }}>—not just when a suspicious message arrives</span></h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-black uppercase text-[#F5C84C]">Monthly Scam Update</h3>
              <p className="mt-3 leading-relaxed text-white/80">A concise email covering current scams, new fraud tactics, and easy-to-remember protection tips.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-black uppercase text-[#F5C84C]">Printable Family Worksheet</h3>
              <p className="mt-3 leading-relaxed text-white/80">A downloadable resource families can discuss, complete, print, and share.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-black uppercase text-[#F5C84C]">Live Monthly Workshop</h3>
              <p className="mt-3 leading-relaxed text-white/80">A practical Zoom presentation with current examples, plain-English instruction, and live Q&A.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-black uppercase text-[#F5C84C]">Anytime Scam Checking</h3>
              <p className="mt-3 leading-relaxed text-white/80">Members can analyze suspicious texts, emails, links, and screenshots whenever something feels wrong.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-black uppercase text-[#F5C84C]">Family Protection Library</h3>
              <p className="mt-3 leading-relaxed text-white/80">Ongoing access to guides, checklists, conversation tools, and practical next steps.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-6 text-[#0B1324] text-center flex flex-col justify-center">
              <h3 className="text-lg font-black uppercase">Seniors get a discount</h3>
              <p className="mt-4 text-4xl font-black">$4.99</p>
              <p className="mt-2 text-sm opacity-80">per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to use the app */}
      <section id="how" aria-label="How to use ScamBomb app" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className={`rounded-2xl border ${brandBorder} bg-white/5 p-4 sm:p-6`}>
          <button
            type="button"
            onClick={() => setIsHowToOpen((prev) => !prev)}
            aria-expanded={isHowToOpen}
            aria-controls="how-to-app-panel"
            className="w-full text-left flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-[#F5C84C] text-[#0B1324] text-lg font-extrabold flex items-center justify-center">?</span>
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold tracking-[0.08em] uppercase">Get a Second Opinion in Seconds</h2>
                <span className="text-sm text-white/50 md:hidden">(tap to open)</span>
                <span className="text-sm text-white/50 hidden md:inline">(click to expand)</span>
              </div>
            </div>
            <span className={`text-yellow-300 text-2xl transition-transform duration-300 ${isHowToOpen ? 'rotate-180' : ''}`} aria-hidden>
              ⌄
            </span>
          </button>

          <div
            id="how-to-app-panel"
            className={`grid overflow-hidden transition-all duration-300 ease-out ${isHowToOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="min-h-0">
              <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch">
                <QuickStep
                  n={1}
                  title="Copy or snap"
                  text="Copy a suspicious text, SMS, or email — or just take/upload a picture."
                />
                <StepArrow />
                <QuickStep
                  n={2}
                  title="Paste or upload"
                  text="Paste it into the message area, or upload an image to extract the text."
                />
                <StepArrow />
                <QuickStep
                  n={3}
                  title="Analyze"
                  text="Run the check. It may trigger an EARLY ALERT if the message looks especially suspicious."
                  highlight
                />
              </div>

              <div className="mt-3">
                <QuickResultStep
                  n={4}
                  title="Get notified in seconds"
                  text="See fast, plain-English guidance on whether the message is a scam."
                />
              </div>

              <div className="mt-5 flex justify-center">
                <a
                  href="https://youtube.com/shorts/9qaoWCxAu2s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 px-5 py-3 text-base font-semibold hover:bg-white/10 hover-lift btn-press"
                  style={{ borderColor: brandYellow, color: brandYellow }}
                  aria-label="See ScamBomb in action on YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
                  </svg>
                  See it in action
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-16" style={{ backgroundImage: "url('/SB-BG.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        {/* Heavy Overlay */}
        <div className="absolute inset-0 bg-[#0B1324] opacity-80 pointer-events-none z-0"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HeaderEyebrow>Four ways to stay protected</HeaderEyebrow>
          <h2 className="text-4xl sm:text-4xl font-bold">Scam Awareness for the <span style={{ color: brandYellow }}>Whole Family</span></h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="hover-lift"><Card title="Check suspicious messages" icon={<Check />}>Paste a text, email, website, or message and receive a calm, plain-English explanation.</Card></div>
            <div className="hover-lift"><Card title="Learn about emerging scams" icon={<Check />}>Stay informed about AI voice cloning, phishing, fake tech support, investment scams, romance scams, and other evolving threats.</Card></div>
            <div className="hover-lift"><Card title="Build shared family-protection habits" icon={<Check />}>Download printable guides, checklists, and conversation resources designed for seniors and the people who care about them.</Card></div>
            <div className="hover-lift"><Card title="Receive ongoing education and live support" icon={<Check />}>Join monthly workshops, get timely scam updates, and access practical guidance as scams evolve.</Card></div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className={`rounded-2xl border ${brandBorder} bg-white/5 p-6 lg:p-10 grid lg:grid-cols-2 gap-8 items-center`}>
          <div>
            <h3 className="text-3xl font-bold">If You Get a <span style={{ color: brandYellow }}>Suspicious Message</span></h3>
            <p className="mt-3 text-lg leading-relaxed text-white/85">Get a calm explanation in seconds, then explore the guidance and resources that help your family stay protected.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={appUrl} className="rounded-2xl px-6 py-4 text-lg font-semibold hover-lift btn-press" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>Check a Suspicious Message</a>
              <a href="#pricing" className="rounded-2xl px-6 py-4 border-2 text-lg font-semibold hover:bg-white/10 hover-lift btn-press" style={{ borderColor: brandYellow, color: brandYellow }}>
                Explore Family Protection
              </a>
            </div>
          </div>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3"><Check /> No email needed for demo</li>
            <li className="flex items-start gap-3"><Check /> Works with screenshots</li>
            <li className="flex items-start gap-3"><Check /> Share results with family in one click</li>
          </ul>
        </div>
      </section>

      {/* Authority */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-6 lg:p-10">
          <HeaderEyebrow>Built on real scam investigations</HeaderEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold">Knowledge You Can Use <span style={{ color: brandYellow }}>When It Matters</span></h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85">
            Every article, workshop, guide, and feature is built around scams that are actually targeting people today—not hypothetical examples. We explain what happened, why it worked, and how to protect yourself next time.
          </p>
        </div>
      </section>

      {/* Community partnerships */}
      <section id="partnerships" className="relative py-16" style={{ backgroundImage: "url('/SB-BG-2.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 bg-[#0B1324] opacity-80 pointer-events-none z-0"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <HeaderEyebrow>Community partnerships</HeaderEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold">Bringing <span style={{ color: brandYellow }}>Scam Awareness</span> to Communities</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            ScamBomb partners with credit unions, libraries, retirement communities, senior centers, employers, and other community organizations to deliver workshops and educational programs that help protect the people they serve.
          </p>
          <a href="/contact" className="mt-7 inline-block rounded-2xl px-6 py-4 text-lg font-semibold hover-lift btn-press" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
            Learn About Community Partnerships
          </a>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials (hidden) */}
      {/* <section aria-label="Testimonials" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <HeaderEyebrow>What people say</HeaderEyebrow>
        <div className="grid md:grid-cols-2 gap-6">
          <Quote text="ScamBomb helped my mom avoid a fake Medicare call. The instructions were crystal clear." author="— Dana, caregiver" />
          <Quote text="I finally feel confident checking messages by myself. It's like having a tech-savvy friend on call." author="— Michael, 72" />
        </div>
      </section> */}

      {/* Blog preview */}
      <section id="blog" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <HeaderEyebrow>From the blog</HeaderEyebrow>

        {/* Featured latest post */}
        <div className="hover-lift mb-6">
          <a href="/blog/is-this-a-scam" className="block rounded-2xl border border-yellow-300/30 bg-yellow-300/5 p-8 hover:bg-yellow-300/10 transition-colors group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="text-xs font-bold tracking-widest text-yellow-300/70 mb-3">GUIDE</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                  Is This a Scam? How to Instantly Spot Fake Texts, Emails &amp; Calls
                </h3>
                <p className="text-white/70 mb-4 max-w-2xl">
                  Use the 10-second check to spot the five red flags in suspicious messages, emails, and calls—and learn what to do next.
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <span className="text-white/50">August 4, 2026</span>
                  <span className="flex items-center gap-2 text-yellow-300 font-semibold">
                    Read the guide <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="hover-lift"><PostCard tag="SCAM TRIAGE" title="Scam Triage File #003: Your Computer Is Infected" slug="scam-triage-file-003-your-computer-is-infected" excerpt="A real-world scareware cleanup: fake virus warnings, a hijacked browser permission, and the 8-step fix." /></div>
          <div className="hover-lift"><PostCard tag="SCAM TRIAGE" title="Scam Triage File #002: She Heard Her Daughter Crying for Help" slug="she-heard-her-daughter-crying-ai-voice-clone-scam" excerpt="A Florida woman lost $15,000 to an AI voice clone scam — and every red flag was catchable." /></div>
          <div className="hover-lift"><PostCard tag="SCAM TRIAGE" title="Scam Triage File #001: The Android That “Had 3 Viruses” — But Didn’t" slug="scam-triage-file-001-android-had-3-viruses-but-didnt" excerpt="Real incident: fake Android virus popups, Safe Mode diagnosis, and a 15-minute recovery." /></div>
        </div>
        <div className="mt-6">
          <a href="/blog" className="underline decoration-white/40 underline-offset-4 hover:decoration-white">Read all posts</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16" style={{ backgroundImage: "url('/SB-BG-2.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        {/* Heavy Overlay */}
        <div className="absolute inset-0 bg-[#0B1324] opacity-70 pointer-events-none z-0"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          <dl className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0B1324] mt-8">
            {[
              { q: "Do you sell my data?", a: "Short answer: Never.\n\nLong answer: We collect only the bare minimum amount of information to allow this service to function. Any potential scam message that is uploaded for testing, text or image, is NOT stored or logged. It is not used for training purposes. It is certainly not sold. You can rest assured anything you share with us ... is kept between us." },
              { q: "Does it work on my phone?", a: "Yes, you may use your mobile device to paste messages or even upload a screenshot of a message." },
              { q: "Can I cancel anytime?", a: "Absolutely. Subscriptions are month-to-month with a \"No strings attached, 'cancel any time for any reason'\" guarantee." },
              { q: "Is ScamBomb membership more than app access?", a: "Yes. The scam-checking tool is only one part of ScamBomb membership. Paid members also receive monthly scam updates, printable family worksheets, live Zoom workshops, family-protection guides, emerging-scam education, and senior technology guides." },
              { q: "What happens during the monthly workshop?", a: "Each live Zoom workshop covers current scams, warning signs, practical protection steps, and real-world examples. Members can also ask questions during the live Q&A." },
              { q: "Are the printable resources included?", a: "Yes. Paid members receive downloadable and printable worksheets, checklists, conversation guides, and family-protection resources as part of their membership." },
              { q: "What is included with Senior Protection?", a: "Senior Protection includes the complete paid ScamBomb membership at a special locked-in price for adults age 60 and older. It is not a reduced or limited version of the program." },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <dt className="text-xl font-semibold">{item.q}</dt>
                <dd className="mt-3 text-lg leading-relaxed text-white/85" dangerouslySetInnerHTML={{ __html: item.a.split('\n\n').join('<br/><br/>') }}></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Help your family ask before they act.</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">Give the people you love somewhere trustworthy to turn, practical protection they can use every month, and a calm second opinion when something does not feel right.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.scambomb.com/api/auth/redirect?plan=standard&billing=monthly" className="rounded-2xl px-8 py-4 text-lg font-semibold inline-block text-center hover-lift btn-press" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
              Protect My Family
            </a>
            <a href={appUrl} className="rounded-2xl px-8 py-4 border-2 text-lg font-semibold inline-block text-center hover:bg-white/10 hover-lift btn-press" style={{ borderColor: brandYellow, color: brandYellow }}>
              Try ScamBomb Free
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}

// ---- UI Helpers ----
function HeaderEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base sm:text-sm font-semibold tracking-wider uppercase text-white/70 mb-2">{children}</p>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white/10 border border-white/10 text-base font-semibold">{n}</div>
        <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
      </div>
      <p className="mt-3 text-base leading-relaxed text-white/85">{text}</p>
    </div>
  );
}

function QuickStep({ n, title, text, highlight = false }: { n: number; title: string; text: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 sm:p-5 h-full ${highlight ? 'border-yellow-300/40 bg-yellow-300/10' : 'border-white/10 bg-white/5'}`}>
      <div className="flex items-center gap-3">
        <div className={`h-9 w-9 rounded-full flex items-center justify-center font-bold ${highlight ? 'bg-yellow-300 text-[#0B1324]' : 'bg-white/10 border border-white/10 text-white'}`}>
          {n}
        </div>
        <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
      </div>
      <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">{text}</p>
    </div>
  );
}

function QuickResultStep({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-yellow-300/40 bg-gradient-to-r from-yellow-300/15 to-white/5 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold bg-[#F5C84C] text-[#0B1324]">
            {n}
          </div>
          <div>
            <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
            <p className="mt-1 text-base sm:text-lg text-white/85">{text}</p>
          </div>
        </div>
        <div className="text-base font-semibold uppercase tracking-[0.14em] text-yellow-300">
          Scam verdict fast
        </div>
      </div>
    </div>
  );
}

function StepArrow() {
  return (
    <div className="hidden md:flex items-center justify-center text-yellow-300/80 text-2xl font-bold" aria-hidden>
      →
    </div>
  );
}

function Card({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-5 text-[#0B1324]">
      <div className="flex items-center gap-2">
        <span aria-hidden>{icon}</span>
        <h3 className="font-bold uppercase text-lg sm:text-xl">{title}</h3>
      </div>
      <p className="mt-2 text-base leading-relaxed opacity-90">{children}</p>
    </div>
  );
}

function PostCard({ tag, title, slug, excerpt }: { tag: string; title: string; slug: string; excerpt?: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold tracking-widest text-white/70">{tag}</div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-white/85">{excerpt || "Short, friendly explanations you can share with family or seniors you support."}</p>
      <a href={`/blog/${slug}`} className="mt-4 inline-block rounded-lg border border-white/20 px-4 py-3 text-base hover:bg-white/10">Read</a>
    </article>
  );
}

function Quote({ text, author }: { text: string; author: string }) {
  return (
    <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-white/90">"{text}"</p>
      <footer className="mt-3 text-white/70">{author}</footer>
    </blockquote>
  );
}

function TrustItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="uppercase font-extrabold text-2xl sm:text-[1.75rem] leading-tight">{title}</div>
      <div className="mt-1 text-base leading-relaxed text-black/80">{text}</div>
    </div>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const imgSize = size === "sm" ? "h-10 w-32" : "h-12 w-40";
  return (
    <div className="flex items-center gap-2" role="img" aria-label="ScamBomb logo">
      <img
        src="/logo.png"
        alt="ScamBomb Logo"
        className={`${imgSize} object-contain`}
      />
    </div>
  );
}
