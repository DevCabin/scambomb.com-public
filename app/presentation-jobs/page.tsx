'use client';

import { useEffect, useState } from 'react';

export default function PresentationJobsPage() {
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 140px)');

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (!event.data || event.data.type !== 'presentation-jobs-height') return;

      const nextHeight = Number(event.data.height || 0);
      if (nextHeight > 0) {
        setIframeHeight(`${nextHeight}px`);
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <section className="bg-[#0B1324] text-white min-h-[calc(100vh-140px)]">
      <iframe
        src="/presentation-jobs.html"
        title="ScamBomb AI jobs report presentation"
        className="w-full border-0"
        style={{ height: iframeHeight }}
      />
    </section>
  );
}
