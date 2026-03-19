# Presentation Content Strategy Handoff

This is a **content-first** rundown of the current ScamBomb presentation ecosystem so another LLM/strategist can quickly understand:

1. What each deck/page is *saying*
2. The narrative arc inside each deck
3. How the content pieces connect strategically

---

## 1) Core Strategy Context

The ecosystem currently supports two parallel goals:

- **Live educational delivery** (in-person talk + companion decks)
- **Audience conversion / event promotion** (QR-to-page flyer experience)

Primary positioning across the system:

- ScamBomb teaches practical anti-fraud awareness
- AI is both a threat surface (voice cloning, smarter scams) and a defensive tool
- Target audiences include seniors, families/caregivers, and community learners

---

## 2) Content Rundown by Page/Deck

## A) `/presentation-live` → `public/presentation-live.html`
**Role:** Main keynote/workshop narrative (fraud + voice scam defense)

## Slide sequence (content arc)

1. **The Problem**
   - Scams are becoming more sophisticated
   - AI is changing scam tactics

2. **The Solution**
   - Awareness is the core defense
   - Technology helps, but awareness leads

3. **Tonight’s Goal**
   - Learn to spot warning signs fast
   - Learn to verify suspicious messages before harm

4. **About the Speaker**
   - George Featherstone
   - Personal credibility + mission framing

5. **Why This Matters / Personal Connection**
   - Family/community scam impact examples
   - Emotional relevance for audience

6. **Why Scams Work**
   - Scammers exploit behavior and urgency
   - “Anyone can fall for a scam under the right conditions”

7. **Five Signals of a Scam**
   - Urgency
   - Authority
   - Emotion
   - Unusual payment method
   - Secrecy
   - Includes “Remember” pattern recognition reinforcement

8. **Golden Rule**
   - Pause and verify before action

9. **Grandparent Scam (Traditional Version)**
   - Baseline scam pattern

10. **Grandparent Scam (AI Voice Cloning Version)**
    - Shows evolution with AI

11. **Imagine This… (Audience emotional simulation)**
    - “What if it sounded like your loved one?” setup

12. **How AI Voice Scam Works**
    - Harvest → Clone → Attack pipeline

13. **Why This Scam Works**
    - Familiar voice
    - Urgent emergency
    - Pressure to act

14. **Simple Defense**
    - Hang up and verify
    - Use trusted callback channels

15. **Family Verification System**
    - Family-level protocol (e.g., safe checks)

16. **Key Takeaway / Closing Reinforcement**
    - AI changes scam format, but defense habits still win

**Strategic function:** This deck is the *primary persuasion and education engine*.

---

## B) `/presentation-ai-future` → `public/presentation-ai-future.html`
**Role:** Companion “AI literacy to agency” deck

## Slide-by-slide content

1. **GUIDE THE AI. OR BE GUIDED BY IT.**
   - Workshop identity + directional choice framing

2. **Burger King Headset Example**
   - AI monitoring in real work contexts
   - Personal stance: “I want to program the AI”

3. **72% CEO Stat**
   - Legitimizes AI-manager future trend

4. **Who This Class Is For**
   - Seniors, students, caregivers, small business, beginners
   - “No coding / no degree required” framing

5. **Day 1: AI Basics**
   - Start simple
   - Prompt better
   - Check results

6. **Three Checks Before You Act**
   - Check facts
   - Check source
   - Check stakes
   - Use judgment

7. **Day 2: Working with Agents**
   - Master prompting
   - Delegate tasks
   - Orchestrate agents

8. **Real Exercises We Will Do**
   - Better email
   - Compare options
   - Build a smart daily plan
   - Build a 2-agent workflow
   - Quality check playbook

9. **Class Format**
   - Small group, live demo, hands-on, resources, Q&A

10. **CTA / Offer Slide**
   - AI literacy + advanced follow-on
   - Local workshop call-to-action

**Strategic function:** Bridges from fear/awareness into *capability and empowerment*.

---

## C) `/presentation-jobs` → `public/presentation-jobs.html`
**Role:** Data-driven context deck on AI-attributed layoffs

## Slide structure

1. **Title + framing scope**
   - “AI-Attributed Layoffs in the Last Two Years”
   - Scope note (U.S. + selected global examples)

2. **Headline Metrics**
   - Topline numbers and key indicators

3. **Visual Comparison: Reported Layoff Scale**
   - Comparative visual of layoff magnitude

4. **Company Examples + Interpretation**
   - Case examples with implications

