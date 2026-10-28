import type { Metadata } from "next";
import React from "react";
import { PrintingPageContent } from "@/components/pages/PrintingPageContent";

export const metadata: Metadata = {
  title:
    "Wedding Invitation Cards, Visiting Cards, Posters, Pamphlets & Banners in Ramganj, Sitapur",
  description:
    "Design and print Indian wedding invitation cards (Shadi cards), engagement cards, visiting cards, posters, pamphlets, and banners at Anuj Studio and Graphics in Ramganj, Sitapur, Uttar Pradesh.",
  alternates: {
    canonical: "/wedding-cards-printing",
  },
};

export default function WeddingCardsPrintingPage() {
  return <PrintingPageContent />;
}

