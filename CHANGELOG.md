# Changelog

## 2026-03-03 — Report accessibility sizing + branding + downloadable PDF

### Updated
- `public/reports/older-adult-fraud-2024-2025/index.html`
  - Increased report typography floor so no fixed `font-size` values render below `15px`.
  - Added ScamBomb brand presence above the fold in the top back bar with bomb mark icon.
  - Added top-of-page PDF download link:
    - `Download PDF Version`
    - points to: `/reports/older-adult-fraud-2024-2025/older-adult-fraud-2024-2025.pdf`

### Added
- `public/reports/older-adult-fraud-2024-2025/older-adult-fraud-2024-2025.pdf`
  - Generated from the updated report layout for direct download.

### Reason
- Improve readability for older-adult audiences.
- Ensure clear ScamBomb visual branding in report header area.
- Provide a printable/downloadable version linked from the HTML report entry point.

## 2026-03-03 — Lead CTA submit resilience fallback for GHL endpoint instability

### Updated
- `components/LeadCaptureCTA.tsx`
  - Added `first_name` to primary JSON submit payload for parity with other working scripts.
  - Added fallback path when `backend.leadconnectorhq.com/forms/submit` fails:
    - hidden iframe + browser form POST to `https://api.leadconnectorhq.com/widget/form/{formId}`
    - continues visitor to report URL so user flow does not dead-end on transient API failures.

### Reason
- Observed live `500 Internal server error` responses from GHL Forms API endpoint during CTA tests.
- Prevent user-facing dead-end error and preserve funnel progression while upstream issue is unstable.

## 2026-03-03 — Tagline styling update (bold/all-caps with upward shift)

### Updated
- `components/Header.tsx`
  - Adjusted header tagline presentation:
    - applied negative top margin of ~1rem (`-mt-4`)
    - increased size (`text-base sm:text-lg`)
    - switched to all caps (`uppercase`)
    - stronger emphasis (`font-extrabold`, `tracking-wider`)

### Reason
- Make the new positioning tagline more prominent and confident in the header.

## 2026-03-03 — CTA next-step label moved above card + header tagline added

### Updated
- `components/LeadCaptureCTA.tsx`
  - Moved the explicit "next step" messaging out of the small eyebrow position and into a larger yellow line above the CTA card for better visibility.
  - New default top line:
    - `Read the FULL report now — free download continues after unlock`

- `components/Header.tsx`
  - Added site tagline below nav/menu area:
    - `Scam detection made simple. Free to use.`

### Reason
- Improve handoff clarity and make continuation intent obvious for visitors.
- Introduce concise site-wide positioning tagline in available header space.

## 2026-03-03 — CTA handoff messaging made explicit (continue/download)

### Updated
- `components/LeadCaptureCTA.tsx`
  - Updated CTA copy to clearly signal post-opt-in continuation to full report/download:
    - Eyebrow: `Next Step — Continue to the Full Report Download`
    - Description: explicitly says "Read the FULL report now" and "continue to the free download"
    - Button label: `Read the FULL Report Now (Free Download) →`
    - Footnote: `This is not the end — continue to the full downloadable report after email unlock.`

### Reason
- Make handoff intent unmistakable for general visitors so users understand there is a next-step full report/download after CTA action.

## 2026-03-03 — CTA title copy update (remove year + yellow emphasis target)

### Updated
- `components/LeadCaptureCTA.tsx`
  - Updated CTA title lines:
    - from: `Fraud Target Older Adults: Annual Intelligence Brief` + accent `2024–2025`
    - to: `Fraud Targeting Older Adults:` + accent `Annual Intelligence Brief`

### Reason
- Align CTA headline with latest approved copy and remove year from the highlighted line.

## 2026-03-03 — Blog typography hardening for special report page

### Updated
- `app/blog/older-adult-fraud-report-2024-2025/page.tsx`
  - Added explicit utility styles for embedded content blocks to stabilize rendering when prose styles are inconsistent:
    - heading size/weight/spacing (`h2`)
    - paragraph color/line-height/margins (`p`)

### Reason
- Fix visual formatting drift on the live blog page and keep text hierarchy readable/consistent.

## 2026-03-03 — Fixed production build blocker for report/blog flow

### Fixed
- `app/blog/older-adult-fraud-report-2024-2025/page.tsx`
  - Replaced alias import with relative import for `LeadCaptureCTA`:
    - from: `@/components/LeadCaptureCTA`
    - to: `../../../components/LeadCaptureCTA`

### Reason
- Vercel production build failed with module resolution error, preventing new deploys from going live.
- With successful deploys restored, latest report HTML changes (including popup embed removal) can publish to production.

