# Anuj Studio and Graphics — Official Website

A custom Indian wedding photography, cinematic videography, video editing, wedding invitation card printing, and commercial printing website built for **Anuj Studio and Graphics** in **Ramganj, Sitapur, Uttar Pradesh, India** (`+91 90054 00712`).

---

## 1. Getting Started

```bash
# Start development server
npm run dev

# Run TypeScript check
npm run typecheck

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 2. Where to Edit Business Information, Logo & Portfolio Assets

All business data is centralized in **[`src/data/siteConfig.ts`](./src/data/siteConfig.ts)**:

1. **Adding the Official Logo**:
   - Place the official logo image at `public/images/branding/logo.png` (or `.svg`).
   - In `src/data/siteConfig.ts`, set `SITE_CONFIG.branding.logo.enabled = true`.
   - Both the header and footer will automatically display the supplied logo instead of the temporary royal monogram crest.

2. **Replacing Temporary Illustrative Portfolio Images**:
   - Temporary illustrative images are stored in `public/images/`:
     - `public/images/hero/royal-mandap-couple.png`
     - `public/images/wedding/bridal-portrait.png`
     - `public/images/wedding/pheras-ceremony.png`
     - `public/images/pre-wedding/couple-heritage.png`
     - `public/images/ceremonies/haldi-mehendi.png`
     - `public/images/ceremonies/ring-engagement.png`
     - `public/images/invitations/royal-wedding-cards.png`
     - `public/images/printing/commercial-print-showcase.png`
   - Replace these files or update `GALLERY_ITEMS`, `PHOTOGRAPHY_SERVICES`, and `PRINTING_SERVICES` in `src/data/siteConfig.ts`.
   - Once genuine studio work replaces the illustrative previews, set `SITE_CONFIG.portfolioStatus.showIllustrativeNotice = false` and `isPlaceholder: false` on each verified gallery item.

3. **Updating Opening Hours, Camera Notes, Packages & Contact Info**:
   - Edit `SITE_CONFIG.contact`, `SITE_CONFIG.openingHours`, `SITE_CONFIG.editableStudioData`, and `PHOTOGRAPHY_PACKAGES` directly in `src/data/siteConfig.ts`.

