import type { Metadata } from "next";
import React from "react";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title:
    "Contact Anuj Studio and Graphics | Ramganj, Sitapur (+91 90054 00712)",
  description:
    "Contact Anuj Studio and Graphics in Ramganj, Sitapur, Uttar Pradesh at +91 90054 00712 by phone or WhatsApp for wedding photography, videography, wedding invitation cards, visiting cards, posters, pamphlets, and banners.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}

