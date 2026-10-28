"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { BilingualText, Locale } from "@/data/siteConfig";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (text: BilingualText) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("anuj_studio_locale");
      if (saved === "en" || saved === "hi") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore storage access errors in restricted environments
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
    try {
      window.localStorage.setItem("anuj_studio_locale", next);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "hi" : "en");
  };

  const t = (text: BilingualText): string => {
    return text[locale] || text.en;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

