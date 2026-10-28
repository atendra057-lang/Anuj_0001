"use client";

import React from "react";
import { DecorativeDivider } from "@/components/ornaments/IndianOrnaments";

interface SectionHeadingProps {
  eyebrow: string;
  hindiAccent?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  dividerVariant?: "lotus" | "mandala" | "kalash" | "paisley" | "none";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  hindiAccent,
  title,
  subtitle,
  align = "center",
  theme = "light",
  dividerVariant = "lotus",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignClasses =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      <div className="inline-flex flex-wrap items-center gap-2.5 mb-3">
        <span
          aria-hidden="true"
          className={`w-2 h-2 rotate-45 ${
            isDark ? "bg-[#E5C46A]" : "bg-[#B52632]"
          }`}
        />
        <span
          className={`text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold ${
            isDark ? "text-[#E5C46A]" : "text-[#641A27]"
          }`}
        >
          {eyebrow}
        </span>
        {hindiAccent && (
          <>
            <span
              aria-hidden="true"
              className={isDark ? "text-[#D9BE82]/50" : "text-[#B89555]"}
            >
              •
            </span>
            <span
              lang="hi"
              className={`font-hindi text-xs sm:text-sm font-medium ${
                isDark ? "text-[#FFF7E9]/90" : "text-[#B52632]"
              }`}
            >
              {hindiAccent}
            </span>
          </>
        )}
        <span
          aria-hidden="true"
          className={`w-2 h-2 rotate-45 ${
            isDark ? "bg-[#E5C46A]" : "bg-[#B52632]"
          }`}
        />
      </div>

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.14] tracking-tight ${
          isDark ? "text-[#FFF7E9]" : "text-[#29201D]"
        }`}
      >
        {title}
      </h2>

      {dividerVariant !== "none" && (
        <div className={align === "center" ? "w-full my-2" : "my-2"}>
          <DecorativeDivider
            variant={dividerVariant}
            tone={isDark ? "gold" : "maroon"}
            className={align === "left" ? "justify-start" : "justify-center"}
          />
        </div>
      )}

      {subtitle && (
        <p
          className={`mt-2 text-base sm:text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-[#F2E3C9]/90" : "text-[#29201D]/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

