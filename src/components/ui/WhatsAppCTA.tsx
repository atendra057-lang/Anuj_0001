"use client";

import React from "react";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl, SITE_CONFIG } from "@/data/siteConfig";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  variant?: "gold" | "vermilion" | "maroon" | "outline-gold" | "outline-maroon";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  message,
  label,
  variant = "gold",
  size = "md",
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message);

  const variantStyles = {
    gold: "bg-gradient-to-r from-[#E5C46A] via-[#D9BE82] to-[#B89555] text-[#29201D] border border-[#FFF7E9]/40 hover:brightness-105 shadow-md hover:shadow-lg",
    vermilion:
      "bg-gradient-to-r from-[#B52632] to-[#D13B35] text-[#FFF7E9] border border-[#E5C46A]/50 hover:from-[#9c1d28] hover:to-[#B52632] shadow-md hover:shadow-lg",
    maroon:
      "bg-[#641A27] text-[#FFF7E9] border border-[#D9BE82]/60 hover:bg-[#43101B] hover:border-[#E5C46A] shadow-md",
    "outline-gold":
      "bg-[#43101B]/60 text-[#FFF7E9] border border-[#D9BE82]/80 hover:bg-[#D9BE82]/15 hover:border-[#E5C46A]",
    "outline-maroon":
      "bg-transparent text-[#641A27] border-2 border-[#641A27] hover:bg-[#641A27] hover:text-[#FFF7E9]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm min-h-[40px]",
    md: "px-5 py-3 text-sm sm:text-base min-h-[46px]",
    lg: "px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base min-h-[52px]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5C46A] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {showIcon && (
        <MessageCircle
          aria-hidden="true"
          className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
        />
      )}
      <span>{label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="w-3.5 h-3.5 opacity-75 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export function PhoneCallButton({
  label,
  variant = "outline-gold",
  size = "md",
  className = "",
}: {
  label?: string;
  variant?: "gold" | "maroon" | "outline-gold" | "outline-maroon";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const variantStyles = {
    gold: "bg-gradient-to-r from-[#E5C46A] to-[#B89555] text-[#29201D] border border-[#FFF7E9]/40 hover:brightness-105",
    maroon:
      "bg-[#641A27] text-[#FFF7E9] border border-[#D9BE82]/60 hover:bg-[#43101B]",
    "outline-gold":
      "bg-[#43101B]/60 text-[#FFF7E9] border border-[#D9BE82]/75 hover:bg-[#D9BE82]/15 hover:border-[#E5C46A]",
    "outline-maroon":
      "bg-[#FFF7E9] text-[#641A27] border-2 border-[#641A27]/80 hover:bg-[#641A27] hover:text-[#FFF7E9]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm min-h-[40px]",
    md: "px-5 py-3 text-sm sm:text-base min-h-[46px]",
    lg: "px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base min-h-[52px]",
  };

  return (
    <a
      href={SITE_CONFIG.contact.phoneTel}
      className={`inline-flex items-center justify-center gap-2.5 rounded-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5C46A] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <Phone aria-hidden="true" className="w-4 h-4 shrink-0" />
      <span>{label || SITE_CONFIG.contact.phoneDisplay}</span>
    </a>
  );
}

