'use client';

import { useEffect, useState } from 'react';

function UniversalHeader() {
  const brandYellow = "#F5C84C";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sbid, setSbid] = useState('');

  useEffect(() => {
    setSbid(crypto.randomUUID());
  }, []);

  const trialHref = `https://app.scambomb.com/?safe_source=true${sbid ? `&SBID=${sbid}` : ''}`;

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-yellow-300 focus:text-black focus:px-3 focus:py-2 focus:rounded-lg">Skip to content</a>

      {/* Top Announcement Bar */}
      <a href="#pricing" className="block w-full border-b border-white/10 hover:border-white/20 transition-colors" role="region" aria-label="announcement">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-white/80 hover:text-white">
          Annual Plan: <strong style={{ color: brandYellow }}>Save 17% over Pro Plan!</strong> — Stop Scams Now!
        </div>
      </a>

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
              <a className="opacity-90 hover:opacity-100" href="/extension">Extension</a>
              <a className="opacity-90 hover:opacity-100" href="/#pricing">Pricing</a>
              <a className="opacity-90 hover:opacity-100" href="/#faq">FAQ</a>
              <a className="opacity-90 hover:opacity-100" href="/blog">Blog</a>
              <a className="opacity-90 hover:opacity-100" href="/testing">Testing?</a>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <a
                href={trialHref}
                className="ml-2 rounded-2xl px-6 py-3 border-2 font-semibold hover:bg-white/10 glow"
                style={{ borderColor: brandYellow, color: brandYellow }}
              >
                Try Free!
              </a>
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/30 px-3 py-2 text-white hover:bg-white/10"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden pb-4" aria-label="Mobile Primary">
              <div className="flex flex-col gap-3 rounded-xl border border-white/15 bg-black/40 p-4">
                <a className="opacity-90 hover:opacity-100" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a className="opacity-90 hover:opacity-100" href="/extension" onClick={() => setIsMobileMenuOpen(false)}>Extension</a>
                <a className="opacity-90 hover:opacity-100" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                <a className="opacity-90 hover:opacity-100" href="/#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <a className="opacity-90 hover:opacity-100" href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
                <a className="opacity-90 hover:opacity-100" href="/testing" onClick={() => setIsMobileMenuOpen(false)}>Testing?</a>
                <a
                  href={trialHref}
                  className="mt-1 rounded-2xl px-6 py-3 border-2 font-semibold hover:bg-white/10 glow text-center"
                  style={{ borderColor: brandYellow, color: brandYellow }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Try Free!
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const bombSize = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const textSize = size === "sm" ? "h-8" : "h-10";

  return (
    <div className="flex items-center gap-2" role="img" aria-label="ScamBomb logo">
      <img
        src="/ScamBomb-just-the-bomb.png"
        alt="ScamBomb Bomb"
        className={`${bombSize} object-contain hidden md:block`}
        style={{
          width: '150px',
          height: '200px',
          position: 'relative',
          left: '45px',
          marginTop: '-35px'
        }}
      />
      <img
        src="/ScamBomb.com_NEW_V2.1.png"
        alt="ScamBomb.com"
        className={`${textSize} object-contain`}
      />
    </div>
  );
}

export default UniversalHeader;
