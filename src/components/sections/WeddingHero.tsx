"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsAppButton } from "@/components/ui/WhatsAppCTA";

export function WeddingHero() {
  const { locale, t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#2B0910] via-[#43101B] to-[#561623] text-[#FFF7E9] border-b-2 border-[#D9BE82]/50"
    >
      {/* Subtle Ambient Warm Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(229,196,106,0.12),transparent_60%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clean, High-Contrast Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            {/* Single Clean Eyebrow Badge (Light Ivory Pill on Dark Maroon Background) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7E9] text-[#641A27] border border-[#D9BE82] shadow-sm">
              <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-[#B52632]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                {locale === "hi"
                  ? "१२ वर्षों का अनुभव • वेडिंग फोटोग्राफी एवं प्रिंटिंग"
                  : `${SITE_CONFIG.experienceYears} Years of Experience • Weddings & Print`}
              </span>
            </div>

            {/* Grand Headline & Concise Lead Copy */}
            <div className="space-y-4">
              <h1
                id="hero-heading"
                className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-[#FFF7E9]"
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

              <p className="text-base sm:text-lg lg:text-xl text-[#FFF7E9]/90 leading-relaxed max-w-xl">
                {locale === "hi"
                  ? "जीवन के सबसे पावन उत्सवों के लिए वेडिंग फोटोग्राफी, सिनेमैटिक फिल्म्स और सुंदर शादी कार्ड व प्रिंटिंग सेवाएं।"
                  : "Wedding photography, cinematic films, and beautifully printed marriage invitations for life's most cherished celebrations."}
              </p>
            </div>

            {/* Primary & Secondary High-Contrast CTAs (Gold + Warm Ivory, Zero Red-on-Red) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.general}
                label={
                  locale === "hi"
                    ? "व्हाट्सएप पर पूछताछ करें"
                    : "Enquire on WhatsApp"
                }
                variant="gold"
                size="lg"
              />

              <Link
                href="/photography-videography"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm font-semibold text-sm sm:text-base bg-[#FFF7E9] text-[#29201D] border border-[#D9BE82] hover:bg-[#F2E3C9] shadow-md transition-colors min-h-[52px]"
              >
                <span>
                  {locale === "hi"
                    ? "फोटोग्राफी सेवाएं देखें"
                    : "Explore Wedding Photography"}
                </span>
                <ArrowRight aria-hidden="true" className="w-4 h-4 text-[#641A27]" />
              </Link>
            </div>

            {/* Simple, Readable Location Line */}
            <div className="pt-4 border-t border-[#D9BE82]/25 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#F2E3C9]/90">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <MapPin aria-hidden="true" className="w-4 h-4 text-[#E5C46A]" />
                <span>{t(SITE_CONFIG.location.displayFull)}</span>
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-[#D9BE82]/40">
                •
              </span>
              <Link
                href="/wedding-cards-printing"
                className="font-semibold text-[#E5C46A] hover:text-[#FFF7E9] underline underline-offset-4"
              >
                {locale === "hi"
                  ? "शादी कार्ड एवं प्रिंटिंग देखें →"
                  : "View Wedding Cards & Printing →"}
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Warm-Ivory Framed Arch Portrait */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-md lg:max-w-none">
              {/* Light Ivory Frame on Dark Maroon Hero Background for Crisp Separation */}
              <div className="p-3 sm:p-4 rounded-t-[10rem] rounded-b-sm bg-[#FFF7E9] text-[#29201D] border-2 border-[#D9BE82] shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                <div className="relative overflow-hidden rounded-t-[9.2rem] rounded-b-sm border border-[#B89555] aspect-[4/5] bg-[#F2E3C9]">
                  <img
                    src="/images/hero/royal-mandap-couple.png"
                    alt={
                      locale === "hi"
                        ? "फूलों के भव्य मंडप के नीचे भारतीय दूल्हा और दुल्हन का प्रतीकात्मक पोर्ट्रेट"
                        : "Illustrative Indian wedding couple portrait beneath an ornate floral mandap"
                    }
                    fetchPriority="high"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Clean Light Caption Bar Below Photo */}
                <div className="pt-3 px-1 flex items-center justify-between gap-2 text-xs">
                  <span className="font-serif font-bold text-sm text-[#641A27]">
                    {locale === "hi"
                      ? "शुभ विवाह • मंडप एवं वरमाला"
                      : "Indian Weddings • Films • Invitations"}
                  </span>
                  <span className="px-2 py-0.5 rounded-sm bg-[#F2E3C9] border border-[#B89555]/50 text-[11px] text-[#29201D]/80 font-medium">
                    {locale === "hi" ? "प्रतीकात्मक झलक" : "Illustrative Preview"}
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
