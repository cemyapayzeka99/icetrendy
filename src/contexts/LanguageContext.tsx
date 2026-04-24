"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { dict, type Lang, type Dict } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  t: Dict;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: dict.en as unknown as Dict,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "tr") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "tr" ? "en" : "tr";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang] as unknown as Dict, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
