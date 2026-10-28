"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS, WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppCTA";

export function FAQSection() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-16 sm:py-24 bg-[#F2E3C9] text-[#29201D] parchment-pattern border-b-2 border-[#B89555]/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="faq-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "सामान्य प्रश्न एवं जानकारी"
                : "Frequently Asked Questions"
            }
            hindiAccent="आपकी जिज्ञासाओं के उत्तर"
            title={
              locale === "hi"
                ? "फोटोग्राफी, शादी कार्ड और प्रिंटिंग से जुड़े महत्वपूर्ण प्रश्न।"
                : "Clear Answers About Our Photography & Printing Services."
            }
            subtitle={
              locale === "hi"
                ? "यदि आपके मन में कोई अन्य प्रश्न हो, तो आप सीधे फ़ोन या व्हाट्सएप द्वारा हमसे संपर्क कर सकते हैं।"
                : "Everything you need to know before planning your wedding coverage or printing order with Anuj Studio and Graphics."
            }
            theme="light"
            dividerVariant="paisley"
          />
        </div>

        {/* Native <details> Exclusive Accordion Group (Searchable Hidden Content) */}
        <div className="mt-10 space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => (
            <details
              key={item.id}
              name="anuj-studio-faq"
              open={idx === 0}
              className="group faq-details rounded-sm bg-[#FFF7E9] border-2 border-[#B89555] shadow-sm transition-colors open:border-[#641A27]"
            >
              <summary className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 cursor-pointer list-none font-serif text-lg sm:text-xl font-bold text-[#641A27] hover:text-[#B52632] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#641A27]">
                <span>{t(item.question)}</span>
                <span className="w-8 h-8 rounded-full bg-[#F2E3C9] border border-[#B89555] flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:bg-[#641A27] group-open:text-[#E5C46A]">
                  <ChevronDown aria-hidden="true" className="w-4 h-4" />
                </span>
              </summary>

              <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#29201D]/85 leading-relaxed border-t border-[#B89555]/30">
                <p>{t(item.answer)}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-sm bg-[#641A27] text-[#FFF7E9] border border-[#D9BE82] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#E5C46A]">
              {locale === "hi"
                ? "क्या आपका कोई और सवाल है?"
                : "Have a Specific Question About Your Dates or Order?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#F2E3C9]/90 mt-1">
              {locale === "hi"
                ? "हमें सीधे व्हाट्सएप पर संदेश भेजें—हम खुशी-खुशी आपकी सहायता करेंगे।"
                : "Message us directly on WhatsApp and discuss your celebration or print requirement."}
            </p>
          </div>
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.general}
            label={locale === "hi" ? "व्हाट्सएप पर पूछें" : "Ask on WhatsApp"}
            variant="gold"
            size="md"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}

