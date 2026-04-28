"use client";

import Link from "next/link";
import Image from "next/image";
import { contactInfo, siteConfig } from "@/data/site";
import { navItems } from "@/data/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLabels = [t.nav.home, t.nav.about, t.nav.products, t.nav.references, t.nav.gallery, t.nav.contact];
  const translatedNavItems = navItems.map((item, i) => ({ ...item, label: navLabels[i] ?? item.label }));

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image src="/logo.png" alt="IceTrendy" width={140} height={42} className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">{t.footer.brandDesc}</p>
            <div className="flex items-center gap-2">
              {contactInfo.socialMedia.facebook && (
                <SocialLink href={contactInfo.socialMedia.facebook} label="Facebook">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </SocialLink>
              )}
              {contactInfo.socialMedia.instagram && (
                <SocialLink href={contactInfo.socialMedia.instagram} label="Instagram">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </SocialLink>
              )}
              {contactInfo.socialMedia.youtube && (
                <SocialLink href={contactInfo.socialMedia.youtube} label="YouTube">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </SocialLink>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--navy)] mb-5">{t.footer.pages}</h4>
            <ul className="space-y-3">
              {translatedNavItems.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--navy)] mb-5">{t.footer.services}</h4>
            <ul className="space-y-3">
              {([...t.services.categories, ...t.services.extras] as { id: string; label: string }[]).map((item) => (
                <li key={item.id}>
                  <Link href={`/urunler/${item.id}`} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--navy)] mb-5">{t.footer.contact}</h4>
            <ul className="space-y-4">
              {contactInfo.address && (
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-gray-500 leading-relaxed">{contactInfo.address}</span>
                </li>
              )}
              {contactInfo.phone && (
                <li>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.mobile && (
                <li>
                  <a href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`} className="flex gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    {contactInfo.mobile}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} IceTrendy. {t.footer.rights}
          </p>
          <p className="text-xs text-gray-300">
            {siteConfig.foundedYear}{t.footer.since}
          </p>
        </div>
        <div className="border-t border-gray-50 py-4 text-center">
          <p className="text-xs text-gray-300">
            {t.footer.builtBy.split("{company}")[0]}
            <a href="https://bbwebajans.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-gray-600 transition-colors">BB Web Ajans</a>
            {t.footer.builtBy.split("{company}")[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:border-gray-400 text-gray-400 hover:text-gray-700 transition-all"
    >
      {children}
    </a>
  );
}
