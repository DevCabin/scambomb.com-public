# ScamBomb Development Status

## 🌿 **Branching Directive (Persistent)**

**IMPORTANT: This directive must persist across all future sessions.**

All code changes for the `scambomb.com-public` repository must now be developed on the **`dev`** branch and merged into `main` via GitHub. Do **not** commit directly to `main` unless explicitly instructed.

NOTE: Do not write too much in the terminal, it causes crashes. Utilize python scripts.

### **Workflow:**
1. Ensure you are on the `dev` branch: `git checkout dev`
2. Pull latest changes: `git pull origin dev`
3. Make edits, commit with a minimal message, and push: `git push origin dev`
4. Open or update a pull request on GitHub to merge `dev` → `main`

### **Creating the `dev` branch (one-time setup):**
```bash
git checkout main
git pull origin main
git checkout -b dev
git push -u origin dev
```

## ✅ **COMPLETED FEATURES (v1.5.0 — see README/CHANGELOG for current)**

### 🏠 **Public Homepage Positioning**
- **Core promise**: Helping families recognize scams before they become victims
- **Primary benefit**: Peace of mind and practical guidance, not AI software marketing
- **ScamBomb scope**: Message analysis, scam education, printable family resources, ongoing awareness, and community workshops
- **Heading rule**: Render all `h2` and `h3` headings in uppercase; use ScamBomb gold selectively to emphasize key phrases

### 📝 **Blog System Rebuild**
- **Complete rewrite** of blog system to fix persistent 404 errors
- **Removed Contentlayer dependency** due to build-time generation issues
- **Static blog pages** using Next.js App Router file-based routing
- **Guaranteed availability** - no more build-time failures or caching issues

#### **Blog Architecture (Post-Rebuild — current: 8 posts as of 2026-10-07):**
```
app/blog/
├── page.tsx                           # Blog index with hardcoded posts (8 posts)
├── how-to-spot-fake-bank-texts-in-30-seconds/
├── new-usps-delivery-scam-what-to-do/
├── three-questions-to-ask-before-you-click/
├── is-this-a-scam/
├── scam-triage-file-001-android-had-3-viruses-but-didnt/
├── scam-triage-file-003-your-computer-is-infected/
├── she-heard-her-daughter-crying-ai-voice-clone-scam/
└── older-adult-fraud-report-2024-2025/
```
See `app/blog/page.tsx` `posts` array for the source of truth.

#### **Adding New Blog Posts:**
1. **Create new directory:** `app/blog/your-post-slug/`
2. **Add page.tsx:** Copy template from existing posts
3. **Update index:** Add post data to `app/blog/page.tsx` posts array
4. **Update homepage:** Add to blog preview section in `app/page.tsx`

#### **Blog Post Template:**
```typescript
import Link from 'next/link'

export const metadata = {
  title: 'Your Post Title',
  description: 'Brief description for SEO',
}

export default function BlogPost() {
  return (
    <div className="py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="text-xs font-semibold tracking-widest text-white/60 mb-2">
            CATEGORY
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Post Title</h1>
          <p className="text-white/80 text-lg mb-4">Description</p>
          <time className="text-sm text-white/60" dateTime="2023-11-12">
            November 12, 2023
          </time>
        </header>
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Content here */}
        </div>
        <footer className="mt-12 pt-8 border-t border-white/10">
          <Link href="/blog" className="text-yellow-300 hover:text-yellow-400 underline underline-offset-4">
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  )
}
```

## ✅ **COMPLETED FEATURES (v2.1.0 — HISTORICAL; SBID gate retired)**

### 🔐 **Access Control System (RETIRED — do not implement)**
- **Deprecated:** The old `?safe_source=true&SBID=` gate no longer reflects production.
- **Current behavior:** Public site links directly to `https://app.scambomb.com` (no params), or to `https://app.scambomb.com/api/auth/redirect?plan=...&billing=...` for paid CTAs. No public-site code generates `SBID` (verified 2026-10-08).
- Do not reintroduce SBID params or `scambomb_authorized` cookie logic.

### 👤 **User Tracking Foundation**
- Permanent SBUID fingerprinting implemented
- Database schema designed for user records
- Anonymous → Authenticated user progression
- Comprehensive documentation in DEVELOPER_GUIDE.md

### 🌐 **Public Website Integration Guide (CURRENT)**

Free CTAs link directly to the app with no params:
`https://app.scambomb.com`

Paid CTAs route through the app auth/checkout redirect:
`https://app.scambomb.com/api/auth/redirect?plan=standard|senior&billing=monthly|annual`

Member signup lives on the public site:
`https://www.scambomb.com/member-signup` (+ optional `/{location-slug}`), backed by the app API + Stripe promotion codes.

#### **User Journey Integration (current):**
1. **Anonymous Access**: Public site → "Try ScamBomb" → `https://app.scambomb.com` (no gate)
2. **First Usage**: Guest scan on app (fingerprint `safemessage_uid`), 5 free scans/month
3. **Limit Reached**: Soft paywall → public pricing or `/api/auth/redirect` checkout
4. **Authentication**: Email/Google auth happens in the app; sponsored members register via public `/member-signup`

#### **Implementation Checklist (current):**
- [x] Free buttons link to `https://app.scambomb.com` with no params
- [x] Paid buttons link to `/api/auth/redirect?plan=...&billing=...`
- [x] Member signup uses Stripe-backed codes + optional location slug
- [ ] Do NOT reintroduce SBID params — retired

