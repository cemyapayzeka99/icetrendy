"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { productsEn } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import type React from "react";

const productVisuals: Record<string, { icon: React.ReactNode }> = {
  "dogal-buz-pistleri": {
    icon: (
      <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /><line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  "kiralik-buz-pistleri": {
    icon: (
      <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  "sentetik-buz-pistleri": {
    icon: (
      <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  "olimpik-projeler": {
    icon: (
      <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" /><path strokeLinecap="round" d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
  },
  "bakim-onarim": {
    icon: (
      <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  "diger-tedarikler": {
    icon: (
      <svg className="w-16 h-16 text-white/20" fill="none" stroke="currentColor" strokeWidth={0.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
  },
};

export default function UrunlerContent() {
  const { t, lang } = useLanguage();
  const u = t.urunler;

  const localizedProducts = products.map((p) => {
    if (lang === "en") {
      const en = productsEn[p.id];
      return en ? { ...p, title: en.title, shortDesc: en.shortDesc, description: en.description, features: en.features } : p;
    }
    return p;
  });

  return (
    <div className="pt-[72px]">
      <section className="py-20 text-white" style={{ background: "var(--navy)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">{u.eyebrow}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">{u.heading}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">{u.sub}</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {localizedProducts.map((p, i) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="shrink-0 px-5 py-4 text-xs font-semibold text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-sky-500 transition-all whitespace-nowrap"
              >
                <span className="text-gray-300 mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div>
        {localizedProducts.map((product, i) => {
          const isEven = i % 2 === 0;

          return (
            <section
              key={product.id}
              id={product.id}
              className={`${isEven ? "bg-white" : "bg-[var(--surface)]"}`}
            >
              <div className="container mx-auto px-4 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px] ${isEven ? "" : "lg:grid-flow-dense"}`}>
                  <div className={`relative overflow-hidden min-h-[300px] lg:min-h-[420px] ${isEven ? "" : "lg:col-start-2"}`}>
                    <Image
                      src={`/images/${product.id}/01.${product.imageExt ?? "jpg"}`}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[var(--navy)] opacity-20" />
                    <div className="absolute top-5 left-5 w-10 h-10 rounded bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={`absolute top-0 bottom-0 w-0.5 bg-sky-400 ${isEven ? "right-0" : "left-0"}`} />
                  </div>

                  <div className={`flex flex-col justify-center px-0 py-14 lg:py-16 ${isEven ? "lg:pl-16" : "lg:pr-16 lg:col-start-1 lg:row-start-1"}`}>
                    <div className="max-w-lg">
                      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4" style={{ color: "var(--navy)" }}>
                        {product.title}
                      </h2>
                      <p className="text-gray-500 text-base leading-relaxed mb-8">
                        {product.description}
                      </p>

                      {product.features && (
                        <ul className="space-y-3 mb-8">
                          {product.features.map((f) => (
                            <li key={f} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded bg-sky-50 flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-sky-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-700 leading-relaxed">{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link
                        href={`/urunler/${product.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded transition-colors hover:opacity-90"
                        style={{ background: "var(--navy)" }}
                      >
                        {u.detail}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-100" />
            </section>
          );
        })}
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded overflow-hidden px-10 py-14 text-center" style={{ background: "var(--navy)" }}>
            <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">{u.consultEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">{u.consultHeading}</h2>
            <p className="text-gray-400 text-base max-w-md mx-auto mb-8">{u.consultSub}</p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm rounded transition-colors"
            >
              {u.consultCta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
