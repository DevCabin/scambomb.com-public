import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import Header from '../components/Header'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GHLPoliteSlideIn from '../components/GHLPoliteSlideIn'

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-[1fr_0.7fr_0.7fr_1.5fr] gap-6 text-sm">
        <div>
          <h4 className="font-semibold uppercase tracking-wider">
            REPORT A <span className="text-[#F5C84C]">PROBLEM</span>
          </h4>
          <div className="mt-3">
            <a
              href="/contact"
              className="inline-block rounded-xl px-3 py-2 font-semibold bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90"
            >
              Contact Us
            </a>
          </div>
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
            <li><a href="/testing">Testing</a></li>
            <li><a href="/scam-stories">Story</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/extension-privacy">Extension Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <div className="mt-2">
            <a
              href="https://scambomb.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl px-3 py-2 font-semibold bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90"
            >
              Subscribe
            </a>
          </div>
          <p className="mt-2 text-white/60 text-xs">Cutting edge safety tips, once or twice a month. No spam. No scams!</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} ScamBomb.com — All rights reserved.</div>
    </footer>
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
        <SpeedInsights />
        <UniversalFooter />
        <Analytics />
        <GHLPoliteSlideIn />
      </body>
    </html>
  )
}
