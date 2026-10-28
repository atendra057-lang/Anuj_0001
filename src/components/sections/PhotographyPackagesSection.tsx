"use client";

import React from "react";
import { Check, Sparkles, Info } from "lucide-react";
import { PHOTOGRAPHY_PACKAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrnamentalFrameCorners } from "@/components/ornaments/IndianOrnaments";
import { WhatsAppButton } from "@/components/ui/WhatsAppCTA";

export function PhotographyPackagesSection() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#2B0910] via-[#43101B] to-[#2B0910] text-[#FFF7E9] border-b-2 border-[#D9BE82]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="packages-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "कस्टमाइज़ेबल फोटोग्राफी एवं वीडियोग्राफी पैकेज"
                : "Tailored Wedding & Event Packages"
            }
            hindiAccent="शुभ मुहूर्त से रॉयल शादी सिनेमा तक"
            title={
              locale === "hi"
                ? "आपके उत्सव के स्वरूप के अनुसार तीन विशेष पैकेज।"
                : "Three Curated Photography & Film Collections."
            }
            subtitle={
              locale === "hi"
                ? "प्रत्येक विवाह और समारोह की आवश्यकताएं अलग होती हैं। नीचे दिए गए तीनों पैकेज आपके कार्यक्रम, दिनों की संख्या और पसंद के अनुसार पूरी तरह अनुकूलित (कस्टमाइज़) किए जा सकते हैं।"
                : "Every celebration has its own schedule and traditions. Choose a collection below as your starting point and request a custom quotation tailored to your dates and functions."
            }
            theme="dark"
            dividerVariant="mandala"
          />
        </div>

        {/* Three Packages Grid: Light Warm Ivory & Parchment Cards on Dark Maroon Background */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PHOTOGRAPHY_PACKAGES.map((pkg) => {
            const isFeatured = pkg.featured;

            return (
              <article
                key={pkg.id}
                className={`relative rounded-sm flex flex-col justify-between p-6 sm:p-8 transition-all text-[#29201D] ${
                  isFeatured
                    ? "bg-[#FFF7E9] border-2 border-[#E5C46A] shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:-translate-y-3"
                    : "bg-[#FAF0DC] border-2 border-[#D9BE82] shadow-xl"
                }`}
              >
                <OrnamentalFrameCorners
                  colorClass="text-[#641A27]/75"
                  sizeClass="w-8 h-8"
                />

                {/* Top Badge */}
                {isFeatured ? (
                  <div className="mb-4 -mt-2 inline-flex items-center self-start gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#E5C46A] to-[#D9BE82] text-[#29201D] border border-[#B89555] text-xs font-bold uppercase tracking-wider shadow-sm">
                    <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-[#641A27]" />
                    <span>{t(pkg.badge)}</span>
                  </div>
                ) : (
                  <div className="mb-4 inline-flex items-center self-start gap-1.5 px-3 py-1 rounded-sm bg-[#F2E3C9] border border-[#B89555] text-[#641A27] text-xs font-bold uppercase tracking-wider">
                    <span>{t(pkg.badge)}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <p
                      lang="hi"
                      className="font-hindi text-xs sm:text-sm text-[#B52632] font-semibold"
                    >
                      ॥ {pkg.hindiSubtitle} ॥
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#641A27] mt-1">
                      {t(pkg.name)}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-[#29201D]/85 leading-relaxed">
                      {t(pkg.positioning)}
                    </p>
                  </div>

                  {/* Ornamental Hairline */}
                  <div
                    aria-hidden="true"
                    className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#B89555]/60 to-transparent my-4"
                  />

                  {/* Inclusions List */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#641A27] font-bold mb-3">
                      {locale === "hi"
                        ? "प्रस्तावित सेवाएं (पैकेज में शामिल):"
                        : "Proposed Package Inclusions:"}
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.inclusions[locale].map((inclusion) => (
                        <li
                          key={inclusion}
                          className="flex items-start gap-2.5 text-sm text-[#29201D]/90"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#F2E3C9] border border-[#B89555] flex items-center justify-center shrink-0 mt-0.5">
                            <Check
                              aria-hidden="true"
                              className="w-3 h-3 text-[#641A27]"
                            />
                          </span>
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Consultation Scope Note & Request a Quote CTA */}
                <div className="mt-8 pt-5 border-t border-[#B89555]/40 space-y-4">
                  <p className="flex items-start gap-2 text-xs text-[#29201D]/80 leading-relaxed">
                    <Info
                      aria-hidden="true"
                      className="w-4 h-4 text-[#B52632] shrink-0 mt-0.5"
                    />
                    <span>{t(pkg.consultationNote)}</span>
                  </p>

                  <WhatsAppButton
                    message={pkg.whatsappMessage}
                    label={`${t(pkg.ctaLabel)} — ${pkg.name.en}`}
                    variant={isFeatured ? "maroon" : "gold"}
                    size="md"
                    className="w-full"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Transparency Notice: Light Parchment Box on Dark Maroon Background */}
        <div className="mt-10 rounded-sm bg-[#FFF7E9] text-[#29201D] border-2 border-[#D9BE82] p-4 sm:p-5 text-center max-w-3xl mx-auto shadow-md">
          <p className="text-xs sm:text-sm text-[#29201D]/90 leading-relaxed font-medium">
            {locale === "hi"
              ? "नोट: प्रत्येक विवाह और कार्यक्रम का समय, स्थान और आवश्यकताएं भिन्न होती हैं। अंतिम डिलीवरेबल्स, कार्यक्रम की समय-सारणी और शुल्क (कोटेशन) व्हाट्सएप या फ़ोन पर आपकी आवश्यकता समझने के बाद तय किए जाते हैं।"
              : "Scope & Booking Note: Because every family's celebration schedule and coverage requirements are unique, final deliverables, timelines, and pricing are confirmed transparently during your consultation."}
          </p>
        </div>
      </div>
    </section>
  );
}
