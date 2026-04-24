"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const belgeler: { src: string; alt: string }[] = [
  { src: "/belgeler/1.png", alt: "Kalite Belgesi 1" },
  { src: "/belgeler/2.png", alt: "Kalite Belgesi 2" },
  { src: "/belgeler/3.png", alt: "Kalite Belgesi 3" },
  { src: "/belgeler/4.png", alt: "Kalite Belgesi 4" },
  { src: "/belgeler/5.png", alt: "Kalite Belgesi 5" },
];

export default function KaliteBelgelerimizPage() {
  const { t } = useLanguage();
  const k = t.kalite;

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-20 text-white" style={{ background: "var(--navy)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/hakkimizda"
            className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-6 hover:text-sky-300 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {k.backLabel}
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">
            {k.heading}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            {k.sub}
          </p>
        </div>
      </section>

      {/* Metin */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6 text-gray-500 leading-relaxed text-base md:text-[1.05rem]">
            <p>{k.p1}</p>
            <p>{k.p2}</p>
          </div>
        </div>
      </section>

      {/* Belgeler Galerisi */}
      {belgeler.length > 0 && (
        <section className="pb-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-extrabold mb-10" style={{ color: "var(--navy)" }}>
              {k.belgelerTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-[67%] mx-auto">
              {belgeler.map((b) => (
                <div key={b.src} className="flex items-center justify-center p-4 aspect-[4/3] w-[calc(33.333%-16px)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.alt} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 mb-2">{k.ctaLabel}</p>
            <h3 className="text-2xl font-extrabold" style={{ color: "var(--navy)" }}>
              {k.ctaHeading}
            </h3>
          </div>
          <Link
            href="/hakkimizda/farkimiz-felsefemiz"
            className="group inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            style={{ background: "var(--navy)" }}
          >
            {k.ctaBtn}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