## ✅ **COMPLETED FEATURES (v1.1.0)**

### 🚨 **Advanced Red-Flag Detection System**
- **Client-side instant scanning** with 500+ scam patterns
- **Real-time UI warnings** with prominent red banners
- **Smart user guidance** - "BOMB it!" vs "Full AI Scan" options
- **Performance optimized** - <2ms pattern matching
- **Privacy focused** - No data storage or logging

### 🎨 **Modern UI/UX Enhancements**
- **Collapsible accordion sections** for better organization
- **Accessibility features** - High contrast mode, font size controls
- **Mobile responsive design** with touch-friendly buttons
- **ChatGPT-style typing animation** with persistent state
- **Professional visual hierarchy** with improved button styling

### 🔧 **Technical Improvements**
- **Hot reload compatibility** - Typing animation survives dev rebuilds
- **Clean state management** - Dedicated variables for better manipulation
- **Enhanced error handling** and user feedback
- **Optimized component architecture** for maintainability

### 💳 **Payment & Subscription System**
- **Stripe integration** with webhook handling
- **Device-based freemium model** (5 free analyses)
- **Billing portal access** for premium users
- **Secure session management** with HttpOnly cookies

### 🤖 **AI Analysis Engine**
- **GPT-4o-mini powered** threat assessment
- **Structured output parsing** for consistent results
- **Threat level scoring** (0-100% with risk bands)
- **Comprehensive scam detection** patterns

## 🏗️ **Current Architecture**

```
Frontend (Next.js + React)
├── Real-time red-flag scanner (client-side)
├── Interactive UI with accessibility
├── Typing animation system
└── Stripe payment integration

Backend (Next.js API Routes)
├── Message analysis (/api/analyze)
├── Usage tracking (/api/usage)
├── Payment processing (/api/stripe/*)
└── Session management

AI Engine (OpenAI)
├── GPT-4o-mini model
├── Structured threat assessment
└── Custom system prompts

Database (Vercel KV)
├── Usage counters
├── Premium status
└── Customer mappings
```

## 🚀 **Deployment Ready**
- **Vercel optimized** with automatic scaling
- **Environment configured** for production
- **Security hardened** with proper API key management
- **Performance optimized** for global CDN delivery

## 📊 **Key Metrics**
- **Version**: 1.5.0 (see README/CHANGELOG for current)
- **Response Time**: <2s for AI analysis
- **Red-flag Detection**: <2ms client-side
- **Uptime**: 99.9% on Vercel infrastructure
- **Security**: SOC 2 compliant hosting

## 🔐 **Access Control System (RETIRED v2.0.3 — do not implement)**

Retired. The old `?safe_source=true&SBID=` gate + `scambomb_authorized` cookie + access-denied screen no longer reflect production. Current links use direct app URLs or `/api/auth/redirect` (see Integration Guide above).

## 🔮 **Future Roadmap**
- File upload support for screenshot analysis
- Advanced threat reporting dashboard
- Team/organization accounts
- Multi-language support
- API access for integrations


## 📋 **Workflow Directive**

**IMPORTANT: This directive must persist across all future sessions.**

After any requested code updates or changes, please follow this workflow:

1. **Commit with MINIMAL message** (e.g., "Fix CSP for OCR WebAssembly", "Add user auth", etc.)
2. **Update project documents**:
   - README.md (version and changelog if applicable)
   - CHANGELOG.md (add new entry with date)
   - DEVELOPER_GUIDE.md (technical details if needed)
3. **Push to GitHub** immediately after updates

**Rationale**: Maintains clean git history, keeps documentation current, and ensures changes are deployed promptly.

## 🚫 **Execution Constraint (Must Follow Every Time)**

- **DO NOT run local dev** (`npm run dev`, `next dev`, etc.) unless explicitly asked in that exact task.
- After every code change, always do this order:
  1. Commit with a **minimal** commit message.
  2. Write the **full** detailed commit notes in `CHANGELOG.md`.
  3. Push to GitHub immediately for live testing.

## 🎨 **Blog Visual Quality Gate (Publishing Standard)**

All blog posts (especially recurring formats like Scam Triage files) must pass a minimum visual quality standard before publishing.

Required standard:
- Visually appealing layout (not plain wall-of-text)
- Clear hierarchy (headline, summary, section rhythm)
- Structured visual blocks/cards/checklists where appropriate
- Readable spacing and contrast on mobile + desktop
- Repeatable format consistency for recurring series

If a post does not meet this quality bar, it should be revised before it is considered publish-ready.

## 🧨 **Brand Wordmark Rule (Persistent)**

Always render the ScamBomb wordmark as two-tone:

- `SCAM` = **white** on dark backgrounds, **black** on white/light backgrounds (including print)
- `B💣MB` = **yellow** at all times
- Keep bomb emoji as the “O” equivalent in B💣MB

Do not render the full wordmark in a single color.

## 🔠 **Heading Typography Rule (Persistent)**

Apply this to all new/updated ScamBomb pages and assets:

- **All headings must render in ALL CAPS**.
- **Large/display headings (especially H1/Hero)** must use two-tone treatment:
  - alternate/emphasize words in **white** and **brand yellow**
  - yellow should be used for emphasis words or alternating word rhythm
- Smaller headings can be all-white or all-yellow when needed for readability,
  but maintain high contrast and ScamBomb visual consistency.


---
*This document reflects the current production state of ScamBomb. All major features are implemented and tested.*
