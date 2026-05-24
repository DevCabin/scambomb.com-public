'use client';

import Script from 'next/script';

export default function GHLStickySidebar() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/XbTyKHKvvW1Ad6zIG1A2"
        style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
        id="sticky-sidebar-left-XbTyKHKvvW1Ad6zIG1A2"
        data-layout="{'id':'STICKY_SIDEBAR','minimizedTitle':'','isLeftAligned':true,'isRightAligned':false,'allowMinimize':false}"
        data-trigger-type="showAfter"
        data-trigger-value="5"
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="ScamBomb - Don't Let a Text Steal Everything Opt-in"
        data-height="327"
        data-layout-iframe-id="sticky-sidebar-left-XbTyKHKvvW1Ad6zIG1A2"
        data-form-id="XbTyKHKvvW1Ad6zIG1A2"
        title="ScamBomb - Don't Let a Text Steal Everything Opt-in"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
