# Presentation Ecosystem Overview (ScamBomb)

This document summarizes the presentation-related pages and slide assets that were recently added/updated, how they connect, and what each piece is for. It is intended as a handoff context file for another LLM or collaborator.

---

## 1) High-Level Architecture

The presentation ecosystem is split into **route wrappers** (Next.js pages under `app/`) and **static slide decks** (HTML files under `public/`).

- **Route wrappers (`app/.../page.tsx`)** provide framing, embedded iframe viewing, and navigation links between decks.
- **Static decks (`public/presentation-*.html`)** contain the actual slide content/design logic.
- A dedicated promo/flyer page now exists at **`/presentation`** for event advertisement (mobile + print-friendly).

---

## 2) Presentation Routes (Next.js)

### `/presentation-live`
- File: `app/presentation-live/page.tsx`
- Purpose: Primary in-person workshop presentation container.
- Embeds: `/presentation-live.html`
- Includes:
  - full-screen button
  - navigation links to AI Future, Jobs, Prompts, Trivia

### `/presentation-ai-future`
- File: `app/presentation-ai-future/page.tsx`
- Purpose: Companion deck about AI literacy, AI management/orchestration framing.
- Embeds: `/presentation-ai-future.html`
- Includes:
  - full-screen button
  - links to Live, Jobs, Prompts, Trivia

### `/presentation-jobs`
- File: `app/presentation-jobs/page.tsx`
- Purpose: AI jobs report presentation view.
- Embeds: `/presentation-jobs.html`
- Special behavior:
  - listens for postMessage to auto-adjust iframe height (`presentation-jobs-height`)

### `/presentation-prompts`
- File: `app/presentation-prompts/page.tsx`
- Purpose: Prompt-focused companion presentation.
- Embeds: `/presentation-prompts.html`
- Includes bottom nav links to Live, AI Future, Jobs, Trivia.

### `/presentation-trivia`
- File: `app/presentation-trivia/page.tsx`
- Purpose: Quick-fire trivia companion slideshow.
- Embeds: `/presentation-trivia.html`
- Includes:
  - full-screen button
  - links to AI Future, Jobs, Prompts, and back to Live

### `/presentation-downloads`
- File: `app/presentation-downloads/page.tsx`
- Purpose: post-event resource/download placeholder page.
- Current state:
  - “Coming Soon” placeholders for freebie items.

### `/presentation` (**new ad/flyer page**)
- File: `app/presentation/page.tsx`
- Purpose: QR destination + printable half-page landscape-style promo.
- Current messaging focus:
  - voice scams / senior fraud awareness (aligned to `presentation-live` theme)
  - event time: **Friday, March 20, 6:00 PM CST**
  - benefit-forward copy (confidence, red-flag detection, family protection process, AI-assisted defense)
- Layout refinements made:
  - mobile readability optimized
  - print styles added for physical flyer legibility
  - right-side footer area split into:
    - yellow-outline vertical bullets (`COMMUNITY TRAINING`, `SENIOR FRIENDLY`, `PRACTICAL`)
    - separate solid yellow box for presenter/contact

---

## 3) Static Slide Deck Files (Public)

### `public/presentation-live.html` (Primary workshop narrative)
Core storyline is scam-defense oriented and includes:
- Problem vs solution framing
- Goal of the session
- Speaker/background context
- Why scams work (human behavior, pressure, emotion)
- “Five Signals of a Scam” framework
- Golden rule
- Grandparent scam evolution into AI voice cloning
- How AI voice scams work (Harvest → Clone → Attack)
- Family verification system and key takeaway

This deck is the anchor for fraud/senior safety messaging.

### `public/presentation-ai-future.html` (Companion AI literacy/workshop deck)
Recent direction and edits:
- Workshop framing tuned for mixed audience (seniors + high school students)
- Burger King headset example retained as narrative hook
- Core opener retained: “GUIDE THE AI. OR BE GUIDED BY IT.”
- Day 1 / Day 2 progression (basics → agents)
- multiple typography and readability adjustments

Current 10-slide flow (ids `s1`–`s10`):
1. Intro hook (`GUIDE THE AI / OR BE GUIDED BY IT`)
2. Burger King “AI in headsets” choice framing
3. 72% CEO expectation stat
4. Who this class is for
5. Day 1 AI basics
6. 3 checks before you act
7. Day 2 agents
8. Real exercises
9. Class format
10. CTA slide

### `public/presentation-jobs.html`
- AI jobs/economic implications report-style deck.

### `public/presentation-prompts.html`
- Prompting framework deck and examples.

### `public/presentation-trivia.html`
- Trivia-style companion deck.

---

## 4) Navigation / User Flow Map

Typical operator flow during events:

1. Start at **`/presentation-live`** (primary teaching deck).
2. Jump to companion decks as needed:
   - `/presentation-ai-future`
   - `/presentation-jobs`
   - `/presentation-prompts`
   - `/presentation-trivia`
3. Use **`/presentation-downloads`** for follow-up resources (once populated).

Attendee acquisition flow (QR/flyer):

1. Physical flyer / QR points to **`/presentation`**.
2. Visitor gets concise problem + strong benefit promise + event details.
3. Messaging aligns with primary workshop (`presentation-live`) rather than AI-job displacement framing.

---

## 5) Recent Major Changes (Summary)

### `/presentation` page
- Added new promo page.
- Refocused from generic AI workshop language to voice-scam/senior-fraud defense.
- Improved for:
  - mobile QR visitors
  - print/flyer readability
- Copy updates made per feedback:
  - date line changed to March 20
  - “gain” changed to “learn”
  - bullet merge/update:
    - `PROTECT FAMILY MEMBERS with a simple pause-check-confirm process`
  - empowerment line refined
  - footer split into outlined benefit list + separate presenter yellow box

### `presentation-ai-future` deck
- Significant messaging/style refinement to align with:
  - beginner-friendly local workshop offer
  - retained burger example
  - typography consistency with other decks
  - readability fixes (including line-wrap and contrast adjustments)

---

## 6) Strategy Notes for Next LLM / Collaborator

If continuing this system, likely next strategic tasks are:

1. **Unify message hierarchy across all decks**
   - Ensure each companion deck clearly maps to one stage of attendee journey.

2. **Standardize cross-deck CTA language**
   - Keep same event/date/contact format everywhere.

3. **Populate `/presentation-downloads`**
   - Replace placeholders with real PDFs/checklists (e.g., Five Signals card, family verification template).

4. **Optional print CSS hardening** for `/presentation`
   - explicit half-page dimensions
   - edge-safe margins
   - printer-friendly color fallback

5. **Optional audience split variants**
   - senior-focused flyer variant
   - student/parent variant
   - same design, adjusted copy emphasis

---

## 7) Key Files Quick Reference

- `app/presentation/page.tsx` ← QR + print ad page (new)
- `app/presentation-live/page.tsx`
- `app/presentation-ai-future/page.tsx`
- `app/presentation-jobs/page.tsx`
- `app/presentation-prompts/page.tsx`
- `app/presentation-trivia/page.tsx`
- `app/presentation-downloads/page.tsx`

- `public/presentation-live.html`
- `public/presentation-ai-future.html`
- `public/presentation-jobs.html`
- `public/presentation-prompts.html`
- `public/presentation-trivia.html`
