"use client";

import Link from "next/link";
import { contactInfo } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded overflow-hidden" style={{ background: "var(--navy)" }}>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8 px-10 py-12">
            <div>
              <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">{t.cta.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.cta.heading}
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-md leading-relaxed">
                {t.cta.sub}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/iletisim"
                className="px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm rounded transition-colors text-center"
              >
                {t.cta.contact}
              </Link>
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="px-7 py-3.5 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold text-sm rounded transition-all text-center"
                >
                  {contactInfo.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
