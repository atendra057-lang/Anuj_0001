"use client";

import React from "react";
import { ScrollText, Type, CheckCircle2 } from "lucide-react";
import { WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { PageBanner } from "@/components/ui/PageBanner";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";
import { WeddingInvitationShowcase } from "@/components/sections/WeddingInvitationShowcase";
import { CommercialPrintingSection } from "@/components/sections/CommercialPrintingSection";
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";

export function PrintingPageContent() {
  const { locale } = useLanguage();

  const cardElements = [
    {
      title: {
        en: "Mangalik Karyakram (Ceremony Itinerary)",
        hi: "मांगलिक कार्यक्रम (रस्मों की समय-सारणी)",
      },
      detail: {
        en: "Clear, well-spaced formatting for Tilak, Haldi, Mandapchhadan, Baraat Prasthan, Shubh Vivah, and Vidaai dates and timings.",
        hi: "तिलक, हल्दी, मंडपच्छादन, बारात प्रस्थान, शुभ विवाह एवं विदाई की तारीख और समय की स्पष्ट व सुंदर छपाई।",
      },
    },
    {
      title: {
        en: "Family Blessings & Names (Darshanabhilashi & Vinayavanat)",
        hi: "दर्शनाभिलाषी, स्वागताकांक्षी एवं विनीत",
      },
      detail: {
        en: "Careful proofreading of family elders' names, lineages, and cordial invitation lines so every relative is honoured accurately.",
        hi: "परिवार के बुजुर्गों, रिश्तेदारों और स्नेहीजनों के नामों की शुद्धता की विशेष जांच ताकि हर नाम सम्मानपूर्वक छपे।",
      },
    },
    {
      title: {
        en: "Bilingual Hindi & English Typesetting",
        hi: "हिंदी (देवनागरी) एवं अंग्रेज़ी टाइपसेटिंग",
      },
      detail: {
        en: "Whether your family prefers pure Hindi invitations, formal English cards, or a combination of both, we prepare clean proofs before printing.",
        hi: "चाहे आप शुद्ध हिंदी में कार्ड छपवाना चाहें, अंग्रेज़ी में या दोनों भाषाओं में—हम छपाई से पहले साफ प्रूफ तैयार करते हैं।",
      },
    },
  ];

  return (
    <>
      <PageBanner
        breadcrumbLabel={
          locale === "hi"
            ? "शादी कार्ड एवं प्रिंटिंग"
            : "Wedding Cards & Printing"
        }
        eyebrow={
          locale === "hi"
            ? "शादी कार्ड, विज़िटिंग कार्ड, पोस्टर, पंपलेट व बैनर"
            : "Marriage Invitations & Commercial Print House"
        }
        hindiAccent="स्नेहिल निमंत्रण • व्यावसायिक प्रिंटिंग"
        title={
          locale === "hi"
            ? "शादी कार्ड छपाई एवं संपूर्ण ग्राफिक प्रिंटिंग सेवाएं।"
            : "Wedding Invitation Cards, Visiting Cards, Posters & Banners."
        }
        subtitle={
          locale === "hi"
            ? "पारंपरिक व आधुनिक विवाह निमंत्रण पत्रों से लेकर दुकानों व संस्थानों के लिए विज़िटिंग कार्ड, पोस्टर, पंपलेट और बैनर डिज़ाइन व प्रिंटिंग।"
            : "From auspicious Indian wedding invitation cards to visiting cards, posters, pamphlets, and banners for local businesses and events in Ramganj, Sitapur."
        }
      >
        <div className="flex flex-wrap items-center gap-3.5">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.weddingCards}
            label={
              locale === "hi"
                ? "शादी कार्ड कोटेशन लें"
                : "Discuss Your Wedding Cards"
            }
            variant="gold"
            size="lg"
          />
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.commercialPrinting}
            label={
              locale === "hi"
                ? "प्रिंटिंग कोटेशन मांगें"
                : "Request a Printing Quote"
            }
            variant="outline-gold"
            size="lg"
          />
          <PhoneCallButton variant="outline-gold" size="lg" />
        </div>
      </PageBanner>

      {/* Core Wedding Invitation Showcase & 5-Style Interactive Explorer */}
      <WeddingInvitationShowcase />

      {/* Traditional Wording & Proofing Care Section */}
      <section className="py-16 bg-[#F2E3C9] text-[#29201D] border-b-2 border-[#B89555]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B52632] font-bold">
              <Type aria-hidden="true" className="w-4 h-4" />
              <span>
                {locale === "hi"
                  ? "शुद्ध टाइपसेटिंग एवं प्रूफरीडिंग"
                  : "Attention to Invitation Detail"}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#641A27] mt-1">
              {locale === "hi"
                ? "निमंत्रण पत्र के हर शब्द और विवरण में शुद्धता"
                : "Thoughtful Formatting for Traditional Indian Invitations"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardElements.map((el) => (
              <div
                key={el.title.en}
                className="rounded-sm bg-[#FFF7E9] border-2 border-[#B89555] p-6 space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-2 text-[#B52632]">
                  <ScrollText aria-hidden="true" className="w-5 h-5" />
                  <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-[#6C7C60]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#641A27]">
                  {el.title[locale]}
                </h3>
                <p className="text-xs sm:text-sm text-[#29201D]/85 leading-relaxed">
                  {el.detail[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Printing & Graphics Services */}
      <CommercialPrintingSection />

      {/* Direct Printing Quotation Form */}
      <ContactEnquirySection />
    </>
  );
}

