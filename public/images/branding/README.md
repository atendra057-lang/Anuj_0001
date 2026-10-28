# Branding & Logo Replacement Guide

To add the official **Anuj Studio and Graphics** logo when available:

1. Place your logo file in this folder (`public/images/branding/logo.png` or `public/images/branding/logo.svg`).
2. Open `src/data/siteConfig.ts` and update `SITE_CONFIG.branding.logo`:
   ```ts
   branding: {
     logo: {
       enabled: true,
       src: "/images/branding/logo.png",
       alt: "Anuj Studio and Graphics Official Logo",
       width: 180,
       height: 56,
     },
   }
   ```
3. Both the global header and footer will automatically replace the temporary royal monogram crest with the official logo without any layout changes.