## 2026-03-03 — Removed legacy popup embed from static report HTML

### Updated
- `public/reports/older-adult-fraud-2024-2025/index.html`
  - Removed legacy GoHighLevel popup embed markup:
    - hidden popup iframe (`popup-fMvTbzE0i0SO5sTMPscV`)
    - `https://link.msgsndr.com/js/form_embed.js` loader script

### Reason
- Ensure static report page no longer runs popup form behavior and aligns with the native branded lead-capture flow.

## 2026-03-03 — Sitewide naming update for annual fraud brief

### Updated copy
- Replaced user-facing label:
  - from: `Older Adult Fraud Intelligence Brief`
  - to: `Fraud Target Older Adults: Annual Intelligence Brief`

### Files updated
- `components/LeadCaptureCTA.tsx`
- `public/resources/modules/older-adult-brief-cta-module.html`
- `public/resources/dont-let-a-text-steal-everything/index.html`
- `public/resources/phishing-link-survival-guide/index.html`
- `app/blog/scam-triage-file-001-android-had-3-viruses-but-didnt/page.tsx`
- `public/reports/older-adult-fraud-2024-2025/index.html`

## 2026-03-03 — Implemented canonical branded lead-capture CTA (native site form → GHL)

### Added
- `components/LeadCaptureCTA.tsx`
  - New reusable branded CTA component that captures email directly on-site.
  - Submits leads to GHL via Forms API:
    - endpoint: `https://backend.leadconnectorhq.com/forms/submit`
    - location ID: `DaQ8hQRpgjJ0fIdTGhuo`
    - form ID: `fMvTbzE0i0SO5sTMPscV`
  - Includes:
    - polished CTA presentation
    - email validation
    - submit/loading/error states
    - success redirect to gated destination (`/reports/older-adult-fraud-2024-2025`)

### Updated
- `app/blog/older-adult-fraud-report-2024-2025/page.tsx`
  - Removed embedded GHL popup iframe/script implementation from this page.
  - Replaced static CTA block with reusable `<LeadCaptureCTA />` component.

### Outcome
- Establishes the preferred efficient workflow: **pretty native CTA + direct GHL lead capture + drip flow enrollment**, minimizing manual GHL builder friction moving forward.

## 2026-03-03 — Exported modular CTA file + removed direct report link behavior on blog CTA

### Added
- `public/resources/modules/older-adult-brief-cta-module.html`
  - New reusable standalone HTML/CSS module for the **Older Adult Fraud Intelligence Brief** CTA block.
  - Preserves branded visual structure and includes:
    - eyebrow
    - headline
    - supporting copy
    - CTA button
    - footnote
    - dedicated placeholder slot for branded/custom GHL form markup.

### Updated
- `app/blog/older-adult-fraud-report-2024-2025/page.tsx`
  - Replaced bottom CTA anchor link (`/reports/older-adult-fraud-2024-2025`) with a non-navigating button trigger.
  - This removes direct jump behavior so the CTA can be used as a form-first access action.

### Goal
- Prepare a modular, reusable branded CTA foundation for building a custom-styled (non-default) GHL form experience.

## 2026-03-03 — Added gated popup embed to static report page

### Updated
- `public/reports/older-adult-fraud-2024-2025/index.html`
  - Added GoHighLevel popup embed directly to the static interactive report page so gating appears on the actual destination URL.
  - Embed details:
    - form ID: `fMvTbzE0i0SO5sTMPscV`
    - trigger: `showAfter`
    - activation: `activateOnVisit`
    - deactivation: `leadCollected`
    - script loader: `https://link.msgsndr.com/js/form_embed.js`

### Reason
- Previous embed was on the blog wrapper page, while user flow lands on `/reports/older-adult-fraud-2024-2025` (static HTML), so popup was not visible at destination.

## 2026-03-03 — Added GHL popup embed for first gated resource flow

### Updated
- `app/blog/older-adult-fraud-report-2024-2025/page.tsx`
  - Added GoHighLevel popup embed (form ID: `fMvTbzE0i0SO5sTMPscV`) using Next.js-safe implementation:
    - hidden popup iframe with `POPUP` layout
    - trigger: `showAfter` + activation on visit
    - deactivation: `leadCollected`
    - loader script via `next/script` (`https://link.msgsndr.com/js/form_embed.js`)
  - Updated CTA footnote copy to reflect gating behavior:
    - from: `No sign-up required · Shareable with family and colleagues`
    - to: `Quick email opt-in to unlock · Shareable with family and colleagues`

