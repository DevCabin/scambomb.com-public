# ScamBomb.com - Defuse Scams. Before they blow up in your face.

**Version**: 1.3.0  
**Last Updated**: June 13, 2026

## 🎯 Mission & Goals

ScamBomb is a revolutionary anti-scam platform designed to protect vulnerable populations - particularly seniors, caregivers, and everyday people - from sophisticated online scams. Our mission is to democratize scam protection by making advanced scam detection accessible, understandable, and actionable for everyone.

### Core Objectives
- **Empower Users**: Give people the knowledge and tools to identify and avoid scams confidently
- **Simplify Complexity**: Transform technical scam analysis into plain-English guidance
- **Build Trust**: Create a privacy-first platform that users can rely on
- **Educate Proactively**: Provide ongoing education about emerging scam patterns
- **Foster Community**: Build a supportive network of scam-aware individuals

## 🚀 Product Vision

### What ScamBomb Does
ScamBomb analyzes suspicious messages (emails, texts, social media) and provides:
- **Instant Risk Assessment**: Identifies red flags and scam patterns
- **Plain-English Explanations**: No technical jargon - just clear, actionable advice
- **Step-by-Step Guidance**: Tells users exactly what to do next
- **Educational Resources**: Blog posts and guides about scam prevention
- **Privacy Protection**: Zero data selling, anonymous mode available

### Target Audience
- **Seniors**: Elderly individuals who may be less tech-savvy but more vulnerable to scams
- **Caregivers**: Family members and professionals helping protect loved ones
- **General Users**: Anyone who wants peace of mind when dealing with suspicious messages
- **Communities**: Libraries, senior centers, and organizations serving vulnerable populations

## 🛠️ Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Payments**: Stripe
- **Analytics**: Vercel Analytics + Google Analytics
- **Forms**: GoHighLevel (GHL)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── api/               # API routes
│   │   └── stripe/
│   │       └── checkout/  # Stripe checkout handler
│   └── thank-you/         # Thank you pages
│       └── membership/    # Post-purchase thank you
├── components/            # React components
│   ├── AuthProvider.tsx   # Auth state management
│   ├── PricingSection.tsx # Pricing cards
│   └── ...
├── public/                # Static assets
└── content/               # Blog content (MDX)
```

## 🔄 Recent Changes (v1.3.0)

### Membership Purchase Flow
- **Auth-gated checkout**: Users must sign in before purchasing
- **App auth redirect**: Pricing buttons redirect through `app.scambomb.com/api/auth/redirect`
- **Thank-you membership page**: Dedicated post-purchase confirmation at `/thank-you-membership`
- **Session sync**: Subscription auto-syncs when user returns to app

### Technical Updates
- Cross-domain cookie support for auth state
- Suspense boundaries for client components
- Updated pricing section with annual options

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Deployment

Push to `main` branch — Vercel auto-deploys.

## 📝 License

MIT