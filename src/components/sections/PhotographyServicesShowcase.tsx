"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import {
  PHOTOGRAPHY_SERVICES,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrnamentalFrameCorners } from "@/components/ornaments/IndianOrnaments";
import { WhatsAppButton } from "@/components/ui/WhatsAppCTA";

export function PhotographyServicesShowcase({
  showAllDetails = false,
}: {
  showAllDetails?: boolean;
}) {
  const { locale, t } = useLanguage();
  const primaryServices = PHOTOGRAPHY_SERVICES.filter(
    (s) => s.priority === "primary"
  );
  const secondaryServices = PHOTOGRAPHY_SERVICES.filter(
    (s) => s.priority === "secondary"
  );

  return (
    <section
      aria-labelledby="photography-services-heading"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#43101B] via-[#531522] to-[#360C15] text-[#FFF7E9] border-b-2 border-[#D9BE82]/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="photography-services-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "फोटोग्राफी एवं वीडियोग्राफी सेवाएं"
                : "Photography, Videography & Editing"
            }
            hindiAccent="यादों का सफ़र • Yaadon Ka Safar"
            title={
              locale === "hi"
                ? "आपके हर उत्सव और भावनाओं का जीवंत संरक्षण।"
                : "Your Celebrations, Beautifully Preserved."
            }
            subtitle={
              locale === "hi"
                ? "पारंपरिक विवाह रस्मों और ब्राइडल पोर्ट्रेट से लेकर प्री-वेडिंग शूट, सगाई, पारिवारिक समारोह और वीडियो एडिटिंग तक संपूर्ण विजुअल सेवाएं।"
                : "From grand wedding ceremonies and cinematic highlight films to pre-wedding stories, engagements, Haldi-Mehendi festivities, family functions, and custom video editing."
            }
            theme="dark"
            dividerVariant="lotus"
          />
        </div>

        {/* Asymmetrical Editorial Grid for 4 Primary Wedding Offerings */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Oversized Lead Feature Card: Wedding Photography */}
          {primaryServices[0] && (
            <article
              id={primaryServices[0].slug}
              className="lg:col-span-7 relative rounded-sm bg-[#2B0910] border-2 border-[#D9BE82]/70 overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              <OrnamentalFrameCorners
                colorClass="text-[#E5C46A]"
                sizeClass="w-8 h-8"
              />
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1D060A]">
                <img
                  src={primaryServices[0].image}
                  alt={t(primaryServices[0].imageAlt)}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#2B0910] via-[#2B0910]/30 to-transparent"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#641A27]/95 border border-[#E5C46A]/60 text-xs font-semibold text-[#E5C46A]">
                  <Sparkles aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>
                    {locale === "hi" ? "प्रमुख विशेषज्ञता" : "Signature Specialization"}
                  </span>
                </div>
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-sm bg-[#2B0910]/85 border border-[#D9BE82]/40 text-[10px] text-[#F2E3C9]/80">
                  {locale === "hi" ? "प्रतीकात्मक झलक" : "Illustrative Preview"}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {primaryServices[0].hindiAccent && (
                    <p
                      lang="hi"
                      className="font-hindi text-xs sm:text-sm text-[#E5C46A] font-medium mb-1"
                    >
                      ॥ {primaryServices[0].hindiAccent} ॥
                    </p>
                  )}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF7E9]">
                    {t(primaryServices[0].title)}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-[#F2E3C9]/90 leading-relaxed">
                    {showAllDetails
                      ? t(primaryServices[0].detailedDescription)
                      : t(primaryServices[0].shortDescription)}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[#D9BE82]/25 pt-4">
                    {primaryServices[0].highlights[locale].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#F2E3C9]"
                      >
                        <Check
                          aria-hidden="true"
                          className="w-4 h-4 text-[#E5C46A] shrink-0 mt-0.5"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <WhatsAppButton
                    message={primaryServices[0].whatsappMessage}
                    label={
                      locale === "hi"
                        ? "वेडिंग फोटोग्राफी कोटेशन"
                        : "Enquire for Wedding Photography"
                    }
                    variant="gold"
                    size="sm"
                  />
                  {!showAllDetails && (
                    <Link
                      href="/photography-videography"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#E5C46A] hover:text-[#FFF7E9]"
                    >
                      <span>
                        {locale === "hi" ? "विवरण देखें" : "Full Service Details"}
                      </span>
                      <ArrowRight aria-hidden="true" className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* Right Stacked Column: Wedding Videography, Cinematic Films, Pre-Wedding */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {primaryServices.slice(1).map((service) => (
              <article
                key={service.id}
                id={service.slug}
                className="group relative rounded-sm bg-[#2B0910]/90 border border-[#D9BE82]/50 hover:border-[#E5C46A] p-5 sm:p-6 transition-all shadow-lg flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="w-full sm:w-36 aspect-[16/10] sm:aspect-square rounded-sm overflow-hidden border border-[#D9BE82]/40 shrink-0 relative bg-[#1D060A]">
                  <img
                    src={service.image}
                    alt={t(service.imageAlt)}
                    loading="lazy"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  {service.hindiAccent && (
                    <span
                      lang="hi"
                      className="font-hindi text-xs text-[#E5C46A] font-medium block"
                    >
                      {service.hindiAccent}
                    </span>
                  )}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF7E9]">
                    {t(service.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F2E3C9]/85 leading-relaxed">
                    {showAllDetails
                      ? t(service.detailedDescription)
                      : t(service.shortDescription)}
                  </p>

                  {showAllDetails && (
                    <ul className="pt-2 space-y-1">
                      {service.highlights[locale].map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-1.5 text-xs text-[#F2E3C9]/90"
                        >
                          <Check
                            aria-hidden="true"
                            className="w-3.5 h-3.5 text-[#E5C46A] shrink-0 mt-0.5"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C46A] hover:text-[#FFF7E9] underline underline-offset-4"
                    >
                      <MessageCircle aria-hidden="true" className="w-3.5 h-3.5" />
                      <span>
                        {locale === "hi"
                          ? "व्हाट्सएप पर पूछताछ करें →"
                          : "Enquire on WhatsApp →"}
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Supporting 5 Categories: Engagement, Haldi/Mehendi, Family Functions, Video Editing, Custom Needs */}
        <div className="mt-12 pt-10 border-t border-[#D9BE82]/30">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#E5C46A] font-semibold">
                {locale === "hi"
                  ? "संपूर्ण उत्सव एवं संपादन सेवाएं"
                  : "Complete Celebration & Editing Capabilities"}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF7E9] mt-1">
                {locale === "hi"
                  ? "सगाई, हल्दी-मेहंदी, पारिवारिक उत्सव एवं वीडियो एडिटिंग"
                  : "Engagements, Haldi-Mehendi, Family Events & Video Editing"}
              </h3>
            </div>
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.engagementAndEvents}
              label={
                locale === "hi" ? "अन्य कार्यक्रम हेतु पूछताछ" : "Enquire About Your Event"
              }
              variant="outline-gold"
              size="sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {secondaryServices.map((service, idx) => (
              <article
                key={service.id}
                id={service.slug}
                className={`rounded-sm p-5 sm:p-6 border transition-all flex flex-col justify-between ${
                  idx === secondaryServices.length - 1
                    ? "md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#641A27] to-[#43101B] border-[#E5C46A]/60"
                    : "bg-[#FFF7E9] text-[#29201D] border-[#B89555]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      lang="hi"
                      className={`font-hindi text-xs font-semibold ${
                        idx === secondaryServices.length - 1
                          ? "text-[#E5C46A]"
                          : "text-[#B52632]"
                      }`}
                    >
                      {service.hindiAccent}
                    </span>
                    <span
                      aria-hidden="true"
                      className={
                        idx === secondaryServices.length - 1
                          ? "text-[#E5C46A]"
                          : "text-[#B89555]"
                      }
                    >
                      ✦
                    </span>
                  </div>

                  <h4
                    className={`font-serif text-xl font-bold ${
                      idx === secondaryServices.length - 1
                        ? "text-[#FFF7E9]"
                        : "text-[#641A27]"
                    }`}
                  >
                    {t(service.title)}
                  </h4>

                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                      idx === secondaryServices.length - 1
                        ? "text-[#F2E3C9]/90"
                        : "text-[#29201D]/85"
                    }`}
                  >
                    {showAllDetails
                      ? t(service.detailedDescription)
                      : t(service.shortDescription)}
                  </p>

                  {showAllDetails && (
                    <ul className="mt-3 space-y-1.5 pt-3 border-t border-current/15">
                      {service.highlights[locale].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-xs opacity-90"
                        >
                          <Check aria-hidden="true" className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-current/15 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wide ${
                      idx === secondaryServices.length - 1
                        ? "text-[#E5C46A] hover:text-[#FFF7E9]"
                        : "text-[#641A27] hover:text-[#B52632]"
                    }`}
                  >
                    <MessageCircle aria-hidden="true" className="w-3.5 h-3.5" />
                    <span>
                      {locale === "hi"
                        ? "व्हाट्सएप पर जानकारी लें →"
                        : "Discuss This Service →"}
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

