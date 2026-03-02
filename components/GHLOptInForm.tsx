'use client';

import Script from 'next/script';

export default function GHLOptInForm() {
  return (
    <div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/fMvTbzE0i0SO5sTMPscV"
        style={{ width: '100%', height: '608px', border: 'none', borderRadius: '3px' }}
        id="inline-fMvTbzE0i0SO5sTMPscV"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="ScamBomb - Free Guide Opt-In"
        data-height="608"
        data-layout-iframe-id="inline-fMvTbzE0i0SO5sTMPscV"
        data-form-id="fMvTbzE0i0SO5sTMPscV"
        title="ScamBomb - Free Guide Opt-In"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
