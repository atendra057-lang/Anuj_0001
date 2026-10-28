"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
  Camera,
  Printer,
} from "lucide-react";
import {
  SITE_CONFIG,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrnamentalFrameCorners } from "@/components/ornaments/IndianOrnaments";

type EnquiryMode = "photography" | "printing";

export function ContactEnquirySection() {
  const { locale, t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const [mode, setMode] = useState<EnquiryMode>("photography");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceRequired, setServiceRequired] = useState("Wedding Photography & Videography");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [printQuantity, setPrintQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [handoffPreviewUrl, setHandoffPreviewUrl] = useState<string | null>(null);

  // Update default service dropdown when mode changes
  const handleModeChange = (nextMode: EnquiryMode) => {
    setMode(nextMode);
    setHandoffPreviewUrl(null);
    if (nextMode === "photography") {
      setServiceRequired("Wedding Photography & Videography");
    } else {
      setServiceRequired("Wedding Invitation Cards (Shadi Cards)");
    }
  };

  // Synchronize aria-invalid with native constraint validation (:user-invalid bridge)
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const syncAriaInvalid = (target: EventTarget | null) => {
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        if (target.hasAttribute("required")) {
          if (!target.checkValidity()) {
            target.setAttribute("aria-invalid", "true");
          } else {
            target.removeAttribute("aria-invalid");
          }
        }
      }
    };

    const onBlur = (e: Event) => syncAriaInvalid(e.target);
    const onInput = (e: Event) => {
      const el = e.target;
      if (
        (el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement) &&
        el.hasAttribute("aria-invalid") &&
        el.checkValidity()
      ) {
        el.removeAttribute("aria-invalid");
      }
    };

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);

    return () => {
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Sync aria-invalid on all required fields upon submit attempt
    const requiredControls = form.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >("[required]");
    requiredControls.forEach((ctrl) => {
      if (!ctrl.checkValidity()) {
        ctrl.setAttribute("aria-invalid", "true");
      } else {
        ctrl.removeAttribute("aria-invalid");
      }
    });

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }

    // Build structured, sanitized WhatsApp enquiry text
    const lines: string[] = [
      `Hello ${SITE_CONFIG.businessName},`,
      mode === "photography"
        ? "I would like to make a Photography / Videography enquiry:"
        : "I would like to make a Wedding Card / Printing enquiry:",
      `• Name: ${name.trim()}`,
      `• Phone: ${phone.trim()}`,
      `• Service Needed: ${serviceRequired.trim()}`,
    ];

    if (mode === "photography") {
      if (eventDate.trim()) lines.push(`• Event Date: ${eventDate.trim()}`);
      if (eventLocation.trim())
        lines.push(`• Event Venue/Town: ${eventLocation.trim()}`);
    } else {
      if (printQuantity.trim())
        lines.push(`• Approx. Quantity / Size: ${printQuantity.trim()}`);
      if (eventDate.trim())
        lines.push(`• Needed By / Ceremony Date: ${eventDate.trim()}`);
    }

    if (details.trim()) {
      lines.push(`• Additional Details: ${details.trim()}`);
    }

    lines.push("Please share the available options and a quotation.");

    const whatsappUrl = getWhatsAppUrl(lines.join("\n"));
    setHandoffPreviewUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const photographyOptions = [
    "Wedding Photography & Videography",
    "Package: Shubh Muhurat (Single Event / Engagement)",
    "Package: Wedding Celebrations (Core Wedding Coverage)",
    "Package: Royal Shaadi Cinema (Multi-Event & Cinematic Film)",
    "Pre-Wedding Photography & Videography",
    "Engagement / Ring Ceremony / Tilak Coverage",
    "Haldi, Mehendi & Sangeet Functions",
    "Birthday / Mundan / Griha Pravesh / Family Event",
    "Video Editing Services",
    "Other Custom Photography / Video Requirement",
  ];

  const printingOptions = [
    "Wedding Invitation Cards (Shadi Cards)",
    "Engagement / Tilak / Reception Invitation Cards",
    "Visiting Card Design & Printing",
    "Poster Design & Printing",
    "Pamphlet / Handbill Printing",
    "Banner / Flex Design & Printing",
    "Griha Pravesh / Mundan / Birthday Cards",
    "Other Custom Printing & Graphics Requirement",
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 sm:py-24 bg-[#FFF7E9] text-[#29201D] parchment-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="contact-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "संपर्क एवं कोटेशन फॉर्म"
                : "Contact & Custom Quotations"
            }
            hindiAccent="रामगंज • सीतापुर, उत्तर प्रदेश"
            title={
              locale === "hi"
                ? "आइए आपके आगामी विवाह या प्रिंटिंग आवश्यकता पर बात करें।"
                : "Begin Your Photography or Printing Enquiry."
            }
            subtitle={
              locale === "hi"
                ? "सीधे कॉल करें, व्हाट्सएप पर संदेश भेजें, या नीचे दिए गए फॉर्म में अपना विवरण भरें जो सीधे व्हाट्सएप पर आपका संदेश तैयार कर देगा।"
                : "Reach Anuj Studio and Graphics directly by phone or WhatsApp, or use the structured form below to prepare your photography or printing enquiry."
            }
            theme="light"
            dividerVariant="kalash"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Studio Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-sm bg-gradient-to-b from-[#641A27] to-[#43101B] text-[#FFF7E9] border-2 border-[#D9BE82] p-6 sm:p-8 shadow-xl space-y-6">
              <OrnamentalFrameCorners
                colorClass="text-[#E5C46A]"
                sizeClass="w-8 h-8"
              />

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#E5C46A] font-semibold">
                  {locale === "hi"
                    ? "सीधा स्टूडियो संपर्क"
                    : "Direct Studio Contact"}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF7E9] mt-1">
                  {SITE_CONFIG.businessName}
                </h3>
                <p
                  lang="hi"
                  className="font-hindi text-sm text-[#E5C46A] mt-0.5"
                >
                  {SITE_CONFIG.businessNameHindi}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#F2E3C9]">
                <div className="flex items-start gap-3">
                  <Phone
                    aria-hidden="true"
                    className="w-5 h-5 text-[#E5C46A] shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E5C46A]">
                      {locale === "hi" ? "फ़ोन एवं व्हाट्सएप नंबर" : "Telephone & WhatsApp"}
                    </p>
                    <a
                      href={SITE_CONFIG.contact.phoneTel}
                      className="font-serif text-2xl font-bold text-[#FFF7E9] hover:text-[#E5C46A] transition-colors block mt-0.5"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="w-5 h-5 text-[#E5C46A] shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E5C46A]">
                      {locale === "hi" ? "स्थान" : "Studio Location"}
                    </p>
                    <p className="font-medium text-base text-[#FFF7E9] mt-0.5">
                      {t(SITE_CONFIG.location.displayFull)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    aria-hidden="true"
                    className="w-5 h-5 text-[#E5C46A] shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#E5C46A]">
                      {locale === "hi" ? "संभावित समय" : "Provisional Opening Hours"}
                    </p>
                    <p className="font-medium text-[#FFF7E9] mt-0.5">
                      {t(SITE_CONFIG.openingHours.schedule)}
                    </p>
                    <p className="text-xs text-[#F2E3C9]/75 mt-0.5">
                      {t(SITE_CONFIG.openingHours.note)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Action Buttons */}
              <div className="pt-4 border-t border-[#D9BE82]/30 flex flex-col gap-3">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-sm font-bold text-sm bg-gradient-to-r from-[#E5C46A] via-[#D9BE82] to-[#B89555] text-[#29201D] shadow hover:brightness-105"
                >
                  <MessageCircle aria-hidden="true" className="w-4 h-4" />
                  <span>
                    {locale === "hi"
                      ? "व्हाट्सएप पर तुरंत संदेश भेजें"
                      : "Message Directly on WhatsApp"}
                  </span>
                </a>

                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-sm font-semibold text-sm border border-[#D9BE82]/70 text-[#FFF7E9] hover:bg-[#D9BE82]/15"
                >
                  <Phone aria-hidden="true" className="w-4 h-4 text-[#E5C46A]" />
                  <span>
                    {locale === "hi"
                      ? `कॉल करें: ${SITE_CONFIG.contact.phoneDisplay}`
                      : `Call Studio: ${SITE_CONFIG.contact.phoneDisplay}`}
                  </span>
                </a>
              </div>
            </div>

            {/* Helpful Guide on What to Share */}
            <div className="rounded-sm bg-[#FAF0DC] border border-[#B89555] p-5 space-y-2.5">
              <h4 className="font-serif text-lg font-bold text-[#641A27]">
                {locale === "hi"
                  ? "त्वरित कोटेशन के लिए क्या जानकारी साझा करें?"
                  : "What Information Helps Us Prepare Your Quote?"}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#29201D]/85 list-disc list-inside">
                <li>
                  {locale === "hi"
                    ? "फोटोग्राफी हेतु: विवाह या कार्यक्रम की तारीख, स्थान और कौन-कौन सी रस्में कवर करानी हैं।"
                    : "For Photography/Video: Event date(s), venue town/village, and which ceremonies need coverage."}
                </li>
                <li>
                  {locale === "hi"
                    ? "शादी कार्ड व प्रिंटिंग हेतु: सामग्री का प्रकार (कार्ड/पोस्टर/बैनर), अनुमानित संख्या और भाषा (हिंदी/अंग्रेज़ी)।"
                    : "For Wedding Cards & Print: Type of item (marriage cards, visiting cards, banners, etc.) and approximate quantity."}
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Validated WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm bg-[#FFF7E9] border-2 border-[#B89555] p-6 sm:p-8 lg:p-10 shadow-xl">
              <OrnamentalFrameCorners
                colorClass="text-[#641A27]/80"
                sizeClass="w-8 h-8"
              />

              {/* Enquiry Type Selector Tabs */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.18em] text-[#641A27] font-bold mb-2.5">
                  {locale === "hi"
                    ? "१. अपनी पूछताछ का प्रकार चुनें:"
                    : "1. Select Your Enquiry Type:"}
                </p>
                <div
                  role="group"
                  aria-label={
                    locale === "hi" ? "पूछताछ की श्रेणी" : "Enquiry category"
                  }
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <button
                    type="button"
                    onClick={() => handleModeChange("photography")}
                    aria-pressed={mode === "photography"}
                    className={`flex items-center gap-3 p-3.5 rounded-sm border-2 text-left transition-all cursor-pointer ${
                      mode === "photography"
                        ? "bg-[#641A27] text-[#FFF7E9] border-[#641A27] shadow-md"
                        : "bg-[#FAF0DC] text-[#29201D] border-[#B89555]/70 hover:border-[#641A27]"
                    }`}
                  >
                    <Camera
                      aria-hidden="true"
                      className={`w-5 h-5 shrink-0 ${
                        mode === "photography"
                          ? "text-[#E5C46A]"
                          : "text-[#641A27]"
                      }`}
                    />
                    <div>
                      <span className="block font-serif text-base font-bold leading-snug">
                        {locale === "hi"
                          ? "फोटोग्राफी एवं वीडियोग्राफी"
                          : "Photography & Videography"}
                      </span>
                      <span className="block text-[11px] opacity-85">
                        {locale === "hi"
                          ? "शादी, प्री-वेडिंग, सगाई व वीडियो एडिटिंग"
                          : "Weddings, Pre-Wedding, Events & Editing"}
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleModeChange("printing")}
                    aria-pressed={mode === "printing"}
                    className={`flex items-center gap-3 p-3.5 rounded-sm border-2 text-left transition-all cursor-pointer ${
                      mode === "printing"
                        ? "bg-[#641A27] text-[#FFF7E9] border-[#641A27] shadow-md"
                        : "bg-[#FAF0DC] text-[#29201D] border-[#B89555]/70 hover:border-[#641A27]"
                    }`}
                  >
                    <Printer
                      aria-hidden="true"
                      className={`w-5 h-5 shrink-0 ${
                        mode === "printing" ? "text-[#E5C46A]" : "text-[#641A27]"
                      }`}
                    />
                    <div>
                      <span className="block font-serif text-base font-bold leading-snug">
                        {locale === "hi"
                          ? "शादी कार्ड एवं प्रिंटिंग"
                          : "Wedding Cards & Printing"}
                      </span>
                      <span className="block text-[11px] opacity-85">
                        {locale === "hi"
                          ? "शादी कार्ड, विज़िटिंग कार्ड, पोस्टर व बैनर"
                          : "Marriage Cards, Visiting Cards, Posters & Banners"}
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate={false}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name (Required) */}
                  <div className="field">
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                    >
                      {locale === "hi" ? "आपका शुभ नाम *" : "Your Name *"}
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={
                        locale === "hi"
                          ? "उदा. राजेश कुमार वर्मा"
                          : "e.g., Rajesh Kumar"
                      }
                      aria-errormessage="enquiry-name-error"
                      className="form-input-royal w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27] focus:ring-1 focus:ring-[#641A27]"
                    />
                    <div
                      id="enquiry-name-error"
                      className="error-msg text-xs text-[#B52632] font-semibold mt-1"
                    >
                      <span aria-hidden="true">⚠ </span>
                      {locale === "hi"
                        ? "कृपया अपना नाम दर्ज करें।"
                        : "Please enter your name so we know how to address you."}
                    </div>
                  </div>

                  {/* Phone Number (Required) */}
                  <div className="field">
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                    >
                      {locale === "hi"
                        ? "मोबाइल / व्हाट्सएप नंबर *"
                        : "Phone / WhatsApp Number *"}
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      required
                      pattern="^[0-9+\-\s()]{10,16}$"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98XXXXXXXX"
                      aria-errormessage="enquiry-phone-error"
                      className="form-input-royal w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27] focus:ring-1 focus:ring-[#641A27]"
                    />
                    <div
                      id="enquiry-phone-error"
                      className="error-msg text-xs text-[#B52632] font-semibold mt-1"
                    >
                      <span aria-hidden="true">⚠ </span>
                      {locale === "hi"
                        ? "कृपया १० अंकों का मान्य फ़ोन नंबर दर्ज करें।"
                        : "Please enter a valid 10-digit phone number."}
                    </div>
                  </div>
                </div>

                {/* Required Service Select */}
                <div className="field">
                  <label
                    htmlFor="enquiry-service"
                    className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                  >
                    {locale === "hi"
                      ? "आवश्यक सेवा / पैकेज चुनें *"
                      : "Required Service or Package *"}
                  </label>
                  <select
                    id="enquiry-service"
                    name="service"
                    required
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="form-input-royal w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27]"
                  >
                    {(mode === "photography"
                      ? photographyOptions
                      : printingOptions
                    ).map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Conditional Fields for Photography vs Printing */}
                {mode === "photography" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="enquiry-date"
                        className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                      >
                        {locale === "hi"
                          ? "कार्यक्रम की संभावित तारीख (वैकल्पिक)"
                          : "Event Date(s) (Optional)"}
                      </label>
                      <input
                        id="enquiry-date"
                        name="eventDate"
                        type="text"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        placeholder={
                          locale === "hi"
                            ? "उदा. 24-25 नवंबर 2026"
                            : "e.g., 24–25 November"
                        }
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-location"
                        className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                      >
                        {locale === "hi"
                          ? "कार्यक्रम का स्थान / कस्बा (वैकल्पिक)"
                          : "Event Venue / Town (Optional)"}
                      </label>
                      <input
                        id="enquiry-location"
                        name="eventLocation"
                        type="text"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        placeholder={
                          locale === "hi"
                            ? "उदा. रामगंज, सीतापुर"
                            : "e.g., Ramganj, Sitapur"
                        }
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="enquiry-quantity"
                        className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                      >
                        {locale === "hi"
                          ? "अनुमानित संख्या या आकार (वैकल्पिक)"
                          : "Approximate Quantity / Size (Optional)"}
                      </label>
                      <input
                        id="enquiry-quantity"
                        name="printQuantity"
                        type="text"
                        value={printQuantity}
                        onChange={(e) => setPrintQuantity(e.target.value)}
                        placeholder={
                          locale === "hi"
                            ? "उदा. 300 शादी कार्ड / 500 विज़िटिंग कार्ड"
                            : "e.g., 300 Wedding Cards / 1000 Pamphlets"
                        }
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-print-date"
                        className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                      >
                        {locale === "hi"
                          ? "विवाह / आवश्यकता की तारीख (वैकल्पिक)"
                          : "Ceremony / Required Date (Optional)"}
                      </label>
                      <input
                        id="enquiry-print-date"
                        name="eventDate"
                        type="text"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        placeholder={
                          locale === "hi"
                            ? "उदा. दिसंबर प्रथम सप्ताह"
                            : "e.g., First week of December"
                        }
                        className="w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27]"
                      />
                    </div>
                  </div>
                )}

                {/* Additional Details */}
                <div>
                  <label
                    htmlFor="enquiry-details"
                    className="block text-xs sm:text-sm font-bold text-[#29201D] mb-1.5"
                  >
                    {locale === "hi"
                      ? "अतिरिक्त विवरण या आवश्यकता (वैकल्पिक)"
                      : "Additional Details or Questions (Optional)"}
                  </label>
                  <textarea
                    id="enquiry-details"
                    name="details"
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={
                      mode === "photography"
                        ? locale === "hi"
                          ? "अपने कार्यक्रम की रस्मों (जैसे हल्दी, जयमाला, फेरे) या किसी विशेष आवश्यकता के बारे में लिखें..."
                          : "Share which ceremonies you want covered (e.g., Haldi, Baraat, Wedding, Reception) or any questions..."
                        : locale === "hi"
                        ? "कार्ड की पसंद (लाल/आइवरी/मैरून), भाषा (हिंदी/अंग्रेज़ी) या बैनर के आकार के बारे में लिखें..."
                        : "Mention preferred card style, Hindi/English language preference, or print specifications..."
                    }
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-sm text-[#29201D] focus:outline-none focus:border-[#641A27]"
                  />
                </div>

                {/* Transparent WhatsApp Handoff Explanation */}
                <div className="rounded-sm bg-[#F2E3C9] border border-[#B89555] p-3.5 flex items-start gap-2.5 text-xs text-[#29201D]/85">
                  <AlertCircle
                    aria-hidden="true"
                    className="w-4 h-4 text-[#641A27] shrink-0 mt-0.5"
                  />
                  <span>
                    {locale === "hi"
                      ? "पारदर्शी प्रक्रिया: नीचे बटन दबाने पर आपका यह विवरण व्यवस्थित रूप से हमारे आधिकारिक व्हाट्सएप नंबर (+91 90054 00712) पर खुलेगा, जहाँ से आप सीधे संदेश भेज सकेंगे।"
                      : `Transparent WhatsApp Handoff: Submitting this form formats your details and opens WhatsApp directly to ${SITE_CONFIG.contact.phoneDisplay} so you can send your enquiry immediately.`}
                  </span>
                </div>

                {/* Submit CTA (Kept enabled so native :user-invalid validation triggers on click) */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-sm font-bold text-sm sm:text-base bg-gradient-to-r from-[#641A27] via-[#8B1E2F] to-[#641A27] text-[#FFF7E9] border border-[#D9BE82] hover:brightness-110 shadow-lg transition-all cursor-pointer min-h-[52px]"
                >
                  <Send aria-hidden="true" className="w-4 h-4 text-[#E5C46A]" />
                  <span>
                    {locale === "hi"
                      ? "व्हाट्सएप पर पूछताछ संदेश खोलें"
                      : "Continue to WhatsApp with Your Enquiry"}
                  </span>
                </button>

                {/* Confirmation Link if Popup Was Blocked */}
                {handoffPreviewUrl && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-sm bg-[#641A27] text-[#FFF7E9] border border-[#E5C46A] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        aria-hidden="true"
                        className="w-5 h-5 text-[#E5C46A] shrink-0 mt-0.5"
                      />
                      <p className="text-xs sm:text-sm">
                        {locale === "hi"
                          ? "आपका व्हाट्सएप पूछताछ संदेश तैयार हो गया है। यदि नई विंडो नहीं खुली है, तो दाईं ओर दिए बटन पर क्लिक करें:"
                          : "Your formatted WhatsApp message is ready. If WhatsApp did not open automatically, click the button to launch it:"}
                      </p>
                    </div>
                    <a
                      href={handoffPreviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-sm bg-[#E5C46A] text-[#29201D] font-bold text-xs shrink-0"
                    >
                      <MessageCircle aria-hidden="true" className="w-4 h-4" />
                      <span>
                        {locale === "hi" ? "व्हाट्सएप खोलें" : "Open WhatsApp Now"}
                      </span>
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

