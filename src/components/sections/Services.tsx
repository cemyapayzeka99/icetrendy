"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const imageExt: Record<string, string> = {
  "wm-technics": "png",
};

export default function Services() {
  const { t } = useLanguage();
  const { categories, extras } = t.services;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <p className="text-sky-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            {t.services.eyebrow}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: "var(--navy)" }}>
              {t.services.heading1}
              <br />
              {t.services.heading2}
            </h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              {t.services.sub}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/urunler/${cat.id}`}
              className="group relative overflow-hidden rounded aspect-[16/9] block bg-[var(--navy)]"
            >
              <Image
                src={`/images/${cat.id}/01.${imageExt[cat.id] ?? "jpg"}`}
                alt={cat.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.3) 50%, transparent 100%)",
              }} />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                    {cat.label}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sky-400 text-sm font-semibold">
                    {t.services.more}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {extras.map((item) => (
            <Link
              key={item.id}
              href={`/urunler/${item.id}`}
              className="group relative overflow-hidden rounded bg-[var(--navy)] flex items-end"
              style={{ minHeight: "160px" }}
            >
              <Image
                src={`/images/${item.id}/01.${imageExt[item.id] ?? "jpg"}`}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(13,27,42,0.9) 0%, rgba(13,27,42,0.3) 70%, transparent 100%)",
              }} />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 flex items-center justify-between w-full">
                <div>
                  <h3 className="font-bold text-white mb-0.5">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
