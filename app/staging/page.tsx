'use client';

import { useEffect, useState } from 'react';

/**
 * STAGING PAGE - Safe sandbox for testing new features
 * 
 * PLANNED CHANGES:
 * 1. Trial flow: 1 free scan/day (anyone), 5 free/day (email signup)
 * 2. Fun UX: Bob-omb loading animation
 *    - Walking bomb while processing
 *    - Explodes in anger if scam detected
 *    - Fuse goes out peacefully if safe
 * 3. GoHighLevel integration (Stripe + account management) - future
 * 
 * Test at: /staging
 * When ready, merge changes to main page.tsx
 */

export default function StagingPage() {
  const base = "bg-[#0B1324] text-white";
  const brandYellow = "#F5C84C";
  const brandBorder = "border-white/20";
  
  // Demo state for the Bob-omb animation
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'safe' | 'danger'>('idle');
  const [demoText, setDemoText] = useState('');

  const handleDemoScan = () => {
    if (!demoText.trim()) return;
    setScanState('scanning');
    
    // Simulate scan delay
    setTimeout(() => {
      // Simple demo logic: if contains "urgent" or "click" = danger
      const isDanger = /urgent|click|immediately|verify|suspend/i.test(demoText);
      setScanState(isDanger ? 'danger' : 'safe');
    }, 2500);
  };

  const resetDemo = () => {
    setScanState('idle');
    setDemoText('');
  };

  return (
    <div className={`${base} antialiased`}>
      {/* Staging Banner */}
      <div className="bg-orange-500 text-black text-center py-2 font-bold text-sm">
        🚧 STAGING ENVIRONMENT — Changes here don&apos;t affect production 🚧
      </div>

      {/* Hero with Interactive Demo */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
          Try the <span style={{ color: brandYellow }}>New Experience</span>
        </h1>
        <p className="text-center text-white/80 mb-8">
          Testing: Fun Bob-omb animations + new trial flow
        </p>

        {/* Interactive Scan Demo */}
        <div className={`rounded-2xl border ${brandBorder} bg-white/5 p-6`}>
          
          {/* Bob-omb Animation Area */}
          <div className="h-40 flex items-center justify-center mb-6 rounded-xl bg-black/20 relative overflow-hidden">
            {scanState === 'idle' && (
              <div className="text-center">
                <div className="text-6xl mb-2">💣</div>
                <p className="text-white/60 text-sm">Paste a message below and click scan</p>
              </div>
            )}
            
            {scanState === 'scanning' && (
              <div className="text-center animate-bounce">
                <div className="text-6xl mb-2">💣</div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-yellow-400">~</span>
                  <span className="text-orange-400 animate-pulse">🔥</span>
                  <p className="text-white/80 text-sm">Analyzing...</p>
                </div>
                {/* Walking animation hint */}
                <p className="text-white/40 text-xs mt-2">[ TODO: Cute walking Bob-omb sprite here ]</p>
              </div>
            )}
            
            {scanState === 'safe' && (
              <div className="text-center animate-pulse">
                <div className="text-6xl mb-2">💣</div>
                <div className="text-2xl text-green-400 font-bold">✓ SAFE!</div>
                <p className="text-white/60 text-sm">Fuse extinguished — looks okay!</p>
                <p className="text-white/40 text-xs mt-2">[ TODO: Fuse going out animation ]</p>
              </div>
            )}
            
            {scanState === 'danger' && (
              <div className="text-center">
                <div className="text-6xl mb-2 animate-ping">💥</div>
                <div className="text-2xl text-red-400 font-bold">⚠ SCAM DETECTED!</div>
                <p className="text-white/60 text-sm">Bob-omb is angry!</p>
                <p className="text-white/40 text-xs mt-2">[ TODO: Explosion + angry face animation ]</p>
              </div>
            )}
          </div>

          {/* Input Area */}
          {scanState === 'idle' || scanState === 'scanning' ? (
            <div>
              <textarea
                value={demoText}
                onChange={(e) => setDemoText(e.target.value)}
                placeholder="Paste a suspicious message here... (try including words like 'urgent' or 'click immediately')"
                className="w-full h-32 rounded-xl bg-white/10 border border-white/20 p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                disabled={scanState === 'scanning'}
              />
              <button
                onClick={handleDemoScan}
                disabled={scanState === 'scanning' || !demoText.trim()}
                className="mt-4 w-full rounded-xl py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: brandYellow, color: "#0B1324" }}
              >
                {scanState === 'scanning' ? 'Scanning...' : '🔍 Scan Message'}
              </button>
            </div>
          ) : (
            <button
              onClick={resetDemo}
              className="w-full rounded-xl py-3 font-semibold border-2"
              style={{ borderColor: brandYellow, color: brandYellow }}
            >
              ← Try Another Message
            </button>
          )}
        </div>

        {/* Trial Flow Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">New Trial Flow (Planned)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl mb-3">👤</div>
              <h3 className="font-bold text-lg">Anonymous Visitor</h3>
              <p className="text-white/70 mt-2">1 free scan per day</p>
              <p className="text-white/50 text-sm mt-1">No signup required — just paste and check</p>
            </div>
            <div className="rounded-2xl border border-yellow-300/50 bg-yellow-300/5 p-6">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-lg" style={{ color: brandYellow }}>Email Signup</h3>
              <p className="text-white/70 mt-2">5 free scans per day</p>
              <p className="text-white/50 text-sm mt-1">+ Safety newsletter (better tracking for ads)</p>
            </div>
          </div>
        </div>

        {/* Implementation Notes */}
        <div className="mt-12 rounded-xl bg-black/30 p-6 text-sm">
          <h3 className="font-bold text-yellow-300 mb-3">📋 Implementation Notes</h3>
          <ul className="space-y-2 text-white/70">
            <li>• <strong>Bob-omb sprites:</strong> Need walking, idle, fuse-lit, fuse-out, explosion frames</li>
            <li>• <strong>Tracking:</strong> Use localStorage or cookies for daily scan count (anon), email for registered</li>
            <li>• <strong>GoHighLevel:</strong> Will handle Stripe + account management when ready</li>
            <li>• <strong>Email capture:</strong> Formspree or GoHighLevel form integration</li>
            <li>• <strong>UX:</strong> Never block the experience — scan limit reached = soft upsell, not wall</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
