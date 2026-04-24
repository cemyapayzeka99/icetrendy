"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const statsData = [
  { value: "2006", key: "statFounded" as const },
  { value: "200+", key: "statProjects" as const },
  { value: "20+", key: "statExperience" as const },
  { value: "7/24", key: "statSupport" as const },
];

export default function HakkimizdaPage() {
  const { t } = useLanguage();
  const h = t.hakkimizda;

  return (
    <div className="pt-[72px]">
      <section className="py-20 text-white" style={{ background: "var(--navy)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">{h.eyebrow}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">{h.heading}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">{h.sub}</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {statsData.map((s) => (
              <div key={s.key} className="px-8 py-10 text-center">
                <div className="text-4xl font-extrabold tracking-tight mb-1.5" style={{ color: "var(--navy)" }}>{s.value}</div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{h[s.key]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sky-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">{h.identityEyebrow}</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: "var(--navy)" }}>
              {h.missionVisionHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Misyon */}
            <div className="relative overflow-hidden rounded-2xl p-10 text-white" style={{ background: "var(--navy)" }}>
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                <svg viewBox="0 0 200 200" fill="currentColor">
                  <circle cx="150" cy="50" r="120" />
                </svg>
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-7">
                  <svg className="w-7 h-7 text-sky-300" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sky-300 text-xs font-bold uppercase tracking-[0.2em] mb-3">{h.mission}</p>
                <h3 className="text-2xl font-extrabold leading-snug mb-5">
                  {h.missionSubtitle}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {h.missionText}
                </p>
              </div>
            </div>

            {/* Vizyon */}
            <div className="relative overflow-hidden rounded-2xl p-10 bg-white border border-gray-100 shadow-sm">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.04]" style={{ color: "var(--navy)" }}>
                <svg viewBox="0 0 200 200" fill="currentColor">
                  <circle cx="150" cy="50" r="120" />
                </svg>
              </div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-7" style={{ background: "var(--navy)" }}>
                  <svg className="w-7 h-7 text-sky-300" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="text-sky-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">{h.vision}</p>
                <h3 className="text-2xl font-extrabold leading-snug mb-5" style={{ color: "var(--navy)" }}>
                  {h.visionSubtitle}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {h.visionText}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/hakkimizda/farkimiz-felsefemiz"
              className="group inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--navy)" }}
            >
              {h.cta1}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/hakkimizda/kalite-belgelerimiz"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 text-sm font-bold rounded-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            >
              {h.cta2}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
