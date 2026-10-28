"use client";

import React from "react";
import { WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { PageBanner } from "@/components/ui/PageBanner";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";
import { AboutStudioSection } from "@/components/sections/AboutStudioSection";
import { ExperienceTrustSection } from "@/components/sections/ExperienceTrustSection";
import { WhyChooseAndProcessSection } from "@/components/sections/WhyChooseAndProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";

export function AboutPageContent() {
  const { locale } = useLanguage();

  return (
    <>
      <PageBanner
        breadcrumbLabel={locale === "hi" ? "स्टूडियो परिचय" : "About Studio"}
        eyebrow={
          locale === "hi"
            ? "अनुज स्टूडियो एंड ग्राफिक्स • रामगंज, सीतापुर"
            : "Anuj Studio and Graphics • Ramganj, Sitapur"
        }
        hindiAccent="१२ वर्षों का अनुभव • विश्वास एवं कलात्मकता"
        title={
          locale === "hi"
            ? "12 वर्षों से रामगंज और सीतापुर के उत्सवों का विश्वसनीय साथी।"
            : "12 Years of Serving Celebrations & Print Needs in Sitapur."
        }
        subtitle={
          locale === "hi"
            ? "भारतीय विवाह फोटोग्राफी, वीडियोग्राफी, वीडियो एडिटिंग, शादी कार्ड छपाई और व्यावसायिक ग्राफिक्स के लिए एक समर्पित स्थानीय स्टूडियो।"
            : "Discover how our studio brings together wedding photography, cinematic videography, video editing, marriage invitation cards, and everyday printing under one roof."
        }
      >
        <div className="flex flex-wrap items-center gap-3.5">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            label={
              locale === "hi" ? "स्टूडियो से बात करें" : "Speak with the Studio"
            }
            variant="gold"
            size="lg"
          />
          <PhoneCallButton variant="outline-gold" size="lg" />
        </div>
      </PageBanner>

      {/* Full Studio Narrative */}
      <AboutStudioSection isFullPage={true} />

      {/* 12-Year Experience Monument */}
      <ExperienceTrustSection />

      {/* Why Contact the Studio & 4-Step Process */}
      <WhyChooseAndProcessSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Direct Contact Section */}
      <ContactEnquirySection />
    </>
  );
}

