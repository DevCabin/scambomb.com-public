# Changelog

## 2026-06-12 — Add redirect: /live-presentation → /presentation-live

### Added
- `next.config.js`
  - Added permanent redirect from `/live-presentation` to `/presentation-live`
  - Enables cleaner URL access to the live presentation page

## 2026-06-10 — Fix mobile form display on AI Voice Cloning resource page

### Fixed
- `public/resources/ai-voice-cloning-survival-guide/index.html`
  - Changed iframe `data-src` to `src` for immediate form loading
  - Resolves issue where GHL form was not rendering on mobile devices (Comet browser)
  - Form now loads without JavaScript dependency

## 2026-06-10 — Complete presentation updates for Friday workshop

### Updated
- `public/presentation-live.html`
  - Slide 4: Changed "Tonight's Goal" to "Today's Goal"
  - Slide 18: Changed "10 Minute Break" to "THANK YOU" (THANK white, YOU yellow)
  - Slide 19: Final slide "Thank You" → "Thank You" reversed colors (Thank white, You yellow)
  - Fixed mobile form display issues on AI Voice Cloning resource page

### Reason
- Presentation updates for live Friday workshop
- Mobile compatibility verified (works on Safari/Chrome, Comet browser unsupported)

## 2026-06-10 — Update presentation QR codes to free AI Clone Survival Plan

### Updated
- `public/presentation-live.html`
  - Slide 4: Changed "Tonight's Goal" to "Today's Goal"
  - Slide 16 (Family Verification System): Replaced base64-encoded QR with new PNG file, changed text from "$7 Complete Guide" to "free AI Clone Survival Plan"
  - Changed QR code subtext from URL to "Prevent the loss of your life savings. Free Guide."
  - Break slide: Updated QR to use same free resource, removed pricing text
  - Added new QR code file: `public/qr-to-voice-resource.png`

### Reason
- QR codes were incorrectly pointing to paid product ($7 AI Clone Scam Jammer)
- Now correctly point to free gated resource: https://www.scambomb.com/resources/ai-voice-cloning-survival-guide
- Removed all purchase/paid language from presentation slides
- Slide 4 text update for consistency

## 2026-06-02 — Archive AI Clone Scam Jammer product

### Archived
- Moved `public/ai-clone-scam-jammer.html`, `public/thank-you-scamjammer-purchase.html`, `public/AI_Clone_Scam_Jammer_v1.0_final.pdf`, and `public/OG_img_scam-jammer-scambomb.png` to `archive/ai-clone-scam-jammer/` folder
- Removed URL rewrites for `/ai-clone-scam-jammer` and `/thank-you-scamjammer-purchase` from `next.config.js`
- Updated `README.md` to remove product references from completed features list and analytics notes
- Updated `DEVELOPER_GUIDE.md` to remove product from static pages table

### Notes
- Product is preserved in archive for potential future conversion to free gated resource
- All links to the product have been removed from active codebase

## 2026-05-24 — Remove client-side gate from all command center hub pages

The `k` variable on the thank-you page URL is the real lock. Secondary JS gating on the hub pages caused legitimate paying customers to get locked out on cookie clear/new device with no working recovery path. Removed `access.js` script tag, `[data-cc-content]` CSS, the `data-cc-lock` section block, and `data-cc-content` wrapper attribute from all 6 files.

Files: scambomb_senior_tech_mega_hub.html, scambomb_ai_prompts_hub.html, scambomb_foundation_guide.html, scambomb_password_playbook.html, scambomb_slow_computer_guide.html, scambomb_wifi_guide.html

## 2026-05-24 — Remove broken "GET ACCESS" button from all command center gate pages

Removed the non-functional "GET ACCESS →" button (href="#", data-cc-checkout) and its dead checkoutUrl JS block from all 6 command center HTML pages. None of the other resource gates have a purchase CTA on the locked screen.

Files: scambomb_senior_tech_mega_hub.html, scambomb_ai_prompts_hub.html, scambomb_foundation_guide.html, scambomb_password_playbook.html, scambomb_slow_computer_guide.html, scambomb_wifi_guide.html

## 2026-05-24 — Fix unlockPage() race condition with form_embed.js redirect