### Goal
- Start users in the first gated resource flow for the Older Adult Fraud Intelligence Brief path.

## 2026-03-03 — Triage CTA rerouted to first gated resource flow

### Updated
- `app/blog/scam-triage-file-001-android-had-3-viruses-but-didnt/page.tsx`
  - Updated the secondary CTA in the ScamBomb Move block.
  - Replaced link target:
    - from: `/resources/phishing-link-survival-guide`
    - to: `/blog/older-adult-fraud-report-2024-2025`
  - Updated CTA label to:
    - `Older Adult Fraud Intelligence Brief 2024–2025`

### Goal
- Ensure triage readers enter the **first gated resource flow** via the Older Adult Fraud Intelligence Brief pathway instead of the previous resource link.

## 2026-03-03 — Added blog visual quality gate note

### Updated
- `CLINE_INSTRUCTIONS.md`
  - Added a permanent **Blog Visual Quality Gate** publishing standard.
  - Requires all blog posts (especially recurring series like Scam Triage) to meet a visual quality baseline before publish:
    - clear hierarchy
    - visually appealing layout
    - structured blocks/checklists where appropriate
    - strong readability on mobile and desktop
    - repeatable format consistency

## 2026-03-03 — Scam Triage File #001 visual template upgrade

### Updated
- `app/blog/scam-triage-file-001-android-had-3-viruses-but-didnt/page.tsx`
  - Upgraded layout for a more polished, repeatable “Scam Triage” format while keeping core narrative content intact.
  - Added a branded **At a glance** hero summary block.
  - Added a 4-card quick-stats strip (time to fix, diagnosis move, threat type, outcome).
  - Added a reusable **Triage workflow** card row for Step 1/2/3 presentation.
  - Added side-by-side structured blocks for:
    - likely chain of events,
    - 3 signs it’s fake.
  - Added a dedicated green **Fix checklist (repeatable formula)** section.
  - Removed duplicated prose sections so the new structured blocks are the primary visual treatment.
  - Added reusable helper components in-file:
    - `Stat`
    - `TriageCard`

## 2026-03-03 — Thank-you copy emphasis tweak (our community)

### Updated
- `app/thank-you/page.tsx`
  - Added yellow + bold emphasis to phrase: **our community**.

## 2026-03-03 — Thank-you emphasis styling tweak

### Updated
- `app/thank-you/page.tsx`
  - Styled these phrases in the confirmation paragraph as yellow + bold:
    - **latest scams**
    - **plus tips, tactics, and tricks**

## 2026-03-03 — Remove Senior Safety Guide promo language site-wide + thank-you copy generalization

### Summary
- Removed the "Free Resource / Get the Free Senior Safety Guide" promotional block and embedded form from key app and report surfaces.
- Updated thank-you messaging to a generalized monthly community/update message (no direct Safety Guide mention).
- Added persistent Cline workflow constraint to avoid local dev runs and enforce commit → changelog → push sequence.

### Removed (UI/Content)
- Deleted the Senior Safety Guide promo section (including `GHLOptInForm`) from:
  - `app/page.tsx`
  - `app/blog/page.tsx`
  - `app/blog/how-to-spot-fake-bank-texts-in-30-seconds/page.tsx`
  - `app/blog/new-usps-delivery-scam-what-to-do/page.tsx`
  - `app/blog/three-questions-to-ask-before-you-click/page.tsx`
  - `app/blog/scam-triage-file-001-android-had-3-viruses-but-didnt/page.tsx`
  - `app/blog/older-adult-fraud-report-2024-2025/page.tsx`
  - `public/reports/older-adult-fraud-2024-2025/index.html`

### Updated copy
- `app/thank-you/page.tsx`
  - Replaced Safety Guide-specific messaging with generalized community/update messaging.
  - Updated metadata description to match monthly scams + AI fraud updates positioning.

### Internal process/docs
- `CLINE_INSTRUCTIONS.md`
  - Added explicit execution constraint:
    - no local dev commands unless explicitly requested,
    - after code changes: minimal commit message, full changelog notes, then push to GitHub.

## 2026-03-02 — GHL opt-in form integration + /thank-you page + CRM wiring

### Added
- `components/GHLOptInForm.tsx` — reusable GHL embedded form component (form ID: fMvTbzE0i0SO5sTMPscV)
- `app/thank-you/page.tsx` — post-opt-in confirmation page with guide delivery message and Pro CTA
- GHL opt-in form section added to homepage (`app/page.tsx`) between blog preview and FAQ
- GHL opt-in form added to blog listing page (`app/blog/page.tsx`) below posts grid
- GHL opt-in form added to all 5 blog post pages before the back-link footer
- GHL opt-in form added to `/reports/older-adult-fraud-2024-2025/index.html` as a section at page end

