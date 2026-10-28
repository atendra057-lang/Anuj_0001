"use client";

import React from "react";
import Link from "next/link";
import { Camera, Film, ScrollText, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import {
  ExperienceSealBadge,
  MandalaWatermark,
  OrnamentalFrameCorners,
  ToranScallopBorder,
} from "@/components/ornaments/IndianOrnaments";
import { WhatsAppButton } from "@/components/ui/WhatsAppCTA";

export function WeddingHero() {
  const { locale, t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#2B0910] via-[#43101B] to-[#641A27] text-[#FFF7E9] border-b-2 border-[#D9BE82]/60"
    >
      {/* Top Toran Border */}
      <ToranScallopBorder className="text-[#D9BE82]/35" />

      {/* Decorative Mandala Watermarks */}
      <MandalaWatermark className="absolute -top-28 -left-28 w-[26rem] h-[26rem] text-[#D9BE82]/10 hero-ornament-rotate" />
      <MandalaWatermark className="absolute -bottom-32 -right-24 w-[30rem] h-[30rem] text-[#E5C46A]/10 hero-ornament-rotate" />

      {/* Subtle Radial Warm Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(229,196,106,0.16),transparent_60%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Wedding Typography */}
          <div className="lg:col-span-7 space-y-6">
            {/* Celebratory Hindi Phrase & Service Pills */}
            <div className="space-y-3">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#641A27]/90 border border-[#D9BE82]/50">
                <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-[#E5C46A]" />
                <span
                  lang="hi"
                  className="font-hindi text-xs sm:text-sm text-[#E5C46A] font-medium tracking-wide"
                >
                  ॥ खुशियों के हर पल को संजोएं • Khushiyon Ke Har Pal Ko Sanjoyein ॥
                </span>
              </div>

              {/* Three Small Decorative Service Labels */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-medium bg-[#43101B]/90 border border-[#D9BE82]/35 text-[#F2E3C9]">
                  <Camera aria-hidden="true" className="w-3.5 h-3.5 text-[#E5C46A]" />
                  <span>
                    {locale === "hi" ? "वेडिंग फोटोग्राफी" : "Wedding Photography"}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-medium bg-[#43101B]/90 border border-[#D9BE82]/35 text-[#F2E3C9]">
                  <Film aria-hidden="true" className="w-3.5 h-3.5 text-[#E5C46A]" />
                  <span>
                    {locale === "hi" ? "सिनेमैटिक वेडिंग फिल्म्स" : "Wedding Films"}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-medium bg-[#43101B]/90 border border-[#D9BE82]/35 text-[#F2E3C9]">
                  <ScrollText aria-hidden="true" className="w-3.5 h-3.5 text-[#E5C46A]" />
                  <span>
                    {locale === "hi" ? "शादी कार्ड एवं प्रिंटिंग" : "Wedding Invitations"}
                  </span>
                </span>
              </div>
            </div>

            {/* Grand Headline */}
            <div className="space-y-4">
              <h1
                id="hero-heading"
                className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight text-[#FFF7E9]"
              >
                {locale === "hi" ? (
                  <>
                    हर <span className="text-[#E5C46A] italic">शादी</span> की एक
                    कहानी होती है, जिसे सदा के लिए याद रखा जाए।
                  </>
                ) : (
                  <>
                    Every <span className="text-[#E5C46A] italic">Shaadi</span>{" "}
                    Has a Story Worth Remembering.
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#F2E3C9]/95 leading-relaxed max-w-2xl">
                {locale === "hi"
                  ? "जीवन के सबसे पावन उत्सवों के लिए वेडिंग फोटोग्राफी, सिनेमैटिक फिल्म्स और सुंदर शादी कार्ड व प्रिंटिंग सेवाएं।"
                  : "Wedding photography, cinematic films, and beautifully printed invitations for life's most cherished celebrations."}
              </p>

              <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#E5C46A] font-medium tracking-wide">
                <MapPin aria-hidden="true" className="w-4 h-4 shrink-0" />
                <span>
                  {locale === "hi"
                    ? `सेवा क्षेत्र: ${t(SITE_CONFIG.location.displayFull)}`
                    : `Serving ${t(SITE_CONFIG.location.displayShort)} & surrounding areas`}
                </span>
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/photography-videography"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm font-semibold text-sm sm:text-base bg-gradient-to-r from-[#B52632] to-[#D13B35] text-[#FFF7E9] border border-[#E5C46A]/70 hover:brightness-110 shadow-lg transition-all min-h-[52px]"
              >
                <span>
                  {locale === "hi"
                    ? "वेडिंग फोटोग्राफी देखें"
                    : "Explore Wedding Photography"}
                </span>
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>

              <WhatsAppButton
                message={WHATSAPP_MESSAGES.general}
                label={
                  locale === "hi" ? "व्हाट्सएप पर पूछताछ करें" : "Enquire on WhatsApp"
                }
                variant="gold"
                size="lg"
              />
            </div>

            {/* Secondary Link to Wedding Cards + 12-Year Seal */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#D9BE82]/25">
              <ExperienceSealBadge
                years={SITE_CONFIG.experienceYears}
                labelTop={
                  locale === "hi" ? "१२ वर्षों का अनुभव" : "YEARS OF EXPERIENCE"
                }
                labelBottom={
                  locale === "hi"
                    ? "रामगंज • सीतापुर (उ.प्र.)"
                    : "RAMGANJ • SITAPUR, U.P."
                }
              />

              <Link
                href="/wedding-cards-printing"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E5C46A] hover:text-[#FFF7E9] transition-colors"
              >
                <ScrollText aria-hidden="true" className="w-4 h-4" />
                <span className="underline underline-offset-4 decoration-[#D9BE82]/60 group-hover:decoration-[#FFF7E9]">
                  {locale === "hi"
                    ? "शादी कार्ड एवं प्रिंटिंग सेवाएं देखें →"
                    : "Explore Wedding Card Printing & Graphics →"}
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Ornate Mandap Arch Framed Visual Composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Ornamental Invitation Frame */}
              <div className="relative p-3 sm:p-4 rounded-t-[10rem] rounded-b-sm bg-gradient-to-b from-[#641A27] via-[#43101B] to-[#2B0910] border-2 border-[#D9BE82] shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
                <OrnamentalFrameCorners
                  colorClass="text-[#E5C46A]"
                  sizeClass="w-8 h-8"
                />

                {/* Inner Gold Arch Frame */}
                <div className="relative overflow-hidden rounded-t-[9rem] rounded-b-sm border border-[#E5C46A]/70 aspect-[4/5] bg-[#2B0910]">
                  {/* LCP Candidate Image: fetchPriority="high", NO loading="lazy" */}
                  <img
                    src="/images/hero/royal-mandap-couple.png"
                    alt={
                      locale === "hi"
                        ? "फूलों के भव्य मंडप के नीचे भारतीय दूल्हा और दुल्हन का प्रतीकात्मक पोर्ट्रेट"
                        : "Illustrative Indian wedding couple portrait beneath an ornate floral mandap in crimson and gold"
                    }
                    fetchPriority="high"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Subtle Bottom Vignette for Caption Legibility */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#21070C] via-[#21070C]/65 to-transparent"
                  />

                  {/* Caption Ribbon inside Arch */}
                  <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 flex items-end justify-between gap-2 text-xs text-[#FFF7E9]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C46A] font-semibold">
                        {locale === "hi"
                          ? "शुभ विवाह • सिनेमैटिक कवरेज"
                          : "Shubh Vivah • Editorial Direction"}
                      </p>
                      <p className="font-serif text-sm sm:text-base font-medium text-[#FFF7E9]">
                        {locale === "hi"
                          ? "मंडप, वरमाला एवं पारंपरिक रस्में"
                          : "Mandap Portraits, Rituals & Wedding Films"}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-sm bg-[#43101B]/90 border border-[#D9BE82]/40 text-[10px] text-[#F2E3C9]/85 shrink-0">
                      {locale === "hi" ? "प्रतीकात्मक झलक" : "Illustrative Preview"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Invitation & Craftsmanship Mini-Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-6 z-10 rounded-sm bg-[#FFF7E9] text-[#29201D] border-2 border-[#B89555] p-3.5 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/invitations/royal-wedding-cards.png"
                    alt={
                      locale === "hi"
                        ? "पारंपरिक शादी कार्ड की झलक"
                        : "Illustrative Indian wedding invitation card"
                    }
                    width={64}
                    height={64}
                    className="w-14 h-14 rounded-sm object-cover border border-[#B89555]"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#B52632] font-bold">
                      {locale === "hi"
                        ? "शादी कार्ड एवं प्रिंटिंग"
                        : "Shadi Cards & Print"}
                    </p>
                    <p className="font-serif text-sm font-bold text-[#29201D] leading-snug">
                      {locale === "hi"
                        ? "आकर्षक विवाह निमंत्रण पत्र व विज़िटिंग कार्ड"
                        : "Custom Marriage Cards, Posters & Banners"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