### Problem
- `unlockPage()` was redirecting to `path + ?resource_key_active=true`, which races with form_embed.js's own post-submit redirect to GHL's thank-you page. Whichever redirect fires last wins, so the unlock URL may never actually load.
- When GHL navigates the parent window to its TYP, our redirect fires but gets overridden; the cookie may never be set.

### Fix
- Simplified `unlockPage()` to call `setAccessCookie()` + `showContent()` in-place — no redirect.
- Cookie is now set immediately on postMessage or iframe load event, before any navigation.
- When user returns from GHL TYP to the resource page (with or without `?resource_key_active=true`), the cookie is present and the gate opens.

### Architectural note
- **GHL config change required**: In GHL, set each form's post-submit redirect URL to the resource page with `?resource_key_active=true` appended (e.g. `https://scambomb.com/career-scam-case-study/?resource_key_active=true`). This is the most reliable unlock path — URL param is read immediately on page load before any JS/postMessage logic.

### Files updated
- `public/js/resource-gate.js`

## 2026-05-24 — Gate unlock fix + resource-gate.js consolidation (all 4 gates)

### Problem
- Removing `form_embed.js` broke the unlock: GHL needs its bridge script present to fire the postMessage that triggers page unlock after form submit.
- Inline backup unlock scripts on each page had a narrow origin check (only `leadconnectorhq.com`) and didn't handle string-format messages.

### Fix
- `public/js/resource-gate.js`
  - Added `unlockPage()` with a once-only flag (prevents double redirect).
  - Added comprehensive postMessage listener: handles object and stringified-JSON payloads, checks `leadconnectorhq.com`, `msgsndr.com`, and `gohighlevel.com` origins, matches all known GHL event name patterns.
  - Added iframe `load` fallback inside `showGate()`: catches GHL redirect-on-submit as a secondary unlock path.
  - `showGate()` now dynamically injects `form_embed.js` (async, once) after setting `iframe.src` — restoring GHL's message bridge without blocking page load.
- Removed inline backup unlock `<script>` blocks from all 4 pages (logic now centralised in resource-gate.js).

### Files updated
- `public/js/resource-gate.js`
- `public/resources/ai-voice-cloning-survival-guide/index.html`
- `public/resources/dont-let-a-text-steal-everything/index.html`
- `public/resources/phishing-link-survival-guide/index.html`
- `public/career-scam-case-study/index.html`

## 2026-05-24 — Gate iframe: lazy-load src to eliminate tab spinner (all 4 gates)

### Problem
- Browser holds the tab loading spinner open until ALL subresources (including iframes) have loaded.
- The GHL form iframe with a hard-coded `src` in HTML caused the page to keep spinning even after content was visually rendered.

### Fix
- Changed gate iframe `src` attribute to `data-src` on all 4 pages — browser no longer loads the GHL form during page load.
- Updated `public/js/resource-gate.js` `showGate()` to set `iframe.src` from `data-src` at the moment the gate is displayed.
- Removed `<script src="https://link.msgsndr.com/js/form_embed.js">` from all 4 pages — not needed; form loads via iframe src, unlock is handled by our postMessage listener.

### Result
- Page `load` event fires immediately (no GHL dependency).
- Tab spinner stops as soon as our page assets load.
- GHL form only loads when the gate is actually shown (gate-not-needed visitors pay zero cost).

### Files updated
- `public/js/resource-gate.js`
- `public/resources/ai-voice-cloning-survival-guide/index.html`
- `public/resources/dont-let-a-text-steal-everything/index.html`
- `public/resources/phishing-link-survival-guide/index.html`
- `public/career-scam-case-study/index.html`

## 2026-05-24 — Gate iframe fixes: defer script + remove scrollbar (all 4 gates)

### Fixed
- `form_embed.js` was loaded as a blocking script tag, causing pages to hang until GHL's CDN responded.
  - Added `defer` to all 4 `<script src="https://link.msgsndr.com/js/form_embed.js" defer>` tags.
  - Pages now render immediately; GHL script loads in background.
- GHL form content height slightly exceeded iframe height, causing a visible vertical scrollbar on the right edge of the gate iframe.
  - Added `scrolling="no"` to all 4 gate iframes to suppress the browser-rendered scrollbar.