**Strategic function:** Supplies evidence-heavy macro context for “why now.”

---

## D) `/presentation-prompts` → `public/presentation-prompts.html`
**Role:** Practical prompt library (30 field-tested prompts)

## Content structure

- **Opening:** ScamBomb prompt playbook positioning for beginners/seniors/caregivers
- **30 prompts grouped into 5 modules**

### Module 1: Getting Started
- Ask anything plainly
- Draft friendly messages
- Decode jargon
- Summarize long content
- Verify before you trust
- Compare options clearly

### Module 2: Photos & Visuals
- Identify photo contents
- Recipe from food photo
- Restore old photos
- Plush concept generation
- Family captions
- Read small labels/text

### Module 3: Food & Recipes
- Pantry-to-plate
- Grocery list generation
- 7-day meal planning
- Better coffee guide
- Healthy swaps
- Dietary adaptation

### Module 4: Everyday Helpers
- Road trip planner
- Tech troubleshooting
- Bill decoder
- Daily routine builder
- Gift finder
- Medical visit prep

### Module 5: Fun & Creative
- Cartoon converter
- Memory-to-story
- Mood playlists
- Space makeover ideas
- Social content ideas
- Family trivia night

**Strategic function:** Converts abstract AI literacy into repeatable daily utility.

---

## E) `/presentation-trivia` → `public/presentation-trivia.html`
**Role:** Fast audience engagement + trust-building stats sequence

## Slide-by-slide content (12 slides)

1. **Title Slide**
   - Adults & AI Usage
   - University of Michigan study framing

2. **Q1**: % of adults 50+ using AI?
3. **A1**: 55% + interpretation

4. **Q2**: Voice assistants vs text chatbots?
5. **A2**: Voice assistants lead strongly

6. **Q3**: % feeling safer using AI home security?
7. **A3**: 96% + practical acceptance insight

8. **Q4**: Trust in AI-generated content?
9. **A4**: Split trust + difficulty detecting errors

10. **Q5**: % wanting AI-content disclosure?
11. **A5**: 90% + desire for risk education

12. **Thank You / Brand close**

**Strategic function:** Audience warm-up, myth-busting, and data-backed urgency in a non-threatening format.

---

## F) `/presentation` → `app/presentation/page.tsx` (QR flyer page)
**Role:** Mobile-first and print-ready event ad page

## Current content blocks

1. **Event strip**
   - Friday • March 20 • 6:00 PM CST

2. **Hero message**
   - “AI voice scams are getting better. Your defense can too.”

3. **Problem (brief)**
   - AI-cloned voices + urgency/emotion manipulation

4. **Benefits (heavy emphasis)**
   - Spot red flags fast
   - Protect family with pause-check-confirm
   - Use AI for defense
   - Feel empowered by knowledge

5. **Credibility/audience-fit block**
   - Community training
   - Senior friendly
   - Practical

6. **Presenter block**
   - Led by George Featherstone
   - ScamBomb + location line

**Strategic function:** Converts interest into attendance from QR scans and physical flyers.

---

## G) `/presentation-downloads`
**Role:** Post-event resource hub (currently placeholder)

Current copy:
- Thanks-for-attending framing
- Placeholder “Freebie #1/#2/#3/#4” buttons

**Strategic function:** Designed to become retention + follow-up asset distribution point.

---

## 3) How These Content Pieces Connect (Strategy Layer)

## Primary content funnel

1. **Attract / convert attendance:** `/presentation` (QR + print flyer)
2. **Deliver core education:** `/presentation-live`
3. **Deepen or segment learning:** AI Future / Jobs / Prompts / Trivia decks
4. **Post-session retention:** `/presentation-downloads` (to be populated)

## Messaging spine across all assets

- **Threat reality:** scams are evolving with AI
- **Defense confidence:** awareness + process beats panic
- **Practical empowerment:** attendees leave with clear habits and tools
- **Community trust:** local, senior-friendly, hands-on guidance

---

## 4) Suggested Next Strategic Questions for Another LLM

Use this content summary to answer:

1. Where is narrative repetition vs progression across decks?
2. Which deck should be “mandatory core” vs optional modules by audience type?
3. What exact CTA language should be standardized across all decks/pages?
4. What should the first 4 download resources be to match live promises?
5. Should there be separate flyer variants by audience (seniors vs students/families)?

---

## 5) Source Files (for rapid edits)

- `app/presentation/page.tsx`
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
