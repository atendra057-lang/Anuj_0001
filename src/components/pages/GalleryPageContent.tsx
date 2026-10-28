"use client";

import React from "react";
import { WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { PageBanner } from "@/components/ui/PageBanner";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";
import { GallerySection } from "@/components/sections/GallerySection";
import { WeddingInvitationShowcase } from "@/components/sections/WeddingInvitationShowcase";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";

export function GalleryPageContent() {
  const { locale } = useLanguage();

  return (
    <>
      <PageBanner
        breadcrumbLabel={locale === "hi" ? "गैलरी" : "Visual Gallery"}
        eyebrow={
          locale === "hi"
            ? "प्रतीकात्मक दृश्य प्रेरणा एवं डिज़ाइन दिशा"
            : "Visual Inspirations & Creative Showcase"
        }
        hindiAccent="उत्सव के रंग • शादी कार्ड • फोटोग्राफी"
        title={
          locale === "hi"
            ? "विवाह फोटोग्राफी, प्री-वेडिंग और निमंत्रण पत्रों की झलकियाँ।"
            : "Visual Inspirations Across Weddings, Portraits & Print."
        }
        subtitle={
          locale === "hi"
            ? "हमारी फोटोग्राफी, सिनेमैटिक वेडिंग फिल्म्स, शादी कार्ड और व्यावसायिक प्रिंटिंग की रचनात्मक दिशा देखें। किसी भी चित्र को बड़े आकार में देखने के लिए उस पर क्लिक करें।"
            : "Browse our illustrative visual preview across bridal portraits, sacred mandap ceremonies, pre-wedding shoots, Haldi-Mehendi celebrations, wedding cards, and commercial print."
        }
      >
        <div className="flex flex-wrap items-center gap-3.5">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            label={
              locale === "hi" ? "व्हाट्सएप पर पूछताछ करें" : "Enquire on WhatsApp"
            }
            variant="gold"
            size="lg"
          />
          <PhoneCallButton variant="outline-gold" size="lg" />
        </div>
      </PageBanner>

      {/* Main Filterable Gallery with Native <dialog> Lightbox */}
      <GallerySection />

      {/* Interactive Wedding Invitation Card Style Previewer */}
      <WeddingInvitationShowcase />

      {/* Direct Booking & Enquiry Section */}
      <ContactEnquirySection />
    </>
  );
}

