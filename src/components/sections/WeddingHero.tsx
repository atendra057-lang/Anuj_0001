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
      className="relative overflow-hidden min-h-[580px] sm:min-h-[650px] lg:min-h-[740px] flex items-center bg-[#2B0910] text-[#FFF7E9] border-b-2 border-[#D9BE82]"
    >
      {/* Full-Bleed Hero Background Photograph with Floral Arch & Cascading Rose Petals */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/floral-petal-shower.jpg"
          alt={
            locale === "hi"
              ? "फूलों की वर्षा और पुष्प सजावट के बीच प्रसन्न भारतीय दूल्हा और दुल्हन"
              : "Joyful Indian bride and groom celebrating beneath a shower of rose petals and floral decorations"
          }
          fetchPriority="high"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
        />

        {/* Directional Scrim for Crisp Typography on Left while Keeping Floral & Couple Vibrant on Right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#21070C]/92 via-[#380D16]/70 to-[#21070C]/15 sm:via-[#380D16]/55 lg:from-[#21070C]/88 lg:via-[#380D16]/45 lg:to-transparent"
        />

        {/* Subtle Bottom Vignette for Grounded Section Transition */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#21070C]/80 via-[#21070C]/30 to-transparent"
        />
      </div>

      {/* Subtle Ornamental Gold Frame Inset Around the Full-Bleed Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 sm:inset-5 border border-[#E5C46A]/35 rounded-sm z-10"
      />

      {/* Foreground Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl space-y-6">
          {/* Single Clean Eyebrow Badge (Light Warm Ivory Pill) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7E9]/95 text-[#641A27] border border-[#D9BE82] shadow-md">
            <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-[#B52632]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em]">
              {locale === "hi"
                ? "१२ वर्षों का अनुभव • वेडिंग फोटोग्राफी एवं प्रिंटिंग"
                : `${SITE_CONFIG.experienceYears} Years of Experience • Weddings & Print`}
            </span>
          </div>

          {/* Grand Headline & Concise Supporting Copy */}
          <div className="space-y-4">
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight text-[#FFF7E9] drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
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

            <p className="text-base sm:text-lg lg:text-xl text-[#FFF7E9]/95 leading-relaxed max-w-xl drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]">
              {locale === "hi"
                ? "जीवन के सबसे पावन उत्सवों के लिए वेडिंग फोटोग्राफी, सिनेमैटिक फिल्म्स और सुंदर शादी कार्ड व प्रिंटिंग सेवाएं।"
                : "Wedding photography, cinematic films, and beautifully printed marriage invitations for life's most cherished celebrations."}
            </p>
          </div>

          {/* High-Contrast Primary & Secondary Action Buttons */}
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
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm font-semibold text-sm sm:text-base bg-[#FFF7E9] text-[#29201D] border border-[#D9BE82] hover:bg-[#F2E3C9] shadow-lg transition-colors min-h-[52px]"
            >
              <span>
                {locale === "hi"
                  ? "फोटोग्राफी सेवाएं देखें"
                  : "Explore Wedding Photography"}
              </span>
              <ArrowRight aria-hidden="true" className="w-4 h-4 text-[#641A27]" />
            </Link>
          </div>

          {/* Clean Studio Location & Printing Link Bar */}
          <div className="pt-4 border-t border-[#E5C46A]/35 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#FFF7E9]">
            <span className="inline-flex items-center gap-1.5 font-medium drop-shadow">
              <MapPin aria-hidden="true" className="w-4 h-4 text-[#E5C46A]" />
              <span>{t(SITE_CONFIG.location.displayFull)}</span>
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-[#E5C46A]/60">
              •
            </span>
            <Link
              href="/wedding-cards-printing"
              className="font-semibold text-[#E5C46A] hover:text-[#FFF7E9] underline underline-offset-4 drop-shadow"
            >
              {locale === "hi"
                ? "शादी कार्ड एवं प्रिंटिंग देखें →"
                : "View Wedding Cards & Printing →"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
