"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import {
  SITE_CONFIG,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { PageBanner } from "@/components/ui/PageBanner";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";
import { FAQSection } from "@/components/sections/FAQSection";

export function ContactPageContent() {
  const { locale } = useLanguage();

  const quickWhatsAppTopics = [
    {
      label: { en: "Wedding Photography", hi: "वेडिंग फोटोग्राफी" },
      message: WHATSAPP_MESSAGES.weddingPhotography,
    },
    {
      label: { en: "Wedding Videography & Films", hi: "वेडिंग वीडियोग्राफी व फिल्म्स" },
      message: WHATSAPP_MESSAGES.weddingVideography,
    },
    {
      label: { en: "Pre-Wedding Shoot", hi: "प्री-वेडिंग शूट" },
      message: WHATSAPP_MESSAGES.preWedding,
    },
    {
      label: { en: "Shubh Muhurat Package", hi: "शुभ मुहूर्त पैकेज" },
      message: WHATSAPP_MESSAGES.packageShubhMuhurat,
    },
    {
      label: { en: "Wedding Celebrations Package", hi: "वेडिंग सेलिब्रेशन्स पैकेज" },
      message: WHATSAPP_MESSAGES.packageWeddingCelebrations,
    },
    {
      label: { en: "Royal Shaadi Cinema Package", hi: "रॉयल शादी सिनेमा पैकेज" },
      message: WHATSAPP_MESSAGES.packageRoyalShaadiCinema,
    },
    {
      label: { en: "Wedding Invitation Cards", hi: "शादी कार्ड प्रिंटिंग" },
      message: WHATSAPP_MESSAGES.weddingCards,
    },
    {
      label: {
        en: "Visiting Cards, Posters & Banners",
        hi: "विज़िटिंग कार्ड, पोस्टर व बैनर",
      },
      message: WHATSAPP_MESSAGES.commercialPrinting,
    },
    {
      label: { en: "Video Editing Services", hi: "वीडियो एडिटिंग सेवा" },
      message: WHATSAPP_MESSAGES.videoEditing,
    },
    {
      label: { en: "General Studio Enquiry", hi: "सामान्य पूछताछ" },
      message: WHATSAPP_MESSAGES.general,
    },
  ];

  return (
    <>
      <PageBanner
        breadcrumbLabel={locale === "hi" ? "संपर्क व कोटेशन" : "Contact & Quote"}
        eyebrow={
          locale === "hi"
            ? `सीधा संपर्क • ${SITE_CONFIG.contact.phoneDisplay}`
            : `Direct Studio Contact • ${SITE_CONFIG.contact.phoneDisplay}`
        }
        hindiAccent="रामगंज, सीतापुर (उत्तर प्रदेश)"
        title={
          locale === "hi"
            ? "अनुज स्टूडियो एंड ग्राफिक्स से संपर्क करें।"
            : "Get in Touch for Bookings & Printing Quotations."
        }
        subtitle={
          locale === "hi"
            ? "वेडिंग फोटोग्राफी, सिनेमैटिक फिल्म्स, प्री-वेडिंग, शादी कार्ड या किसी भी प्रिंटिंग कार्य के लिए सीधे कॉल करें, व्हाट्सएप भेजें या नीचे फॉर्म भरें।"
            : "Call us directly, launch a service-specific WhatsApp conversation in one click, or complete the enquiry form below."
        }
      >
        <div className="flex flex-wrap items-center gap-3.5">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            label={
              locale === "hi" ? "व्हाट्सएप पर संदेश भेजें" : "Enquire on WhatsApp"
            }
            variant="gold"
            size="lg"
          />
          <PhoneCallButton variant="outline-gold" size="lg" />
        </div>
      </PageBanner>

      {/* 1-Click Service-Specific WhatsApp Quick Launchers: Light Ivory Pills on Dark Maroon Strip */}
      <section className="py-10 bg-[#43101B] text-[#FFF7E9] border-b border-[#D9BE82]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#E5C46A] font-semibold mb-3.5">
            {locale === "hi"
              ? "१-क्लिक व्हाट्सएप पूछताछ (अपनी सेवा चुनें):"
              : "1-Click Service-Specific WhatsApp Enquiries:"}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {quickWhatsAppTopics.map((topic) => (
              <a
                key={topic.label.en}
                href={getWhatsAppUrl(topic.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs sm:text-sm font-semibold bg-[#FFF7E9] border border-[#D9BE82] text-[#29201D] hover:bg-[#E5C46A] transition-colors shadow-sm"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="w-3.5 h-3.5 text-[#641A27] shrink-0"
                />
                <span>{topic.label[locale]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Details & Validated Enquiry Form */}
      <ContactEnquirySection />

      {/* Frequently Asked Questions */}
      <FAQSection />
    </>
  );
}
