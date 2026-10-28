import type { Metadata } from "next";
import React from "react";
import { PhotographyPageContent } from "@/components/pages/PhotographyPageContent";

export const metadata: Metadata = {
  title:
    "Wedding Photography, Videography, Pre-Wedding & Video Editing in Ramganj, Sitapur",
  description:
    "Explore wedding photography, wedding videography, cinematic wedding films, pre-wedding shoots, engagement coverage, Haldi-Mehendi photography, and video editing at Anuj Studio and Graphics in Ramganj, Sitapur.",
  alternates: {
    canonical: "/photography-videography",
  },
};

export default function PhotographyVideographyPage() {
  return <PhotographyPageContent />;
}

