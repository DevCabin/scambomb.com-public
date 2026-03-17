'use client';

import { useRef } from 'react';

export default function PresentationLivePage() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  const openFullscreen = async () => {
    const iframe = frameRef.current;
    if (!iframe) return;

    if (iframe.requestFullscreen) {
      await iframe.requestFullscreen();
    }
  };

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
      </div>
    </section>
  );
}
