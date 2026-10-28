"use client";

import React, { useState } from "react";
import {
  Award,
  Camera,
  ScrollText,
  Users,
  Layers,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG, WHATSAPP_MESSAGES } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrnamentalFrameCorners } from "@/components/ornaments/IndianOrnaments";
import { WhatsAppButton, PhoneCallButton } from "@/components/ui/WhatsAppCTA";

export function WhyChooseAndProcessSection() {
  const { locale, t } = useLanguage();
  const [activeFlow, setActiveFlow] = useState<"photography" | "printing">(
    "photography"
  );

  const reasons = [
    {
      icon: Award,
      title: {
        en: "12 Years of Practical Experience",
        hi: "12 वर्षों का व्यावहारिक अनुभव",
      },
      description: {
        en: "Over a decade of working closely with local families, wedding ceremonies, and print requirements in Ramganj and Sitapur.",
        hi: "रामगंज और सीतापुर में एक दशक से अधिक समय से वैवाहिक समारोहों और प्रिंटिंग कार्यों का विश्वसनीय अनुभव।",
      },
    },
    {
      icon: Camera,
      title: {
        en: "Photography, Videography & Editing Together",
        hi: "फोटोग्राफी, वीडियोग्राफी व एडिटिंग एक साथ",
      },
      description: {
        en: "Coordinate your still photography, full ceremony videography, and highlight video editing through a single studio.",
        hi: "फोटोग्राफी, संपूर्ण वीडियोग्राफी और वीडियो एडिटिंग के लिए अलग-अलग भटकने की आवश्यकता नहीं।",
      },
    },
    {
      icon: ScrollText,
      title: {
        en: "Wedding Cards & Event Printing Under One Roof",
        hi: "शादी कार्ड और प्रिंटिंग एक ही छत के नीचे",
      },
      description: {
        en: "Order your marriage invitation cards, welcome banners, and family event stationery at the same place you book your photography.",
        hi: "जहाँ आप शादी की फोटोग्राफी बुक करते हैं, वहीं से शादी के कार्ड और स्वागत बैनर भी छपवा सकते हैं।",
      },
    },
    {
      icon: Users,
      title: {
        en: "Coverage Across Celebrations of Every Scale",
        hi: "छोटे पारिवारिक कार्यक्रमों से भव्य विवाह तक",
      },
      description: {
        en: "Equally welcoming whether you are booking a multi-day wedding, a home Haldi or Mundan ceremony, or 100 visiting cards.",
        hi: "चाहे कई दिनों का भव्य विवाह हो, घर में मुंडन/जन्मदिन हो, या दुकान के लिए विज़िटिंग कार्ड—हर ग्राहक का समान स्वागत।",
      },
    },
    {
      icon: Layers,
      title: {
        en: "Flexible, Discussion-Led Packages",
        hi: "आपकी आवश्यकता के अनुसार लचीले पैकेज",
      },
      description: {
        en: "No rigid templates—coverage schedules, deliverables, and printing quantities are tailored to what your family or business actually needs.",
        hi: "आपके कार्यक्रम की समय-सारणी और बजट के अनुसार ही सेवाओं और डिलीवरेबल्स का निर्धारण किया जाता है।",
      },
    },
    {
      icon: MessageSquare,
      title: {
        en: "Direct, Easy Communication",
        hi: "सीधा एवं सरल संवाद",
      },
      description: {
        en: "Reach the studio directly by telephone or WhatsApp without middlemen, complex booking portals, or registration barriers.",
        hi: "बिना किसी जटिल प्रक्रिया के सीधे फ़ोन या व्हाट्सएप द्वारा स्टूडियो से बात करें और जानकारी प्राप्त करें।",
      },
    },
  ];

  const photographySteps = [
    {
      step: "01",
      title: {
        en: "Tell the Studio About Your Event",
        hi: "अपने कार्यक्रम का विवरण साझा करें",
      },
      description: {
        en: "Share your wedding or function dates, venue location in or around Sitapur, and the ceremonies you are planning.",
        hi: "विवाह या उत्सव की तारीख, स्थान और होने वाले मुख्य कार्यक्रमों की जानकारी हमें व्हाट्सएप या कॉल पर बताएं।",
      },
    },
    {
      step: "02",
      title: {
        en: "Discuss the Required Coverage",
        hi: "आवश्यक कवरेज व पैकेज पर चर्चा करें",
      },
      description: {
        en: "Choose whether you need photography, videography, cinematic highlight films, pre-wedding shoots, or single-function coverage.",
        hi: "फोटोग्राफी, वीडियोग्राफी, सिनेमैटिक फिल्म या प्री-वेडिंग में से अपनी पसंद की सेवाओं का चयन करें।",
      },
    },
    {
      step: "03",
      title: {
        en: "Receive a Customised Quotation",
        hi: "कस्टमाइज़्ड कोटेशन प्राप्त करें",
      },
      description: {
        en: "Based on your schedule and deliverables, we provide a clear quotation tailored to your requirements.",
        hi: "आपके चुने गए कार्यक्रमों और आवश्यकताओं के आधार पर स्पष्ट कोटेशन प्राप्त करें।",
      },
    },
    {
      step: "04",
      title: {
        en: "Confirm Your Booking",
        hi: "विवरण तय कर बुकिंग पक्की करें",
      },
      description: {
        en: "Once the ceremony schedule and scope are agreed upon, confirm your dates with the studio.",
        hi: "सभी विवरण और समय-सारणी तय होने के बाद अपनी बुकिंग सुनिश्चित करें।",
      },
    },
  ];

  const printingSteps = [
    {
      step: "01",
      title: {
        en: "Explain What You Need Printed",
        hi: "अपनी प्रिंटिंग आवश्यकता बताएं",
      },
      description: {
        en: "Let us know whether you need wedding invitation cards, visiting cards, posters, pamphlets, or banners.",
        hi: "शादी कार्ड, विज़िटिंग कार्ड, पोस्टर, पंपलेट या बैनर में से अपनी आवश्यकता और अनुमानित संख्या बताएं।",
      },
    },
    {
      step: "02",
      title: {
        en: "Discuss Designs & Specifications",
        hi: "डिज़ाइन, भाषा और आकार चुनें",
      },
      description: {
        en: "Select card styles, dimensions, wording in Hindi or English, and layout preferences.",
        hi: "कार्ड या बैनर की डिज़ाइन शैली, नाप और हिंदी/अंग्रेज़ी मैटर पर स्टूडियो के साथ चर्चा करें।",
      },
    },
    {
      step: "03",
      title: {
        en: "Review Quotation & Proof",
        hi: "कोटेशन एवं मैटर की जांच करें",
      },
      description: {
        en: "Review the quotation and verify the text details before the print run is started.",
        hi: "छपाई शुरू होने से पहले कोटेशन और लिखे गए विवरण (मैटर) की अच्छी तरह पुष्टि कर लें।",
      },
    },
    {
      step: "04",
      title: {
        en: "Confirm the Printing Order",
        hi: "प्रिंटिंग ऑर्डर कन्फर्म करें",
      },
      description: {
        en: "Proceed with printing and arrange collection according to the agreed schedule.",
        hi: "सहमति के बाद छपाई कार्य प्रारंभ कराएं और तय व्यवस्था के अनुसार सामग्री प्राप्त करें।",
      },
    },
  ];

  const activeSteps =
    activeFlow === "photography" ? photographySteps : printingSteps;

  return (
    <section
      aria-labelledby="why-contact-heading"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#43101B] via-[#531522] to-[#2B0910] text-[#FFF7E9] border-b-2 border-[#D9BE82]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Why Contact the Studio */}
        <div id="why-contact-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "अनुज स्टूडियो एंड ग्राफिक्स क्यों चुनें"
                : `Why Families & Businesses Choose ${SITE_CONFIG.businessName}`
            }
            hindiAccent="विश्वास एवं कलात्मकता"
            title={
              locale === "hi"
                ? "आपका उत्सव साधारण से कहीं अधिक खास होने का हकदार है।"
                : "Your Celebration Deserves More Than Ordinary."
            }
            subtitle={
              locale === "hi"
                ? "12 वर्षों का अनुभव, स्थानीय समझ और फोटोग्राफी से लेकर शादी कार्ड छपाई तक सभी सेवाएं एक ही संपर्क बिंदु पर।"
                : "Practical advantages grounded in 12 years of serving wedding families and local customers in Ramganj, Sitapur."
            }
            theme="dark"
            dividerVariant="lotus"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title.en}
                className="relative rounded-sm bg-[#2B0910]/90 border border-[#D9BE82]/45 p-6 space-y-3 hover:border-[#E5C46A] transition-colors"
              >
                <div className="w-11 h-11 rounded-sm bg-gradient-to-br from-[#E5C46A] to-[#B89555] text-[#29201D] flex items-center justify-center shadow">
                  <Icon aria-hidden="true" className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF7E9]">
                  {t(reason.title)}
                </h3>
                <p className="text-xs sm:text-sm text-[#F2E3C9]/85 leading-relaxed">
                  {t(reason.description)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Part 2: How the Enquiry Process Works */}
        <div className="mt-20 pt-14 border-t border-[#D9BE82]/35">
          <div className="relative rounded-sm bg-[#FFF7E9] text-[#29201D] border-2 border-[#D9BE82] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <OrnamentalFrameCorners
              colorClass="text-[#641A27]"
              sizeClass="w-8 h-8 sm:w-10 sm:h-10"
            />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-[#B52632] font-bold">
                  {locale === "hi"
                    ? "सरल एवं पारदर्शी पूछताछ प्रक्रिया"
                    : "Simple 4-Step Enquiry Flow"}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#29201D] mt-1">
                  {locale === "hi"
                    ? "स्टूडियो से संपर्क और बुकिंग कैसे करें?"
                    : "How the Enquiry Process Works"}
                </h3>
              </div>

              {/* Toggle Between Photography Process & Printing Process */}
              <div
                role="tablist"
                aria-label={
                  locale === "hi"
                    ? "पूछताछ प्रक्रिया के प्रकार"
                    : "Enquiry process type"
                }
                className="inline-flex rounded-sm bg-[#F2E3C9] border border-[#B89555] p-1 self-start"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFlow === "photography"}
                  onClick={() => setActiveFlow("photography")}
                  className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    activeFlow === "photography"
                      ? "bg-[#641A27] text-[#FFF7E9]"
                      : "text-[#29201D] hover:text-[#641A27]"
                  }`}
                >
                  {locale === "hi"
                    ? "१. फोटोग्राफी एवं फिल्म्स"
                    : "1. Photography & Video"}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFlow === "printing"}
                  onClick={() => setActiveFlow("printing")}
                  className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    activeFlow === "printing"
                      ? "bg-[#641A27] text-[#FFF7E9]"
                      : "text-[#29201D] hover:text-[#641A27]"
                  }`}
                >
                  {locale === "hi"
                    ? "२. शादी कार्ड एवं प्रिंटिंग"
                    : "2. Wedding Cards & Print"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeSteps.map((stepObj) => (
                <div
                  key={stepObj.step}
                  className="relative rounded-sm bg-[#FAF0DC] border border-[#B89555] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#641A27] text-[#E5C46A] font-serif font-bold text-lg">
                        {stepObj.step}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-[1px] flex-1 ml-3 bg-gradient-to-r from-[#B89555] to-transparent"
                      />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#641A27]">
                      {t(stepObj.title)}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#29201D]/85 leading-relaxed">
                      {t(stepObj.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#B89555]/45 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#29201D]/80">
                {locale === "hi"
                  ? "अभी अपनी आवश्यकता साझा करने के लिए व्हाट्सएप या कॉल का उपयोग करें:"
                  : "Ready to start the conversation? Reach out on WhatsApp or call us directly:"}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <WhatsAppButton
                  message={
                    activeFlow === "photography"
                      ? WHATSAPP_MESSAGES.weddingPhotography
                      : WHATSAPP_MESSAGES.weddingCards
                  }
                  label={
                    activeFlow === "photography"
                      ? locale === "hi"
                        ? "फोटोग्राफी पूछताछ शुरू करें"
                        : "Start Photography Enquiry"
                      : locale === "hi"
                      ? "प्रिंटिंग पूछताछ शुरू करें"
                      : "Start Printing Enquiry"
                  }
                  variant="maroon"
                  size="md"
                />
                <PhoneCallButton variant="outline-maroon" size="md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

