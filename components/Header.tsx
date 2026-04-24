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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-center text-base sm:text-sm text-white/85 hover:text-white">
          <strong style={{ color: brandYellow }}>💰 Save up to $11 by going annual!</strong> <span className="hidden sm:inline">— </span>Standard $9/mo or $99/yr<span className="md:hidden"> · Seniors 60+ $5/mo or $49/yr</span>
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
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/30 px-4 py-3 text-lg font-semibold text-white hover:bg-white/10"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <div className="pb-4 md:pb-3 text-center">
            <p className="text-white text-base sm:text-lg font-extrabold tracking-wider uppercase">
              <span className="text-yellow-300">Scam Detection</span> made simple. <span className="text-yellow-300">Free</span> to use.
            </p>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden pb-4" aria-label="Mobile Primary">
              <div className="flex flex-col gap-4 rounded-xl border border-white/15 bg-black/40 p-5 text-xl">
                <a className="opacity-90 hover:opacity-100 text-center font-bold" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a className="opacity-90 hover:opacity-100 text-center font-bold" href="/extension" onClick={() => setIsMobileMenuOpen(false)}>Extension</a>
                <a className="opacity-90 hover:opacity-100 text-center font-bold" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                <a className="opacity-90 hover:opacity-100 text-center font-bold" href="/#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <a className="opacity-90 hover:opacity-100 text-center font-bold" href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
                <a
                  href={trialHref}
                  className="mt-1 rounded-2xl px-6 py-3 border-2 font-bold hover:bg-white/10 glow text-center"
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
