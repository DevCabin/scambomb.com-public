# HEYCATCH_TODO — ScamBomb.com Audit Fix Plan (Resume-From-Scratch)

> Created 2026-10-07 · Updated 2026-10-14. Repo: `/Users/george/GITHUB/scambomb.com-public` (branch `dev`).
> App repo (do NOT confuse): `/Users/george/GITHUB/ScamBomb-Ai`.
> Rulebook: `HEYCATCH_PLAN.md` (never invent findings; stub + flag what needs owner; keep code + was-score exact).
> Workflow (from `CLINE_INSTRUCTIONS.md`): work on `dev`, minimal commit msg, update `CHANGELOG.md` + docs, push `origin dev`, merge `dev`→`main`. DO NOT run `npm run dev` unless asked.

## 0. Current State — ROUND 3 (post third fix pass)

**Audit**: `https://app.heycatch.ai/audit/hck_pk_FOBHpCizi6CBPDa5KdcxNY94laUP1u4Z/seo`
**Score**: **88/100** (Healthy) — **+5** since 7 Oct. Last checked 14 Oct 2026.
**Open fixes: 10** (was 17).

| Pillar | Now | Open fixes |
|---|---|---|
| Crawlability | 23 / 23 | **0** |
| Page clarity | 17.6 / 22 | **4** |
| Quotability | 22.1 / 25 | **4** |
| Authorship | 18.6 / 22 | **2** |

**Round-3 (complete on `dev`, commit `e9d9433`; not yet merged to `main`)**: `c_image_dimensions` (width/height on all 6 flagged pages), `c_meta_description` (12 descriptions written to 110–160 chars), `a_external_sources` (FTC + FBI IC3 on the 2 flagged pages), and the Article half of `g_structured_data` (added the missing `BlogPosting` to the reports page).

**Round-1 + Round-2 (merged to `main`)**: canonicals, sitemap, security headers, /testing removal, author page + bylines + Article/Person/Organization schema, testimonials + pricing dedupe + Offer schema + comparison page, unique titles, 6 thin pages expanded, answer-first + self-contained paragraphs, related-block + footer links, titles clamped, FTC/IC3 on older-adult, she-heard pronouns, reports sentences split, 2 thin pages topped up.

## 1. Round-3 Findings — STILL OPEN (actionable from repo)

Points descending:

### `c_question_headings` (0.8 pts) — 9 of 15 pages
Phrase some H2 subheadings as the reader's actual question, and put the direct answer in the first sentence.
Seen failing: `/resources/ai-voice-cloning-survival-guide`, `/resources/dont-let-a-text-steal-everything`, `/blog/older-adult-fraud-report-2024-2025`, `/blog/scam-triage-file-003-your-computer-is-infected`, plus ~5 more pages hidden behind the truncation.
Fix: rewrite those H2s as questions.

### `g_structured_data` (0.6 pts) — Article half done, Organization half blocked
Round 3 added the missing `BlogPosting` JSON-LD to `public/reports/older-adult-fraud-2024-2025/index.html`, so all articles now carry Article schema. The "Organization on the site" half is still short only because `sameAs` has 1 link — see `a_sameas` in §2. No further repo action until company profiles exist.

## 2. Round-3 Findings — BLOCKED (need owner)

### `a_sameas` (2.0 pts) — ⛔ PERMANENTLY BLOCKED
1 sameAs link in Organization, and it is a *personal* Facebook profile (`profile.php?id=…`). Audit wants 3+ company-owned profiles (business LinkedIn / YouTube / X / GitHub / G2 / Crunchbase). Owner has none. Do not invent profiles.

### `g_multimodal` (0.3 pts) — ⛔ needs owner imagery
19 of 27 pages. Homepage + 7 posts need a substantive visual (screenshot / diagram / chart) with meaningful alt. These must be the owner's own images; do not substitute stock art or the logo.

### TRUNCATED (need owner to paste) — 3 findings still hidden
The audit page still truncates its middle on fetch. Not yet retrieved: 1 `c_*` (page clarity) and 2 `g_*` (quotability). Owner to paste code + score + pages + fix.

## 3. Progress Tracker (Round 3)

- [x] `c_image_dimensions` — width/height on all 6 flagged pages — done, commit `e9d9433`
- [x] `c_meta_description` — 12 descriptions written to 110–160 chars — done, commit `e9d9433`
- [x] `a_external_sources` — FTC + IC3 on 2 pages — done, commit `e9d9433`
- [~] `g_structured_data` — Article schema added; Organization sameAs blocked (see §2)
- [ ] `c_question_headings` — H2 → questions (9 pages; ~5 hidden)
- [ ] `g_multimodal` — ⛔ owner imagery
- [ ] `a_sameas` — ⛔ owner company profiles
- [ ] 1 `c_*` + 2 `g_*` — ⚠️ owner paste text first
- [ ] Merge `dev` → `main`, deploy, re-run audit, changelog output

## 4. Owner Blockers (Round 3)

1. **`a_sameas`** — ⛔ owner has no company-owned profiles (only a personal Facebook link + personal LinkedIn on the author Person). Needs 3+ business profiles.
2. **`g_multimodal`** — owner must supply real screenshots/diagrams for the homepage + 7 posts.
3. **Paste the truncated `c_*` + `g_*` findings** (see §2) — 1 page-clarity + 2 quotability codes still not visible.

## 5. Quick Resume Commands (fresh session)

```bash
cd /Users/george/GITHUB/scambomb.com-public && git checkout dev && git pull origin dev && git log --oneline -5
grep -rn "title:" app --include=page.tsx --include=layout.tsx | wc -l
grep -rln "author/george-featherstone" app/blog/ | wc -l
ls app/sitemap.ts app/author/george-featherstone/page.tsx components/BlogSchema.tsx 2>&1
grep -n "headers()" next.config.js | head
```
Then: read §1 + §2, pick an unchecked box, implement, commit, update CHANGELOG, push, merge to main.

