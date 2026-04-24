"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;
  return (
    <section className="py-20" style={{ background: "var(--surface)" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual panel */}
          <div className="relative">
            <div
              className="rounded overflow-hidden aspect-[4/3] relative"
              style={{ background: "#0a2540" }}
            >
              <Image
                src="/images/about.png"
                alt="IceTrendy hakkımızda"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,27,42,0.7) 0%, rgba(13,27,42,0.1) 60%, transparent 100%)" }} />

              {/* Stat overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded p-5">
                  <div className="flex items-end gap-4">
                    <div>
                      <div className="text-5xl font-extrabold text-white tracking-tight">200+</div>
                      <div className="text-sky-300 text-sm font-medium mt-1">{a.statProjects}</div>
                    </div>
                    <div className="border-l border-white/20 pl-4">
                      <div className="text-3xl font-extrabold text-white tracking-tight">20+</div>
                      <div className="text-sky-300 text-sm font-medium mt-1">{a.statExperience}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sky-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {a.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: "var(--navy)" }}>
              {a.heading}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              {a.p1.replace("{year}", String(siteConfig.foundedYear))}
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              {a.p2}
            </p>

            <ul className="space-y-3 mb-8">
              {a.features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-sky-600 hover:border-sky-600 transition-colors"
            >
              {a.link}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
