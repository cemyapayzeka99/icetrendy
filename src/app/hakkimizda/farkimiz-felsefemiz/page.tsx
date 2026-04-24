"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FarkimizFelsefemizPage() {
  const { t } = useLanguage();
  const f = t.farkimiz;

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
            {f.backLabel}
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">
            {f.heading}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            {f.sub}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-0">
            {f.values.map((v, i) => (
              <div
                key={v.number}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 py-14 ${
                  i < f.values.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex-shrink-0 md:w-20">
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{ color: "var(--accent)", opacity: 0.25 }}
                  >
                    {v.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h2
                    className="text-xl md:text-2xl font-extrabold tracking-tight mb-4 leading-snug"
                    style={{ color: "var(--navy)" }}
                  >
                    {v.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-base md:text-[1.05rem]">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 mb-2">{f.ctaNextLabel}</p>
            <h3 className="text-2xl font-extrabold" style={{ color: "var(--navy)" }}>
              {f.ctaNextHeading}
            </h3>
          </div>
          <Link
            href="/hakkimizda/kalite-belgelerimiz"
            className="group inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            style={{ background: "var(--navy)" }}
          >
            {f.ctaNextBtn}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
