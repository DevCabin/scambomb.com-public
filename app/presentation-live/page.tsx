'use client';

import { useRef, useState, useEffect } from 'react';

export default function PresentationLivePage() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [showQr, setShowQr] = useState(false);

  const openFullscreen = async () => {
    const iframe = frameRef.current;
    if (!iframe) return;

    if (iframe.requestFullscreen) {
      await iframe.requestFullscreen();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowQr(false);
    };
    if (showQr) {
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [showQr]);

  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Presentation (Live)</h1>
            <p className="mt-2 text-white/75">
              Full workshop slideshow for in-person events.
            </p>
          </div>

          <button
            type="button"
            onClick={openFullscreen}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90"
          >
            Open Full Screen
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 overflow-hidden">
          <iframe
            ref={frameRef}
            src="/presentation-live.html"
            title="ScamBomb workshop presentation"
            className="w-full h-[75vh] md:h-[80vh]"
            allowFullScreen
          />
        </div>

        <div className="mt-5 flex justify-end gap-3 flex-wrap">
          <button
            onClick={() => setShowQr(true)}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#F5C84C] text-[#F5C84C] hover:bg-[#F5C84C]/10"
          >
            Poll QR
          </button>

          <a
            href="/presentation-ai-future"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
          >
            AI Future Deck
          </a>

          <a
            href="/presentation-jobs"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#9BA3AF] text-[#F0F2F5] hover:bg-white/10"
          >
            AI Jobs Report
          </a>

          <a
            href="/presentation-prompts"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#3DDC84] text-[#3DDC84] hover:bg-[#3DDC84]/10"
          >
            Power Prompts
          </a>

          <a
            href="/presentation-trivia"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#F5C84C] text-[#F5C84C] hover:bg-[#F5C84C]/10"
          >
            AI Trivia
          </a>
        </div>
      </div>

      {/* QR Modal */}
      {showQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowQr(false)}
        >
          <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQr(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-3xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src="/scambomb_poll_TRIVIA_vote_qr.png"
              alt="Poll QR code"
              className="w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-2xl"
            />
            <p className="mt-4 text-white/70 text-sm">Scan to vote in the live poll</p>
          </div>
        </div>
      )}
    </section>
  );
}