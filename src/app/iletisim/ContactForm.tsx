"use client";

import { useActionState } from "react";
import { sendContactForm, type ContactFormState } from "./actions";
import { useLanguage } from "@/contexts/LanguageContext";

const initialState: ContactFormState = { success: false, message: "" };

const inputClass = "w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition bg-white";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactForm, initialState);
  const { t } = useLanguage();
  const c = t.iletisim;

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{c.nameLabel} *</label>
          <input name="adSoyad" type="text" placeholder={c.namePlaceholder} required className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{c.emailLabel} *</label>
          <input name="eposta" type="email" placeholder={c.emailPlaceholder} required className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{c.companyLabel}</label>
        <input name="sirket" type="text" placeholder={c.companyPlaceholder} className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{c.subjectLabel}</label>
        <select name="konu" className={inputClass}>
          <option value="">{c.subjectDefault}</option>
          {c.subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{c.messageLabel} *</label>
        <textarea name="mesaj" rows={5} placeholder={c.messagePlaceholder} required className={`${inputClass} resize-none`} />
      </div>

      {state.message && (
        <div className={`px-4 py-3 rounded text-sm font-medium border ${
          state.success ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
        }`}>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-3.5 text-white text-sm font-semibold rounded transition-colors disabled:opacity-60"
        style={{ background: pending ? "#94a3b8" : "var(--navy)" }}
      >
        {pending ? c.sending : c.send}
      </button>
    </form>
  );
}
