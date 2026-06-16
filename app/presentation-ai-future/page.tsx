'use client';

import { useRef } from 'react';

export default function PresentationAiFuturePage() {
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
            <h1 className="text-3xl sm:text-4xl font-extrabold">Presentation AI Future</h1>
            <p className="mt-2 text-white/75">
              "Now What?" companion deck for the AI jobs conversation.
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
            src="/presentation-ai-future.html"
            title="ScamBomb AI future presentation"
            className="w-full h-[75vh] md:h-[80vh]"
            allowFullScreen
          />
        </div>

        <div className="mt-5 flex justify-end gap-3 flex-wrap">
          <a
            href="/presentation-live"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#9BA3AF] text-[#F0F2F5] hover:bg-white/10"
          >
            Open Live Presentation
          </a>

          <a
            href="/presentation-jobs"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#F5C84C] text-[#F5C84C] hover:bg-[#F5C84C]/10"
          >
            Open AI Jobs Report
          </a>

          <a
            href="/presentation-prompts"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#3DDC84] text-[#3DDC84] hover:bg-[#3DDC84]/10"
          >
            Open Power Prompts
          </a>

          <a
            href="/presentation-trivia"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#F0F2F5] text-[#F0F2F5] hover:bg-white/10"
          >
            Open Trivia Slideshow
          </a>
        </div>
      </div>
    </section>
  );
}
