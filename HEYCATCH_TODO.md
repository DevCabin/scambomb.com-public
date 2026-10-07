# HEYCATCH_TODO — ScamBomb.com Audit Fix Plan (Resume-From-Scratch)

> Created 2026-10-07. Repo: `/Users/george/GITHUB/scambomb.com-public` (branch `dev`).
> App repo (do NOT confuse): `/Users/george/GITHUB/ScamBomb-Ai`.
> Rulebook: `HEYCATCH_PLAN.md` (never invent findings; stub + flag what needs owner; keep code + was-score exact).
> Workflow (from `CLINE_INSTRUCTIONS.md`): work on `dev`, minimal commit msg, update `CHANGELOG.md` + docs, push `origin dev`, merge `dev`→`main`. DO NOT run `npm run dev` unless asked.

## 0. Current State — ROUND 2 (post first fix pass)

**Audit**: `https://app.heycatch.ai/audit/hck_pk_FOBHpCizi6CBPDa5KdcxNY94laUP1u4Z/seo`
**Score**: **83/100** (Healthy) — **+28** since 6 Oct. Last checked 7 Oct 2026.
**Open fixes: 17** (was 24).

| Pillar | Now | Open fixes |
|---|---|---|
| Crawlability | 21 / 23 | **1** |
| Page clarity | 15.7 / 22 | **7** |
| Quotability | 20.7 / 25 | **7** |
| Authorship | 19.4 / 22 | **2** |

**Round-1 (complete, merged to `main`)**: canonicals, sitemap, security headers, /testing removal, author page + bylines + Article/Person/Organization schema, testimonials + pricing dedupe + Offer schema + comparison page, unique titles, 6 thin pages expanded, answer-first + self-contained paragraphs. Commits `0342f36` → `40cf8fc`.

## 1. Round-2 Findings — FULLY CONFIRMED (8 of 17)

Points descending (highest-value first):

### A. `a_sameas` (2.0 pts) — ⛔ OWNER-BLOCKED
1 sameAs link in Organization (Facebook). Audit wants 3+ *company* profiles.
Fix: add 3+ real company profiles to `app/layout.tsx` Organization `sameAs`.
**Owner only has a personal LinkedIn (already on the author Person).** A personal profile does NOT belong on the Organization. Need company-owned profiles (business LinkedIn page, YouTube, X, GitHub org, G2/Crunchbase). **Nothing to do until owner creates/points to them. FLAG.**

### B. `t_orphan_pages` (2.0 pts) — repo-side, ONE template change
4 orphans, 2 index-only, 13 linked of 19 indexable. Orphans: `/credit-unions`, `/protect-parents`, `/poll`, `/scam-checker-vs-identity-monitoring`, `/career-scam-case-study`, `/blog/three-questions-to-ask-before-you-click`.
Fix (per audit): (1) a related block of 3–5 links under every article, chosen by cluster/tag not random; (2) a hub page per topic linking every piece + hub in nav; (3) breadcrumbs; (4) if nothing links to a page, drop it from sitemap.
Plan: add a "Related" links block to the blog template + link orphan non-blog pages from footer/nav and/or a hub. Add breadcrumbs on posts. Use existing tags (SCAM TRIAGE / GUIDE / ALERT / SPECIAL REPORT), never random.

### C. `c_title` (0.7 pts) — 8 pages' titles out of 30–60 chars
Failed: `/member-signup`, `/scam-stories`, `/blog/is-this-a-scam`, `/blog/older-adult-fraud-report-2024-2025`, `/blog/she-heard-her-daughter-crying-ai-voice-clone-scam`, `/poll`, `/blog/new-usps-delivery-scam-what-to-do`, `/blog/scam-triage-file-001-android-had-3-viruses-but-didnt`.
Fix: clamp each `title` to 30–60 rendered chars, query term first. Verify with a char count before/after.

### D. `a_external_sources` (0.6 pts) — `blog/older-adult-fraud-report-2024-2025` needs ≥2 independent primary sources
Fix: add 2 primary links (FTC `reportfraud.ftc.gov` + FBI IC3 `ic3.gov`), verify 200.

