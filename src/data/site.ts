import type { ContactInfo, Stat } from "@/types";

export const siteConfig = {
  name: "IceTrendy",
  tagline: "Doğal ve Sentetik Buz Pistleri",
  description:
    "2006'dan bu yana 200'ü aşkın buz pisti projesiyle Türkiye'nin lider anahtar teslim buz pisti firması.",
  foundedYear: 2006,
  projectCount: "200+",
  url: "https://www.icetrendy.com",
};

export const contactInfo: ContactInfo = {
  email: "info@icetrendy.com",
  phone: "0212 777 73 31",
  mobile: "0532 362 38 00",
  address: "Yahya Kemal Mah. Mithatpaşa Cad. No: 9 / 1A  Kağıthane / İstanbul",
  socialMedia: {
    facebook: "https://www.facebook.com/icetrendyofficial/",
    instagram: "https://www.instagram.com/icetrendytr",
    youtube: "https://www.youtube.com/@icetrendy-naturalicerinksy5877",
  },
};

export const stats: Stat[] = [
  { value: "2006", label: "Kuruluş Yılı" },
  { value: "200+", label: "Tamamlanan Proje" },
  { value: "20+", label: "Yıllık Tecrübe" },
  { value: "7/24", label: "Teknik Destek" },
];
