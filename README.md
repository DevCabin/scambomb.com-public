# ScamBomb.com — Helping Families Recognize Scams Before They Become Victims

**Version**: 1.3.1
**Last Updated**: July 19, 2026

## 🎯 Mission & Goals

ScamBomb helps families recognize scams before they become victims. It combines practical scam education, message analysis, printable family resources, community workshops, and ongoing scam awareness so people can respond with confidence instead of fear.

### Core Objectives
- **Protect Families**: Give people practical ways to recognize and respond to scams before harm is done
- **Simplify Complexity**: Turn suspicious messages and scam tactics into calm, plain-English guidance
- **Build Trust**: Create a privacy-first resource families can rely on
- **Educate Proactively**: Share ongoing education about emerging scam patterns
- **Strengthen Communities**: Deliver resources and workshops for organizations serving families and older adults

## 🚀 Product Vision

### What ScamBomb Does
ScamBomb is more than a message checker. It provides:
- **Suspicious Message Analysis**: Plain-English help with texts, emails, screenshots, and other suspicious content
- **Practical Guidance**: Clear next steps people can take before they click, reply, or send money
- **Scam Education**: Scam Triage articles, guides, checklists, and resources based on real scams
- **Family Protection Resources**: Shareable information designed for seniors, caregivers, and the people who care about them
- **Community Awareness**: Workshops and educational programs for credit unions, libraries, senior centers, employers, and other organizations
- **Privacy Protection**: No data selling and anonymous access where available

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

## 🔄 Recent Changes (v1.3.1)

### Homepage Positioning and Brand System
- **Family-first positioning**: Homepage now leads with protecting families and peace of mind, rather than AI or app features
- **Clear value hierarchy**: Message analysis is positioned as one tool within education, resources, awareness, and community partnerships
- **Outcome-led pricing**: Plans explain what people receive and how they stay protected
- **Brand typography**: All `h2` and `h3` headings use uppercase styling; strategic gold emphasis reinforces key ideas
- **App walkthrough video**: The expanded “How to Use the App” section includes a lightweight YouTube link

### Current Plans
- **Stay Safe**: Free plan with five scam checks each month and educational resources
- **Stay Protected**: Standard plan with unlimited message analysis and ongoing protection resources
- **Senior Protection**: The same ongoing protection with locked-in pricing for adults 60+

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📦 Deployment

1. Build and test changes on the `dev` branch.
2. Push `dev` — Vercel creates a protected preview deployment.
3. Merge `dev` into `main` after approval — Vercel deploys `main` to production.

## 📝 License

MIT