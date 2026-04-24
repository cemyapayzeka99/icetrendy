"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const adSoyad = formData.get("adSoyad") as string;
  const eposta = formData.get("eposta") as string;
  const sirket = formData.get("sirket") as string;
  const konu = formData.get("konu") as string;
  const mesaj = formData.get("mesaj") as string;

  if (!adSoyad || !eposta || !mesaj) {
    return { success: false, message: "Lütfen zorunlu alanları doldurun." };
  }

  try {
    const result = await resend.emails.send({
      from: "IceTrendy İletişim <onboarding@resend.dev>",
      to: "barinkorkanc71@gmail.com",
      replyTo: eposta,
      subject: `[İletişim Formu] ${konu || "Yeni Mesaj"} - ${adSoyad}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Ad Soyad</td><td style="padding:8px">${adSoyad}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">E-posta</td><td style="padding:8px">${eposta}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Şirket</td><td style="padding:8px">${sirket || "-"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Konu</td><td style="padding:8px">${konu || "-"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Mesaj</td><td style="padding:8px;white-space:pre-wrap">${mesaj}</td></tr>
        </table>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, message: `Gönderim hatası: ${result.error.message}` };
    }

    return { success: true, message: "Mesajınız iletildi. En kısa sürede size dönüş yapacağız." };
  } catch (err) {
    console.error("sendContactForm exception:", err);
    return { success: false, message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." };
  }
}
