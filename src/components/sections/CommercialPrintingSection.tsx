"use client";

import React from "react";
import {
  CreditCard,
  FileText,
  Megaphone,
  Flag,
  Layers,
  Check,
  MessageCircle,
} from "lucide-react";
import {
  PRINTING_SERVICES,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppCTA";

export function CommercialPrintingSection() {
  const { locale, t } = useLanguage();
  // Exclude wedding-invitation-cards here since it has Section 6 dedicated to it, or show the 5 commercial/general ones prominently
  const commercialServices = PRINTING_SERVICES.filter(
    (s) => s.id !== "wedding-invitation-cards"
  );

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "visiting-cards": CreditCard,
    "poster-printing": Megaphone,
    "pamphlet-printing": FileText,
    "banner-printing": Flag,
    "custom-printing-graphics": Layers,
  };

  return (
    <section
      id="commercial-printing"
      aria-labelledby="commercial-printing-heading"
      className="relative py-16 sm:py-24 bg-[#29201D] text-[#FFF7E9] border-b-2 border-[#D9BE82]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="commercial-printing-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "व्यावसायिक एवं स्थानीय प्रिंटिंग सेवाएं"
                : "Commercial Printing & Graphic Design"
            }
            hindiAccent="विज़िटिंग कार्ड • पोस्टर • पंपलेट • बैनर"
            title={
              locale === "hi"
                ? "दुकानों, संस्थानों और पारिवारिक आयोजनों के लिए संपूर्ण प्रिंटिंग समाधान।"
                : "Everyday Printing & Graphics for Local Businesses & Families."
            }
            subtitle={
              locale === "hi"
                ? "शादी के कार्ड के अलावा हम रामगंज और सीतापुर के व्यापारियों, विद्यालयों और परिवारों के लिए विज़िटिंग कार्ड, पोस्टर, पंपलेट, बैनर और अन्य सभी ग्राफिक्स कार्य करते हैं।"
                : "Beyond weddings, Anuj Studio and Graphics is a dependable local print and graphic design partner for shopkeepers, schools, clinics, event organizers, and households across Ramganj and Sitapur."
            }
            theme="dark"
            dividerVariant="lotus"
          />
        </div>

        {/* Top Editorial Commercial Print Feature + Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Visual Showcase Card (Light Ivory on Dark Charcoal Background) */}
          <div className="lg:col-span-5 rounded-sm bg-[#FAF0DC] text-[#29201D] border-2 border-[#D9BE82] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="relative aspect-[16/11] rounded-sm overflow-hidden border border-[#B89555] mb-5 bg-[#FFF7E9] p-1">
                <img
                  src="/images/printing/commercial-print-showcase.png"
                  alt={
                    locale === "hi"
                      ? "विज़िटिंग कार्ड, पोस्टर, पंपलेट और बैनर प्रिंटिंग की प्रतीकात्मक झलक"
                      : "Illustrative showcase of visiting cards, posters, pamphlets, and banners"
                  }
                  loading="lazy"
                  width={600}
                  height={412}
                  className="w-full h-full object-cover rounded-sm"
                />
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-sm bg-[#FFF7E9]/95 text-[10px] font-bold text-[#641A27] border border-[#B89555]">
                  {locale === "hi" ? "प्रतीकात्मक झलक" : "Illustrative Preview"}
                </span>
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[#B52632] font-bold">
                {locale === "hi"
                  ? "स्पष्ट डिज़ाइन • विश्वसनीय छपाई"
                  : "Graphic Design & Print Under One Roof"}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#641A27] mt-1">
                {locale === "hi"
                  ? "अपने व्यापार और कार्यक्रम की पहचान को मजबूत बनाएं"
                  : "Designed for Readability, Built for Local Impact"}
              </h3>
              <p className="mt-2.5 text-sm text-[#29201D]/85 leading-relaxed">
                {locale === "hi"
                  ? "चाहे नई दुकान के लिए विज़िटिंग कार्ड और बैनर बनवाना हो, स्कूल/कोचिंग के लिए पंपलेट व पोस्टर छपवाने हों, या किसी सामाजिक कार्यक्रम की प्रचार सामग्री तैयार करानी हो—हम डिज़ाइन से छपाई तक पूरी सहायता करते हैं।"
                  : "Whether you are launching a new shop in Ramganj, promoting an educational batch, or putting up welcome banners for a community function, we handle both the Hindi/English layout design and printing coordination."}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#B89555]/45">
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.commercialPrinting}
                label={
                  locale === "hi"
                    ? "अपनी प्रिंटिंग आवश्यकता पर चर्चा करें"
                    : "Discuss Your Printing Requirement"
                }
                variant="maroon"
                size="md"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Grid of 5 Commercial Print Offerings */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {commercialServices.map((service, index) => {
              const Icon = iconMap[service.id] || Layers;
              const isWide = index === commercialServices.length - 1;

              return (
                <article
                  key={service.id}
                  id={service.slug}
                  className={`rounded-sm bg-[#FFF7E9] text-[#29201D] border-2 border-[#B89555] p-5 sm:p-6 flex flex-col justify-between shadow-md ${
                    isWide ? "sm:col-span-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-[#641A27] text-[#E5C46A]">
                        <Icon aria-hidden="true" className="w-5 h-5" />
                      </span>
                      <span
                        lang="hi"
                        className="font-hindi text-xs font-semibold text-[#B52632] bg-[#F2E3C9] px-2.5 py-1 rounded-sm border border-[#B89555]/50"
                      >
                        {service.hindiAccent}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#641A27]">
                      {t(service.title)}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#29201D]/85 leading-relaxed">
                      {t(service.shortDescription)}
                    </p>

                    <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-[#B89555]/35">
                      {service.highlights[locale].map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-xs text-[#29201D]/90"
                        >
                          <Check
                            aria-hidden="true"
                            className="w-3.5 h-3.5 text-[#B52632] shrink-0 mt-0.5"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#B89555]/35">
                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#641A27] hover:text-[#B52632] underline underline-offset-4"
                    >
                      <MessageCircle aria-hidden="true" className="w-3.5 h-3.5" />
                      <span>
                        {locale === "hi"
                          ? "व्हाट्सएप पर कोटेशन मांगें →"
                          : "Request Quote on WhatsApp →"}
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

