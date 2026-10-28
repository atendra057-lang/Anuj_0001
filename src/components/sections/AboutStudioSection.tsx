"use client";

import React from "react";
import { MapPin, Clock, Sparkles, Camera, Printer, Film } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import {
  DecorativeDivider,
  ExperienceSealBadge,
  OrnamentalFrameCorners,
} from "@/components/ornaments/IndianOrnaments";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";

export function AboutStudioSection({
  isFullPage = false,
}: {
  isFullPage?: boolean;
}) {
  const { locale, t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-studio-heading"
      className="relative py-16 sm:py-24 bg-[#FFF7E9] text-[#29201D] parchment-pattern border-b-2 border-[#B89555]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B52632] font-bold mb-2">
                <Sparkles aria-hidden="true" className="w-4 h-4" />
                <span>
                  {locale === "hi"
                    ? "स्टूडियो परिचय • रामगंज, सीतापुर"
                    : `About ${SITE_CONFIG.businessName}`}
                </span>
              </div>

              <h2
                id="about-studio-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#29201D] leading-[1.14]"
              >
                {locale === "hi"
                  ? "उत्सव की परंपरा से जुड़े, हर बारीकी के प्रति समर्पित।"
                  : "Rooted in Celebration. Focused on Every Detail."}
              </h2>

              <DecorativeDivider
                variant="lotus"
                tone="maroon"
                className="justify-start my-2"
              />
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#29201D]/85 leading-relaxed">
              <p>
                {locale === "hi"
                  ? "रामगंज, सीतापुर (उत्तर प्रदेश) में स्थित अनुज स्टूडियो एंड ग्राफिक्स पिछले 12 वर्षों से स्थानीय परिवारों, वर-वधू और व्यापारियों को फोटोग्राफी, वीडियोग्राफी, वीडियो एडिटिंग और प्रिंटिंग सेवाएं प्रदान कर रहा है।"
                  : `Located in Ramganj, Sitapur, Uttar Pradesh, ${SITE_CONFIG.businessName} brings 12 years of dedicated experience across photography, videography, video editing, graphic design, and printing.`}
              </p>

              <p>
                {locale === "hi"
                  ? "हमारा मुख्य फोकस भारतीय विवाह, प्री-वेडिंग, सगाई और शादी के कार्ड छपाई पर है। हम समझते हैं कि शादी की तस्वीरें और निमंत्रण पत्र केवल कागज़ या डिजिटल फाइल नहीं हैं—वे परिवार की प्रतिष्ठा, संस्कार और पीढ़ियों तक सहेजी जाने वाली यादें हैं।"
                  : "While our studio handles a wide spectrum of local photography and commercial print work, our heart lies in Indian weddings—preserving the emotion of marriage rituals through thoughtful photography and videography, and setting the tone for the celebration with well-crafted wedding invitation cards."}
              </p>

              {isFullPage && (
                <p>
                  {locale === "hi"
                    ? "चाहे आपको संपूर्ण विवाह कवरेज की आवश्यकता हो, किसी पारिवारिक समारोह की वीडियो एडिटिंग करानी हो, या अपनी दुकान व कार्यक्रम के लिए विज़िटिंग कार्ड, पोस्टर, पंपलेट और बैनर छपवाने हों—हम हर ग्राहक की आवश्यकता को ध्यान से सुनकर सटीक समाधान देते हैं।"
                    : "Just as importantly, we remain an approachable neighbourhood studio for everyday graphic design and printing needs—supporting local shopkeepers, schools, and families with visiting cards, posters, pamphlets, banners, and event photography."}
                </p>
              )}
            </div>

            {/* Studio Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-sm bg-[#FAF0DC] border border-[#B89555] flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="w-5 h-5 text-[#B52632] shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#641A27]">
                    {locale === "hi" ? "स्टूडियो का स्थान" : "Studio Location"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29201D]/85 mt-0.5">
                    {t(SITE_CONFIG.location.displayFull)}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#FAF0DC] border border-[#B89555] flex items-start gap-3">
                <Clock
                  aria-hidden="true"
                  className="w-5 h-5 text-[#B52632] shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#641A27]">
                    {locale === "hi" ? "संभावित समय" : "Provisional Hours"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29201D]/85 mt-0.5">
                    {t(SITE_CONFIG.openingHours.schedule)}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.general}
                label={
                  locale === "hi"
                    ? "व्हाट्सएप पर संपर्क करें"
                    : "Connect on WhatsApp"
                }
                variant="maroon"
                size="md"
              />
              <PhoneCallButton variant="outline-maroon" size="md" />
            </div>
          </div>

          {/* Right Framed Collage Column (Light Parchment Card to Avoid Dark-on-Dark Nesting) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm bg-[#FAF0DC] text-[#29201D] border-2 border-[#B89555] p-6 sm:p-8 shadow-xl space-y-6">
              <OrnamentalFrameCorners
                colorClass="text-[#641A27]"
                sizeClass="w-8 h-8"
              />

              <div className="flex items-center justify-between gap-2">
                <ExperienceSealBadge
                  years={SITE_CONFIG.experienceYears}
                  labelTop={
                    locale === "hi" ? "१२ वर्षों का अनुभव" : "YEARS OF EXPERIENCE"
                  }
                  labelBottom={
                    locale === "hi" ? "रामगंज • सीतापुर" : "RAMGANJ • SITAPUR"
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#B89555] relative bg-[#FFF7E9] p-1">
                  <img
                    src="/images/wedding/bridal-portrait.png"
                    alt={
                      locale === "hi"
                        ? "भारतीय ब्राइडल पोर्ट्रेट की प्रतीकात्मक झलक"
                        : "Illustrative Indian bridal portrait"
                    }
                    loading="lazy"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <div className="aspect-[4/5] rounded-sm overflow-hidden border border-[#B89555] relative bg-[#FFF7E9] p-1">
                  <img
                    src="/images/invitations/royal-wedding-cards.png"
                    alt={
                      locale === "hi"
                        ? "शादी कार्ड प्रिंटिंग की प्रतीकात्मक झलक"
                        : "Illustrative wedding invitation card printing"
                    }
                    loading="lazy"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#B89555]/45 text-xs sm:text-sm text-[#29201D]/90 font-medium">
                <div className="flex items-center gap-2.5">
                  <Camera aria-hidden="true" className="w-4 h-4 text-[#B52632] shrink-0" />
                  <span>
                    {locale === "hi"
                      ? "विवाह, प्री-वेडिंग, सगाई एवं पारिवारिक फोटोग्राफी"
                      : "Wedding, Pre-Wedding, Engagement & Event Photography"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Film aria-hidden="true" className="w-4 h-4 text-[#B52632] shrink-0" />
                  <span>
                    {locale === "hi"
                      ? "वेडिंग वीडियोग्राफी, सिनेमैटिक फिल्म्स व वीडियो एडिटिंग"
                      : "Wedding Videography, Highlight Films & Video Editing"}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Printer aria-hidden="true" className="w-4 h-4 text-[#B52632] shrink-0" />
                  <span>
                    {locale === "hi"
                      ? "शादी कार्ड, विज़िटिंग कार्ड, पोस्टर, पंपलेट एवं बैनर"
                      : "Marriage Cards, Visiting Cards, Posters, Pamphlets & Banners"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

