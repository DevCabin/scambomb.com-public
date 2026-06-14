'use client'

import { ProtectedCheckoutButton } from './ProtectedCheckoutButton'

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
  highlight?: boolean
  href?: string
  annualHref?: string
  plan?: 'standard' | 'senior'
}

function PriceCard({ title, price, note, cta, color, highlight = false, href, annualHref, plan }: PriceCardProps) {
  const isFree = price === "Free"
  const brandYellow = "#F5C84C"

  return (
    <div className={`rounded-2xl p-6 border ${highlight ? "border-yellow-300 bg-white/10" : "border-white/10 bg-white/5"}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-4xl font-extrabold">{price}</div>
      <p className="mt-2 text-base leading-relaxed text-white/80">{note}</p>
      
      {isFree ? (
        <a 
          href={href || "https://app.scambomb.com"} 
          className="mt-5 w-full rounded-xl py-4 text-lg font-semibold inline-block text-center"
          style={{ backgroundColor: color, color: "#0B1324" }}
        >
          {cta}
        </a>
      ) : plan ? (
        <>
          <ProtectedCheckoutButton
            plan={plan}
            billing="monthly"
            planName={title}
            priceDisplay={price}
            className="mt-5 w-full rounded-xl py-4 text-lg font-semibold inline-block text-center"
            style={{ backgroundColor: color, color: "#0B1324" }}
          >
            {cta}
          </ProtectedCheckoutButton>
          
          {annualHref && (
            <ProtectedCheckoutButton
              plan={plan}
              billing="annual"
              planName={title}
              priceDisplay={price}
              className="mt-3 block text-center text-base text-white underline decoration-white/60 underline-offset-4 hover:decoration-white"
            >
              <span className="text-[#F5C84C]">Or save 17%</span> <span className="text-white">by paying annually!</span>
            </ProtectedCheckoutButton>
          )}
        </>
      ) : (
        <a 
          href={href || "https://app.scambomb.com"} 
          className="mt-5 w-full rounded-xl py-4 text-lg font-semibold inline-block text-center"
          style={{ backgroundColor: color, color: "#0B1324" }}
        >
          {cta}
        </a>
      )}

      <ul className="mt-5 space-y-3 text-base text-white/85">
        {isFree ? (
          <>
            <li className="flex items-start gap-3"><Check /> 5 scans per month</li>
            <li className="flex items-start gap-3"><Check /> Plain-English results</li>
            <li className="flex items-start gap-3"><Check /> Upgrade anytime</li>
          </>
        ) : (
          <>
            <li className="flex items-start gap-3"><Check /> Unlimited message checks</li>
            <li className="flex items-start gap-3"><Check /> Plain-English results</li>
            <li className="flex items-start gap-3"><Check /> Priority updates on new scams</li>
          </>
        )}
      </ul>
    </div>
  )
}

export function PricingSection() {
  const brandYellow = "#F5C84C"

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
        <p className="text-base sm:text-sm font-semibold tracking-wider uppercase text-white/70 mb-2">Pricing</p>
        <h2 className="text-4xl sm:text-4xl font-bold">Simple, affordable protection</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="hover-lift">
            <PriceCard 
              highlight 
              title="Free Plan" 
              price="Free" 
              note="5 scans per month" 
              cta="Get started" 
              color={brandYellow} 
              href="https://app.scambomb.com" 
            />
          </div>
          <div className="hover-lift">
            <PriceCard 
              title="Standard Plan" 
              price="$9/mo · $99/yr" 
              note="Unlimited scans with annual savings" 
              cta="Choose standard" 
              color={brandYellow} 
              plan="standard"
              annualHref="/api/stripe/checkout?plan=standard&billing=annual"
            />
          </div>
          <div className="hover-lift md:hidden">
            <PriceCard 
              title="Senior 60+ Plan" 
              price="$5/mo · $49/yr" 
              note="Locked-in senior pricing" 
              cta="Claim senior pricing" 
              color={brandYellow} 
              plan="senior"
              annualHref="/api/stripe/checkout?plan=senior&billing=annual"
            />
          </div>
          <div className="hover-lift hidden md:block">
            <PriceCard 
              title="Senior Plan" 
              price="$5/mo · $49/yr" 
              note="For seniors 60+" 
              cta="Claim senior pricing" 
              color={brandYellow} 
              plan="senior"
              annualHref="/api/stripe/checkout?plan=senior&billing=annual"
            />
          </div>
        </div>
        <p className="mt-4 text-lg text-white/80">No strings attached, "cancel any time for any reason" guarantee.</p>
      </div>
    </section>
  )
}