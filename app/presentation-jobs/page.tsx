'use client';

import { useRef } from 'react';

export default function PresentationJobsPage() {
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
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Presentation Jobs</h1>
            <p className="mt-2 text-white/75">
              AI-attributed layoffs visual briefing with charts and source references.
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

        <div className="mt-5 w-full overflow-hidden">
          <iframe
            ref={frameRef}
            src="/presentation-jobs.html"
            title="ScamBomb AI jobs report presentation"
            className="w-full min-h-[calc(100vh-230px)] border-0"
            allowFullScreen
          />
        </div>

        <div className="mt-5 flex justify-end gap-3 flex-wrap">
          <a
            href="/presentation-live"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-[#F5C84C] text-[#F5C84C] hover:bg-[#F5C84C]/10"
          >
            Back to Live Presentation
          </a>
        </div>
      </div>
    </section>
  );
}
