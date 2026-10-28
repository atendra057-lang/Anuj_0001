import type { Metadata } from "next";
import React from "react";
import { GalleryPageContent } from "@/components/pages/GalleryPageContent";

export const metadata: Metadata = {
  title:
    "Gallery & Visual Inspirations | Wedding Photography & Invitation Previews",
  description:
    "Explore illustrative visual inspirations for Indian wedding photography, bridal portraits, pre-wedding shoots, Haldi-Mehendi ceremonies, wedding invitation cards, and printing at Anuj Studio and Graphics in Ramganj, Sitapur.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}

