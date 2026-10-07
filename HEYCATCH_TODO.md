# HEYCATCH_TODO — ScamBomb.com Audit Fix Plan (Resume-From-Scratch)

> Created 2026-10-07. Repo: `/Users/george/GITHUB/scambomb.com-public` (branch `dev`).
> App repo (do NOT confuse): `/Users/george/GITHUB/ScamBomb-Ai`.
> Last verified commit: `bb9394c (2026-10-07) fix: add SEO metadata, structured data, and crawler files`.
> Rulebook: `HEYCATCH_PLAN.md` (never invent findings; stub + flag what needs owner; keep D-code + was-score exact).
> Workflow (from `CLINE_INSTRUCTIONS.md`): work on `dev`, minimal commit msg, update `CHANGELOG.md` + docs, push `origin dev`, PR `dev`→`main`. DO NOT run `npm run dev` unless asked.

## 0. Context To Reload (if session lost)

1. Two audits, same ID, different surfaces:
   - Site/positioning: `https://app.heycatch.ai/audit/hck_pk_FOBHpCizi6CBPDa5KdcxNY94laUP1u4Z?surface=website` (JS-gated; fetch only yields 6 dimension summaries — D-codes NOT retrievable via fetch).
   - SEO: `https://app.heycatch.ai/audit/hck_pk_FOBHpCizi6CBPDa5KdcxNY94laUP1u4Z/seo` (fetch yields Crawlability + Authorship fully; Page clarity + Quotability truncate — DO NOT guess, ask owner to paste expanded text).
2. Was-scores (use verbatim on re-run comparison):
   - Site: Positioning 18/25 Partial | Conversion 19/25 Partial | Trust 7/20 Fail | Paywall 12.5/15 Pass | SEO 9/15 Partial | Brief 8/10 Pass.
   - SEO overall 55/100 (Needs work, checked 6 Oct 2026 — BEFORE bb9394c, so re-run required): Crawlability 16/23 | Page clarity 12.8/22 | Quotability 17.2/24 | Authorship 3.7/21.
3. `bb9394c` touched 5 files: `app/layout.tsx` (OG+Twitter), `app/page.tsx` (FAQPage+Organization JSON-LD), `components/PricingSection.tsx` (Most Popular badge + $40/mo anchor), `public/robots.txt` (NEW), `public/sitemap.xml` (NEW static 20 URLs).
4. Live site `https://scambomb.com/` H1 is now `Scam Checker for Families / Know What's Real Before You Act.` — positioning complaint fixed. Prices consistent ($9/$99, $5/$49; zero `9.99` hits).

## 1. Verification Summary (done 2026-10-07 — do not redo)

- Positioning: FIXED (H1 + title tag).
- Conversion: HALF — price drift fixed; duplicated pricing sections remain (`app/page.tsx` mini $9/$5 block ~L188 vs full `<PricingSection>`).
- Trust 7/20: UNTOUCHED — testimonials still commented out (`app/page.tsx:383-390`, `Quote` Dana/Michael stubs); `thousands of families` still in footer; zero third-party signals.
- Paywall: FIXED (Most Popular + value anchor on homepage).
- SEO crawlability: `t_robots` FIXED in repo; `t_sitemap_fresh` PARTIAL (static, no lastmod, missing routes, no IndexNow); `t_canonical` NOT DONE (0/33, no `alternates.canonical`); `t_security_headers` NOT DONE (no `headers()` in public `next.config.js` — port from app repo).
- SEO authorship (worst): `a_org_schema` PARTIAL (homepage only, not layout); `a_sameas` PARTIAL (1/3+: Facebook only); `a_author_schema`/`a_author_page`/`a_author_diversity` NOT DONE; `a_external_sources` NOT DONE (`triage-003` only links app.scambomb.com).
- Contradictions: `/testing` crawled but footer link removed — redirect still in `next.config.js`; `robots.txt` disallows `/extension-privacy` while `sitemap.xml` lists it.

## 2. Owner Blockers (need answers before P2/P3 — see §7)

- (a) sameAs URLs: which company profiles exist? (LinkedIn/GitHub/X/YouTube/G2/Crunchbase) — paste exact URLs. Do NOT invent.
- (b) Editorial disclosure wording: is `AI-assisted draft, reviewed and edited by George Featherstone` accurate? Else provide true process.
- (c) 2 primary sources for `triage-003` (or approve FTC + Microsoft support docs).
- (d) `/testing` route: delete or keep?
- (e) Testimonials: 2–3 REAL quotes + name + role, or approve de-claim path (Option B §6)?
- (f) Paste expanded Page clarity + Quotability pillar text from audit page.

