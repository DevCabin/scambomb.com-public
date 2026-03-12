'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const FB_PIXEL_ID = '486466700592099'

export default function ProtectParentsPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach((el) => observer.observe(el))

    const ctaButtons = document.querySelectorAll('.btn-primary')
    const onClick = () => {
      const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq
      if (typeof fbq !== 'undefined') fbq('track', 'Lead')
    }

    ctaButtons.forEach((btn) => btn.addEventListener('click', onClick))

    return () => {
      observer.disconnect()
      ctaButtons.forEach((btn) => btn.removeEventListener('click', onClick))
    }
  }, [])

  return (
    <>
      <Script id="fb-pixel-init" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${FB_PIXEL_ID}');fbq('track', 'PageView');`}
      </Script>

      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow">⚠ Scam Alert — 2026</div>

          <h1>
            Scammers Targeted
            <span className="highlight">$16.6 Billion</span>
            From Americans Last Year.
          </h1>

          <p className="hero-subhead">
            AI-powered scams now fool even careful people. ScamBomb scans any suspicious text, email, or <strong>uploaded photo of a message</strong> in seconds and tells you exactly how dangerous it is — before it's too late.
          </p>

          <div className="stat-strip">
            <div className="stat-item">
              <span className="stat-num">$83K</span>
              <span className="stat-label">Avg loss per senior victim</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3 sec</span>
              <span className="stat-label">ScamBomb scan time</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">99.7%</span>
              <span className="stat-label">Detection accuracy</span>
            </div>
          </div>

          <div className="cta-block">
            <div className="cta-label">Start protecting your family today</div>
            <div className="cta-offer">Try ScamBomb Free — Upgrade Anytime</div>
            <div className="cta-price">Premium protection just <strong>$4.99/mo</strong> or <strong>$49/yr</strong></div>

            <a href="https://scambomb.com" className="btn-primary" onClick={() => {
              const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq
              if (fbq) fbq('track', 'InitiateCheckout')
            }}>
              🛡 Scan Your First Message Free →
            </a>
            <a href="https://scambomb.com" className="btn-free">
              See how it works first ↓
            </a>

            <div className="trust-line">
              <span>🔒 No credit card required</span>
              <div className="trust-dot"></div>
              <span>✓ Cancel anytime</span>
              <div className="trust-dot"></div>
              <span>✓ Works on any device</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section reveal">
        <div className="section-label">How it works</div>
        <h2>Three Seconds Between You<br />and a Scam</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">Step 01</div>
            <h3>Copy the suspicious message</h3>
            <p>Got a weird text from "FedEx"? A scary email from "your bank"? A strange call about your Medicare? Copy the text or type what they said. <strong style={{ color: '#F5C84C' }}>You can also take a photo of any suspicious message and upload the image directly</strong> — ScamBomb reads and scans it automatically.</p>
          </div>
          <div className="step">
            <div className="step-num">Step 02</div>
            <h3>Paste it into ScamBomb</h3>
            <p>No tech skills needed. Open ScamBomb.com on any phone, tablet, or computer. Paste the message in the box. Hit scan.</p>
          </div>
          <div className="step">
            <div className="step-num">Step 03</div>
            <h3>Get your danger score instantly</h3>
            <p>ScamBomb&apos;s AI returns a score from 0–100 with a plain-English explanation of exactly what makes it dangerous — or why it&apos;s safe.</p>
          </div>
        </div>

        <div className="demo-card reveal">
          <div className="demo-input">
            <div className="demo-input-label">Message pasted by user</div>
            <div className="demo-message">
              "URGENT: Your Social Security number has been suspended due to suspicious activity. Call 1-888-555-0147 immediately to avoid arrest. Press 1 to speak to an officer."
            </div>
          </div>
          <div className="demo-result">
            <div className="verdict-badge">
              <span className="score">94</span>
            </div>
            <div className="verdict-text">
              <h4>⚠ HIGH DANGER — Government Impersonation Scam</h4>
              <p>This message contains 6 confirmed scam indicators: false authority claim, arrest threat, urgency pressure, fake SS# suspension, unsolicited contact, and spoofed callback number. The Social Security Administration never calls to threaten arrest. Delete and do not call back.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section reveal">
        <div className="section-label">What people are saying</div>
        <h2>Real Families. Real Protection.</h2>

        <div className="testimonials">
          <div className="testimonial">
            <p>My mother almost wired $4,200 to someone claiming to be her grandson in jail. I had her paste the text into ScamBomb first — it flagged it as a 97/100 danger scam in about two seconds. I cried with relief.</p>
            <div className="testimonial-author">
              <div className="author-avatar">DM</div>
              <div className="author-info">
                <strong>Diane M.</strong>
                <span>Daughter, Austin TX</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <div className="testimonial">
            <p>I&apos;m 71 and I get suspicious texts constantly. I used to call my son every time and he&apos;s busy. Now I just scan it myself and I know in seconds. It&apos;s given me my independence back, honestly.</p>
            <div className="testimonial-author">
              <div className="author-avatar">RL</div>
              <div className="author-info">
                <strong>Robert L.</strong>
                <span>Retired, age 71 — Phoenix AZ</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>

          <div className="testimonial">
            <p>Worth every penny. My dad lost $12,000 to a scam two years ago before we found ScamBomb. Now he uses it every single day. I sleep better knowing he has it.</p>
            <div className="testimonial-author">
              <div className="author-avatar">KT</div>
              <div className="author-info">
                <strong>Kevin T.</strong>
                <span>Son, age 44 — Nashville TN</span>
              </div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>
        <p className="simulated-note">Simulated testimonials for layout preview — real customer quotes will be added soon.</p>
      </div>

      <div className="section reveal">
        <div className="section-label">Simple pricing</div>
        <h2>Protection That Costs Less<br />Than One Scam</h2>

        <div className="pricing-cards">
          <a href="https://scambomb.com" className="pricing-card"> 
            <div className="pricing-icon">🔍</div>
            <div className="pricing-details">
              <div className="pricing-name">Free — Try It Now</div>
              <div className="pricing-desc">Scan a few messages per day. See exactly how it works. No card needed.</div>
            </div>
            <div className="pricing-price">
              <span className="amount">$0</span>
              <span className="period">always</span>
            </div>
          </a>

          <a href="https://scambomb.com" className="pricing-card featured">
            <div className="featured-tag">Most Popular</div>
            <div className="pricing-icon">🛡</div>
            <div className="pricing-details">
              <div className="pricing-name">Premium Monthly</div>
              <div className="pricing-desc">Unlimited scans, priority detection, Chrome extension for Gmail, full history.</div>
            </div>
            <div className="pricing-price">
              <span className="amount">$4.99</span>
              <span className="period">per month</span>
            </div>
          </a>

          <a href="https://scambomb.com" className="pricing-card">
            <div className="pricing-icon">⚡</div>
            <div className="pricing-details">
              <div className="pricing-name">Premium Annual</div>
              <div className="pricing-desc">Everything in monthly, plus 2 months free. Best value for ongoing protection.</div>
            </div>
            <div className="pricing-price">
              <span className="amount">$49</span>
              <span className="period">per year</span>
            </div>
          </a>
        </div>
      </div>

      <section className="final-cta reveal">
        <h2>Don&apos;t Let the Next Scam<br />Be the One That Hits Home</h2>
        <p>Takes 30 seconds to get started. Free forever on the basic plan. Your family is worth it.</p>
        <a href="https://scambomb.com" className="btn-primary">
          🛡 Protect My Family Now — It&apos;s Free →
        </a>
        <a href="https://scambomb.com" className="btn-free">
          See full pricing &amp; features
        </a>
      </section>

      <footer className="lp-footer">
        <p>
          <a href="https://scambomb.com">ScamBomb.com</a> &nbsp;·&nbsp;
          <a href="https://scambomb.com/privacy">Privacy Policy</a> &nbsp;·&nbsp;
          <a href="https://scambomb.com/terms">Terms of Service</a>
        </p>
        <p style={{ marginTop: 8 }}>© 2026 Featherstone Web Solutions LLC. All rights reserved.<br />
          ScamBomb uses AI for informational scam detection. Not legal or financial advice.</p>
      </footer>

      <style jsx global>{`
        :root {
          --navy: #0B1324;
          --navy-mid: #13203a;
          --navy-light: #1a2f55;
          --gold: #F5C84C;
          --gold-dim: #c9aa00;
          --red: #d32f2f;
          --green: #2e7d32;
          --white: #ffffff;
          --gray: #9aa3b2;
        }
        .hero,
        .section,
        .final-cta,
        .lp-footer {
          font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif;
        }
        .hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 60px 24px 80px; overflow: hidden; }
        .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,200,76,0.09) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(211,47,47,0.08) 0%, transparent 60%); pointer-events: none; }
        .hero-inner { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
        .eyebrow { display: inline-block; background: rgba(211,47,47,0.15); border: 1px solid rgba(211,47,47,0.5); color: #ff6b6b; font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 14px; border-radius: 3px; margin-bottom: 24px; }
        .hero h1 { font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: clamp(38px, 8vw, 68px); font-weight: 800; line-height: 1.05; letter-spacing: -0.01em; margin-bottom: 28px; color: var(--white); }
        .hero h1 .highlight { color: var(--gold); display: block; }
        .hero-subhead { font-size: clamp(17px, 3vw, 20px); line-height: 1.6; color: rgba(255,255,255,0.85); margin-bottom: 40px; max-width: 560px; }
        .stat-strip { display: flex; gap: 0; border: 1px solid rgba(245,200,76,0.25); border-radius: 8px; overflow: hidden; margin-bottom: 40px; }
        .stat-item { flex: 1; padding: 20px 16px; text-align: center; border-right: 1px solid rgba(245,200,76,0.18); background: rgba(245,200,76,0.06); }
        .stat-item:last-child { border-right: none; }
        .stat-num { font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: clamp(22px, 4vw, 32px); font-weight: 800; color: var(--gold); display: block; line-height: 1; margin-bottom: 6px; }
        .stat-label { font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.65); line-height: 1.3; }
        .cta-block { background: linear-gradient(135deg, rgba(245,200,76,0.12) 0%, rgba(245,200,76,0.06) 100%); border: 2px solid var(--gold); border-radius: 12px; padding: 36px 32px; text-align: center; position: relative; overflow: hidden; }
        .cta-label { font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .cta-offer { font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: clamp(22px, 4vw, 30px); font-weight: 800; color: var(--white); margin-bottom: 8px; line-height: 1.15; }
        .cta-price { color: rgba(255,255,255,0.7); font-size: 15px; margin-bottom: 28px; }
        .cta-price strong { color: var(--gold); font-size: 18px; }
        .btn-primary { display: block; width: 100%; background: var(--gold); color: var(--navy); font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: 20px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; padding: 20px 32px; border: none; border-radius: 6px; cursor: pointer; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s, background 0.15s; position: relative; z-index: 1; margin-bottom: 14px; }
        .btn-primary:hover { background: #ffdb73; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(245,200,76,0.4); }
        .btn-free { display: block; width: 100%; background: transparent; color: rgba(255,255,255,0.75); font-size: 15px; padding: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; cursor: pointer; text-decoration: none; }
        .trust-line { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 20px; font-size: 12px; color: rgba(255,255,255,0.7); letter-spacing: 0.04em; }
        .trust-dot { width: 4px; height: 4px; background: rgba(255,255,255,0.2); border-radius: 50%; }
        .section { padding: 80px 24px; max-width: 720px; margin: 0 auto; }
        .section-label { font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .section h2 { font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: clamp(28px, 5vw, 44px); font-weight: 800; line-height: 1.1; margin-bottom: 48px; }
        .steps { display: flex; flex-direction: column; border-left: 2px solid rgba(245,200,76,0.3); padding-left: 32px; margin-bottom: 48px; }
        .step { position: relative; padding-bottom: 36px; opacity: 0; transform: translateX(-16px); animation: slideIn 0.5s forwards; }
        .step:nth-child(1) { animation-delay: 0.1s; }
        .step:nth-child(2) { animation-delay: 0.25s; }
        .step:nth-child(3) { animation-delay: 0.4s; }
        .step::before { content: ''; position: absolute; left: -39px; top: 4px; width: 14px; height: 14px; background: var(--gold); border-radius: 50%; border: 3px solid var(--navy); box-shadow: 0 0 0 2px rgba(245,200,76,0.7); }
        @keyframes slideIn { to { opacity: 1; transform: translateX(0); } }
        .demo-card { background: var(--navy-mid); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; margin-bottom: 48px; }
        .demo-input { padding: 24px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .demo-message { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 16px; font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.5; font-style: italic; }
        .demo-result { padding: 24px; display: flex; align-items: flex-start; gap: 20px; }
        .verdict-badge { flex-shrink: 0; width: 68px; height: 68px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(211,47,47,0.15); border: 2px solid var(--red); }
        .testimonials { display: flex; flex-direction: column; gap: 20px; margin-bottom: 48px; }
        .testimonial { background: var(--navy-mid); border: 1px solid rgba(245,200,76,0.15); border-radius: 10px; padding: 24px; }
        .simulated-note { margin-top: -24px; margin-bottom: 8px; font-size: 12px; color: rgba(255,255,255,0.55); font-style: italic; text-align: center; }
        .pricing-cards { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
        .pricing-card { border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 24px; display: flex; align-items: center; gap: 20px; text-decoration: none; color: var(--white); }
        .pricing-card.featured { border-color: var(--gold); background: rgba(245,200,76,0.08); position: relative; }
        .featured-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--navy); font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 3px; }
        .pricing-price .period { display: block; margin-top: 6px; }
        .final-cta { background: linear-gradient(180deg, var(--navy) 0%, var(--navy-mid) 100%); border-top: 1px solid rgba(245,200,76,0.2); padding: 80px 24px; text-align: center; }
        .final-cta h2 { font-family: var(--font-montserrat), Montserrat, system-ui, -apple-system, sans-serif; font-size: clamp(30px, 6vw, 52px); font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
        .lp-footer { padding: 32px 24px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); background: #0B1324; }
        .lp-footer p { font-size: 12px; color: rgba(255,255,255,0.6); line-height: 1.8; }
        .lp-footer a { color: rgba(255,255,255,0.85); text-decoration: none; }
        .lp-footer a:hover { color: #F5C84C; }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 480px) {
          .stat-strip { flex-wrap: wrap; }
          .stat-item { flex: 1 1 45%; }
          .trust-line { flex-wrap: wrap; gap: 8px; }
        }
      `}</style>
    </>
  )
}