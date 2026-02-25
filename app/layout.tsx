import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Header from '../components/Header'

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
  other: {
    'facebook-domain-verification': 'tmq14fiwi4rwno7tljlobhqospl9ni',
  },
}

function UniversalFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-[auto_0.7fr_0.7fr_1.5fr] gap-6 text-sm">
        <div>
          <Logo size="sm" />
          <p className="mt-3 text-white/70">Simple, plain-English scam checks for everyone.</p>
        </div>
        <div>
          <h4 className="font-semibold">Products</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><a href="/#how">How it works</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/extension">Chrome Extension</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/scam-stories">Share Your Story</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/extension-privacy">Extension Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <form className="mt-2 flex flex-col gap-3" action="https://formspree.io/f/xzzyeoak" method="POST" aria-label="Subscribe to newsletter">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex gap-2">
              <input id="newsletter-email" name="email" type="email" required className="flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="you@example.com" />
              <button type="submit" className="rounded-xl px-3 py-2 font-semibold bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90">Subscribe</button>
            </div>
          </form>
          <p className="mt-2 text-white/60 text-xs">Cutting edge safety tips, once or twice a month. No spam. No scams!</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} ScamBomb.com — All rights reserved.</div>
    </footer>
  );
}

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const imgSize = size === "sm" ? "h-20 w-64" : "h-12 w-40";
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
      <body className={`${montserrat.variable} font-montserrat bg-[#0B1324] text-white min-h-screen antialiased selection:bg-yellow-300/30 text-base sm:text-lg`}>
        <GoogleAnalytics measurementId="G-T61B4NX3J8" />
        <Header />
        <main id="main">
          {children}
        </main>
        <UniversalFooter />
      </body>
    </html>
  )
}
