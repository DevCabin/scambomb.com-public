'use client'

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type PriceCardProps = {
  title: string
  price: string
  note: string
  cta: string
  color: string
  features: string[]
  highlight?: boolean
  href?: string
  plan?: 'standard' | 'senior'
  billing?: 'monthly' | 'annual'
}

function PriceCard({ title, price, note, cta, color, features, highlight = false, href, plan, billing }: PriceCardProps) {
  const getCheckoutUrl = () => {
    if (!plan || !billing) return href || 'https://app.scambomb.com'
    return `https://app.scambomb.com/api/auth/redirect?plan=${plan}&billing=${billing}`
  }

  return (
    <div className={`rounded-2xl p-6 border ${highlight ? 'border-yellow-300 bg-white/10' : 'border-white/10 bg-white/5'}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-4xl font-extrabold">{price}</div>
      <p className="mt-2 text-base leading-relaxed text-white/80">{note}</p>

      <a
        href={getCheckoutUrl()}
        className="mt-5 w-full rounded-xl py-4 text-lg font-semibold inline-block text-center"
        style={{ backgroundColor: color, color: '#0B1324' }}
      >
        {cta}
      </a>

      <ul className="mt-5 space-y-3 text-base text-white/85">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3"><Check /> <span>{feature}</span></li>
        ))}
      </ul>
    </div>
  )
}

export function PricingSection() {
  const brandYellow = '#F5C84C'
  const freeFeatures = [
    '5 scam checks each month',
    'Analyze suspicious texts, emails, and screenshots',
    'Easy-to-understand explanations and next steps',
    'Scam Triage articles and practical resources',
  ]
  const protectedFeatures = [
    'Unlimited scam analysis',
    'Everything in Stay Safe',
    'Guidance for AI voice-clone and emerging scams',
    'Family protection guides and printable checklists',
    'Ongoing scam awareness and practical advice',
    'Support ScamBomb’s mission to protect families',
  ]

  return (
    <section
      id="pricing"
      className="relative py-16"
      style={{
        backgroundImage: "url('/ScamBomb-just-the-bomb.png')",
        backgroundSize: '107px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#0B1324]/95 pointer-events-none"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-sm font-semibold tracking-wider uppercase text-white/70 mb-2">Choose your level of protection</p>
        <h2 className="text-4xl sm:text-4xl font-bold">Every Household Deserves <span style={{ color: brandYellow }}>Peace of Mind</span></h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">Start with the help you need today, then choose ongoing protection when you&apos;re ready.</p>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="hover-lift">
            <PriceCard
              highlight
              title="Stay Safe"
              price="Free"
              note="For occasional scam checks and practical guidance."
              cta="Start checking messages"
              color={brandYellow}
              href="https://app.scambomb.com"
              features={freeFeatures}
            />
          </div>
          <div className="hover-lift">
            <PriceCard
              title="Stay Protected"
              price="$9/mo · $99/yr"
              note="Everyday protection for you and the people you care about."
              cta="Choose Stay Protected"
              color={brandYellow}
              plan="standard"
              billing="monthly"
              features={protectedFeatures}
            />
          </div>
          <div className="hover-lift">
            <PriceCard
              title="Senior Protection"
              price="$5/mo · $49/yr"
              note="The same ongoing protection, with locked-in pricing for adults 60+."
              cta="Claim senior pricing"
              color={brandYellow}
              plan="senior"
              billing="monthly"
              features={protectedFeatures}
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm mb-2">Save 17% with annual billing:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.scambomb.com/api/auth/redirect?plan=standard&billing=annual"
              className="text-[#F5C84C] hover:underline"
            >
              Stay Protected Annual ($99/yr)
            </a>
            <span className="text-white/30">|</span>
            <a
              href="https://app.scambomb.com/api/auth/redirect?plan=senior&billing=annual"
              className="text-[#F5C84C] hover:underline"
            >
              Senior Protection Annual ($49/yr)
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-lg text-white/80">No strings attached, “cancel any time for any reason” guarantee.</p>
      </div>
    </section>
  )
}
