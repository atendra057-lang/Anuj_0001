"use client";

import React, { useState } from "react";
import { ScrollText, Sparkles, CheckCircle, MessageCircle } from "lucide-react";
import {
  INVITATION_STYLE_DIRECTIONS,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  DecorativeDivider,
  OrnamentalFrameCorners,
} from "@/components/ornaments/IndianOrnaments";
import { WhatsAppButton } from "@/components/ui/WhatsAppCTA";

export function WeddingInvitationShowcase() {
  const { locale, t } = useLanguage();
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(0);
  const activeStyle = INVITATION_STYLE_DIRECTIONS[selectedStyleIndex];

  const printingJourneySteps = [
    {
      step: "01",
      title: {
        en: "Discuss Your Requirement",
        hi: "अपनी आवश्यकता साझा करें",
      },
      detail: {
        en: "Share your ceremony dates, card quantity, language preference (Hindi/English), and budget expectations.",
        hi: "विवाह की तिथि, कार्ड की अनुमानित संख्या और अपनी पसंद की भाषा (हिंदी या अंग्रेज़ी) के बारे में बताएं।",
      },
    },
    {
      step: "02",
      title: {
        en: "Select a Design Direction",
        hi: "कार्ड डिज़ाइन व शैली चुनें",
      },
      detail: {
        en: "Explore traditional red-and-gold, royal ivory, contemporary maroon, or floral invitation styles and wording layouts.",
        hi: "पारंपरिक लाल-सुनहरे, आइवरी, मैरून या फ्लोरल कार्ड डिज़ाइनों और मांगलिक मैटर के विकल्प चुनें।",
      },
    },
    {
      step: "03",
      title: {
        en: "Confirm Specification & Quote",
        hi: "मैटर जांचें एवं कोटेशन तय करें",
      },
      detail: {
        en: "Review the names, ceremony schedule, card specifications, and quotation before printing begins.",
        hi: "छपाई से पहले नाम, कार्यक्रम विवरण, कार्ड के प्रकार और कोटेशन की पूरी पुष्टि करें।",
      },
    },
    {
      step: "04",
      title: {
        en: "Proceed with Printing",
        hi: "साफ एवं सुंदर छपाई",
      },
      detail: {
        en: "Your invitations or print materials are prepared with crisp typography and attention to detail.",
        hi: "सुंदर अक्षरों और आकर्षक लेआउट के साथ आपके निमंत्रण पत्रों की छपाई का कार्य संपन्न किया जाता है।",
      },
    },
    {
      step: "05",
      title: {
        en: "Collection as Agreed",
        hi: "तय समय पर कार्ड प्राप्त करें",
      },
      detail: {
        en: "Arrange collection from our studio in Ramganj, Sitapur or delivery according to the actual service agreed.",
        hi: "तय की गई व्यवस्था के अनुसार स्टूडियो से अपने तैयार कार्ड प्राप्त करें।",
      },
    },
  ];

  return (
    <section
      id="wedding-invitations"
      aria-labelledby="wedding-invitations-heading"
      className="relative py-16 sm:py-24 bg-[#FFF7E9] text-[#29201D] parchment-pattern border-b-2 border-[#B89555]/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="wedding-invitations-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "शादी कार्ड एवं आमंत्रण पत्र छपाई"
                : "Wedding Invitation Cards & Craftsmanship"
            }
            hindiAccent="स्नेहिल आमंत्रण • Shadi Card Printing"
            title={
              locale === "hi"
                ? "आपके शुभ विवाह का प्रथम निमंत्रण, जो हर अतिथि के मन में बस जाए।"
                : "An Invitation Worthy of Your Family's Celebration."
            }
            subtitle={
              locale === "hi"
                ? "विवाह, सगाई, तिलक और रिसेप्शन के लिए पारंपरिक व आधुनिक शादी कार्ड। शुद्ध हिंदी और अंग्रेज़ी टाइपसेटिंग के साथ आकर्षक छपाई।"
                : "Wedding invitation printing is a cornerstone of Anuj Studio and Graphics. We help families choose expressive card styles and print clear, welcoming invitations for weddings, engagements, and auspicious ceremonies."
            }
            theme="light"
            dividerVariant="kalash"
          />
        </div>

        {/* Main Showcase: Left Visual + Interactive 5-Style Invitation Explorer */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Studio Wedding Card Flat-Lay & Ceremony Types */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative p-3 rounded-sm bg-[#641A27] border-2 border-[#D9BE82] shadow-xl">
              <OrnamentalFrameCorners
                colorClass="text-[#E5C46A]"
                sizeClass="w-7 h-7"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#D9BE82]/60">
                <img
                  src="/images/invitations/royal-wedding-cards.png"
                  alt={
                    locale === "hi"
                      ? "पारंपरिक मैरून और सुनहरे बॉर्डर वाले भारतीय शादी कार्ड की प्रतीकात्मक झलक"
                      : "Illustrative luxury Indian wedding invitation cards in maroon and ivory with gold borders"
                  }
                  loading="lazy"
                  width={640}
                  height={480}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-sm bg-[#2B0910]/90 border border-[#D9BE82]/50 text-[10px] text-[#E5C46A]">
                  {locale === "hi"
                    ? "प्रतीकात्मक डिज़ाइन झलक"
                    : "Illustrative Design Preview"}
                </span>
              </div>

              <div className="p-4 text-[#FFF7E9]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#E5C46A] font-semibold">
                  {locale === "hi"
                    ? "मांगलिक निमंत्रण पत्र"
                    : "Ceremonial Invitation Suite"}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                  {locale === "hi"
                    ? "विवाह, तिलक, सगाई एवं अन्य शुभ संस्कारों हेतु कार्ड"
                    : "Invitations for Every Auspicious Occasion"}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#F2E3C9]/90 leading-relaxed">
                  {locale === "hi"
                    ? "हम शादी कार्ड, सगाई/रिंग सेरेमनी, तिलक, रिसेप्शन, गृह प्रवेश, मुंडन और जन्मदिन के लिए सुंदर निमंत्रण पत्र प्रिंट करते हैं।"
                    : "From grand multi-insert marriage cards to single-leaf invitations for Engagements, Tilak, Reception, Griha Pravesh, and Mundan ceremonies."}
                </p>
              </div>
            </div>

            {/* Ceremony Invitation Checklist */}
            <div className="rounded-sm bg-[#F2E3C9] border border-[#B89555] p-5 space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#641A27] flex items-center gap-2">
                <ScrollText aria-hidden="true" className="w-4 h-4 text-[#B52632]" />
                <span>
                  {locale === "hi"
                    ? "उपलब्ध आमंत्रण पत्र श्रेणियाँ:"
                    : "Invitation Categories We Print:"}
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-[#29201D]">
                {[
                  {
                    en: "Wedding Invitation Cards (Shadi Cards)",
                    hi: "विवाह निमंत्रण पत्र (शादी कार्ड)",
                  },
                  {
                    en: "Engagement & Ring Ceremony Cards",
                    hi: "सगाई एवं रिंग सेरेमनी कार्ड",
                  },
                  {
                    en: "Tilak & Roka Invitations",
                    hi: "तिलक एवं रोका आमंत्रण पत्र",
                  },
                  {
                    en: "Reception & Blessing Invites",
                    hi: "रिसेप्शन (प्रीतिभोज) कार्ड",
                  },
                  {
                    en: "Griha Pravesh & Pooja Cards",
                    hi: "गृह प्रवेश एवं अनुष्ठान कार्ड",
                  },
                  {
                    en: "Mundan, Birthday & Anniversary Cards",
                    hi: "मुंडन, जन्मदिन व सालगिरह कार्ड",
                  },
                ].map((item) => (
                  <div key={item.en} className="flex items-center gap-2">
                    <CheckCircle
                      aria-hidden="true"
                      className="w-4 h-4 text-[#B52632] shrink-0"
                    />
                    <span>{t(item)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 5-Direction Invitation Style Previewer */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#B52632] font-bold">
                  {locale === "hi"
                    ? "५ प्रतीकात्मक कार्ड डिज़ाइन दिशाएं"
                    : "5 Illustrative Design Directions"}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#29201D]">
                  {locale === "hi"
                    ? "अपनी पसंदीदा शादी कार्ड शैली चुनें"
                    : "Explore Wedding Card Aesthetic Directions"}
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-sm bg-[#F2E3C9] border border-[#B89555] text-[#641A27] font-medium self-start">
                {locale === "hi"
                  ? "शैली देखने के लिए नीचे टैब चुनें"
                  : "Select a style tab below"}
              </span>
            </div>

            {/* Style Selector Tabs */}
            <div
              role="tablist"
              aria-label={
                locale === "hi"
                  ? "शादी कार्ड डिज़ाइन शैलियाँ"
                  : "Wedding invitation design directions"
              }
              className="grid grid-cols-2 sm:grid-cols-5 gap-2"
            >
              {INVITATION_STYLE_DIRECTIONS.map((dir, index) => {
                const isSelected = index === selectedStyleIndex;
                return (
                  <button
                    key={dir.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`invitation-panel-${dir.id}`}
                    id={`invitation-tab-${dir.id}`}
                    onClick={() => setSelectedStyleIndex(index)}
                    className={`px-3 py-2.5 rounded-sm text-left border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#641A27] text-[#FFF7E9] border-[#641A27] shadow-md"
                        : "bg-[#FAF0DC] text-[#29201D] border-[#B89555]/60 hover:border-[#641A27]"
                    }`}
                  >
                    <span
                      className={`block text-[10px] uppercase tracking-widest font-bold ${
                        isSelected ? "text-[#E5C46A]" : "text-[#B52632]"
                      }`}
                    >
                      Style {dir.styleNumber}
                    </span>
                    <span className="block font-serif text-xs sm:text-sm font-bold leading-tight mt-0.5 line-clamp-1">
                      {t(dir.colorScheme.label)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Ornate Invitation Card Mockup Canvas */}
            <div
              role="tabpanel"
              id={`invitation-panel-${activeStyle.id}`}
              aria-labelledby={`invitation-tab-${activeStyle.id}`}
              style={{
                backgroundColor: activeStyle.colorScheme.bg,
                color: activeStyle.colorScheme.text,
                borderColor: activeStyle.colorScheme.border,
              }}
              className="relative rounded-sm border-2 p-6 sm:p-10 shadow-2xl transition-colors duration-300"
            >
              <OrnamentalFrameCorners
                colorClass="text-current opacity-80"
                sizeClass="w-9 h-9 sm:w-11 sm:h-11"
              />

              {/* Inner Double Invitation Border */}
              <div
                style={{ borderColor: activeStyle.colorScheme.border }}
                className="border border-opacity-50 p-5 sm:p-8 text-center space-y-4"
              >
                <p
                  lang="hi"
                  style={{ color: activeStyle.colorScheme.accent }}
                  className="font-hindi text-xs sm:text-sm font-semibold tracking-widest"
                >
                  ॥ श्री गणेशाय नमः • शुभ विवाह निमंत्रण ॥
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-current/30 text-[11px] uppercase tracking-[0.2em]">
                  <Sparkles aria-hidden="true" className="w-3 h-3" />
                  <span>
                    {locale === "hi"
                      ? `शैली ${activeStyle.styleNumber} — प्रतीकात्मक कार्ड डिज़ाइन`
                      : `Direction ${activeStyle.styleNumber} — Illustrative Card Concept`}
                  </span>
                </div>

                <h4 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
                  {t(activeStyle.title)}
                </h4>

                <p
                  style={{ color: activeStyle.colorScheme.accent }}
                  className="text-xs sm:text-sm font-semibold uppercase tracking-widest"
                >
                  {t(activeStyle.subtitle)}
                </p>

                <DecorativeDivider
                  variant="lotus"
                  tone={
                    activeStyle.colorScheme.bg === "#FFF7E9" ||
                    activeStyle.colorScheme.bg === "#F2E3C9"
                      ? "maroon"
                      : "gold"
                  }
                />

                <p className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed opacity-95">
                  {t(activeStyle.description)}
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs opacity-90">
                  <span className="px-3 py-1.5 rounded-sm border border-current/30 font-medium">
                    <strong>{locale === "hi" ? "उपयुक्त:" : "Ideal For:"}</strong>{" "}
                    {t(activeStyle.suitedFor)}
                  </span>
                </div>

                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl(activeStyle.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#E5C46A] to-[#D9BE82] text-[#29201D] shadow hover:brightness-105"
                  >
                    <MessageCircle aria-hidden="true" className="w-4 h-4" />
                    <span>
                      {locale === "hi"
                        ? "इस कार्ड शैली के लिए पूछताछ करें"
                        : "Discuss This Card Direction on WhatsApp"}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#29201D]/75 italic">
              {locale === "hi"
                ? "* ऊपर दिखाई गई कार्ड शैलियाँ डिज़ाइन की दिशा समझाने के लिए हैं। वास्तविक कार्ड के नमूने, कागज़ के विकल्प और उपलब्ध कैटलॉग आप स्टूडियो में या व्हाट्सएप पर देख सकते हैं।"
                : "* Note: The five styles above are illustrative design directions to help you explore colour and typography themes. Actual card stock options and physical catalogue samples can be reviewed during your enquiry."}
            </p>
          </div>
        </div>

        {/* 5-Step Printing Customer Journey */}
        <div className="mt-16 pt-12 border-t border-[#B89555]/45">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B52632] font-bold">
              {locale === "hi"
                ? "सरल ५-चरणीय प्रक्रिया"
                : "From Concept to Printed Cards"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#29201D] mt-1">
              {locale === "hi"
                ? "शादी कार्ड एवं प्रिंटिंग ऑर्डर की प्रक्रिया"
                : "How Wedding Card & Printing Orders Work"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {printingJourneySteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-sm bg-[#FAF0DC] border border-[#B89555] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-2xl font-bold text-[#B52632]">
                      {item.step}
                    </span>
                    <span aria-hidden="true" className="text-[#B89555]">
                      ✦
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#641A27]">
                    {t(item.title)}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#29201D]/85 leading-relaxed">
                    {t(item.detail)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Primary Wedding Card & Printing CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.weddingCards}
              label={
                locale === "hi"
                  ? "शादी कार्ड के लिए कोटेशन लें"
                  : "Discuss Your Wedding Cards"
              }
              variant="maroon"
              size="lg"
            />
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.weddingCards}
              label={
                locale === "hi"
                  ? "प्रिंटिंग कोटेशन प्राप्त करें"
                  : "Request a Printing Quote"
              }
              variant="vermilion"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

