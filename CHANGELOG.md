# Changelog

## 2026-04-29e — Jeff training wordmark color compliance fix

### Fixed
- `public/jeff/training/index.html`
- `public/jeff/training/facebook-posting-guide.html`
- `public/jeff/training/facebook-video-post-guide.html`
- `public/jeff/training/canva-image-guide.html`
- `public/jeff/training/canva-video-guide.html`
- `public/jeff/training/chatgpt-caption-guide.html`
- `public/jeff/training/youtube-upload-guide.html`
- `public/jeff/training/scheduling-posts-guide.html`
  - Corrected ScamBomb wordmark color split in training header/footer.
  - Enforced brand rule: `SCAM` in white and `B💣MB` in gold.
  - Fixed prior mismatches where portions of `BOMB` rendered white.

## 2026-04-29d — Jeff training nav wording clarity update

### Updated
- `public/jeff/training/facebook-posting-guide.html`
- `public/jeff/training/facebook-video-post-guide.html`
- `public/jeff/training/canva-image-guide.html`
- `public/jeff/training/canva-video-guide.html`
- `public/jeff/training/chatgpt-caption-guide.html`
- `public/jeff/training/youtube-upload-guide.html`
- `public/jeff/training/scheduling-posts-guide.html`
  - Renamed lesson-bottom nav button label from `Index` to `Back to Start` for clearer beginner guidance.

## 2026-04-29c — Jeff training usability pass (clickable external tool links)

### Updated
- `public/jeff/training/facebook-posting-guide.html`
- `public/jeff/training/facebook-video-post-guide.html`
- `public/jeff/training/canva-image-guide.html`
- `public/jeff/training/canva-video-guide.html`
- `public/jeff/training/chatgpt-caption-guide.html`
- `public/jeff/training/youtube-upload-guide.html`
- `public/jeff/training/scheduling-posts-guide.html`
  - Converted typed website references into direct clickable links for beginner ease-of-use.
  - Added safe new-tab behavior for external destinations (`target="_blank"` + `rel="noopener noreferrer"`).
  - Covers key workflow tools: Facebook, YouTube, Canva, and ChatGPT.

## 2026-04-29b — Jeff training CSS 404 hotfix (absolute path routing)

### Fixed
- `public/jeff/training/index.html`
- `public/jeff/training/facebook-posting-guide.html`
- `public/jeff/training/facebook-video-post-guide.html`
- `public/jeff/training/canva-image-guide.html`
- `public/jeff/training/canva-video-guide.html`
- `public/jeff/training/chatgpt-caption-guide.html`
- `public/jeff/training/youtube-upload-guide.html`
- `public/jeff/training/scheduling-posts-guide.html`
  - Replaced relative paths with absolute `/jeff/training/...` paths for stylesheet and lesson links.
  - Resolves `style.css` 404 when opening `/jeff/training` (no trailing slash) and restores full branded styling.

## 2026-04-29 — Jeff beginner training course published at /jeff/training

### Added
- `public/jeff/training/index.html`
- `public/jeff/training/facebook-posting-guide.html`
- `public/jeff/training/facebook-video-post-guide.html`
- `public/jeff/training/canva-image-guide.html`
- `public/jeff/training/canva-video-guide.html`
- `public/jeff/training/chatgpt-caption-guide.html`
- `public/jeff/training/youtube-upload-guide.html`
- `public/jeff/training/scheduling-posts-guide.html`
- `public/jeff/training/style.css`
  - Published the new linked beginner training mini-site as a public static course path.
  - Kept all step-by-step instructional content intact while making the course browsable online.

### Updated
- `public/jeff/training/style.css`
  - Refined visual system to better align with ScamBomb branding:
    - Montserrat typography
    - navy/gold color treatment polish
    - uppercase heading language
    - stronger CTA/button treatment and spacing consistency

- `public/jeff/training/*.html`
  - Added brand icon tags and Montserrat font loading.
  - Updated course header/footer branding text to ScamBomb internal training style.

- `next.config.js`
  - Added rewrite for `/jeff/training` → `/jeff/training/index.html`.

## 2026-04-28c — Jeff deck flow + spacing polish