## 3. Progress Tracker (check off as you go)

- [x] P1-1 canonical (App Router) — done, commit 0342f36
- [x] P1-2 canonical (static HTML) — done, commit 0342f36
- [x] P1-3 `app/sitemap.ts` + lastmod — done (IndexNow doc STILL TODO)
- [x] P1-4 security headers — done, commit 0342f36
- [x] P1-5 `/testing` + robots/sitemap contradiction — done, commit 0342f36
- [x] P2-6 `/author/george-featherstone` page + byline links — done, commit 0a3a260
- [x] P2-7 Article+Person JSON-LD; Organization to layout — done (sameAs=Facebook only, LinkedIn pending)
- [x] P2-8 external sources (triage-003) — done (FTC + Microsoft); other posts NOT audited yet
- [x] P2-9 disclosure line — done, commit 0a3a260
- [x] P3-10 pricing dedupe — done, commit 65a7ab4
- [x] P3-11 trust (testimonials live + de-claim) — done; third-party badge still flagged
- [x] P3-12 OG image + Product/Offer schema + comparison page — done
- [ ] P4 deploy + verify + re-run both audits + changelog output


## 4. P1 — Crawlability (all repo-side, no owner input needed)

### P1-1 Canonical for App Router pages (~3.0 pts, `t_canonical` partial)
Goal: every App Router page emits self-referencing canonical.
Files: `app/layout.tsx` + each `app/*/page.tsx` with unique `metadata` + `app/blog/*/page.tsx`.
Steps:
1. Read `app/layout.tsx` lines 17-51 (metadata block, has `metadataBase` already).
2. Add `alternates: { canonical: '/' }` to root metadata as default.
3. For each page (run `find app -name page.tsx | sort`, 35 files): add `alternates: { canonical: '<path>' }` to its `metadata` export (e.g. `/about`, `/blog/is-this-a-scam`). Dynamic `[location]` route: canonical to `/member-signup`.
4. Verify: `grep -rn "alternates" app/ | wc -l` should equal page count. Do NOT run `npm run dev`.
Done when: all App Router pages emit `<link rel="canonical" href="https://scambomb.com/<path>">`.
Commit: `Add self-referencing canonicals to App Router pages`.

### P1-2 Canonical for static HTML rewrites (`t_canonical` remainder)
Goal: literal `<link rel="canonical">` in every public HTML file Google can crawl.
Files: `public/career-scam-case-study/*.html` (9), `public/resources/*/index.html` (4), `public/reports/*`, `public/scam-stories/index.html`, `public/ai-prompts/index.html`, `public/poll/index.html`, `public/testing/index.html` (if kept), `public/presentation-*.html`, `public/jeff.html`.
Steps:
1. List: `find public -name "*.html" | sort`.
2. For each file mapped by `next.config.js` rewrites/redirects to a public URL, insert in `<head>`: `<link rel="canonical" href="https://scambomb.com/<public-path>">`.
3. Skip purely internal assets (`thank-you/command-center/*`, `jeff/training/*`) unless they have public URLs — document skips in CHANGELOG.
Done when: every crawled static URL has canonical.
Commit: `Add canonical tags to static HTML pages`.

### P1-3 Generated sitemap + lastmod + IndexNow (2.0 pts, `t_sitemap_fresh`)
Goal: replace static `public/sitemap.xml` with `app/sitemap.ts` per audit instruction.
Files: DELETE `public/sitemap.xml`; CREATE `app/sitemap.ts`.
Steps:
1. Read current `public/sitemap.xml` (20 URLs) as URL inventory baseline.
2. Write `app/sitemap.ts` exporting default function returning entries for: `/`, `/about`, `/contact`, `/blog` + all 8 dirs in `app/blog/` (read from filesystem), `/extension`, `/resources`, `/member-signup`, `/scam-stories`, `/terms`, `/extension-privacy` (only if kept crawlable — see P1-5), `/credit-unions`, `/protect-parents`, `/poll`, `/presentation`, `/presentation-*`, `/resources/*` static, `/reports/*`, `/career-scam-case-study/*`.
3. `lastmod`: use each blog post's `<time dateTime>` value (ground truth); static pages use file mtime or commit date — never build date. Document source per URL in code comment.
4. Delete `public/sitemap.xml` (Next serves `/sitemap.xml` from the route). Verify `public/robots.txt` Sitemap line still matches.
5. IndexNow: document the one-POST step in `DEVELOPER_GUIDE.md` (endpoint, key, URL list) — do NOT auto-ping from build.
Done when: `/sitemap.xml` is route-generated with honest lastmod covering ALL public URLs.
Commit: `Generate sitemap from route with honest lastmod`.