### E. `g_self_contained` (0.4 pts) — `blog/she-heard-her-daughter-crying-ai-voice-clone-scam` still has a pronoun-led paragraph
Fix: find remaining "It/They/This/She"-opening paragraph and name the subject. Re-check whole post (one was missed in round 1).

### F. `g_sentence_length` (0.3 pts) — `/contact`, `/extension-privacy`, `/reports/older-adult-fraud-2024-2025` avg >25 words
Fix: split long sentences (claim, then explanation), unstack "which/that/while" chains.

### G. `g_multimodal` (0.3 pts) — 6 pages lack a substantive image/diagram with meaningful alt
Failed: `/` (homepage), `/blog/how-to-spot-fake-bank-texts-in-30-seconds`, `/blog/is-this-a-scam`, `/blog/new-usps-delivery-scam-what-to-do`, `/blog/older-adult-fraud-report-2024-2025`, `/blog/scam-triage-file-003-your-computer-is-infected`.
Fix: add ≥1 substantive visual (screenshot/diagram/chart of our own) + meaningful alt. Some posts already have images but still flagged → homepage + 5 text-heavy posts need a real visual, not just a logo.

### H. `c_thin` (0.3 pts) — 2 pages STILL under 800 words by the audit's counter
`/resources/is-this-a-scam-checklist` (my count 819) and `/blog/three-questions-to-ask-before-you-click` (my count 851). The audit's counter reads lower than my strip-tags count (likely counts only visible body prose, excluding nav/footer/byline). Fix: add more substantive body copy until comfortably over 800.

## 2. Round-2 Findings — TRUNCATED (9 of 17) ⚠️ NEED OWNER TO PASTE

The audit page consistently truncates the middle on fetch. These codes/pages NOT yet retrieved:

- **Page clarity (4 missing)**: `c_meta_description` (partial — "5 of 24 indexable pages · 4 missing…", likely missing meta descriptions) + **4 more `c_*` findings** (total 7 − c_title − c_thin − c_meta_description).
- **Quotability (4 missing)**: `g_definition` (partial — "Define the page's subject in one sentence…", failed on `/career-scam-case-study`, `/blog`, `/contact`, `/resources`, `/poll`) + **3 more `g_*` findings** (total 7 − g_self_contained − g_sentence_length − g_multimodal − g_definition).

**ACTION (owner)**: open the audit, expand Page clarity + Quotability, paste the remaining `c_*` and `g_*` findings (code + score + pages + fix). Then I'll append them here and implement.

## 3. Progress Tracker (Round 2)

- [ ] B `t_orphan_pages` — related block + hub/breadcrumbs
- [ ] C `c_title` — clamp 8 titles to 30–60 chars
- [ ] D `a_external_sources` — 2 primary sources on older-adult report
- [ ] E `g_self_contained` — remaining pronoun paragraph on she-heard
- [ ] F `g_sentence_length` — split long sentences on 3 pages
- [ ] G `g_multimodal` — substantive image + alt on 6 pages
- [ ] H `c_thin` — top up 2 borderline pages
- [ ] A `a_sameas` — ⛔ owner (company profiles)
- [ ] c_meta_description + 4 c_* + g_definition + 3 g_* — ⚠️ owner paste text first
- [ ] P4 deploy + verify + re-run + changelog output

## 4. Owner Blockers (Round 2)

1. **`a_sameas`**: paste/create 3+ company-owned profile URLs (business LinkedIn, YouTube, X, GitHub org, G2/Crunchbase). Personal LinkedIn already used on the *author* Person, correctly NOT on the Organization.
2. **Paste the truncated `c_*` + `g_*` findings** (see §2).

## 5. Quick Resume Commands (fresh session)

```bash
cd /Users/george/GITHUB/scambomb.com-public && git checkout dev && git pull origin dev && git log --oneline -5
grep -rn "title:" app --include=page.tsx --include=layout.tsx | wc -l
grep -rln "author/george-featherstone" app/blog/ | wc -l
ls app/sitemap.ts app/author/george-featherstone/page.tsx components/BlogSchema.tsx 2>&1
grep -n "headers()" next.config.js | head
```
Then: read §1 + §2, pick an unchecked box, implement, commit, update CHANGELOG, push, merge to main.