### Updated
- `public/jeff.html`
  - Removed the **Weekly Rhythm** section per request (no time-management framing).
  - Reordered section flow so **AI Tools** appears before **GoHighLevel Scheduling**.
  - Updated Table of Contents to match the new section order.
  - Removed front-slide source line: `Converted directly from: jeff/jeff_training_packet.html`.
  - Added presentation breathing room via spacing refinements:
    - increased section padding
    - improved paragraph/list line-height and spacing
    - increased card spacing/padding
    - increased prompt-box padding and readability

## 2026-04-28b — Jeff wording polish (human-readable responsibility copy)

### Updated
- `public/jeff.html`
  - Rewrote the "Your responsibilities" bullet copy from internal/all-caps directive style into clean, readable presentation language for Jeff.
  - Preserved the same execution intent/KPIs while improving tone and legibility.

## 2026-04-28 — Jeff boot camp KPI realignment (Phase 1 FB-first execution)

### Updated
- `public/jeff.html`
  - Updated Section 01 responsibilities to match current execution priorities:
    - Facebook target is now explicit: **MIN 3–5 posts daily** (batch + schedule supported)
    - YouTube cadence changed from fixed weekly quota to flexible large-core-video + smaller-cutdown model
    - Removed formal weekly reporting requirement in favor of lightweight "done" activity logs
    - Clarified comment management is **not phase one** and will be trained later with tooling
    - Reinforced current primary KPI: consistent Facebook output (3x/day minimum)

  - Updated Weekly Rhythm section to emphasize daily Facebook minimum continuity first, with video production as secondary/supporting flow.

  - Updated pipeline and troubleshooting language to remove phase-one dependency on live comment moderation.

  - Replaced "Weekly Report Template" slide with a simple "Production Tracking Example" format and folded tracking behavior into the Daily Desk Checklist.

## 2026-04-27d — Jeff readability increase + favicon/app-icon alignment on static campaign pages

### Updated
- `public/jeff.html`
  - Increased slideshow typography and spacing for senior readability:
    - larger H1/H2/H3 sizes
    - larger paragraph/list text
    - larger monospace prompt blocks
    - increased slide padding for cleaner visual rhythm

- `public/jeff.html`
- `public/career-scam-case-study/index.html`
- `public/career-scam-case-study/landing.html`
- `public/career-scam-case-study/case-study.html`
- `public/career-scam-case-study/social-carousel.html`
- `public/career-scam-case-study/newsletter.html`
- `public/career-scam-case-study/print-guide.html`
- `public/career-scam-case-study/victim-checklist.html`
- `public/career-scam-case-study/spot-the-scam.html`
- `public/career-scam-case-study/poster-flyer.html`
  - Added explicit static-page icon tags to match current site icon standards used in app layout:
    - `icon`: `/scambomb-favicon-64.png`
    - `apple-touch-icon`: `/scambomb-logo-512.png`

## 2026-04-27c — Added persistent heading style rule + applied heading normalization pass

### Added
- `CLINE_INSTRUCTIONS.md`
  - Added a persistent **Heading Typography Rule** for future agents:
    - all headings in ALL CAPS
    - large/display headings use ScamBomb two-tone white/yellow emphasis treatment

### Updated
- `public/jeff.html`
- `public/career-scam-case-study/index.html`
- `public/career-scam-case-study/landing.html`
- `public/career-scam-case-study/case-study.html`
- `public/career-scam-case-study/social-carousel.html`
- `public/career-scam-case-study/newsletter.html`
- `public/career-scam-case-study/print-guide.html`
- `public/career-scam-case-study/victim-checklist.html`
- `public/career-scam-case-study/spot-the-scam.html`
- `public/career-scam-case-study/poster-flyer.html`
  - Normalized heading presentation to match the documented style guidance.
  - Converted large H1/display headings to all-caps with white/yellow emphasis split.
  - Added/extended uppercase heading behavior for smaller heading levels.

## 2026-04-27b — Jeff boot camp slideshow content corrected to match source packet

### Updated
- `public/jeff.html`
  - Rebuilt slideshow content to closely follow `jeff/jeff_training_packet.html` structure and training intent.
  - Preserved private-route behavior and robots `noindex, nofollow` directive.
  - Included packet-aligned sections:
    - role/big-picture
    - Facebook fundamentals
    - YouTube upload workflow
    - Canva production process
    - GoHighLevel scheduling
    - AI tool usage + prompt templates
    - pipeline workflow
    - quality checklist/troubleshooting
    - quick-reference/report template

