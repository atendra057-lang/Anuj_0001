"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import {
  SITE_CONFIG,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export function MobileContactBar() {
  const { locale } = useLanguage();

  return (
    <>
      {/* Persistent Bottom Bar on Mobile Screens */}
      <div
        role="region"
        aria-label={locale === "hi" ? "त्वरित संपर्क बार" : "Quick contact bar"}
        className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#2B0910]/98 border-t-2 border-[#D9BE82]/60 px-3 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.45)]"
      >
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          <a
            href={SITE_CONFIG.contact.phoneTel}
            className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#641A27] border border-[#D9BE82]/60 text-[#FFF7E9] text-xs font-semibold tracking-wide min-h-[44px]"
          >
            <Phone aria-hidden="true" className="w-4 h-4 text-[#E5C46A] shrink-0" />
            <span>{locale === "hi" ? "स्टूडियो कॉल करें" : "Call Studio"}</span>
          </a>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-gradient-to-r from-[#E5C46A] via-[#D9BE82] to-[#B89555] text-[#29201D] text-xs font-bold tracking-wide min-h-[44px]"
          >
            <MessageCircle aria-hidden="true" className="w-4 h-4 shrink-0" />
            <span>{locale === "hi" ? "व्हाट्सएप पूछताछ" : "WhatsApp Us"}</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Quick-Action Pill on Desktop */}
      <div className="hidden md:block fixed bottom-6 right-6 z-30">
        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp with Anuj Studio and Graphics"
          className="group flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-gradient-to-r from-[#43101B] to-[#641A27] text-[#FFF7E9] border-2 border-[#E5C46A] shadow-[0_12px_30px_rgba(67,16,27,0.55)] hover:scale-105 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5C46A]"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E5C46A] text-[#29201D]">
            <MessageCircle aria-hidden="true" className="w-4 h-4" />
          </span>
          <div className="text-left leading-tight">
            <span className="block text-[10px] uppercase tracking-[0.18em] text-[#E5C46A] font-semibold">
              {locale === "hi" ? "तुरंत संपर्क करें" : "Direct WhatsApp"}
            </span>
            <span className="block text-xs font-semibold text-[#FFF7E9]">
              {SITE_CONFIG.contact.phoneDisplay}
            </span>
          </div>
        </a>
      </div>
    </>
  );
}

