# Changelog

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
