"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { WEDDING_CHAPTERS, getWhatsAppUrl } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrnamentalFrameCorners } from "@/components/ornaments/IndianOrnaments";

export function IndianWeddingExperience() {
  const { locale, t } = useLanguage();

  return (
    <section
      aria-labelledby="wedding-experience-heading"
      className="relative py-16 sm:py-24 bg-[#F2E3C9] text-[#29201D] parchment-pattern border-b border-[#B89555]/45 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="wedding-experience-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "भारतीय विवाह उत्सव की यात्रा"
                : "The Indian Wedding Experience"
            }
            hindiAccent="रिश्तों के रंग • Rishton Ke Rang"
            title={
              locale === "hi"
                ? "सगाई के शगुन से लेकर सात फेरों और आशीर्वाद समारोह तक।"
                : "Every Ritual, Celebration & Chapter of Your Shaadi."
            }
            subtitle={
              locale === "hi"
                ? "हर परिवार की अपनी परंपराएं और रीति-रिवाज होते हैं। चाहे एक दिवसीय उत्सव हो या कई दिनों का वैवाहिक कार्यक्रम, हम आपके परिवार की परंपरा के अनुसार हर अध्याय को सहेजते हैं।"
                : "Every family celebrates with its own cherished customs and schedule. Whether you are planning a single auspicious ceremony or a multi-day marriage celebration, our coverage adapts to your traditions."
            }
            theme="light"
            dividerVariant="paisley"
          />
        </div>

        {/* 6-Chapter Editorial Sequence Grid: Clean Warm Ivory Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {WEDDING_CHAPTERS.map((chapter) => (
            <article
              key={chapter.id}
              className="relative rounded-sm border-2 border-[#B89555] bg-[#FFF7E9] text-[#29201D] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-md"
            >
              <OrnamentalFrameCorners
                colorClass="text-[#B89555]"
                sizeClass="w-7 h-7"
              />

              <div>
                {/* Top Chapter Number & Hindi Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-serif text-4xl sm:text-5xl font-bold leading-none text-[#641A27]">
                    {chapter.number}
                  </span>
                  <span
                    lang="hi"
                    className="font-hindi text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#B89555] text-[#641A27]"
                  >
                    {chapter.hindiLabel}
                  </span>
                </div>

                {/* Framed Chapter Photograph */}
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden mb-5 border border-[#B89555]">
                  <img
                    src={chapter.image}
                    alt={t(chapter.title)}
                    loading="lazy"
                    width={500}
                    height={312}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-sm bg-[#FFF7E9]/90 border border-[#B89555]/50 text-[10px] text-[#29201D] font-medium">
                    {locale === "hi" ? "प्रतीकात्मक" : "Illustrative"}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#641A27]">
                  {t(chapter.title)}
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-[#B52632]">
                  {t(chapter.subtitle)}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#29201D]/85">
                  {t(chapter.description)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B89555]/35 flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(chapter.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#641A27] hover:text-[#B52632]"
                >
                  <MessageCircle aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>
                    {locale === "hi"
                      ? "इस समारोह के लिए पूछताछ करें →"
                      : "Plan Coverage for This Event →"}
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
