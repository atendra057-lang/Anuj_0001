"use client";

import React from "react";
import { Calendar, Users, Film, Sparkles } from "lucide-react";
import { WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { PageBanner } from "@/components/ui/PageBanner";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";
import { PhotographyServicesShowcase } from "@/components/sections/PhotographyServicesShowcase";
import { IndianWeddingExperience } from "@/components/sections/IndianWeddingExperience";
import { PhotographyPackagesSection } from "@/components/sections/PhotographyPackagesSection";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";

export function PhotographyPageContent() {
  const { locale } = useLanguage();

  const planningNotes = [
    {
      icon: Calendar,
      title: {
        en: "Ceremony Schedule Alignment",
        hi: "मांगलिक कार्यक्रमों की समय-सारणी",
      },
      detail: {
        en: "Before your wedding or function, we discuss the sequence and timing of rituals—from morning Haldi to late-evening Jaimala and Pheras—so coverage is planned smoothly.",
        hi: "विवाह या समारोह से पहले हम हल्दी, बारात आगमन, जयमाला और फेरों के समय पर विस्तार से चर्चा करते हैं ताकि कोई भी महत्वपूर्ण पल छूटे नहीं।",
      },
    },
    {
      icon: Users,
      title: {
        en: "Family & Elder Portrait Priority",
        hi: "परिवार एवं बड़ों के पोर्ट्रेट",
      },
      detail: {
        en: "Alongside bridal and couple portraits, we make sure parents, grandparents, siblings, and close relatives are photographed thoughtfully.",
        hi: "दूल्हा-दुल्हन के पोर्ट्रेट के साथ-साथ माता-पिता, दादा-दादी और करीबी रिश्तेदारों के सामूहिक व आशीर्वाद फोटो का विशेष ध्यान रखा जाता है।",
      },
    },
    {
      icon: Film,
      title: {
        en: "Custom Video Editing & Highlights",
        hi: "मनपसंद वीडियो एडिटिंग व हाइलाइट्स",
      },
      detail: {
        en: "Whether you want traditional full-ceremony documentation or a music-driven wedding highlights film, editing preferences are discussed directly with you.",
        hi: "चाहे आपको संपूर्ण रस्मों की पारंपरिक वीडियो चाहिए या संगीत के साथ सिनेमैटिक हाइलाइट्स—एडिटिंग आपकी पसंद के अनुसार की जाती है।",
      },
    },
  ];

  return (
    <>
      <PageBanner
        breadcrumbLabel={
          locale === "hi"
            ? "फोटोग्राफी एवं वीडियोग्राफी"
            : "Photography & Videography"
        }
        eyebrow={
          locale === "hi"
            ? "१२ वर्षों का वैवाहिक फोटोग्राफी अनुभव"
            : "12 Years of Wedding & Event Storytelling"
        }
        hindiAccent="शुभ विवाह • प्री-वेडिंग • सिनेमैटिक फिल्म्स"
        title={
          locale === "hi"
            ? "विवाह फोटोग्राफी, सिनेमैटिक फिल्म्स एवं वीडियो एडिटिंग।"
            : "Wedding Photography, Cinematic Films & Event Coverage."
        }
        subtitle={
          locale === "hi"
            ? "रामगंज और सीतापुर में विवाह, प्री-वेडिंग शूट, सगाई, हल्दी-मेहंदी, पारिवारिक उत्सव और प्रोफेशनल वीडियो एडिटिंग की संपूर्ण सेवाएं।"
            : "Thoughtful photography and videography for weddings, pre-wedding shoots, engagements, Haldi-Mehendi rituals, family celebrations, and custom video editing in Ramganj, Sitapur."
        }
      >
        <div className="flex flex-wrap items-center gap-3.5">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.weddingPhotography}
            label={
              locale === "hi"
                ? "वेडिंग फोटोग्राफी कोटेशन लें"
                : "Discuss Your Wedding Dates"
            }
            variant="gold"
            size="lg"
          />
          <PhoneCallButton variant="outline-gold" size="lg" />
        </div>
      </PageBanner>

      {/* Complete 9-Service Showcase with Full Descriptions & Highlights */}
      <PhotographyServicesShowcase showAllDetails={true} />

      {/* How We Plan Your Wedding Coverage */}
      <section className="py-16 bg-[#FFF7E9] text-[#29201D] border-b border-[#B89555]/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#B52632] font-bold">
              <Sparkles aria-hidden="true" className="w-3.5 h-3.5" />
              <span>
                {locale === "hi"
                  ? "हमारी कार्यशैली"
                  : "Thoughtful Preparation"}
              </span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#641A27] mt-1">
              {locale === "hi"
                ? "आपके पारिवारिक उत्सव के अनुरूप सुनियोजित कवरेज"
                : "Planned Around Your Family's Traditions & Schedule"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planningNotes.map((note) => {
              const Icon = note.icon;
              return (
                <div
                  key={note.title.en}
                  className="rounded-sm bg-[#FAF0DC] border-2 border-[#B89555] p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#641A27] text-[#E5C46A] flex items-center justify-center">
                    <Icon aria-hidden="true" className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#641A27]">
                    {note.title[locale]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#29201D]/85 leading-relaxed">
                    {note.detail[locale]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 6 Indian Wedding Ceremony Chapters */}
      <IndianWeddingExperience />

      {/* Three Customisable Photography Packages */}
      <PhotographyPackagesSection />

      {/* Direct Booking & Quotation Form */}
      <ContactEnquirySection />
    </>
  );
}

