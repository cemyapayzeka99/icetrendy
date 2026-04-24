"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-[72px] min-h-screen flex flex-col">
      <div className="relative flex-1 flex items-center" style={{ background: "var(--navy)" }}>
        <Image
          src="/images/hero.png"
          alt="IceTrendy buz pisti"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.85) 30%, rgba(13,27,42,0.5) 55%, rgba(13,27,42,0.15) 75%, rgba(13,27,42,0) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--navy))" }}
        />

        <div className="relative container mx-auto px-4 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              {t.hero.since}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              {t.hero.heading1}
              <br />
              <span className="text-sky-400">{t.hero.heading2}</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed mb-10">
              {t.hero.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm rounded transition-all"
              >
                {t.hero.cta1}
              </Link>
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded transition-all hover:bg-white/5"
              >
                {t.hero.cta2}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: "2006", label: t.statsBar.founded },
              { value: "200+", label: t.statsBar.projects },
              { value: "20+", label: t.statsBar.experience },
              { value: "7/24", label: t.statsBar.support },
            ].map((s) => (
              <div key={s.label} className="px-8 py-8 text-center">
                <div className="text-3xl font-extrabold tracking-tight mb-1" style={{ color: "var(--navy)" }}>
                  {s.value}
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
