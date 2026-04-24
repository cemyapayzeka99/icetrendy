"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const images = Array.from({ length: 17 }, (_, i) => ({
  src: `/galeri/g-${String(i + 1).padStart(2, "0")}.jpg`,
  index: i + 1,
}));

export default function GaleriPage() {
  const { t } = useLanguage();
  const g = t.galeri;

  return (
    <div className="pt-[72px]">
      <section className="py-20 text-white" style={{ background: "var(--navy)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">{g.eyebrow}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">{g.heading}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">{g.sub}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img) => (
              <div key={img.index} className="break-inside-avoid group relative overflow-hidden rounded bg-gray-100">
                <Image
                  src={img.src}
                  alt={`${g.photoAlt} ${img.index}`}
                  width={800}
                  height={600}
                  className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
