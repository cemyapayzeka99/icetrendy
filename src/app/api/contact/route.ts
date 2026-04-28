import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { adSoyad, eposta, sirket, konu, mesaj } = await req.json();

  if (!adSoyad || !eposta || !mesaj) {
    return Response.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "IceTrendy İletişim Formu <onboarding@resend.dev>",
    to: ["info@icetrendy.com"],
    replyTo: eposta,
    subject: konu ? `[İletişim] ${konu} — ${adSoyad}` : `[İletişim] Yeni mesaj — ${adSoyad}`,
    html: `
      <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
      <p><strong>E-posta:</strong> ${eposta}</p>
      ${sirket ? `<p><strong>Şirket:</strong> ${sirket}</p>` : ""}
      ${konu ? `<p><strong>Konu:</strong> ${konu}</p>` : ""}
      <p><strong>Mesaj:</strong></p>
      <p style="white-space:pre-wrap">${mesaj}</p>
    `,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
