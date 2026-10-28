"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Sparkles, Camera, Printer } from "lucide-react";
import {
  NAVIGATION_ITEMS,
  PHOTOGRAPHY_SERVICES,
  PRINTING_SERVICES,
  SITE_CONFIG,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import {
  DecorativeDivider,
  OrnamentalFrameCorners,
  RoyalCrestMonogram,
  ToranScallopBorder,
} from "@/components/ornaments/IndianOrnaments";

export function SiteFooter() {
  const { locale, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#43101B] via-[#320B13] to-[#21070C] text-[#FFF7E9] border-t-2 border-[#D9BE82]/60 pb-20 md:pb-0">
      <ToranScallopBorder className="text-[#D9BE82]/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        {/* Top Ceremonial Invitation Banner inside Footer: Warm Ivory Box on Dark Maroon Footer */}
        <div className="relative rounded-sm border-2 border-[#D9BE82] bg-[#FFF7E9] text-[#29201D] p-6 sm:p-8 lg:p-10 mb-12 shadow-xl">
          <OrnamentalFrameCorners
            colorClass="text-[#641A27]"
            sizeClass="w-7 h-7 sm:w-9 sm:h-9"
          />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#B52632] font-bold mb-2">
                {locale === "hi"
                  ? "शुभ विवाह एवं उत्सव आमंत्रण"
                  : "Shubh Muhurat • Weddings & Print Craft"}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#641A27]">
                {locale === "hi"
                  ? "अपने आगामी विवाह या प्रिंटिंग कार्य के लिए आज ही बात करें"
                  : "Planning a Wedding Celebration or Invitation Card Order?"}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#29201D]/85">
                {locale === "hi"
                  ? "रामगंज, सीतापुर में 12 वर्षों के अनुभव के साथ हम आपके परिवार के हर उत्सव को यादगार बनाने के लिए तत्पर हैं।"
                  : "Speak directly with Anuj Studio and Graphics in Ramganj, Sitapur for tailored wedding photography packages, cinematic films, marriage cards, and printing quotations."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm font-bold text-sm bg-[#641A27] text-[#FFF7E9] border border-[#D9BE82] hover:bg-[#43101B] shadow-md"
              >
                <MessageCircle aria-hidden="true" className="w-4 h-4 text-[#E5C46A]" />
                <span>
                  {locale === "hi" ? "व्हाट्सएप पर कोटेशन लें" : "Enquire on WhatsApp"}
                </span>
              </a>
              <a
                href={SITE_CONFIG.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm font-bold text-sm border-2 border-[#641A27] text-[#641A27] bg-[#FAF0DC] hover:bg-[#641A27] hover:text-[#FFF7E9] transition-colors"
              >
                <Phone aria-hidden="true" className="w-4 h-4" />
                <span>{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-[#D9BE82]/25">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              {SITE_CONFIG.branding.logo.enabled ? (
                <img
                  src={SITE_CONFIG.branding.logo.src}
                  alt={SITE_CONFIG.branding.logo.alt}
                  width={SITE_CONFIG.branding.logo.width}
                  height={SITE_CONFIG.branding.logo.height}
                  loading="lazy"
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <>
                  <RoyalCrestMonogram className="w-12 h-12 shrink-0" />
                  <div>
                    <span className="block font-serif text-2xl font-bold text-[#FFF7E9]">
                      {SITE_CONFIG.businessName}
                    </span>
                    <span
                      lang="hi"
                      className="block text-xs text-[#E5C46A] font-medium mt-0.5"
                    >
                      {SITE_CONFIG.businessNameHindi}
                    </span>
                  </div>
                </>
              )}
            </Link>

            <p className="text-sm text-[#F2E3C9]/85 leading-relaxed">
              {locale === "hi"
                ? "रामगंज, सीतापुर (उत्तर प्रदेश) में स्थित अनुज स्टूडियो एंड ग्राफिक्स पिछले 12 वर्षों से वेडिंग फोटोग्राफी, वीडियोग्राफी, वीडियो एडिटिंग, शादी कार्ड और व्यावसायिक प्रिंटिंग सेवाएं प्रदान कर रहा है।"
                : "Serving Ramganj, Sitapur, Uttar Pradesh with 12 years of dedicated experience in Indian wedding photography, wedding videography, video editing, marriage invitation cards, and commercial printing."}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#FFF7E9] text-[#641A27] border border-[#D9BE82] text-xs font-bold">
              <Sparkles aria-hidden="true" className="w-4 h-4 text-[#B52632] shrink-0" />
              <span>
                {locale === "hi"
                  ? "१२ वर्षों का अनुभव • फोटोग्राफी एवं प्रिंटिंग"
                  : "12 Years of Experience • Photography & Print House"}
              </span>
            </div>
          </div>

          {/* Column 2: Photography & Videography */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-[#E5C46A] tracking-wide">
              <Camera aria-hidden="true" className="w-4 h-4" />
              <span>
                {locale === "hi"
                  ? "फोटोग्राफी एवं वीडियोग्राफी"
                  : "Photography & Films"}
              </span>
            </h3>
            <ul className="space-y-2 text-sm text-[#F2E3C9]/85">
              {PHOTOGRAPHY_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/photography-videography#${service.slug}`}
                    className="hover:text-[#E5C46A] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span aria-hidden="true" className="text-[#D9BE82] text-xs">
                      ›
                    </span>
                    <span>{t(service.title)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Invitations & Printing + Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-[#E5C46A] tracking-wide">
              <Printer aria-hidden="true" className="w-4 h-4" />
              <span>
                {locale === "hi" ? "शादी कार्ड व प्रिंटिंग" : "Cards & Printing"}
              </span>
            </h3>
            <ul className="space-y-2 text-sm text-[#F2E3C9]/85">
              {PRINTING_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/wedding-cards-printing#${service.slug}`}
                    className="hover:text-[#E5C46A] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span aria-hidden="true" className="text-[#D9BE82] text-xs">
                      ›
                    </span>
                    <span>{t(service.title)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Location & Direct Contact */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="font-serif text-lg font-bold text-[#E5C46A] tracking-wide">
              {locale === "hi" ? "स्टूडियो संपर्क सूत्र" : "Studio & Contact"}
            </h3>

            <div className="space-y-3 text-sm text-[#F2E3C9]/90">
              <div className="flex items-start gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="w-4 h-4 text-[#E5C46A] shrink-0 mt-1"
                />
                <div>
                  <p className="font-semibold text-[#FFF7E9]">
                    {SITE_CONFIG.businessName}
                  </p>
                  <p>{t(SITE_CONFIG.location.displayFull)}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone
                  aria-hidden="true"
                  className="w-4 h-4 text-[#E5C46A] shrink-0 mt-1"
                />
                <div>
                  <a
                    href={SITE_CONFIG.contact.phoneTel}
                    className="font-semibold text-[#FFF7E9] hover:text-[#E5C46A] transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#F2E3C9]/70">
                    {locale === "hi"
                      ? "सीधे कॉल या व्हाट्सएप के लिए उपलब्ध"
                      : "Available for Phone Calls & WhatsApp"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock
                  aria-hidden="true"
                  className="w-4 h-4 text-[#E5C46A] shrink-0 mt-1"
                />
                <div>
                  <p className="font-medium text-[#FFF7E9]">
                    {t(SITE_CONFIG.openingHours.schedule)}
                  </p>
                  <p className="text-xs text-[#F2E3C9]/70">
                    {t(SITE_CONFIG.openingHours.note)}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {NAVIGATION_ITEMS.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  className="text-xs px-2.5 py-1 rounded-sm bg-[#FFF7E9] text-[#29201D] font-semibold border border-[#D9BE82] hover:bg-[#E5C46A] transition-colors"
                >
                  {t(nav.label)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <DecorativeDivider variant="lotus" tone="gold" className="my-4" />

        {/* Bottom Copyright & Truthfulness Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F2E3C9]/75 text-center sm:text-left">
          <p>
            © {currentYear} {SITE_CONFIG.businessName}, {t(SITE_CONFIG.location.displayShort)}.{" "}
            {locale === "hi" ? "सर्वाधिकार सुरक्षित।" : "All rights reserved."}
          </p>
          <p>
            {locale === "hi"
              ? "वेडिंग फोटोग्राफी • वीडियोग्राफी • शादी कार्ड • प्रिंटिंग"
              : "Wedding Photography • Videography • Invitation Cards • Commercial Printing"}
          </p>
        </div>
      </div>
    </footer>
  );
}
