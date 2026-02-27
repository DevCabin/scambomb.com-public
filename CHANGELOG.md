# Changelog

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
