"use client";

import { contactInfo } from "@/data/site";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";

export default function IletisimContent() {
  const { t } = useLanguage();
  const c = t.iletisim;

  return (
    <div className="pt-[72px]">
      <section className="py-20 text-white" style={{ background: "var(--navy)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">{c.eyebrow}</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">{c.heading}</h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">{c.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight mb-8" style={{ color: "var(--navy)" }}>
                {c.formTitle}
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight mb-8" style={{ color: "var(--navy)" }}>
                {c.infoTitle}
              </h2>
              <div className="space-y-0 divide-y divide-gray-100 border border-gray-100 rounded overflow-hidden">
                {contactInfo.address && (
                  <div className="flex items-start gap-4 p-5 bg-[var(--surface)]">
                    <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">{c.officeLabel}</div>
                      <div className="text-sm font-medium text-gray-900">{contactInfo.address}</div>
                    </div>
                  </div>
                )}
                {contactInfo.phone && (
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 p-5 bg-[var(--surface)] hover:bg-gray-100 transition-colors group">
                    <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">{c.telLabel}</div>
                      <div className="text-sm font-medium text-gray-900">{contactInfo.phone}</div>
                    </div>
                  </a>
                )}
                {contactInfo.mobile && (
                  <a href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`} className="flex items-center gap-4 p-5 bg-[var(--surface)] hover:bg-gray-100 transition-colors group">
                    <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">{c.mobileLabel}</div>
                      <div className="text-sm font-medium text-gray-900">{contactInfo.mobile}</div>
                      <div className="text-xs text-gray-400">{c.mobileNote}</div>
                    </div>
                  </a>
                )}
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 p-5 bg-[var(--surface)] hover:bg-gray-100 transition-colors group">
                  <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-0.5">{c.emailLabel2}</div>
                    <div className="text-sm font-medium text-gray-900">{contactInfo.email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{c.socialTitle}</h3>
                <div className="flex gap-2">
                  {contactInfo.socialMedia.instagram && (
                    <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 text-sm font-medium rounded transition-colors">
                      Instagram
                    </a>
                  )}
                  {contactInfo.socialMedia.facebook && (
                    <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 text-sm font-medium rounded transition-colors">
                      Facebook
                    </a>
                  )}
                  {contactInfo.socialMedia.youtube && (
                    <a href={contactInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 text-sm font-medium rounded transition-colors">
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
