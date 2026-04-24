"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { lang, t, toggle } = useLanguage();

  const navLabels = [t.nav.home, t.nav.about, t.nav.products, t.nav.references, t.nav.gallery, t.nav.contact];
  const translatedNavItems = navItems.map((item, i) => ({ ...item, label: navLabels[i] ?? item.label }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo + 20. yıl amblemi */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="IceTrendy"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full shrink-0 shadow-lg" style={{ background: "linear-gradient(135deg, var(--navy) 60%, #1a3a5c 100%)" }}>
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-sky-400/60" />
              {/* Rotating dashed ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56" fill="none">
                <circle
                  cx="28" cy="28" r="25"
                  stroke="#0EA5E9"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                  strokeOpacity="0.5"
                />
              </svg>
              <div className="text-center leading-none z-10">
                <div className="text-[18px] font-black text-white tracking-tight leading-none">20.</div>
                <div className="text-[6.5px] font-bold uppercase tracking-[0.18em] text-sky-300 mt-0.5">{t.header.yearLabel}</div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {translatedNavItems.map((item) => (
              <NavItemComponent key={item.href} item={item} />
            ))}
          </nav>

          {/* CTA + Lang toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggle}
              className="px-3 py-1.5 text-xs font-bold rounded border transition-colors"
              style={{
                borderColor: "var(--navy)",
                color: "var(--navy)",
              }}
            >
              {lang === "tr" ? "EN" : "TR"}
            </button>
            <Link
              href="/iletisim"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded transition-colors"
              style={{ background: "var(--navy)" }}
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-0.5">
            {translatedNavItems.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <div className="flex gap-2 mt-3">
              <button
                onClick={toggle}
                className="px-4 py-3 text-sm font-bold rounded border border-gray-300 text-gray-700 flex-1"
              >
                {lang === "tr" ? "English" : "Türkçe"}
              </button>
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 text-white text-center font-semibold rounded text-sm transition-colors flex-1"
                style={{ background: "var(--navy)" }}
              >
                {t.nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItemComponent({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
        {item.label}
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg shadow-gray-200/60 border border-gray-100 py-1 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-5 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item, openDropdown, setOpenDropdown, onClose,
}: {
  item: NavItem;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
  onClose: () => void;
}) {
  const isOpen = openDropdown === item.href;

  if (!item.children) {
    return (
      <Link href={item.href} onClick={onClose} className="px-3 py-2.5 text-sm text-gray-700 font-medium hover:text-gray-900">
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 font-medium"
        onClick={() => setOpenDropdown(isOpen ? null : item.href)}
      >
        {item.label}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="ml-4 flex flex-col">
          {item.children?.map((child) => (
            <Link key={child.href} href={child.href} onClick={onClose} className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
