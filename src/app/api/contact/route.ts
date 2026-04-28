import { Resend } from "resend";
import { NextRequest } from "next/server";

// onboarding@resend.dev yalnızca Resend hesabındaki doğrulanmış e-postaya
// gönderilebilir. info@icetrendy.com'a ulaşmak için Resend Dashboard'da
// icetrendy.com domain'ini doğrulayın ve from adresini güncelleyin.
// Örn: "IceTrendy <noreply@icetrendy.com>"
const FROM_ADDRESS = "IceTrendy İletişim Formu <onboarding@resend.dev>";
const TO_ADDRESS = "barinkorkanc71@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY tanımlı değil.");
    return Response.json({ error: "Sunucu yapılandırma hatası." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Geçersiz istek gövdesi." }, { status: 400 });
  }

  const { adSoyad, eposta, sirket, konu, mesaj } = body;

  if (!adSoyad || !eposta || !mesaj) {
    return Response.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
  }

  const safe = {
    adSoyad: escapeHtml(adSoyad),
    eposta: escapeHtml(eposta),
    sirket: sirket ? escapeHtml(sirket) : "",
    konu: konu ? escapeHtml(konu) : "",
    mesaj: escapeHtml(mesaj),
  };

  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [TO_ADDRESS],
    replyTo: eposta,
    subject: safe.konu
      ? `[İletişim] ${safe.konu} — ${safe.adSoyad}`
      : `[İletişim] Yeni mesaj — ${safe.adSoyad}`,
    html: `
      <p><strong>Ad Soyad:</strong> ${safe.adSoyad}</p>
      <p><strong>E-posta:</strong> ${safe.eposta}</p>
      ${safe.sirket ? `<p><strong>Şirket:</strong> ${safe.sirket}</p>` : ""}
      ${safe.konu ? `<p><strong>Konu:</strong> ${safe.konu}</p>` : ""}
      <p><strong>Mesaj:</strong></p>
      <p style="white-space:pre-wrap">${safe.mesaj}</p>
    `,
  });

  if (error) {
    console.error("[contact] Resend hatası:", JSON.stringify(error));
    return Response.json({ error: error.message }, { status: 500 });
  }

  console.log("[contact] E-posta gönderildi, id:", data?.id);
  return Response.json({ success: true });
}
