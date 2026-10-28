"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Expand,
  X,
  ChevronLeft,
  ChevronRight,
  Info,
  MessageCircle,
} from "lucide-react";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  SITE_CONFIG,
  getWhatsAppUrl,
} from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrnamentalFrameCorners } from "@/components/ornaments/IndianOrnaments";

export function GallerySection() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDialogElement>(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activeItem =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    const dialog = lightboxRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  };

  const closeLightbox = () => {
    const dialog = lightboxRef.current;
    if (dialog && dialog.open) {
      dialog.close();
    }
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex === null || filteredItems.length === 0) return;
    setSelectedIndex(
      (selectedIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const showNext = () => {
    if (selectedIndex === null || filteredItems.length === 0) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  // Sync native dialog close & keyboard Left/Right navigation + light-dismiss fallback
  useEffect(() => {
    const dialog = lightboxRef.current;
    if (!dialog) return;

    const onDialogClose = () => {
      setSelectedIndex(null);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!dialog.open) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      }
    };

    dialog.addEventListener("close", onDialogClose);
    window.addEventListener("keydown", onKeyDown);

    // Fallback for browsers without native dialog[closedby="any"]
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
      dialog.removeEventListener("close", onDialogClose);
      window.removeEventListener("keydown", onKeyDown);
      cleanupFallback?.();
    };
  });

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-16 sm:py-24 bg-[#FAF0DC] text-[#29201D] parchment-pattern border-b-2 border-[#B89555]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="gallery-heading">
          <SectionHeading
            eyebrow={
              locale === "hi"
                ? "दृश्य प्रेरणा एवं पोर्टफोलियो झलक"
                : "Visual Inspirations & Studio Preview"
            }
            hindiAccent="उत्सव के रंग • Utsav Ke Rang"
            title={
              locale === "hi"
                ? "शादी के पलों, पोर्ट्रेट और निमंत्रण पत्रों की कलात्मक झलकियाँ।"
                : "A Curated Look at Our Creative Direction."
            }
            subtitle={
              locale === "hi"
                ? "विवाह समारोह, ब्राइडल पोर्ट्रेट, प्री-वेडिंग, हल्दी-मेहंदी, शादी कार्ड और व्यावसायिक प्रिंटिंग की विषयगत श्रेणियाँ देखें।"
                : "Explore visual themes across Indian wedding rituals, bridal portraits, pre-wedding storytelling, festive ceremonies, marriage invitations, and print design."
            }
            theme="light"
            dividerVariant="lotus"
          />
        </div>

        {/* Truthful Illustrative Preview Notice Banner */}
        {SITE_CONFIG.portfolioStatus.showIllustrativeNotice && (
          <div
            role="note"
            aria-label={t(SITE_CONFIG.portfolioStatus.noticeBadge)}
            className="mt-8 rounded-sm bg-[#FFF7E9] border-l-4 border-l-[#B52632] border border-[#B89555] p-4 sm:p-5 shadow-sm max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-3">
              <Info
                aria-hidden="true"
                className="w-5 h-5 text-[#B52632] shrink-0 mt-0.5"
              />
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#641A27] uppercase tracking-wider">
                  {t(SITE_CONFIG.portfolioStatus.noticeBadge)}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#29201D]/85 leading-relaxed">
                  {t(SITE_CONFIG.portfolioStatus.noticeDetail)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Bar */}
        <div
          role="toolbar"
          aria-label={
            locale === "hi" ? "गैलरी श्रेणी फ़िल्टर" : "Gallery category filter"
          }
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
        >
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedIndex(null);
                }}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-[40px] ${
                  isActive
                    ? "bg-[#641A27] text-[#E5C46A] border-2 border-[#641A27] shadow-md"
                    : "bg-[#FFF7E9] text-[#29201D] border border-[#B89555] hover:border-[#641A27] hover:text-[#641A27]"
                }`}
              >
                {t(cat.label)}
              </button>
            );
          })}
        </div>

        {/* Editorial Bento Grid: Light Warm Ivory Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, idx) => {
            const colSpanClass =
              activeCategory === "all"
                ? idx === 0 || idx === 3
                  ? "lg:col-span-7"
                  : idx === 1 || idx === 2
                  ? "lg:col-span-5"
                  : "lg:col-span-3"
                : "lg:col-span-4";

            return (
              <article
                key={item.id}
                className={`${colSpanClass} group relative rounded-sm bg-[#FFF7E9] text-[#29201D] border-2 border-[#B89555] overflow-hidden shadow-md flex flex-col justify-between`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2E3C9] border-b border-[#B89555]/40">
                  <img
                    src={item.src}
                    alt={t(item.alt)}
                    loading="lazy"
                    width={640}
                    height={480}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Light Ivory Category Badge & Illustrative Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-sm bg-[#FFF7E9]/95 border border-[#B89555] text-[11px] font-bold text-[#641A27] shadow-sm">
                      {t(item.categoryLabel)}
                    </span>
                    {item.isPlaceholder && (
                      <span className="px-2 py-0.5 rounded-sm bg-[#FFF7E9]/90 border border-[#B89555]/60 text-[10px] text-[#29201D] font-medium">
                        {locale === "hi"
                          ? "प्रतीकात्मक झलक"
                          : "Illustrative Preview"}
                      </span>
                    )}
                  </div>

                  {/* Fullscreen Lightbox Trigger Button */}
                  <button
                    type="button"
                    onClick={() => openLightbox(idx)}
                    aria-label={
                      locale === "hi"
                        ? `${t(item.title)} को बड़े आकार में देखें`
                        : `Open ${t(item.title)} in full-screen lightbox`
                    }
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FFF7E9]/95 border border-[#B89555] text-xs font-bold text-[#641A27] hover:bg-[#E5C46A] hover:text-[#29201D] shadow transition-colors cursor-pointer min-h-[38px]"
                  >
                    <Expand aria-hidden="true" className="w-3.5 h-3.5" />
                    <span>{locale === "hi" ? "बड़ा देखें" : "Inspect"}</span>
                  </button>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#641A27]">
                      {t(item.title)}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#29201D]/85 leading-relaxed">
                      {t(item.caption)}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#B89555]/35 flex items-center justify-between">
                    <a
                      href={getWhatsAppUrl(item.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#641A27] hover:text-[#B52632]"
                    >
                      <MessageCircle aria-hidden="true" className="w-3.5 h-3.5" />
                      <span>
                        {locale === "hi"
                          ? "इस सेवा हेतु पूछताछ करें →"
                          : "Enquire About This Style →"}
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Native Modal Dialog Lightbox: Clean Warm Ivory Surface */}
        <dialog
          ref={lightboxRef}
          id="gallery-lightbox-dialog"
          aria-labelledby="lightbox-dialog-title"
          {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
          className="m-auto w-[min(64rem,94vw)] max-h-[92dvh] rounded-sm bg-[#FFF7E9] text-[#29201D] border-2 border-[#B89555] p-0 shadow-2xl overflow-y-auto"
        >
          {activeItem && (
            <div className="relative p-4 sm:p-6">
              <OrnamentalFrameCorners
                colorClass="text-[#641A27]/60"
                sizeClass="w-7 h-7"
              />

              {/* Top Controls */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#B89555]/40">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B52632] font-bold">
                    {t(activeItem.categoryLabel)}
                  </span>
                  <h3
                    id="lightbox-dialog-title"
                    className="font-serif text-xl sm:text-2xl font-bold text-[#641A27]"
                  >
                    {t(activeItem.title)}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  autoFocus
                  aria-label={
                    locale === "hi" ? "लाइटबॉक्स बंद करें" : "Close image preview"
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-[#FAF0DC] border border-[#B89555] text-xs font-bold text-[#641A27] hover:bg-[#641A27] hover:text-[#FFF7E9] cursor-pointer min-h-[42px]"
                >
                  <X aria-hidden="true" className="w-4 h-4" />
                  <span>{locale === "hi" ? "बंद करें (Esc)" : "Close (Esc)"}</span>
                </button>
              </div>

              {/* Image Stage */}
              <div className="relative my-4 rounded-sm overflow-hidden bg-[#1D080D] border border-[#B89555] max-h-[60dvh] flex items-center justify-center">
                <img
                  src={activeItem.src}
                  alt={t(activeItem.alt)}
                  width={1000}
                  height={750}
                  className="max-h-[60dvh] w-auto object-contain mx-auto"
                />

                {/* Prev / Next Controls */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label={
                        locale === "hi" ? "पिछली तस्वीर" : "Previous image"
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFF7E9]/95 border border-[#B89555] text-[#641A27] flex items-center justify-center hover:bg-[#E5C46A] shadow cursor-pointer"
                    >
                      <ChevronLeft aria-hidden="true" className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label={locale === "hi" ? "अगली तस्वीर" : "Next image"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFF7E9]/95 border border-[#B89555] text-[#641A27] flex items-center justify-center hover:bg-[#E5C46A] shadow cursor-pointer"
                    >
                      <ChevronRight aria-hidden="true" className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption & Direct Enquiry */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#B89555]/40">
                <div className="space-y-1 max-w-xl">
                  <p className="text-xs sm:text-sm text-[#29201D]/90">
                    {t(activeItem.caption)}
                  </p>
                  {activeItem.isPlaceholder && (
                    <p className="text-[11px] font-semibold text-[#B52632]">
                      {t(SITE_CONFIG.portfolioStatus.noticeBadge)}
                    </p>
                  )}
                </div>

                <a
                  href={getWhatsAppUrl(activeItem.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm font-bold text-xs sm:text-sm bg-[#641A27] text-[#FFF7E9] border border-[#D9BE82] hover:bg-[#43101B] shrink-0"
                >
                  <MessageCircle aria-hidden="true" className="w-4 h-4 text-[#E5C46A]" />
                  <span>
                    {locale === "hi"
                      ? "व्हाट्सएप पर कोटेशन लें"
                      : "Enquire About This on WhatsApp"}
                  </span>
                </a>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </section>
  );
}
