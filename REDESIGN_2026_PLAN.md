# ScamBomb 2026 Redesign Plan

## Branch: `redesign-2026`
**Staging URL:** Will be available at `https://scambomb-com-public-git-redesign-2026-devcabin.vercel.app`

---

## Header Redesign Direction

### Reference: Norton / Chase Bank Style

**Key characteristics of trusted financial/security sites:**

1. **Solid, Grounded Layout**
   - Logo anchored left (no floating elements)
   - Navigation in clean horizontal row
   - CTA button right-aligned
   - Consistent vertical rhythm

2. **Trust Signals**
   - "Secure" indicator or lock icon
   - Clean typography (no decorative flourishes)
   - Subtle but professional color scheme
   - Adequate whitespace

3. **Current vs. Target**

| Current | Target |
|---------|--------|
| Floating bomb logo with absolute positioning | Logo + wordmark as single unit, grounded |
| 3 stacked elements (announcement + tagline + nav) | Single clean header row |
| Bomb overlaps content awkwardly | Contained, proportional logo |
| "Try Free!" button competes with nav | Clear hierarchy: Logo → Nav → CTA |

---

## Implementation Plan

### Phase 1: Header Component Restructure

**New Header Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│  [LOGO]  Home  Extension  Pricing  FAQ  Blog     [Try Free] │
│   Wordmark only (no floating bomb in header)                │
└─────────────────────────────────────────────────────────────┘
```

**Changes:**
1. Remove floating bomb image from Header
2. Use `ScamBomb.com-Logo-NEW.png` or clean wordmark only
3. Move announcement bar OUT of header (or remove entirely)
4. Simplify to: Logo | Nav | CTA pattern
5. Increase header height for gravitas
6. Add subtle bottom border/shadow for depth

### Phase 2: Blog System Standardization

**Blog Index (`/blog`):**
- Card-based grid layout (3 columns desktop, 1 mobile)
- Consistent card heights
- Featured image + title + excerpt + date pattern
- Pagination or "Load more"

**Blog Posts:**
- Clean article layout with max-width container
- Reading time estimate
- Author byline (if applicable)
- "Related posts" section
- Consistent typography hierarchy

### Phase 3: Design Tokens

**Tailwind Config Updates:**
```javascript
// Consistent spacing
spacing: {
  '18': '4.5rem',
  '88': '22rem',
}

// Brand colors mapped
colors: {
  brand: {
    navy: '#0B1324',
    yellow: '#F5C84C',
  }
}

// Typography scale
fontSize: {
  'display': ['3rem', { lineHeight: '1.1' }],
  'lead': ['1.25rem', { lineHeight: '1.6' }],
}
```

---

## Progress Tracking

- [ ] Header redesign (Phase 1)
- [ ] Blog index redesign (Phase 2)
- [ ] Blog post template (Phase 2)
- [ ] Design tokens implementation (Phase 3)
- [ ] Testing & review
- [ ] Merge to main