### CRM Integration (free — no webhook trigger)
- `scam-stories/js/script.js` + `public/scam-stories/js/script.js`: on form success, if user opted in, POSTs email silently to `backend.leadconnectorhq.com/forms/submit` to create GHL contact
- `user-testing/js/script.js` + `public/testing/js/script.js`: same — fires if user answered Yes to follow-up email question

## 2026-02-27 — New blog post: Scam Triage File #001

### Added new post
- Created `app/blog/scam-triage-file-001-android-had-3-viruses-but-didnt/page.tsx`
- Published "Scam Triage File #001: The Android That 'Had 3 Viruses' — But Didn’t"
- Structured as a real incident teardown with step-by-step diagnosis and fix
- Included CTA to ScamBomb app + phishing survival resource

### Added in-post incident images
- Wired all SPAM_DROID screenshots into the article flow:
  - `public/scam-stories/SPAM_DROID_IMG_2927.jpeg`
  - `public/scam-stories/SPAM_DROID_IMG_2928.jpeg`
  - `public/scam-stories/SPAM_DROID_IMG_2929.jpeg`
  - `public/scam-stories/SPAM_DROID_IMG_2930.jpeg`
- Added contextual captions + alt text for accessibility

### Surfaced as latest content across site
- Added as newest item in `app/blog/page.tsx` posts array (tag: `SCAM TRIAGE`)
- Updated homepage blog module in `app/page.tsx`:
  - Featured card now points to Scam Triage File #001
  - Supporting post cards adjusted so the special report remains visible

## 2026-02-26 — Downloadable guide rebrands

### New branded free resources (`/public/*.html`)
- Added and fully rebranded `public/ScamBomb.com Senior Text Fraud Protection Guide.html`
- Added and fully rebranded `public/ScamBomb Phishing Link Step-by-Step Survival Guide.html`
- Removed generic template styling and rebuilt both in ScamBomb brand system

### Branding and UX updates across both guides
- ScamBomb visual language applied: Montserrat, navy (`#0B1324`), yellow (`#F5C84C`), high-contrast typography
- New branded cover pages with SCAMB💣MB lockup, strong hooks, and "Free Downloadable Resource" badge
- Added top back/navigation bar for integration with the main site
- Added polished section hierarchy, branded callout boxes, checklist blocks, and print-friendly layouts
- Added ScamBomb method sections and aligned messaging with site voice
- Added closing CTA blocks and consistent footer tagline treatment

### Positioning
- Both resources are now presented as free evergreen campaign downloads (not paid/tripwire assets)

### URL cleanup
- Moved resources into clean slug folders with `index.html` entry files:
  - `/resources/dont-let-a-text-steal-everything`
  - `/resources/phishing-link-survival-guide`
- Added redirects to canonical clean URLs if `index.html` is hit directly

## 2026-02-25 — Scam stories form, fraud report, blog post

### Scam stories intake form (`/scam-stories`)
- New standalone HTML/CSS/JS form in `scam-stories/` mirrored to `public/scam-stories/`
- 6-section form: About You, How It Happened, Your Story, The Impact, Help Others, Stay in the Loop
- Formspree endpoint: `https://formspree.io/f/mzdaobek`
- Email field required; first name optional; anonymous submit button removed
- Pre-checked opt-in checkbox with yellow recessed background
- Progress bar, auto-save to localStorage, conditional money-lost field
- Blue hearts throughout, absolute asset paths, back-to-site link under logo
- Added "Story?" to desktop + mobile nav and footer

### Older Adult Fraud Intelligence Brief (`/reports/older-adult-fraud-2024-2025`)
- Full HTML report at `public/reports/older-adult-fraud-2024-2025/index.html`
- Redirect added in `next.config.js`
- Interactive effects: scroll-reveal, animated progress bars, counter animations on stats, coloured glow hovers, callout slides, table row highlights, staggered card entrance delays
- Back-to-blog navigation bar at top of report

### Blog post (`/blog/older-adult-fraud-report-2024-2025`)
- New page at `app/blog/older-adult-fraud-report-2024-2025/page.tsx`
- Stat callout cards ($4.9B, +43%, $81.5B), AI voice cloning callout ($897M / $410M H1 2025)
- Large CTA: "View the Interactive Report →"
- Added to blog listing as latest post (SPECIAL REPORT)
- Featured card on homepage blog section with inline stats