## 2026-04-27 — Jeff training slideshow launch + career scam case-study campaign section

### Added
- `public/jeff.html`
  - Published a new private/internal **Jeff training boot camp slideshow** using a Reveal.js presentation format aligned to ScamBomb brand styling.
  - Includes explicit robots directive: `noindex, nofollow`.

- `public/career-scam-case-study/index.html`
  - Added new campaign hub page for the recruiter-impersonation case-study asset family.

- `public/career-scam-case-study/case-study.html`
- `public/career-scam-case-study/landing.html`
- `public/career-scam-case-study/social-carousel.html`
- `public/career-scam-case-study/victim-checklist.html`
- `public/career-scam-case-study/spot-the-scam.html`
- `public/career-scam-case-study/print-guide.html`
- `public/career-scam-case-study/newsletter.html`
- `public/career-scam-case-study/poster-flyer.html`
  - Added a cohesive, on-brand public section for career-scam education/marketing assets with consistent ScamBomb visual language.

### Updated
- `next.config.js`
  - Added rewrite route for `/jeff` → `/jeff.html`.
  - Added rewrite routes for `/career-scam-case-study` and all related child pages.

## 2026-04-24 — Final updates: nav font size, pricing background, favicon fixes, blog branding

### Updated
- `components/Header.tsx`
  - Increased navigation font size from `text-sm` to `text-base` for better senior readability
  - Updated CTA button text size to `text-base` for consistency

- `app/page.tsx`
  - Added subtle bomb icon pattern background to pricing section
  - 107px tile size with fixed attachment for parallax effect
  - 95% navy overlay to maintain contrast with pricing cards

- `app/layout.tsx`
  - Fixed favicon to use proper PNG files (`scambomb-favicon-64.png`, `scambomb-logo-512.png`)
  - Added Apple touch icon support with 512px icon

