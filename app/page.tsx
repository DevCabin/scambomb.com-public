'use client';

import { useEffect } from 'react';

export default function ScamBombLanding() {
  const base = "bg-[#0B1324] text-white"; // Navy default
  const brandYellow = "#F5C84C";
  const brandBorder = "border-white/20";
  const appUrl = `https://app.scambomb.com/?safe_source=true&SBID=${crypto.randomUUID()}`;

  useEffect(() => {
    const inputWords = ['emails', 'texts', 'spam'];

    let inputIndex = 0;

    const inputElement = document.getElementById('changing-inputs');

    if (inputElement) {
      // Set initial content
      inputElement.textContent = inputWords[0];

      // Cycle through inputs every 3 seconds (slower)
      const inputInterval = setInterval(() => {
        // First fade out current word
        inputElement.style.transition = 'opacity 0.5s ease-out';
        inputElement.style.opacity = '0';

        setTimeout(() => {
          inputIndex = (inputIndex + 1) % inputWords.length;
          inputElement.textContent = inputWords[inputIndex];
          inputElement.style.opacity = '1';
        }, 500);
      }, 2500);

      return () => {
        clearInterval(inputInterval);
      };
    }
  }, []);

  return (
    <div className={`${base} antialiased`}>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-3xl" style={{ background: `${brandYellow}33` }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight" style={{ lineHeight: '1.2' }}>
                Give us your<br/>
                <span style={{ color: brandYellow }}>Suspicious:</span> <span id="changing-inputs" style={{ color: 'white' }}></span><br/>
                <span style={{ marginTop: '1.5rem', display: 'block' }}>and we'll tell<br/>
                you if they're<br/>
                <span style={{ color: brandYellow, fontWeight: 'bold' }}>safe</span> <span style={{ color: 'white' }}>or</span> <span style={{ color: brandYellow, fontWeight: 'bold' }}>dangerous</span></span>
              </h1>
              <p className="mt-4 max-w-xl text-white/80">
                Paste any suspicious text, email, or SMS. Get instant AI analysis, plain-English explanations, and step-by-step next actions. Start protecting yourself now.
              </p>
              <div className="mt-6 text-center">
                <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                  <div>
                    <a id="cta" href="#pricing" className="rounded-2xl px-6 py-3 font-semibold inline-block text-center w-full" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
                      Unlimited Access
                    </a>
                    <p className="text-sm text-white/80 mt-2">Only $4.99!</p>
                  </div>

                  <div>
                    <a href={appUrl} className="rounded-2xl px-6 py-3 border-2 font-semibold inline-block text-center w-full hover:bg-white/10" style={{ borderColor: brandYellow, color: brandYellow }}>
                      Try Free!
                    </a>
                    <p className="text-sm text-white/80 mt-2">Instant access, no sign up</p>
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
                <div className="text-sm text-white/80 mb-2">Example message</div>
                <div className="rounded-xl bg-white text-black p-4 sm:p-5 shadow-lg">
                  <p className="text-sm sm:text-base">"URGENT! Your bank account has been locked. Click this link immediately to avoid permanent closure."</p>
                </div>
                <div className="mt-4 text-sm text-white/80">ScamBomb analysis</div>
                <div className="mt-1 rounded-xl border border-black/10 bg-black/20 p-4">
                  <ul className="list-disc ml-5 space-y-2 text-white/90">
                    <li>Urgency tactic detected ("immediately").</li>
                    <li>Suspicious link (domain doesn't match official site).</li>
                    <li>Requests action outside official app/website.</li>
                  </ul>
                  <div className="mt-3 rounded-lg bg-[#0B1324] p-3" style={{ border: `1px dashed ${brandYellow}` }}>
                    <p>
                      <strong style={{ color: brandYellow }}>Do this:</strong> Ignore the link and open your bank's official app. If worried, call the number on the back of your card.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-white/70">Plain-English results in seconds</span>
                  <a href={appUrl} className="inline-block rounded-xl px-4 py-2 font-semibold" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
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

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <HeaderEyebrow>How it works</HeaderEyebrow>
        <h2 className="text-3xl sm:text-4xl font-bold">From confusion to confident in 3 steps</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Step n={1} title="Paste a message" text="Copy any email, text, or social DM into ScamBomb." />
          <Step n={2} title="We flag risks" text="We detect urgency, spoofed links, fake invoices, and more." />
          <Step n={3} title="Get next steps" text="We tell you exactly what to do—simply and safely." />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-16" style={{ backgroundImage: "url('/wide_bomb_banner_3_min.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        {/* Heavy Overlay */}
        <div className="absolute inset-0 bg-[#0B1324] opacity-70 pointer-events-none z-0"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HeaderEyebrow>Features</HeaderEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold">Built for everyone (55+ included!)</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Plain-English explanations" icon={<Check />}>No tech-speak. We explain what's risky and why, in friendly language.</Card>
            <Card title="Link & sender checks" icon={<Check />}>Spot spoofed addresses, mismatched domains, and impersonation cues.</Card>
            <Card title="Copy-paste simple" icon={<Check />}>Works on any device—no install required. Just paste and check.</Card>
            <Card title="Privacy-first" icon={<Check />}>We don't sell data. Ever. Turn on anonymous mode in one click.</Card>
            <Card title="Guided next steps" icon={<Check />}>Unsure what to do? We give you a safe path with scripts you can use.</Card>
            <Card title="Learning hub" icon={<Check />}>Weekly blog + short videos to stay ahead of new scams.</Card>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className={`rounded-2xl border ${brandBorder} bg-white/5 p-6 lg:p-10 grid lg:grid-cols-2 gap-8 items-center`}>
          <div>
            <h3 className="text-2xl font-bold">Try the demo — no signup required!</h3>
            <p className="mt-2 text-white/80">Paste a suspicious message and see how ScamBomb explains it in seconds.</p>
            <div className="mt-6 flex gap-3">
              <a href="#pricing" className="rounded-2xl px-5 py-3 font-semibold" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>Unlock full protection</a>
              <a href={appUrl} className="rounded-2xl px-6 py-3 border-2 font-semibold hover:bg-white/10" style={{ borderColor: brandYellow, color: brandYellow }}>
                Try Free!
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

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <HeaderEyebrow>Pricing</HeaderEyebrow>
        <h2 className="text-3xl sm:text-4xl font-bold">Simple, affordable protection</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <PriceCard highlight title="Free Plan" price="Free" note="5 scans per month" cta="Get started" color={brandYellow} href={appUrl} />
          <PriceCard title="Pro Plan" price="$4.99/mo" note="Unlimited scans" cta="Upgrade now" color={brandYellow} href="https://buy.stripe.com/9B6dR8adkavl1BsdneejK00" />
          <PriceCard title="Annual Plan" price="$49.99/year" note="Save 17% over Pro Plan!" cta="Save with annual" color={brandYellow} href="https://buy.stripe.com/dRmcN41GOfPFdka82UejK01" />
        </div>
        <p className="mt-4 text-sm text-white/70">No strings attached, "cancel any time for any reason" guarantee.</p>
      </section>

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
        <div className="grid md:grid-cols-3 gap-6">
          <PostCard tag="GUIDE" title="How to spot fake bank texts in 30 seconds" slug="how-to-spot-fake-bank-texts-in-30-seconds" excerpt="Spot common red flags in banking texts to protect your money." />
          <PostCard tag="ALERT" title="New USPS delivery scam: what to do" slug="new-usps-delivery-scam-what-to-do" excerpt="Stay informed on the latest USPS scams and how to respond safely." />
          <PostCard tag="HOW-TO" title="Three questions to ask before you click" slug="three-questions-to-ask-before-you-click" excerpt="Learn practical questions to evaluate suspicious links before clicking." />
        </div>
        <div className="mt-6">
          <a href="/blog" className="underline decoration-white/40 underline-offset-4 hover:decoration-white">Read all posts</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16" style={{ backgroundImage: "url('/wide_bomb_banner_3_min.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        {/* Heavy Overlay */}
        <div className="absolute inset-0 bg-[#0B1324] opacity-70 pointer-events-none z-0"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          <dl className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0B1324] mt-8">
            {[
              { q: "Do you sell my data?", a: "Short answer: Never.\n\nLong answer: We collect only the bare minimum amount of information to allow this service to function. Any potential scam message that is uploaded for testing, text or image, is NOT stored or logged. It is not used for training purposes. It is certainly not sold. You can rest assured anything you share with us ... is kept between us." },
              { q: "Does it work on my phone?", a: "Yes, you may use your mobile device to paste messages or even upload a screenshot of a message." },
              { q: "Can I cancel anytime?", a: "Absolutely. Subscriptions are month-to-month with a \"No strings attached, 'cancel any time for any reason'\" guarantee." },
            ].map((item, i) => (
              <div key={i} className="p-5">
                <dt className="font-semibold">{item.q}</dt>
                <dd className="mt-2 text-white/80" dangerouslySetInnerHTML={{ __html: item.a.split('\n\n').join('<br/><br/>') }}></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


    </div>
  );
}

// ---- UI Helpers ----
function HeaderEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-wider uppercase text-white/60 mb-2">{children}</p>
  );
}

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full flex items-center justify-center bg-white/10 border border-white/10">{n}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-white/80">{text}</p>
    </div>
  );
}

function Card({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#F5C84C] p-5 text-[#0B1324]">
      <div className="flex items-center gap-2">
        <span aria-hidden>{icon}</span>
        <h3 className="font-bold uppercase text-lg">{title}</h3>
      </div>
      <p className="mt-2 opacity-80">{children}</p>
    </div>
  );
}

function PriceCard({ title, price, note, cta, color, highlight = false, href }: { title: string; price: string; note: string; cta: string; color: string; highlight?: boolean; href?: string }) {
  const isFree = price === "Free";
  return (
    <div className={`rounded-2xl p-6 border ${highlight ? "border-yellow-300 bg-white/10" : "border-white/10 bg-white/5"}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 text-3xl font-extrabold">{price}</div>
      <p className="mt-1 text-white/70">{note}</p>
      <a href={href || "https://app.scambomb.com"} className="mt-5 w-full rounded-xl py-3 font-semibold inline-block text-center" style={{ backgroundColor: color, color: "#0B1324" }}>{cta}</a>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {isFree ? (
          <>
            <li className="flex items-start gap-2"><Check /> 5 scans per month</li>
            <li className="flex items-start gap-2"><Check /> Plain-English results</li>
            <li className="flex items-start gap-2"><Check /> Upgrade anytime</li>
          </>
        ) : (
          <>
            <li className="flex items-start gap-2"><Check /> Unlimited message checks</li>
            <li className="flex items-start gap-2"><Check /> Plain-English results</li>
            <li className="flex items-start gap-2"><Check /> Priority updates on new scams</li>
          </>
        )}
      </ul>
    </div>
  );
}

function PostCard({ tag, title, slug, excerpt }: { tag: string; title: string; slug: string; excerpt?: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-semibold tracking-widest text-white/60">{tag}</div>
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{excerpt || "Short, friendly explanations you can share with family or seniors you support."}</p>
      <a href={`/blog/${slug}`} className="mt-3 inline-block rounded-lg border border-white/20 px-3 py-2 hover:bg-white/10">Read</a>
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
      <div style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "1.75rem", lineHeight: "2rem" }}>{title}</div>
      <div className="text-black/80">{text}</div>
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
