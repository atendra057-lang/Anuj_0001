"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  DecorativeDivider,
  MandalaWatermark,
  ToranScallopBorder,
} from "@/components/ornaments/IndianOrnaments";

interface PageBannerProps {
  breadcrumbLabel: string;
  eyebrow: string;
  hindiAccent?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export function PageBanner({
  breadcrumbLabel,
  eyebrow,
  hindiAccent,
  title,
  subtitle,
  children,
}: PageBannerProps) {
  const { locale } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2B0910] via-[#43101B] to-[#641A27] text-[#FFF7E9] border-b-2 border-[#D9BE82]/60">
      <ToranScallopBorder className="text-[#D9BE82]/30" />
      <MandalaWatermark className="absolute -right-24 -bottom-24 w-96 h-96 text-[#D9BE82]/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#F2E3C9]/80 mb-5"
        >
          <Link href="/" className="hover:text-[#E5C46A] transition-colors">
            {locale === "hi" ? "होम" : "Home"}
          </Link>
          <ChevronRight aria-hidden="true" className="w-3.5 h-3.5 text-[#D9BE82]" />
          <span aria-current="page" className="text-[#E5C46A] font-semibold">
            {breadcrumbLabel}
          </span>
        </nav>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex flex-wrap items-center gap-2.5">
            <span aria-hidden="true" className="w-2 h-2 rotate-45 bg-[#E5C46A]" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-[#E5C46A]">
              {eyebrow}
            </span>
            {hindiAccent && (
              <>
                <span aria-hidden="true" className="text-[#D9BE82]/60">
                  •
                </span>
                <span
                  lang="hi"
                  className="font-hindi text-xs sm:text-sm font-medium text-[#FFF7E9]/90"
                >
                  {hindiAccent}
                </span>
              </>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#FFF7E9]">
            {title}
          </h1>

          <DecorativeDivider
            variant="lotus"
            tone="gold"
            className="justify-start my-1"
          />

          <p className="text-base sm:text-lg text-[#F2E3C9]/90 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {children && <div className="pt-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

