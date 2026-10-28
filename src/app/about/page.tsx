import type { Metadata } from "next";
import React from "react";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title:
    "About Anuj Studio and Graphics | 12 Years of Photography & Printing in Ramganj, Sitapur",
  description:
    "Learn about Anuj Studio and Graphics in Ramganj, Sitapur, Uttar Pradesh—12 years of experience across Indian wedding photography, videography, video editing, wedding invitation cards, and commercial printing.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}

