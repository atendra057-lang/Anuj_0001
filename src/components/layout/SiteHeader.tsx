"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, MapPin, Languages, Sparkles } from "lucide-react";
import {
  NAVIGATION_ITEMS,
  SITE_CONFIG,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { RoyalCrestMonogram } from "@/components/ornaments/IndianOrnaments";

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile dialog on route change
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
    setIsDrawerOpen(false);
  }, [pathname]);

  // Light-dismiss fallback for browsers without native dialog[closedby="any"]
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => setIsDrawerOpen(false);
    dialog.addEventListener("close", handleClose);

    let cleanupFallback: (() => void) | undefined;
    if (
      typeof HTMLDialogElement !== "undefined" &&
      !("closedBy" in HTMLDialogElement.prototype)
    ) {
      const outside = (e: PointerEvent, el: HTMLDialogElement) => {
        const r = el.getBoundingClientRect();
        return (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        );
      };
      let pressedOutside = false;
      const onDown = (e: PointerEvent) => {
        pressedOutside = outside(e, dialog);
      };
      const onUp = (e: PointerEvent) => {
        if (pressedOutside && outside(e, dialog)) {
          dialog.close();
        }
      };
      dialog.addEventListener("pointerdown", onDown);
      dialog.addEventListener("pointerup", onUp);
      cleanupFallback = () => {
        dialog.removeEventListener("pointerdown", onDown);
        dialog.removeEventListener("pointerup", onUp);
      };
    }

    return () => {
      dialog.removeEventListener("close", handleClose);
      cleanupFallback?.();
    };
  }, []);

  const openMobileMenu = () => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      setIsDrawerOpen(true);
    }
  };

  const closeMobileMenu = () => {
    const dialog = dialogRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
    setIsDrawerOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Auspicious Strip */}
      <div className="bg-[#2B0910] text-[#F2E3C9] border-b border-[#D9BE82]/25 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-1.5 text-[#E5C46A] font-medium">
              <Sparkles aria-hidden="true" className="w-3.5 h-3.5" />
              <span>
                {locale === "hi"
                  ? "१२ वर्षों का विश्वसनीय अनुभव"
                  : `${SITE_CONFIG.experienceYears} Years of Celebrations & Craft`}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="hidden md:inline text-[#D9BE82]/40"
            >
              |
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#F2E3C9]/90">
              <MapPin aria-hidden="true" className="w-3.5 h-3.5 text-[#D9BE82]" />
              <span>{t(SITE_CONFIG.location.displayShort)}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a
              href={SITE_CONFIG.contact.phoneTel}
              className="inline-flex items-center gap-1.5 text-[#FFF7E9] hover:text-[#E5C46A] font-medium transition-colors"
            >
              <Phone aria-hidden="true" className="w-3.5 h-3.5 text-[#E5C46A]" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <span aria-hidden="true" className="text-[#D9BE82]/40">
              |
            </span>

            {/* Functional Bilingual Switcher */}
            <div
              role="group"
              aria-label="Language selection"
              className="inline-flex items-center rounded-sm border border-[#D9BE82]/40 bg-[#43101B] p-0.5"
            >
              <Languages
                aria-hidden="true"
                className="w-3.5 h-3.5 text-[#E5C46A] mx-1.5 hidden sm:inline"
              />
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                className={`px-2 py-0.5 text-[11px] font-semibold rounded-[2px] transition-colors cursor-pointer ${
                  locale === "en"
                    ? "bg-[#E5C46A] text-[#29201D]"
                    : "text-[#FFF7E9]/85 hover:text-[#FFF7E9]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("hi")}
                aria-pressed={locale === "hi"}
                lang="hi"
                className={`px-2 py-0.5 text-[11px] font-semibold rounded-[2px] transition-colors cursor-pointer ${
                  locale === "hi"
                    ? "bg-[#E5C46A] text-[#29201D]"
                    : "text-[#FFF7E9]/85 hover:text-[#FFF7E9]"
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 border-b border-[#D9BE82]/40 ${
          isScrolled
            ? "bg-[#43101B]/98 shadow-[0_10px_30px_rgba(25,5,10,0.55)] py-2.5"
            : "bg-gradient-to-r from-[#43101B] via-[#641A27] to-[#43101B] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo / Wordmark Lockup */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C46A] rounded-sm"
          >
            {SITE_CONFIG.branding.logo.enabled ? (
              <img
                src={SITE_CONFIG.branding.logo.src}
                alt={SITE_CONFIG.branding.logo.alt}
                width={SITE_CONFIG.branding.logo.width}
                height={SITE_CONFIG.branding.logo.height}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            ) : (
              <>
                <RoyalCrestMonogram className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#FFF7E9] leading-none">
                    {locale === "hi"
                      ? SITE_CONFIG.businessNameHindi
                      : "Anuj Studio"}
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#E5C46A] font-semibold mt-1">
                    {locale === "hi"
                      ? "फोटोग्राफी • फिल्म्स • प्रिंटिंग"
                      : "& Graphics • Sitapur"}
                  </span>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-3 xl:px-3.5 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5C46A] ${
                    isActive
                      ? "text-[#E5C46A] font-semibold"
                      : "text-[#FFF7E9]/90 hover:text-[#E5C46A]"
                  }`}
                >
                  <span>{t(item.label)}</span>
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#E5C46A] to-transparent transition-transform duration-200 origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs xl:text-sm font-semibold bg-gradient-to-r from-[#E5C46A] via-[#D9BE82] to-[#B89555] text-[#29201D] hover:brightness-105 shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF7E9]"
            >
              <MessageCircle aria-hidden="true" className="w-4 h-4" />
              <span>
                {locale === "hi" ? "व्हाट्सएप पूछताछ" : "Enquire on WhatsApp"}
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            onClick={openMobileMenu}
            aria-label={locale === "hi" ? "नेविगेशन मेनू खोलें" : "Open navigation menu"}
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-nav-dialog"
            className="lg:hidden inline-flex items-center justify-center gap-2 px-3 py-2 rounded-sm border border-[#D9BE82]/60 bg-[#43101B] text-[#FFF7E9] hover:border-[#E5C46A] focus-visible:outline-2 focus-visible:outline-[#E5C46A] min-h-[44px] min-w-[44px]"
          >
            <Menu aria-hidden="true" className="w-5 h-5 text-[#E5C46A]" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {locale === "hi" ? "मेनू" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Native Modal Dialog for Mobile Drawer (Light-dismiss & Top Layer) */}
      <dialog
        ref={dialogRef}
        id="mobile-nav-dialog"
        aria-labelledby="mobile-nav-title"
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
        className="mobile-drawer-dialog m-0 ml-auto h-dvh max-h-dvh w-[min(22rem,88vw)] bg-[#43101B] text-[#FFF7E9] border-l-2 border-[#D9BE82]/60 p-0 shadow-2xl"
      >
        <div className="flex flex-col h-full justify-between overflow-y-auto">
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#D9BE82]/30 bg-[#2B0910]">
              <div className="flex items-center gap-2.5">
                <RoyalCrestMonogram className="w-9 h-9" />
                <div>
                  <h2
                    id="mobile-nav-title"
                    className="font-serif text-lg font-bold text-[#FFF7E9]"
                  >
                    {SITE_CONFIG.businessName}
                  </h2>
                  <p className="text-[11px] text-[#E5C46A]">
                    {t(SITE_CONFIG.location.displayShort)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label={locale === "hi" ? "मेनू बंद करें" : "Close navigation menu"}
                className="inline-flex items-center justify-center w-10 h-10 rounded-sm border border-[#D9BE82]/40 text-[#FFF7E9] hover:bg-[#641A27]"
              >
                <X aria-hidden="true" className="w-5 h-5 text-[#E5C46A]" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav aria-label="Mobile Navigation" className="p-5 space-y-1.5">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-sm text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#641A27] text-[#E5C46A] border border-[#D9BE82]/50 font-semibold"
                        : "text-[#FFF7E9] hover:bg-[#641A27]/60"
                    }`}
                  >
                    <span>{t(item.label)}</span>
                    <span aria-hidden="true" className="text-[#D9BE82]">
                      ✦
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer CTAs */}
          <div className="p-5 border-t border-[#D9BE82]/30 bg-[#2B0910] space-y-3">
            <p className="text-xs text-[#F2E3C9]/80">
              {locale === "hi"
                ? "शादी की फोटोग्राफी, प्री-वेडिंग या शादी कार्ड छपाई के लिए अभी संपर्क करें:"
                : "Speak directly with our studio in Ramganj, Sitapur:"}
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-sm font-semibold text-sm bg-gradient-to-r from-[#E5C46A] to-[#B89555] text-[#29201D]"
            >
              <MessageCircle aria-hidden="true" className="w-4 h-4" />
              <span>
                {locale === "hi" ? "व्हाट्सएप पर संदेश भेजें" : "Enquire on WhatsApp"}
              </span>
            </a>
            <a
              href={SITE_CONFIG.contact.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-sm font-semibold text-sm border border-[#D9BE82]/60 text-[#FFF7E9] bg-[#43101B]"
            >
              <Phone aria-hidden="true" className="w-4 h-4 text-[#E5C46A]" />
              <span>
                {locale === "hi"
                  ? `कॉल करें: ${SITE_CONFIG.contact.phoneDisplay}`
                  : `Call ${SITE_CONFIG.contact.phoneDisplay}`}
              </span>
            </a>
          </div>
        </div>
      </dialog>
    </header>
  );
}