### Files updated
- `public/resources/ai-voice-cloning-survival-guide/index.html`
- `public/resources/dont-let-a-text-steal-everything/index.html`
- `public/resources/phishing-link-survival-guide/index.html`
- `public/career-scam-case-study/index.html`

## 2026-05-24 — Career Scam Case Study Hub gate: migrated to official GHL iframe embed

### Why
- Same pattern as the 3 resource guides. Custom form never fired GHL "Form Submitted" workflow trigger.

### Updated
- `public/career-scam-case-study/index.html`
  - Replaced custom `<form data-newsletter-form>` gate block with official GHL inline iframe:
    - `<iframe src="https://api.leadconnectorhq.com/widget/form/fUS7VFLyTIsNKlQ65Rqp" ...>`
    - Wrapped in `.ghl-embed-wrap` (370px clip, `overflow:hidden`, navy bg)
    - `data-trigger-type="alwaysShow"`, `data-height="430"`
  - Added `<script src="https://link.msgsndr.com/js/form_embed.js"></script>` loader after gate div
  - Added postMessage backup unlock listener (identical pattern across all 4 gates)
  - Helper note: "After submitting, your access will unlock instantly on this page."

### Recommended GHL form setting
- On Submit Redirect URL: `https://www.scambomb.com/career-scam-case-study/?resource_key_active=true`

### Status
- All 4 gates now on official GHL iframe pattern. Custom form pattern fully retired.

## 2026-05-24 — Phishing Link Survival Guide gate: migrated to official GHL iframe embed

### Why
- Same pattern as AI Voice Cloning (validated 2026-05-23) and Don't Let a Text Steal Everything (2026-05-24). Custom form never fired GHL "Form Submitted" workflow trigger.

### Updated
- `public/resources/phishing-link-survival-guide/index.html`
  - Replaced custom `<form data-newsletter-form>` gate block with official GHL inline iframe:
    - `<iframe src="https://api.leadconnectorhq.com/widget/form/f62GQmkrmf5tSfGMzYGY" ...>`
    - Wrapped in `.ghl-embed-wrap` (370px clip, `overflow:hidden`, navy bg)
    - `data-trigger-type="alwaysShow"`, `data-height="430"`
  - Added `<script src="https://link.msgsndr.com/js/form_embed.js"></script>` loader after gate div
  - Added postMessage backup unlock listener (identical to voice cloning + text guides)
  - Helper note: "After submitting, your access will unlock instantly on this page."

### Recommended GHL form setting
- On Submit Redirect URL: `https://www.scambomb.com/resources/phishing-link-survival-guide/?resource_key_active=true`

### Status
- All 3 resource gates (AI Voice Cloning, Text Steal, Phishing) now on official GHL iframe pattern. Career hub gate still uses custom form pattern.

## 2026-05-24 — Don't Let a Text Steal Everything gate: migrated to official GHL iframe embed

### Why
- Same pattern as the AI Voice Cloning Survival Guide gate (validated 2026-05-23): custom HTML form created contacts intermittently but never fired the GHL "Form Submitted" workflow trigger. Official GHL iframe widget makes every submit a real form submission.

### Updated
- `public/resources/dont-let-a-text-steal-everything/index.html`
  - Replaced custom `<form data-newsletter-form>` gate block with official GHL inline iframe widget:
    - `<iframe src="https://api.leadconnectorhq.com/widget/form/XbTyKHKvvW1Ad6zIG1A2" ...>`
    - Wrapped in `.ghl-embed-wrap` (370px clip, `overflow:hidden`, navy bg) — same technique used on voice cloning guide to eliminate whitespace gap
    - `data-trigger-type` set to `alwaysShow` (not `showAfter`) so the form renders immediately in the gate card
    - `data-height="430"` on the iframe; wrapper clips to `370px`
  - Added `<script src="https://link.msgsndr.com/js/form_embed.js"></script>` loader after the gate div
  - Added postMessage backup unlock listener (same as voice cloning guide):
    - Listens for submit/success messages from `*.leadconnectorhq.com`
    - On success: sets `scambomb_resource_access=true` cookie + redirects to `?resource_key_active=true`
  - Replaced old error/note divs with a single helper note: "After submitting, your access will unlock instantly on this page."