- `app/globals.css`
  - Added CSS rule to fix button text visibility on yellow backgrounds in prose sections
  - Forces dark text color (#0B1324) on all yellow CTA buttons

- `app/extension/page.tsx`
  - Fixed "Download Now" button text visibility with explicit inline style

- `app/blog/page.tsx`
  - Updated title to use brand styling: "SCAMB💣MB BLOG" with bomb emoji

## 2026-04-24 — Updated favicon + announcement bar messaging

### Updated
- `app/layout.tsx`
  - Changed favicon from `/ScamBomb_favicon_NEW.png` to `/SB_smile_280.png` (correct bomb character logo)
  - Added Apple touch icon support for iOS web app saving
  - Unifies public site branding with the actual app

- `components/Header.tsx`
  - Replaced boring "New pricing:" announcement with exciting savings message
  - New copy: "💰 Save 18% by going annual!" with pricing details
  - Highlights percentage savings (18% for seniors going annual)

## 2026-04-17 — Mobile UX improvements + GHL popup conditional + responsive pricing

### Updated
- `components/Header.tsx`
  - **Mobile Menu Enhancements**: Centered all menu items and increased font size/boldness
    - Changed text size from `text-lg` to `text-xl` for better readability
    - Added `text-center font-bold` to all menu items for improved visual hierarchy
    - Enhanced "Try Free!" button with bold styling
  - **Responsive Pricing Text**: Mobile keeps full pricing, desktop shows simplified version
    - Mobile: "Standard $9/mo or $99/yr · Seniors 60+ $5/mo or $49/yr" (unchanged)
    - Desktop: "Standard $9/mo or $99/yr" (senior pricing hidden on desktop)
    - Uses `md:hidden` class to conditionally show senior pricing only on mobile

### Added
- `components/ConditionalGHLPoliteSlideIn.tsx`
  - New wrapper component that conditionally renders GHL popup based on current route
  - Uses Next.js `usePathname()` hook to detect current page
  - Returns `null` when on homepage (`/`), renders `<GHLPoliteSlideIn />` on all other pages
  - Maintains GHL functionality on blog posts, resources, and other pages while hiding it from homepage

### Updated
- `app/layout.tsx`
  - Replaced direct `<GHLPoliteSlideIn />` component with `<ConditionalGHLPoliteSlideIn />`
  - GHL popup now only appears on non-homepage routes for cleaner homepage experience
  - Preserves GHL lead capture functionality across the rest of the site

## 2026-04-17 — Mobile header layout improvements

### Updated
- `components/Header.tsx`
  - Increased mobile header height by ~30px for better spacing on small screens
  - Fixed tagline positioning to stay at bottom of header section
  - Mobile: `py-4` padding (was `py-3`), Desktop: unchanged `py-3`
  - Removed negative margin from tagline section, replaced with proper padding
  - Result: Logo/menu button stay at top, tagline stays at bottom with adequate spacing

## 2026-04-09b — Stripe checkout route hardening + annual upsell link style update

### Updated
- `app/api/stripe/checkout/route.ts`
  - Added `export const runtime = 'nodejs'` for Stripe route reliability.
  - Improved missing-env response details for `STRIPE_SECRET_KEY` to speed production troubleshooting.

- `app/page.tsx`
  - Annual upsell link under paid plan buttons is now centered and high-contrast.
  - Styling update applied:
    - full line now solid white
    - leading phrase `Or save %17` is yellow for emphasis

## 2026-04-09 — Homepage pricing CTAs now route to Stripe monthly checkout + annual upsell links

### Updated
- `app/page.tsx`
  - Paid pricing card yellow buttons now route directly to Stripe checkout via server route with **monthly** billing default:
    - Standard → `/api/stripe/checkout?plan=standard&billing=monthly`
    - Senior → `/api/stripe/checkout?plan=senior&billing=monthly`
  - Added text links under each paid CTA:
    - `Or save %17 by paying annually!`
    - Annual routes:
      - Standard → `/api/stripe/checkout?plan=standard&billing=annual`
      - Senior → `/api/stripe/checkout?plan=senior&billing=annual`
  - Free card behavior unchanged.

### Added
- `app/api/stripe/checkout/route.ts`
  - New Stripe checkout route that creates subscription sessions from query params:
    - `plan=standard|senior`
    - `billing=monthly|annual`
  - Uses mapped Stripe Price IDs provided for standard/senior monthly+annual plans.
  - Redirects to Stripe Checkout URL on success.

### Updated dependencies
- `package.json`
- `package-lock.json`
  - Added `stripe` package for server-side checkout session creation.

## 2026-04-02b — Softened app terms liability section with explicit AI caution note

### Updated
- `app/app-terms/page.tsx`
  - Added a plain-language caution under liability/disclaimer bullets:
    - the app is powered by AI and can make mistakes
    - users should verify important/high-stakes decisions with confirmed authoritative sources

## 2026-04-02 — Added iPhone app Terms of Use page at /app-terms

### Added
- `app/app-terms/page.tsx`
  - New legal page for ScamBomb iPhone app Terms of Use, published at `/app-terms`.
  - Includes Apple/iOS-specific clauses (App Store relationship, support/warranty language, third-party beneficiary clause).
  - Includes subscription and auto-renew terms, AI limitations/disclaimers, acceptable use, liability limits, termination, indemnity, and contact section.

## 2026-03-31f — Usage-limit verbiage aligned to 5 scans/month + monthly reset messaging

### Updated
- `DEVELOPER_GUIDE.md`
- `CLINE_INSTRUCTIONS.md`

### Verbiage alignment completed
- Replaced legacy/free-limit phrasing with monthly model language where controllable in this repo:
  - `5 scans per month`
  - counter reset language: `resets on the 1st of each month`
  - soft paywall message:
    - `You've used your 5 free scans this month. Upgrade to ScamBomb Pro to scan unlimited — starting at $5/month.`
  - CTA/route guidance to pricing page (`/#pricing`)

### Notes
- No old `3 scans per day` / `per day` / `free uses` paywall verbiage remains in scanned project files.
- This repository currently does not contain live `app/api/*` runtime files referenced by docs; updates here are documentation + internal instruction alignment only.

## 2026-03-31e — Enforced two-tone SCAMB💣MB wordmark across resource covers + print

### Updated
- `public/resources/phishing-link-survival-guide/index.html`
- `public/resources/dont-let-a-text-steal-everything/index.html`
- `CLINE_INSTRUCTIONS.md`

### Brand correction
- Standardized resource cover logo markup to explicit two-part wordmark:
  - `SCAM` segment
  - `B💣MB` segment
- Applied required color behavior:
  - Screen/dark cover: `SCAM` white, `B💣MB` yellow
  - Print/light: `SCAM` black, `B💣MB` yellow
- Ensured no single-color rendering for full wordmark on these pages.

### Process hardening
- Added persistent internal brand rule in `CLINE_INSTRUCTIONS.md` so future edits preserve:
  - two-tone wordmark
  - bomb emoji usage
  - context-aware SCAM color (white on dark, black on light/print)

### Reason
- Align all resource branding with approved ScamBomb identity standard and prevent future regressions.

## 2026-03-31d — Fixed white-on-white print issue + aligned remaining resources to print standard

### Fixed
- `public/resources/phishing-link-survival-guide/index.html`
  - Resolved white-on-white text in print output by explicitly forcing dark text for `.scambomb-method` headings/body/steps and white step-row backgrounds in print mode.

### Updated to match print quality criteria
- `public/resources/dont-let-a-text-steal-everything/index.html`
- `public/resources/ai-voice-cloning-survival-guide/index.html`

### Print standard now applied across guides
- Letter print format with tighter margins (`@page size: letter; margin: 0.35in`)
- Low-ink, high-contrast monochrome print styling
- Reduced decorative print noise (cover callouts hidden in print)
- Larger senior-friendly print typography and cleaner hierarchy
- Stronger page-break control to avoid awkward section splits

### Reason
- Ensure polished, readable, handout-ready print output across all key resources after validating the phishing guide print flow.

## 2026-03-31c — Phishing resource print layout overhaul (senior-friendly)

### Updated
- `public/resources/phishing-link-survival-guide/index.html`

### Print optimization improvements
- Reworked print stylesheet to prioritize clean PDF output over screen parity.
- Tightened print page geometry for fuller-page usage:
  - `@page size: letter`
  - reduced margins (`0.35in`) to avoid oversized white gutters.
- Converted print presentation to low-ink, high-readability format:
  - white backgrounds, dark text, simplified borders.
  - removed decorative cover callouts in print (hook/reassurance/free-badge/tagline).
- Improved readability for older adults:
  - larger print body sizing (`13pt`) and stronger heading hierarchy.
  - reduced visual noise and preserved logical section flow.
- Added stronger page-break control:
  - avoid breaks immediately after headings.
  - avoid splitting key step/list rows where possible.
  - forced **Print Checklist** onto its own dedicated page and ended it with a page break.

### Reason
- Initial print export had awkward breaks and excessive margins; this update creates a more polished, handout-friendly senior-focused print format.

## 2026-03-31b — Resource print UX + print CSS upgrades

### Updated
- `public/resources/ai-voice-cloning-survival-guide/index.html`
- `public/resources/dont-let-a-text-steal-everything/index.html`
- `public/resources/phishing-link-survival-guide/index.html`
- `public/resources/modules/older-adult-brief-cta-module.html`

### What changed
- Added visible **Print** CTA buttons at both:
  - top of page/module
  - bottom of page/module
- Added stronger print handling for cleaner hard copies:
  - `@page` margins (`0.6in`)
  - hide print UI controls in print output
  - preserve existing page-break and section integrity rules

### Reason
- Encourage printing for offline safety use and make resource handouts look polished/consistent when printed.

## 2026-03-31 — Pricing model overhaul + brand standard fix

### Updated pricing copy (sitewide live pages)
- `app/page.tsx`
  - Updated public pricing to:
    - Forever Free: 5 scans/month (+ incentive bonus scan copy)
    - Standard: `$10/mo` or `$99/yr`
    - Senior 60+: `$5/mo` or `$49/yr` (locked-in)
  - Replaced legacy plan wording (`Pro`, old annual messaging) with new standard/senior structure.
- `app/protect-parents/page.tsx`
  - Updated CTA and pricing cards to show full monthly + annual pricing for Standard and Senior plans.
- `components/Header.tsx`
  - Updated announcement bar with full pricing summary: Standard `$10/$99`, Seniors 60+ `$5/$49`.
- `app/about/page.tsx`
  - Updated narrative pricing section to reflect new monthly/annual structure.
- `app/thank-you/page.tsx`
  - Updated pricing CTA label to current four paid options + free plan context.

### Brand consistency fix
- `public/resources/ai-voice-cloning-survival-guide/index.html`
  - Updated centered hero wordmark to brand standard:
    - `SCAM` in white
    - `B💣MB` in yellow
  - Implemented via explicit logo span split + dedicated color classes.

## 2026-03-20 — presentation-live slide fixes (pre-live event)

### Updated
- `public/presentation-live.html`
  - Slide 5 Mission box: "Mission" label now bold white Montserrat (was small grey caps); body text split into two lines: "Help you live safer online with the power of Ai" / "Raise awareness for increasing fraud"
  - Slide 6 quote: replaced green `.quote` class with a yellow-bordered (`#F5C84C`) right-floated box, white italic text

---

## 2026-03-16 — Brand consistency fixes on AI Clone Scam Jammer LP

### Updated
- `public/ai-clone-scam-jammer.html`
  - Added bomb emoji favicon (`<link rel="icon">` SVG) — was missing, all three resource pages have it.
  - Updated header wordmark from `💣 ScamBomb.com` to `SCAMB💣MB.COM` to match resource page brand standard.
  - Updated footer: first column now shows `SCAMB💣MB.COM`; center column now shows the sitewide tagline "Diffuse scams before they blow up in your face! 💙" with copyright below it.

---

## 2026-03-16b — Added GA4 + FB Pixel to new static HTML landing pages

### Updated
- `public/ai-clone-scam-jammer.html`
  - Added Google Analytics GA4 (`G-T61B4NX3J8`) — PageView fires on load.
  - Added Facebook Pixel (`486466700592099`) — PageView fires on load.
- `public/thank-you-scamjammer-purchase.html`
  - Added Google Analytics GA4 (`G-T61B4NX3J8`) — PageView + `purchase` conversion event fires on load ($7, USD).
  - Added Facebook Pixel (`486466700592099`) — PageView + `Purchase` event fires on load ($7, USD).

### Reason
- Static HTML files served via Next.js rewrites bypass `app/layout.tsx` entirely and do not receive the sitewide `<GoogleAnalytics>` component.
- Both pages were live with zero analytics coverage; this restores full visibility and enables conversion tracking for the AI Clone Scam Jammer product funnel.

## 2026-03-15 — AI Clone Scam Jammer product launch (sales page, thank-you, PDF, OG image)

### Added
- `public/ai-clone-scam-jammer.html`
  - Full standalone sales page for the AI Clone Scam Jammer ($7 PDF guide).
  - Includes: real news story (Fox 13 Tampa Bay — Dover, FL, July 2025), FBI/FTC stats grid, benefits checklist, math comparison card, FAQ section, and two CTA blocks.
  - Checkout link: `https://pay.scambomb.com/ai-voice-clone-scamjammer-checkout`
  - Reachable at clean URL: `/ai-clone-scam-jammer` (via Next.js rewrite).
- `public/thank-you-scamjammer-purchase.html`
  - Post-purchase confirmation page with direct PDF download button, 3-step next-action instructions, share CTA, and ScamBomb app upsell.
  - Reachable at clean URL: `/thank-you-scamjammer-purchase` (via Next.js rewrite).
  - Marked `noindex, nofollow`.
- `public/AI_Clone_Scam_Jammer_v1.0_final.pdf`
  - Downloadable guide (6-page PDF) served directly at `/AI_Clone_Scam_Jammer_v1.0_final.pdf`.
- `public/OG_img_scam-jammer-scambomb.png`
  - Open Graph social share image for the sales page.

### Updated
- `next.config.js`
  - Added two rewrites for clean URL access:
    - `/ai-clone-scam-jammer` → `/ai-clone-scam-jammer.html`
    - `/thank-you-scamjammer-purchase` → `/thank-you-scamjammer-purchase.html`
- `package.json`
  - Added missing `@vercel/analytics` dependency to fix Vercel build warning.

### Reason
- Launch first paid digital product under the ScamBomb brand.
- Establish a repeatable static-HTML sales page pattern for future product releases.

## 2026-03-03 — Hero-integrated report branding badge (“Provided by ScamBomb”)

### Updated
- `public/reports/older-adult-fraud-2024-2025/index.html`
  - Added a visible hero banner badge directly in report masthead:
    - bomb mark icon
    - label: `Provided by ScamBomb`
  - Positioned under eyebrow copy so branding appears in the core banner area (not only in the top utility/back bar).

### Reason
- Improve brand visibility in the primary report hero area for clearer “provided by” attribution.

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
