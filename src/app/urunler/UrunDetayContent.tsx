"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { productsEn } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

const imageCount: Record<string, number> = {
  "dogal-buz-pistleri": 9,
  "kiralik-buz-pistleri": 4,
  "sentetik-buz-pistleri": 3,
  "olimpik-projeler": 2,
  "bakim-onarim": 3,
  "diger-tedarikler": 4,
  "wm-technics": 2,
};

interface Props {
  slug: string;
}

export default function UrunDetayContent({ slug }: Props) {
  const { t, lang } = useLanguage();
  const u = t.urunDetay;

  const baseProduct = products.find((p) => p.slug === slug);
  if (!baseProduct) return null;

  const enData = productsEn[baseProduct.id];
  const product = lang === "en" && enData
    ? { ...baseProduct, title: enData.title, shortDesc: enData.shortDesc, description: enData.description, features: enData.features }
    : baseProduct;

  const productIndex = products.findIndex((p) => p.slug === slug);
  const prevBase = products[productIndex - 1];
  const nextBase = products[productIndex + 1];

  const prevProduct = prevBase && lang === "en" && productsEn[prevBase.id]
    ? { ...prevBase, title: productsEn[prevBase.id].title }
    : prevBase;
  const nextProduct = nextBase && lang === "en" && productsEn[nextBase.id]
    ? { ...nextBase, title: productsEn[nextBase.id].title }
    : nextBase;

  const count = imageCount[slug] ?? 0;
  const ext = baseProduct.imageExt ?? "jpg";
  const images = Array.from({ length: count }, (_, i) =>
    `/images/${slug}/${String(i + 1).padStart(2, "0")}.${ext}`
  );
  const [coverImage, ...galleryImages] = images;

  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[420px] flex items-end" style={{ background: "var(--navy)" }}>
        {coverImage && (
          <Image
            src={coverImage}
            alt={product.title}
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
        )}
        <div className="relative container mx-auto px-4 lg:px-8 py-16">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-1.5 text-sky-400 hover:text-white text-xs font-semibold uppercase tracking-widest mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {u.allServices}
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {product.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">{product.shortDesc}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold tracking-tight mb-5" style={{ color: "var(--navy)" }}>
                {u.details}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-12">{product.description}</p>

              {galleryImages.length > 0 && (
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight mb-5" style={{ color: "var(--navy)" }}>
                    {u.gallery}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {galleryImages.map((src, i) => (
                      <div key={i} className="relative aspect-[4/3] overflow-hidden rounded bg-gray-100 group">
                        <Image
                          src={src}
                          alt={`${product.title} ${i + 2}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {product.features && (
                <div className="border border-gray-100 rounded p-7">
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--navy)" }}>
                    {u.featuresTitle}
                  </h3>
                  <ul className="space-y-3">
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
                </div>
              )}

              <div className="rounded p-7 text-white" style={{ background: "var(--navy)" }}>
                <h3 className="font-extrabold text-lg mb-2">{u.ctaTitle}</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{u.ctaSub}</p>
                <Link
                  href="/iletisim"
                  className="block text-center px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold rounded transition-colors"
                >
                  {u.ctaBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(prevProduct || nextProduct) && (
        <section className="border-t border-gray-100 bg-[var(--surface)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 divide-x divide-gray-100">
              <div>
                {prevProduct ? (
                  <Link
                    href={`/urunler/${prevProduct.slug}`}
                    className="flex items-center gap-3 px-6 py-8 group hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{u.prev}</div>
                      <div className="text-sm font-semibold text-gray-900">{prevProduct.title}</div>
                    </div>
                  </Link>
                ) : <div />}
              </div>
              <div>
                {nextProduct ? (
                  <Link
                    href={`/urunler/${nextProduct.slug}`}
                    className="flex items-center justify-end gap-3 px-6 py-8 group hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">{u.next}</div>
                      <div className="text-sm font-semibold text-gray-900">{nextProduct.title}</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
