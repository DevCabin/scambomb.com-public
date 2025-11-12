import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'ScamBomb - Stop scams in one click',
  description: 'Paste any text, email, or SMS. ScamBomb checks red flags, explains the risk in plain English, and tells you exactly what to do next.',
  icons: {
    icon: '/favicon.ico',
  },
}

function UniversalHeader() {
  const brandYellow = "#F5C84C";

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-yellow-300 focus:text-black focus:px-3 focus:py-2 focus:rounded-lg">Skip to content</a>

      {/* Top Announcement Bar */}
      <div className="w-full border-b border-white/10" role="region" aria-label="announcement">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-white/80">
          ProductHunt Launch Special: <strong style={{ color: brandYellow }}>Founding members $4.99/mo</strong> — lock in for life.
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3" aria-label="ScamBomb home">
              <Logo />
              <span className="sr-only">ScamBomb</span>
            </div>
            <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
              <a className="opacity-90 hover:opacity-100" href="/">Home</a>
              <a className="opacity-90 hover:opacity-100" href="/#how">How it works</a>
              <a className="opacity-90 hover:opacity-100" href="/#features">Features</a>
              <a className="opacity-90 hover:opacity-100" href="/#pricing">Pricing</a>
              <a className="opacity-90 hover:opacity-100" href="/#faq">FAQ</a>
              <a className="opacity-90 hover:opacity-100" href="/blog">Blog</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="https://app.scambomb.com" className="ml-2 rounded-2xl px-4 py-2 font-semibold" style={{ backgroundColor: brandYellow, color: "#0B1324" }}>
                Try it free
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function UniversalFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <Logo size="sm" />
          <p className="mt-3 text-white/70">Simple, plain-English scam checks for everyone.</p>
        </div>
        <div>
          <h4 className="font-semibold">Product</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><a href="/#how">How it works</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <form className="mt-2 flex gap-2" aria-label="Subscribe to newsletter">
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" required className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="you@example.com" />
            <button className="rounded-xl px-4 py-2 font-semibold bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90">Subscribe</button>
          </form>
          <p className="mt-2 text-white/60">We send 1–2 emails/month. No spam.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} ScamBomb.com — All rights reserved.</div>
    </footer>
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat bg-[#0B1324] text-white min-h-screen antialiased selection:bg-yellow-300/30`}>
        <GoogleAnalytics measurementId="G-T61B4NX3J8" />
        <UniversalHeader />
        <main id="main">
          {children}
        </main>
        <UniversalFooter />
      </body>
    </html>
  )
}