### P1-4 Security headers (1.0 pt, `t_security_headers`)
Goal: send CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy on homepage (all routes).
File: `next.config.js` (public repo — currently has NO `headers()`; reference copy lives at `/Users/george/GITHUB/ScamBomb-Ai/next.config.js` lines 19-90).
Steps:
1. Read the app repo block first — copy structure, then ADAPT `connect-src`/`script-src` to public site's actual third parties (Google Analytics G-T61B4NX3J8, Clarity, Facebook, Vercel Analytics/SpeedInsights, Kit). Do NOT blind-paste tessdata/projectnaptha entries the public site doesn't use.
2. Add `async headers()` to public `next.config.js` with the 4 headers (+ keep existing rewrites/redirects untouched).
3. Verify via `npm run build` + deployed header check (curl -sI https://scambomb.com/ | grep -i "content-security\|x-frame\|referrer").
Done when: all 4 headers present on `/`.
Commit: `Add security headers to public site`.

### P1-5 Route hygiene (`/testing` + robots/sitemap contradiction)
Files: `next.config.js` (redirects), `public/robots.txt`, sitemap (P1-3).
Steps:
1. Owner answer (d): if DELETE — remove `/testing` redirect from `next.config.js` + delete `public/testing/`; if KEEP — add canonical (P1-2) + allow in robots.
2. `/extension-privacy`: robots DISALLOWS it but sitemap LISTS it. Decide: either remove from sitemap (keep disallow) or remove disallow (keep in sitemap). Note: `app/extension-privacy/page.tsx` exists as real route — prefer crawlable (remove disallow) unless legal says otherwise.
Done when: no URL is simultaneously sitemapped + disallowed; `/testing` fate documented.
Commit: fold into P1-3 or P1-4 commit (note in CHANGELOG).



## 5. P2 — Authorship (~13 pts, worst pillar — NEEDS owner answers a/b/c first)

### P2-6 Author page + byline links (2.0 pts, `a_author_page`)
Files: CREATE `app/author/george-featherstone/page.tsx`; EDIT all 8 `app/blog/*/page.tsx` headers.
Steps:
1. Create author page: bio (20-yr web developer + AI systems engineer per `/about`), photo/logo, experience, full piece list linking all 8 posts, link to `/about`.
2. In each blog post header (below `<time>`), add byline: `By <Link href="/author/george-featherstone">George Featherstone</Link>`.
3. Verify: `grep -rln "author/george-featherstone" app/blog/` = 8.
Quality gate: page must pass Blog Visual Quality Gate (cards/blocks, not wall-of-text).
Commit: `Add author page and byline links`.

### P2-7 Article + Person + Organization schema (3.0 + 2.0 + 2.0 pts)
Files: `app/layout.tsx`, each `app/blog/*/page.tsx` (or shared helper `components/BlogSchema.tsx` — RECOMMENDED to avoid 8x duplication).
Steps:
1. Create `components/BlogSchema.tsx` accepting `{title, description, slug, datePublished, authorName, authorUrl}` rendering `BlogPosting` JSON-LD with `author: {@type: Person, @id: authorUrl, url, sameAs: [owner-confirmed profiles]}`.
2. Use it in all 8 posts with each post's real title/desc/date (from existing `metadata` + `<time dateTime>`).
3. MOVE `organizationSchema` from `app/page.tsx:35` to `app/layout.tsx` so it ships on all 33 pages; `sameAs` = 3+ URLs from owner answer (a) — currently only Facebook. One consistent `name: ScamBomb` spelling.
4. Remove now-duplicate Organization block from `app/page.tsx` (keep FAQPage there).
Done when: every article emits BlogPosting+Person; every page emits Organization.
Commit: `Add Article/Person schema, move Organization to layout`.

### P2-8 External primary sources (1.3 pts, `a_external_sources`)
Files: `app/blog/scam-triage-file-003-your-computer-is-infected/page.tsx` FIRST (the named failure — currently only outbound is app.scambomb.com), then audit other 7 posts.
Steps:
1. Add ≥2 links to INDEPENDENT PRIMARY sources (owner answer c; fallback FTC report + Microsoft support doc on browser notification permissions). Link primary, not blogs. Verify each resolves (curl -sI 200).
2. For each other post: `grep -o 'href="https://[^"]*"' app/blog/<slug>/page.tsx` — count distinct external primary domains; add where <2.
Done when: all posts cite ≥2 live primary sources.
Commit: `Cite primary sources in blog posts`.

### P2-9 Editorial disclosure (`a_author_diversity`, 3.0 pts)
Files: all 8 `app/blog/*/page.tsx` (same edit point as byline — combine with P2-6).
Steps:
1. Owner answer (b) for exact wording. Fallback ONLY if owner approves: `This guide was drafted with AI assistance and reviewed, edited, and approved by George Featherstone.`
2. Render as small muted line under byline. Do NOT invent process claims.
Commit: fold into P2-6 commit.


## 6. P3 — Site-audit remainders (Conversion dedupe, Trust, SEO finish)

### P3-10 Pricing dedupe (Conversion 19/25)
File: `app/page.tsx` (~L180-240 mini `$9`/`$5` block).
Steps:
1. Read the mini-block + full `<PricingSection/>` usage; confirm overlap.
2. Delete mini price cards; replace with anchor CTA linking `#pricing` (e.g. `See membership options`).
3. Single source of truth = `components/PricingSection.tsx` (already has Most Popular + value anchor).
Done when: prices appear ONCE on homepage scroll.
Commit: `Remove duplicate homepage pricing block`.

### P3-11 Trust rebuild (Trust 7/20 — NEEDS owner answer e)
File: `app/page.tsx` (`{/* Testimonials (hidden) */}` ~L383-390, `Quote` component ~L569) + footer (`layout.tsx` newsletter copy).
Option A (preferred): un-hide section with 2–3 REAL owner-provided quotes (name + role, e.g. caregiver / senior 72). Wire `Quote` back in.
Option B (no quotes available): replace `Join thousands of families…` (footer + live copy) with verifiable micro-proof: `Built by a family caregiver · Privacy-first: messages never stored · Cancel anytime` + link `/about`. Keep `Quote` stubbed + flagged, do NOT invent names.
Third-party signal: surface ONE you own (Facebook follower count OR Chrome Web Store badge for `/extension` if live). Others (Trustpilot/press) → flag `needs-owner`.
Commit: `Restore testimonials with real quotes` OR `Replace unverifiable scale claim`.

### P3-12 SEO finish (OG image + Offer schema + comparison page)
Files: `public/og-cover.png` (NEW 1200x630), `app/layout.tsx`, `components/PricingSection.tsx` or `app/page.tsx`, CREATE comparison page (e.g. `app/scam-checker-vs-identity-monitoring/page.tsx`).
Steps:
1. Generate/place 1200x630 OG card (two-tone wordmark, ALL-CAPS heading per brand rules); point `openGraph.images` + `twitter.images` at ABSOLUTE `https://scambomb.com/og-cover.png` (relative `/logo.png` underperforms).
2. Add `Product` + `Offer` JSON-LD for Stay Protected ($9/mo $99/yr) + Senior ($5/mo $49/yr).
3. Write 1 comparison page (audit: `no comparison pages`): ScamBomb vs $40/mo identity-monitoring, plain specific copy, FAQ + canonical + internal links both ways. Must pass Blog Visual Quality Gate.
Commit: `Add OG card, Offer schema, comparison page`.

## 7. P4 — Deploy, verify, re-run, report

1. `git checkout dev` (already on `dev`); commit each step with MINIMAL msg; update `CHANGELOG.md` per step (full notes); push `origin dev`; open/update PR `dev`→`main`; merge only when ready (Vercel auto-deploys `main`).
2. Post-deploy verify: `curl -sI https://scambomb.com/robots.txt` (200), `/sitemap.xml` (route-generated), `/` headers (4 present), view-source canonical on `/`, `/about`, one blog, one static URL.
3. Re-run BOTH audits (site + seo). Compare new vs was-scores (§0.2).
4. Output changelog EXACTLY per HEYCATCH_PLAN.md:
```
- D1.1 (was 2/6) — what changed and where
- D3.2 (was 1/4) — what changed and where
```
plus flagged-for-owner list. Use audit's CURRENT codes/scores as `was`. Action items without codes use title, no score.
5. If Page clarity / Quotability expanded text still missing, report those pillars as `not attempted — detail unavailable`, listing what WAS improved that may move them (titles/OG/FAQ/Organization).

## 8. Quick Resume Commands (fresh session)

```bash
cd /Users/george/GITHUB/scambomb.com-public && git checkout dev && git pull origin dev && git log --oneline -5
find app -name page.tsx | sort
find public -name "*.html" | sort
grep -rn "alternates" app/ | wc -l
grep -rln "author/george-featherstone" app/blog/ | wc -l
ls app/sitemap.ts public/sitemap.xml public/robots.txt app/author 2>&1
grep -n "headers()" next.config.js | head
```
Then: read §3 tracker, pick first unchecked box, read its section, implement, commit, update CHANGELOG, push.