### Recommended GHL form setting
- Set On Submit Redirect URL to: `https://www.scambomb.com/resources/dont-let-a-text-steal-everything/?resource_key_active=true`

### Verification checklist (post-deploy)
1. Open page (incognito) → submit test email in iframe
2. Confirm submission appears in GHL → that form → Submissions
3. Confirm workflow enrollment fires
4. Confirm page unlocks after submit (GHL redirect or postMessage fallback)

## 2026-05-23 — Shrink GHL iframe + kill baseline gap on AI voice clone gate

### Issue
- A visible ~10px gap was rendering under the GHL embed iframe inside the gate card. Two compounding causes:
  1. Iframe height was 460px (slightly too tall for the GHL form's actual rendered height).
  2. Iframes are inline by default, which inherits parent `line-height` and adds a phantom baseline gap below the element.

### Updated
- `public/resources/ai-voice-cloning-survival-guide/index.html`
  - Iframe inline style:
    - `height:460px` → `height:450px`
    - added `display:block`, `margin:0`, `vertical-align:top`
  - Iframe `data-height` attribute: `460` → `450` (so the GHL embed script does not auto-resize it back up).
  - Wrapper `.ghl-embed-wrap` now has inline `line-height:0;font-size:0;` to collapse the inline-context whitespace below the iframe.

### Result
- The hole the iframe sits in is now flush with the iframe content (no mystery margin under it).

## 2026-05-23 — Fixed broken news segment image on Scam Triage File #002

### Added
- `public/scam-stories/woman-loses-15k-in-ai-scam.png` — Fox 13 Tampa Bay news segment screenshot used in the Local news segment card.

### Updated
- `app/blog/she-heard-her-daughter-crying-ai-voice-clone-scam/page.tsx`
  - Pointed the Local news segment `<img>` at the actual delivered filename:
    - was: `/scam-stories/fox13-dover-ai-voice-clone.png` (missing → broken image)
    - now: `/scam-stories/woman-loses-15k-in-ai-scam.png`

## 2026-05-23 — Gate now uses official GHL iframe embed (fires real "Form Submitted" trigger)

### Why
- Prior gate used a custom HTML form that POSTed to GHL via hidden iframe. That path created contacts intermittently but **never fired the GHL "Form Submitted" workflow trigger**, so no submissions appeared in the form's Submissions tab and no enrollments fired in workflows.
- Switching to the official GHL inline iframe widget makes every submit a real GHL form submission — the workflow trigger fires and submissions track properly.

### Updated
- `public/resources/ai-voice-cloning-survival-guide/index.html`
  - Replaced the custom gate `<form class="newsletter-form" data-newsletter-form>` block (input + button + error/note) inside `.gate-card` with the official GHL widget embed:
    - `<iframe src="https://api.leadconnectorhq.com/widget/form/kWxJbVTosuKXR0yIvSU1" ...>` (full data attributes from GHL Embed code)
    - `<script src="https://link.msgsndr.com/js/form_embed.js"></script>` loader appended after the gate
  - Iframe wrapper styled to fit the existing branded gate card (white background, 460px height, full width, rounded corners).
  - Added a small helper note under the iframe: *"After submitting, your access will unlock instantly on this page."*

- Added a **postMessage backup unlock listener** directly on the page:
  - Listens for submit/success messages from `*.leadconnectorhq.com` origins.
  - On success, sets the `scambomb_resource_access=true` cookie + redirects to `?resource_key_active=true` to unlock the page.
  - This means the gate still works even if the GHL form's On-Submit Redirect URL isn't configured.

### Recommended GHL form setting (cleanest path)
- Set the form's **On Submit Redirect URL** to:
  - `https://www.scambomb.com/resources/ai-voice-cloning-survival-guide/?resource_key_active=true`
- With that set, GHL's native redirect handles the unlock and the postMessage listener acts as belt-and-suspenders.

### Scope
- Only the AI Voice Cloning Survival Guide gate has been migrated to the official iframe embed in this commit.
- The other 3 gated resource pages (text, phishing, career hub) are unchanged and still use the custom form pattern until this new pattern is validated.

### Verification checklist (post-deploy)
1. Open the page (incognito) → submit a test email in the iframe.
2. Confirm submission appears in GHL → Sub-Account → that form → Submissions.
3. Confirm enrollment fires in the linked Workflow's Enrollment History.
4. Confirm the page unlocks after submit (either via GHL redirect or postMessage fallback).

## 2026-05-23 — Scam Triage File #002: added attributed links to Fox 13 source article

### Updated
- `app/blog/she-heard-her-daughter-crying-ai-voice-clone-scam/page.tsx`
  - Added 3 brand-gold links to the original Fox 13 Tampa Bay article:
    - In the header byline ("Fox 13 Tampa Bay" → article URL)
    - In the Local news segment card (headline + a "Watch / read the original report on fox13news.com" line)
    - In the source footer paragraph
  - All links use `utm_source=scambomb.com` for outbound attribution tracking:
    - `https://www.fox13news.com/news/dover-woman-loses-15k-after-scammers-used-artificial-intelligence-impersonate-daughter?utm_source=scambomb.com`
  - Links open in a new tab with `rel="noopener noreferrer"` for safety.

## 2026-05-23 — Scam Triage File #002 readability pass (larger fonts for older-adult audience)

### Updated
- `app/blog/she-heard-her-daughter-crying-ai-voice-clone-scam/page.tsx`
  - Increased font sizes site-wide on this post for better accessibility (older-adult audience):
    - H1 stepped up to `text-4xl sm:text-5xl`
    - Subhead increased to `text-xl sm:text-2xl`
    - Eyebrows on sections increased to `text-sm` (from `text-xs`)
    - Body prose bumped to `prose-xl` throughout
    - "At a glance" body increased to `text-lg sm:text-xl`
    - Red-flag cards: titles now `text-xl sm:text-2xl`, body now `text-lg`
    - "Why this story worked" + "What ~3 sec of audio can do": lists bumped to `text-lg`
    - Family fix checklist: items bumped to `text-lg sm:text-xl`
    - Stat cards: values now `text-2xl sm:text-3xl`, labels `text-sm`
    - ScamBomb Move CTA: headline `text-2xl sm:text-3xl`, body `text-lg sm:text-xl`, buttons enlarged to `text-lg` with `px-6 py-4`
    - "Back to all posts" link upsized to `text-lg`

## 2026-05-23 — Scam Triage File #002 polish: brand-gold headline + blog index newest-on-top

### Updated
- `app/blog/she-heard-her-daughter-crying-ai-voice-clone-scam/page.tsx`
  - Styled the closing half of the H1 in brand gold:
    - “She Heard Her Daughter Crying for Help. **It Wasn’t Her Daughter.**”
    - The second sentence now uses `text-yellow-300`.

- `app/blog/page.tsx`
  - Changed Latest Articles grid to include the featured post.
    - Previously: `posts.slice(1)` (grid skipped the featured/newest post)
    - Now: full `posts` array
  - Result: the new post appears as both the **featured hero card** and the **first card** in the Latest Articles grid right below — making the newest post unmistakably on top in both spots.

## 2026-05-23 — New blog post: Scam Triage File #002 (AI Voice Clone — Dover, FL)

### Added
- `app/blog/she-heard-her-daughter-crying-ai-voice-clone-scam/page.tsx`
  - New blog post: **Scam Triage File #002 — She Heard Her Daughter Crying for Help. It Wasn’t Her Daughter.**
  - Format follows the established Scam Triage visual template (At a glance card, 4-stat strip, structured cards, fix checklist, ScamBomb Move CTA).
  - Includes a **Local news segment** card with branded image placeholder + Fox 13 Tampa Bay attribution.
    - Image path referenced: `/scam-stories/fox13-dover-ai-voice-clone.png` (image asset to be added separately to `public/scam-stories/`).
  - Includes a **7 Red Flags** grid + an 8th "ScamBomb Rule" card on AI voice cloning realities (~3 sec of audio).
  - Primary CTA: link to gated free resource — **AI Voice Cloning Survival Guide** (`/resources/ai-voice-cloning-survival-guide`).
  - Secondary CTA: link to `https://app.scambomb.com`.
  - Source attribution: Fox 13 Tampa Bay (Aaron Mesmer), interview with Sharon Brightwell of Dover, FL.

### Updated — site-wide latest post placement
- `app/blog/page.tsx`
  - Added new post as `posts[0]` (becomes the featured post on `/blog`).
  - All prior posts shift one slot down; index now leads with Scam Triage File #002.
- `app/page.tsx` (homepage blog module)
  - Replaced featured latest post card with Scam Triage File #002:
    - eyebrow: `SCAM TRIAGE FILE #002`
    - quick stats updated: `$15,000` loss / `~3 sec` audio to clone
  - Reorganized 3-card row to keep series + variety visible:
    - `SCAM TRIAGE` — Scam Triage File #001 (Android scareware)
    - `SPECIAL REPORT` — Older Adult Fraud Brief 2024–2025
    - `ALERT` — New USPS delivery scam
  - Removed `three-questions-to-ask-before-you-click` from homepage card row (still present in `/blog` index).

### Notes
- Post meets the **Blog Visual Quality Gate** (hierarchy, structured blocks, repeatable Scam Triage series format).
- No image file committed in this change — only the referenced path. Drop `fox13-dover-ai-voice-clone.png` into `public/scam-stories/` to light up the news card visual.

## 2026-05-23 — Gate CTA + conversion copy refresh (4 resource gates)

### Updated
- `public/resources/ai-voice-cloning-survival-guide/index.html`
  - Gate body copy rewritten to emphasize immediate unlock and specific value (verification script + family code word setup + exact response steps).
  - Gate CTA button changed:
    - `SEND MY PLAN →` → `GIVE ME INSTANT ACCESS →`

- `public/resources/dont-let-a-text-steal-everything/index.html`
  - Gate body copy rewritten for stronger FB conversion intent (top text scam patterns + what to reply/not reply + quick checklist value).
  - Gate CTA button changed:
    - `SEND MY PLAN →` → `GIVE ME INSTANT ACCESS →`

- `public/resources/phishing-link-survival-guide/index.html`
  - Gate body copy rewritten to stress urgent post-click recovery value (first 5 minutes + account lockdown + bank/credit protection).
  - Gate CTA button changed:
    - `SEND MY PLAN →` → `GIVE ME INSTANT ACCESS →`

- `public/career-scam-case-study/index.html`
  - Gate body copy rewritten to highlight hub value (real examples + red flags + share-ready assets).
  - Gate CTA button changed:
    - `SEND MY ACCESS LINK →` → `GIVE ME INSTANT ACCESS →`

### Messaging intent
- Removed “we’ll send you the access link” framing from gate hero copy.
- Reframed all 4 gates around **instant on-page unlock** with stronger, benefit-led language for social/Facebook traffic.

### Copy tightening follow-up
- Tightened all 4 gate paragraphs for faster scanning:
  - added explicit line breaks (`<br>`) after the “unlock instantly —” lead-in
  - reduced sentence length and removed extra wording
  - preserved the same core value props per page (voice, text, phishing, career hub)

### Gate helper note + form layout follow-up
- Updated gate helper microcopy on all 4 gates:
  - from: `We’ll email your access link right away.`
  - to: `We'll email you confirmation and links to more free resources.`
- Adjusted gate form layout on all 4 gates:
  - wider desktop row (input left, submit button right)
  - reduced input/button sizing for cleaner horizontal fit
  - mobile behavior keeps stacked layout with equal full-width controls

### Gate overlay fix follow-up (revert + corrected see-behind)
- Reverted prior overlay attempt commit (`8a69dad`) due to centering regression observed in-browser.
- Implemented corrected overlay behavior across all 4 gated pages:
  - gate remains perfectly centered via fixed full-screen flex container
  - underlying page content stays rendered and visible behind gate
  - lock state uses `body.gate-is-open` to blur/dim background content (instead of hiding it)
- Updated tuning for “see behind the white” behavior:
  - very light scrim: `rgba(11,19,36,0.15)`
  - blur: `8px`
  - background opacity while gated: `0.35`
- Updated shared JS gate toggling in `public/js/resource-gate.js`:
  - `showGate()` now applies `gate-is-open`, keeps content visible, and uses `display:flex`
  - `showContent()` removes `gate-is-open` and hides the gate

### Phishing guide headline color tweak
- Updated `public/resources/phishing-link-survival-guide/index.html` cover headline styling:
  - changed “Scam Link?” to brand gold (`var(--yellow)`) per visual request.

### Gate interaction hardening (right-click while gated)
- Updated `public/js/resource-gate.js` to disable right-click context menu while gate is active:
  - added `contextmenu` listener with `preventDefault()` when `body.gate-is-open` is present
  - behavior automatically restores after unlock since blocking only runs in gated state.

### Print logo color fix (3 resource guides)
- Updated print-only CSS in the 3 resource guides so the `SCAM` wordmark text prints in brand navy instead of near-white:
  - `public/resources/ai-voice-cloning-survival-guide/index.html`
  - `public/resources/dont-let-a-text-steal-everything/index.html`
  - `public/resources/phishing-link-survival-guide/index.html`
- Scope is print-only (`@media print`) and does not alter on-screen logo colors.

### Resource gate form routing fix (resource-specific GHL workflows)
- Updated `public/js/resource-gate.js` so each resource gate now submits to its own matching GHL form ID instead of using one generic form for all 3 guides.
- New per-resource routing:
  - AI Voice Cloning Survival Guide → `kWxJbVTosuKXR0yIvSU1`
  - Don't Let a Text Steal Everything → `XbTyKHKvvW1Ad6zIG1A2`
  - Phishing Link Survival Guide → `f62GQmkrmf5tSfGMzYGY`
- Applied to both submission paths:
  - primary JSON submit to `backend.leadconnectorhq.com/forms/submit`
  - fallback widget POST to `api.leadconnectorhq.com/widget/form/{formId}`
- This aligns page submissions with resource-specific GHL workflow triggers and should resolve the "No Enrollments found" mismatch caused by hardcoded generic form usage.

### Resource gate trigger compatibility fix (widget submit as primary)
- Updated `public/js/resource-gate.js` to use the GHL widget form POST path as the primary submission method for resource gates:
  - `https://api.leadconnectorhq.com/widget/form/{formId}`
- Removed `backend.leadconnectorhq.com/forms/submit` as the primary path for gated resources after audit indicated it may create contacts without firing the same "Form Submitted" workflow event as embedded/widget form submissions.
- Resource gates still redirect to the same self-unlock URL after submit, but now do so through the workflow-compatible submission path first.

## 2026-05-23 — Resource gate sync + redirect unification (3 resource guides + Career hub)

### Updated
- `public/resources/dont-let-a-text-steal-everything/index.html`
  - Synced to current production structure.
  - Replaced inline gate/submit script with external loader:
    - `<script src="/js/resource-gate.js"></script>`

- `public/resources/ai-voice-cloning-survival-guide/index.html`
  - Synced to current production structure.
  - Replaced inline gate/submit script with external loader:
    - `<script src="/js/resource-gate.js"></script>`

- `public/resources/phishing-link-survival-guide/index.html`
  - Synced to current production structure.
  - Replaced inline gate/submit script with external loader:
    - `<script src="/js/resource-gate.js"></script>`

- `public/career-scam-case-study/index.html`
  - Added resource gate UI block (`#resource-gate`) and opt-in form (`data-newsletter-form`).
  - Wired page to shared external gate/submit script:
    - `<script src="/js/resource-gate.js"></script>`
  - This page now follows the same unlock pattern as the three `/resources/*` guides.

- `public/js/resource-gate.js`
  - Centralized gate + submission logic for resource pages.
  - Gate behavior:
    - unlock param: `?resource_key_active=true`
    - cookie: `scambomb_resource_access=true` (30 days)
    - URL cleanup after unlock via `history.replaceState(...)`
  - Redirect behavior after successful opt-in (primary + fallback submit paths):
    - redirect back to same page with `?resource_key_active=true`
  - Added support for Career hub layout selectors:
    - `main.wrap`
    - `footer.page-footer`

### Funnel/ops notes
- Confirmed why prior redirect behavior ignored GHL form-level redirect settings:
  - page JS was forcing client-side redirect, overriding GHL redirect destination.
- New flow now consistently self-unlocks destination page after submission.

### Context captured during this sync
- Verified production/repo drift existed for resource pages before this update.
- Corrected Career Case Study target path to non-`/resources` URL:
  - `https://www.scambomb.com/career-scam-case-study/index.html`

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
