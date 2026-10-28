"use client";

import React from "react";
import Link from "next/link";
import { Camera, Film, Printer, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import {
  DecorativeDivider,
  OrnamentalFrameCorners,
} from "@/components/ornaments/IndianOrnaments";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";

export function ExperienceTrustSection() {
  const { locale, t } = useLanguage();

  const pillars = [
    {
      icon: Camera,
      title: {
        en: "Weddings, Pre-Weddings & Engagements",
        hi: "विवाह, प्री-वेडिंग एवं सगाई समारोह",
      },
      description: {
        en: "Dedicated photography for bridal preparations, Baraat, Jaimala, Mandap rituals, Ring Ceremonies, Haldi, Mehendi, and family functions.",
        hi: "ब्राइडल पोर्ट्रेट, बारात, जयमाला, मंडप की रस्मों, रिंग सेरेमनी, हल्दी-मेहंदी और पारिवारिक उत्सवों की संपूर्ण फोटोग्राफी।",
      },
    },
    {
      icon: Film,
      title: {
        en: "Videography, Wedding Films & Editing",
        hi: "वीडियोग्राफी, वेडिंग फिल्म्स व एडिटिंग",
      },
      description: {
        en: "Full ceremony videography, story-driven cinematic highlight edits (subject to agreed scope), and custom video editing services.",
        hi: "संपूर्ण समारोह की वीडियोग्राफी, तय पैकेज के अनुसार सिनेमैटिक हाइलाइट फिल्म्स और कुशल वीडियो एडिटिंग सेवा।",
      },
    },
    {
      icon: Printer,
      title: {
        en: "Wedding Cards & Complete Printing",
        hi: "शादी कार्ड एवं संपूर्ण प्रिंटिंग",
      },
      description: {
        en: "Marriage invitation cards, engagement invites, visiting cards, posters, pamphlets, banners, and custom graphics under one roof.",
        hi: "विवाह निमंत्रण पत्र, तिलक/सगाई कार्ड, विज़िटिंग कार्ड, पोस्टर, पंपलेट, बैनर और अन्य सभी प्रिंटिंग कार्य एक ही छत के नीचे।",
      },
    },
  ];

  return (
    <section
      aria-labelledby="trust-experience-heading"
      className="relative py-16 sm:py-24 bg-[#FFF7E9] text-[#29201D] parchment-pattern border-b border-[#B89555]/35"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Invitation-Inspired Framed Monument Container */}
        <div className="relative rounded-sm bg-gradient-to-br from-[#FFF7E9] via-[#FAF0DC] to-[#F2E3C9] border-2 border-[#B89555] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(100,26,39,0.08)]">
          <OrnamentalFrameCorners
            colorClass="text-[#641A27]"
            sizeClass="w-9 h-9 sm:w-12 sm:h-12"
          />

          {/* Inner Fine Gold Hairline Border */}
          <div
            aria-hidden="true"
            className="absolute inset-3 sm:inset-4 border border-[#B89555]/45 pointer-events-none"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Monumental "12" Lockup + Split Editorial Image */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative inline-flex flex-col items-center lg:items-start p-6 sm:p-8 rounded-sm bg-[#641A27] text-[#FFF7E9] border-2 border-[#D9BE82] shadow-xl w-full">
                <span className="text-xs uppercase tracking-[0.24em] text-[#E5C46A] font-semibold">
                  {locale === "hi"
                    ? "विश्वास और अनुभव की परंपरा"
                    : "Established Local Craftsmanship"}
                </span>

                <div className="my-3 flex items-baseline gap-4">
                  <span className="font-serif text-7xl sm:text-8xl font-bold leading-none bg-gradient-to-b from-[#FFF7E9] via-[#E5C46A] to-[#B89555] bg-clip-text text-transparent">
                    {SITE_CONFIG.experienceYears}
                  </span>
                  <div className="text-left">
                    <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#E5C46A]">
                      {locale === "hi" ? "वर्षों का" : "Years of"}
                    </span>
                    <span className="block text-sm sm:text-base text-[#F2E3C9]">
                      {locale === "hi"
                        ? "निरंतर अनुभव"
                        : "Dedicated Experience"}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F2E3C9]/90 leading-relaxed border-t border-[#D9BE82]/30 pt-3 mt-1">
                  {locale === "hi"
                    ? "रामगंज, सीतापुर (उत्तर प्रदेश) में वैवाहिक फोटोग्राफी, वीडियोग्राफी और प्रिंटिंग सेवाओं का विश्वसनीय केंद्र।"
                    : "Serving families, couples, and local businesses in Ramganj, Sitapur, Uttar Pradesh across celebrations and print."}
                </p>

                {/* Embedded Bridal Thumbnail Frame */}
                <div className="mt-5 w-full overflow-hidden rounded-sm border border-[#D9BE82]/60 aspect-[16/10] relative">
                  <img
                    src="/images/wedding/pheras-ceremony.png"
                    alt={
                      locale === "hi"
                        ? "विवाह समारोह की पावन रस्मों की प्रतीकात्मक तस्वीर"
                        : "Illustrative Indian wedding ceremony around the sacred fire"
                    }
                    loading="lazy"
                    width={600}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-sm bg-[#2B0910]/85 text-[10px] text-[#E5C46A] border border-[#D9BE82]/40">
                    {locale === "hi" ? "प्रतीकात्मक झलक" : "Illustrative Preview"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Narrative & 3 Core Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B52632] font-bold mb-2">
                  <Sparkles aria-hidden="true" className="w-4 h-4" />
                  <span>
                    {locale === "hi"
                      ? "अनुज स्टूडियो एंड ग्राफिक्स • रामगंज, सीतापुर"
                      : "Anuj Studio and Graphics • Ramganj, Sitapur"}
                  </span>
                </div>

                <h2
                  id="trust-experience-heading"
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#29201D] leading-[1.14]"
                >
                  {locale === "hi"
                    ? "12 वर्षों से आपके अनमोल पलों और उत्सवों को संजोने का अनुभव।"
                    : "12 Years of Capturing the Moments That Matter."}
                </h2>

                <DecorativeDivider
                  variant="kalash"
                  tone="maroon"
                  className="justify-start my-2"
                />

                <p className="text-base sm:text-lg text-[#29201D]/85 leading-relaxed">
                  {locale === "hi"
                    ? "एक भारतीय विवाह केवल एक कार्यक्रम नहीं, बल्कि दो परिवारों की भावनाओं, रस्मों और खुशियों का महाउत्सव होता है। पिछले 12 वर्षों के अनुभव के साथ, अनुज स्टूडियो एंड ग्राफिक्स शादी के कार्ड छपवाने से लेकर विवाह की फोटोग्राफी, वीडियोग्राफी और वीडियो एडिटिंग तक हर कदम पर आपके साथ रहता है।"
                    : "An Indian wedding is a tapestry of sacred rituals, family reunions, vibrant colours, and once-in-a-lifetime emotions. With 12 years of hands-on experience in Ramganj, Sitapur, Anuj Studio and Graphics brings together wedding photography, videography, video editing, marriage invitation card printing, and everyday graphic printing in one approachable studio."}
                </p>
              </div>

              {/* Three Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title.en}
                      className="p-4 rounded-sm bg-[#FFF7E9] border border-[#B89555]/50 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-sm bg-[#641A27] text-[#E5C46A] flex items-center justify-center mb-3">
                          <Icon aria-hidden="true" className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#641A27] leading-snug">
                          {t(pillar.title)}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-[#29201D]/80 leading-relaxed">
                          {t(pillar.description)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Practical Assurance List & CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#B89555]/40">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-[#641A27]">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-[#B52632]" />
                    <span>
                      {locale === "hi"
                        ? "व्यक्तिगत परामर्श एवं कस्टम पैकेज"
                        : "Personalised Consultation"}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-[#B52632]" />
                    <span>
                      {locale === "hi"
                        ? "फोटोग्राफी व प्रिंटिंग एक ही स्थान पर"
                        : "Photography + Print Under One Roof"}
                    </span>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <WhatsAppButton
                    message={WHATSAPP_MESSAGES.general}
                    label={locale === "hi" ? "स्टूडियो से बात करें" : "Talk to the Studio"}
                    variant="maroon"
                    size="sm"
                  />
                  <Link
                    href="/about"
                    className="text-xs sm:text-sm font-semibold text-[#641A27] hover:text-[#B52632] underline underline-offset-4"
                  >
                    {locale === "hi" ? "हमारे बारे में जानें →" : "About Our Studio →"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

