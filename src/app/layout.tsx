import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/data/siteConfig";
import { LanguageProvider } from "@/context/LanguageContext";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileContactBar } from "@/components/layout/MobileContactBar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.seo.siteUrl),
  title: {
    default: SITE_CONFIG.seo.defaultTitle,
    template: `%s | ${SITE_CONFIG.businessName}`,
  },
  description: SITE_CONFIG.seo.defaultDescription,
  keywords: [
    "Anuj Studio and Graphics",
    "Ramganj Sitapur photography",
    "wedding photography Sitapur",
    "wedding videography Ramganj Sitapur",
    "pre-wedding photography Sitapur",
    "wedding invitation cards Sitapur",
    "shadi card printing Ramganj Sitapur",
    "visiting card printing Sitapur",
    "poster pamphlet banner printing Ramganj",
    "Uttar Pradesh wedding studio",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.businessName,
    title: SITE_CONFIG.seo.defaultTitle,
    description: SITE_CONFIG.seo.defaultDescription,
    images: [
      {
        url: "/images/hero/royal-mandap-couple.png",
        width: 1200,
        height: 630,
        alt: "Anuj Studio and Graphics — Wedding Photography, Videography & Printing in Ramganj, Sitapur",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Accurate LocalBusiness / ProfessionalService JSON-LD (no invented ratings, coordinates, or social profiles)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.businessName,
    description: SITE_CONFIG.seo.defaultDescription,
    telephone: SITE_CONFIG.contact.phoneDisplay,
    url: SITE_CONFIG.seo.siteUrl,
    image: `${SITE_CONFIG.seo.siteUrl}/images/hero/royal-mandap-couple.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ramganj, Sitapur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Ramganj, Sitapur, Uttar Pradesh, India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Sitapur, Uttar Pradesh",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Photography, Videography & Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Photography & Videography",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pre-Wedding & Engagement Coverage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Editing Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Invitation Card Printing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visiting Card, Poster, Pamphlet & Banner Printing",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#641A27] selection:text-[#E5C46A]">
        {/* Skip to Main Content for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#E5C46A] focus:text-[#29201D] focus:font-bold focus:rounded-sm"
        >
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <LanguageProvider>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <MobileContactBar />
        </LanguageProvider>
      </body>
    </html>
  );
}

