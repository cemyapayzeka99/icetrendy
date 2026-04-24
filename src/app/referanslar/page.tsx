"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  "/referanslar/mm1_JPG.jpg",
  "/referanslar/mm2_JPG.jpg",
  "/referanslar/mm3_JPG.jpg",
  "/referanslar/met1_JPG.jpg",
  "/referanslar/met2_JPG.jpg",
  "/referanslar/silivri1_JPG.jpg",
  "/referanslar/silivri2_JPG.jpg",
  "/referanslar/mb1_JPG.jpg",
  "/referanslar/bb1_JPG.jpg",
  "/referanslar/ka1_JPG.jpg",
  "/referanslar/ka2_JPG.jpg",
  "/referanslar/ke1_JPG.jpg",
  "/referanslar/k1_JPG.jpg",
  "/referanslar/k2_JPG.jpg",
  "/referanslar/a1_JPG.jpg",
  "/referanslar/c1_JPG.jpg",
  "/referanslar/o1_JPG.jpg",
  "/referanslar/s1_JPG.jpg",
  "/referanslar/w1_JPG.jpg",
  "/referanslar/Aydin-Proje03_JPG.jpg",
];

const projectsByYear: { year: string; projects: string[] }[] = [
  {
    year: "2024 – 2025",
    projects: [
      "Christmast Factory – Atina – Açıkhava Yılbaşı Etkinlik Projesi",
      "İstek 1915 Çanakkale – Sentetik Pist Projesi",
      "Kartal Fen Okulları – İstanbul – Sentetik Pist Projesi",
      "Kapadokya Buz Pisti – Nevşehir – Sentetik Pist Projesi",
      "Buyaka AVM Karne Etkinliği – İstanbul – 120 m² Sentetik Buz Pisti",
      "Küçükçiftlikpark Yılbaşı Festivali – İstanbul – 400 m² Etkinlik Projesi",
      "Meydan AVM Yılbaşı Etkinliği – İstanbul – Sentetik Pist Projesi",
      "Muğla BŞB Yılbaşı Etkinliği – İstanbul – 400 m² Gerçek Buz Pisti",
      "İzmir BŞB Yılbaşı Etkinliği – Sentetik Pist Projesi",
      "Bursa BŞB Yılbaşı Etkinliği – Bursa – Sentetik Pist Projesi",
      "Nilüfer BŞB Yılbaşı Etkinliği – Bursa – Sentetik Pist Projesi",
      "Ataşehir BŞB Yılbaşı Festivali – İstanbul – 400 m² Gerçek Buz Pisti",
      "Vadi İstanbul Buz Pisti – İstanbul – 500 m² Gerçek Buz Pisti",
      "Beyoğlu Belediyesi Karne Projesi – İstanbul – 300 m² Gerçek Buz Pisti",
    ],
  },
  {
    year: "2023 – 2024",
    projects: [
      "Çorlu Belediyesi Sömestri Projesi – 230 m² Doğal Buz Pisti",
      "Çerkezköy Belediyesi Sömestri Projesi – 100 m² Sentetik Buz Pisti",
      "Çekmeköy Belediyesi Sömestri Projesi – 450 m² Doğal Buz Pisti",
      "İstanbul Büyükşehir Belediyesi – Metro AŞ – 200 m² Sentetik Buz Pisti",
      "Kocaeli Büyükşehir Belediyesi – İzmit – 120 m² Sentetik Buz Pisti",
      "Buyaka AVM Karne Etkinliği – İstanbul – 120 m² Sentetik Buz Pisti",
      "Küçükçiftlikpark Yılbaşı Festivali – İstanbul – 400 m² Etkinlik Projesi",
      "Balıkesir Altıeylül Belediyesi – 300 m² Yılbaşı ve Sömestri Buz Pisti",
      "Christmast Factory – Atina – Açıkhava Yılbaşı Etkinlik Projesi",
    ],
  },
  {
    year: "2022 – 2023",
    projects: [
      "Meydan AVM – Ümraniye – 300 m² Yılbaşı ve Sömestri Buz Pisti",
      "Çorum Belediyesi – 440 m² Sentetik Buz Pisti",
      "Christmast Factory – Atina – Açıkhava Yılbaşı Etkinlik Projesi",
      "Ski Dome – Oran / Cezayir – 200 m² Doğal Buz Pisti",
      "TC Hokey Federasyonu & Formula 1 – İstanbul – 400 m² Etkinlik Projesi",
      "Küçükçiftlikpark Yılbaşı Festivali – İstanbul – 400 m² Etkinlik Projesi",
      "Buyaka AVM Karne Etkinliği – İstanbul – 120 m² Sentetik Buz Pisti",
      "Lapseki Belediyesi – Çanakkale – 140 m² Sentetik Buz Pisti",
    ],
  },
  {
    year: "2021 – 2022",
    projects: [
      "Keçiören Belediyesi – Ankara – 300 m² Dome Çadırlı Doğal Buz Pisti",
      "Mamak Belediyesi – Ankara – 420 m² Doğal Buz Pisti",
      "Kuşadası Belediyesi – Aydın – 150 m² Sentetik Buz Pisti",
      "Kırıkkale Belediyesi – 200 m² Doğal Buz Pisti",
      "Altındağ Belediyesi – Ankara – 900 m² EPDM Sistem Doğal Buz Pisti",
    ],
  },
  {
    year: "2020 – 2021",
    projects: [
      "TOKİ Millet Bahçesi – Ankara – 1000 m² Açıkhava Doğal Buz Pisti",
      "Land of Legend – Antalya – 250 m² Sentetik Buz Pisti",
      "Kars Olimpik Buz Pisti – 1800 m² Hokey Panelleri İmalatı, Montajı ve Danışmanlık",
    ],
  },
  {
    year: "2019 – 2020",
    projects: [
      "İstanbul Büyükşehir Belediyesi – 400 m² Kentormanı Buz Pisti",
      "Chisinau Sport Arena – Kişinev / Moldovya – 640 m² Açıkhava Buz Pisti",
      "G. Osmanpaşa Belediyesi – İstanbul – 300 m² Çadırlı Mobil Pist (EPDM)",
      "Kuşadası Belediyesi – Aydın – 300 m² Küre Çadırlı Mobil Pist (Alüminyum)",
      "Çorlu Belediyesi – Tekirdağ – 200 m² Açıkhava Mobil Pist (Alüminyum)",
      "Sultangazi Koleji – İstanbul – 100 m² Sentetik Pist",
      "Bilfen Çukurbağ Kampüsü – Ankara – 100 m² Sentetik Pist",
      "Metropol AVM – İstanbul – 140 m² Sentetik Pist, Moscow On Ice Show",
      "Bioder Road Show – Türkiye – 8 İlde Ücretsiz Sentetik Buz Pisti",
      "Spor AŞ Silivrikapı – İstanbul – Olimpik Buz Pisti Bakım ve Revizyon",
    ],
  },
  {
    year: "2018 – 2019",
    projects: [
      "Hilltown AVM – İstanbul Maltepe – 300 m² Mobil Pist Kiralama (Alüminyum)",
      "G. Osmanpaşa Belediyesi – İstanbul – 300 m² Çadırlı Mobil Pist Kiralama (EPDM)",
      "Flash City – Avusturya – 420 m² Mobil Pist Kiralama (EPDM)",
      "Konya Buz Pisti – Konya – 280 m² Anahtar Teslimi Doğal Buz Pisti (PEX-b)",
      "Royal Shopping Mall – Priştine / Kosova – 240 m² Anahtar Teslimi Doğal Buz Pisti",
    ],
  },
  {
    year: "2017",
    projects: [
      "Altındağ Belediyesi Buz Pisti – Ankara – 820 m² Anahtar Teslimi Doğal Buz Pisti",
      "Tekirdağ Belediyesi – Tekirdağ",
      "Akmerkez AVM – İstanbul / Etiler",
      "Tekirdağ Olimpik Buz Pisti – Spor Bakanlığı",
      "Alexandoupolis Buz Pisti – Yunanistan",
      "İBB Silivrikapı Olimpik Pisti – İstanbul Büyükşehir Belediyesi",
      "Novada AVM Buz Pisti – Yozgat – Anahtar Teslimi Doğal Buz Pisti (EPDM Matt)",
    ],
  },
  {
    year: "2016",
    projects: [
      "Akmerkez AVM – İstanbul / Etiler",
      "Gökkuşağı Koleji – İstanbul / Beylikdüzü",
      "Kentmeydanı AVM – Bursa",
      "Hatay GSGM Buz Pisti – Spor Bakanlığı",
      "Atlantis Buz Pisti – Kurtköy / İstanbul",
      "Sewda Merkezi Buz Pisti – Awaza / Türkmenistan",
      "Metrogarden AVM – Sur Yapı",
      "Axis AVM – Sur Yapı",
    ],
  },
  {
    year: "2015",
    projects: [
      "Alexandoupolis Buz Pisti – Yunanistan",
      "Melitopol Buz Pisti – Ukrayna",
      "Doğa Koleji – İzmit Yeniköy Kampüsü",
      "Afyon Park AVM Buz Pisti – Afyon",
      "M1 Real AVM – Adana",
      "Sivas Yıldızdağı Buz Pisti – Sivas İl Özel İdaresi",
      "Silivrikapı Olimpik Buz Pisti – İstanbul Büyükşehir Belediyesi",
    ],
  },
  {
    year: "2014",
    projects: [
      "Doğa Koleji – Bursa Özlüce Kampüsü",
      "Doğa Koleji – Yalova Kampüsü",
      "Şemkir Eğlence Dünyası – Azerbaycan",
    ],
  },
  {
    year: "2013",
    projects: [
      "Piazza AVM Buz Pisti – Samsun",
      "Piazza AVM Buz Pisti – Kahramanmaraş",
      "Piazza AVM Buz Pisti – Şanlıurfa",
    ],
  },
  {
    year: "2012",
    projects: [
      "Megufun Buz Pisti – Bakü / Azerbaycan",
      "Ankara Müzik Festivali – Congresium / Ankara",
      "326 AVM Buz Pisti – Osmaniye",
    ],
  },
  {
    year: "2011",
    projects: [
      "Belediye Sosyal Projesi – Zeytinburnu / İstanbul",
      "Belediye Sosyal Projesi – Beyoğlu / İstanbul",
      "Doğa Koleji – Avcılar / İstanbul",
      "Highway AVM – Bolu",
      "Lapis AVM – Karataş / Gaziantep",
    ],
  },
  {
    year: "2010",
    projects: [
      "Anatolium AVM – Osmangazi / Bursa",
      "Airport AVM Buz Pisti – Yenibosna / İstanbul",
      "Koç Üniversitesi – Sarıyer / İstanbul",
      "Şehir Buz Pisti – Oş / Kırgızistan",
      "Belediye Sosyal Projesi – Zeytinburnu / İstanbul",
      "Lapis AVM – Karataş / Gaziantep",
    ],
  },
  {
    year: "2009",
    projects: [
      "Koç Üniversitesi – Sarıyer / İstanbul",
      "Kanyon AVM – Levent / İstanbul",
      "Goldcity Otel – Alanya / Antalya",
      "Uşak Buz Pisti – Uşak",
      "Ajar Buz Pisti – Astana / Kazakistan",
      "Forum İstanbul AVM – Bayrampaşa / İstanbul",
      "Akçay Yaz Projesi – Edremit / Balıkesir",
      "Ramazan Şenlik Alanı – Bağcılar / İstanbul",
    ],
  },
  {
    year: "2008",
    projects: [
      "Kanyon AVM – Levent / İstanbul",
      "Şehir Meydanı – Lüleburgaz / Kırklareli",
      "Meydan AVM – Ümraniye / İstanbul",
      "Kemer Şehir Meydanı – Kemer / Antalya",
      "Şehir Lunaparkı – Alanya / Antalya",
      "Akçay Yaz Projesi – Edremit / Balıkesir",
      "Aka Koleji – Bahçelievler / İstanbul",
      "Panora AVM – Oran / Ankara",
    ],
  },
  {
    year: "2007",
    projects: [
      "Kanyon AVM – Levent / İstanbul",
      "Kıbrıs Iceworld – Lefkoşa / KKTC",
      "Pony Eğlence Merkezi – Vişnelik / Eskişehir",
    ],
  },
];

const projectsByYearEn: { year: string; projects: string[] }[] = [
  {
    year: "2024 – 2025",
    projects: [
      "Christmast Factory – Athens – Outdoor New Year Event",
      "İstek 1915 Çanakkale – Synthetic Rink Project",
      "Kartal Fen Okulları – Istanbul – Synthetic Rink Project",
      "Kapadokya Ice Rink – Nevşehir – Synthetic Rink Project",
      "Buyaka Mall School Break Event – Istanbul – 120 m² Synthetic Ice Rink",
      "Küçükçiftlikpark New Year Festival – Istanbul – 400 m² Event",
      "Meydan Mall New Year Event – Istanbul – Synthetic Rink Project",
      "Muğla Metropolitan Municipality New Year Event – Istanbul – 400 m² Natural Ice Rink",
      "İzmir Metropolitan Municipality New Year Event – Synthetic Rink Project",
      "Bursa Metropolitan Municipality New Year Event – Bursa – Synthetic Rink Project",
      "Nilüfer Metropolitan Municipality New Year Event – Bursa – Synthetic Rink Project",
      "Ataşehir Metropolitan Municipality New Year Festival – Istanbul – 400 m² Natural Ice Rink",
      "Vadi İstanbul Ice Rink – Istanbul – 500 m² Natural Ice Rink",
      "Beyoğlu Municipality School Break Project – Istanbul – 300 m² Natural Ice Rink",
    ],
  },
  {
    year: "2023 – 2024",
    projects: [
      "Çorlu Municipality Semester Break Project – 230 m² Natural Ice Rink",
      "Çerkezköy Municipality Semester Break Project – 100 m² Synthetic Ice Rink",
      "Çekmeköy Municipality Semester Break Project – 450 m² Natural Ice Rink",
      "Istanbul Metropolitan Municipality – Metro AŞ – 200 m² Synthetic Ice Rink",
      "Kocaeli Metropolitan Municipality – İzmit – 120 m² Synthetic Ice Rink",
      "Buyaka Mall School Break Event – Istanbul – 120 m² Synthetic Ice Rink",
      "Küçükçiftlikpark New Year Festival – Istanbul – 400 m² Event",
      "Balıkesir Altıeylül Municipality – 300 m² New Year & Semester Break Ice Rink",
      "Christmast Factory – Athens – Outdoor New Year Event",
    ],
  },
  {
    year: "2022 – 2023",
    projects: [
      "Meydan Mall – Ümraniye – 300 m² New Year & Semester Break Ice Rink",
      "Çorum Municipality – 440 m² Synthetic Ice Rink",
      "Christmast Factory – Athens – Outdoor New Year Event",
      "Ski Dome – Oran / Algeria – 200 m² Natural Ice Rink",
      "Turkish Hockey Federation & Formula 1 – Istanbul – 400 m² Event",
      "Küçükçiftlikpark New Year Festival – Istanbul – 400 m² Event",
      "Buyaka Mall School Break Event – Istanbul – 120 m² Synthetic Ice Rink",
      "Lapseki Municipality – Çanakkale – 140 m² Synthetic Ice Rink",
    ],
  },
  {
    year: "2021 – 2022",
    projects: [
      "Keçiören Municipality – Ankara – 300 m² Dome-Tented Natural Ice Rink",
      "Mamak Municipality – Ankara – 420 m² Natural Ice Rink",
      "Kuşadası Municipality – Aydın – 150 m² Synthetic Ice Rink",
      "Kırıkkale Municipality – 200 m² Natural Ice Rink",
      "Altındağ Municipality – Ankara – 900 m² EPDM System Natural Ice Rink",
    ],
  },
  {
    year: "2020 – 2021",
    projects: [
      "TOKİ Millennium Park – Ankara – 1000 m² Outdoor Natural Ice Rink",
      "Land of Legend – Antalya – 250 m² Synthetic Ice Rink",
      "Kars Olympic Ice Rink – 1800 m² Hockey Boards Manufacturing, Installation & Consultancy",
    ],
  },
  {
    year: "2019 – 2020",
    projects: [
      "Istanbul Metropolitan Municipality – 400 m² City Forest Ice Rink",
      "Chisinau Sport Arena – Chisinau / Moldova – 640 m² Outdoor Ice Rink",
      "Gaziosmanpaşa Municipality – Istanbul – 300 m² Tented Mobile Rink (EPDM)",
      "Kuşadası Municipality – Aydın – 300 m² Dome-Tented Mobile Rink (Aluminium)",
      "Çorlu Municipality – Tekirdağ – 200 m² Outdoor Mobile Rink (Aluminium)",
      "Sultangazi College – Istanbul – 100 m² Synthetic Rink",
      "Bilfen Çukurbağ Campus – Ankara – 100 m² Synthetic Rink",
      "Metropol Mall – Istanbul – 140 m² Synthetic Rink, Moscow On Ice Show",
      "Bioder Road Show – Turkey – Free Synthetic Ice Rink in 8 Cities",
      "Spor AŞ Silivrikapı – Istanbul – Olympic Ice Rink Maintenance & Revision",
    ],
  },
  {
    year: "2018 – 2019",
    projects: [
      "Hilltown Mall – Istanbul Maltepe – 300 m² Mobile Rink Rental (Aluminium)",
      "Gaziosmanpaşa Municipality – Istanbul – 300 m² Tented Mobile Rink Rental (EPDM)",
      "Flash City – Austria – 420 m² Mobile Rink Rental (EPDM)",
      "Konya Ice Rink – Konya – 280 m² Turnkey Natural Ice Rink (PEX-b)",
      "Royal Shopping Mall – Pristina / Kosovo – 240 m² Turnkey Natural Ice Rink",
    ],
  },
  {
    year: "2017",
    projects: [
      "Altındağ Municipality Ice Rink – Ankara – 820 m² Turnkey Natural Ice Rink",
      "Tekirdağ Municipality – Tekirdağ",
      "Akmerkez Mall – Istanbul / Etiler",
      "Tekirdağ Olympic Ice Rink – Ministry of Sports",
      "Alexandroupolis Ice Rink – Greece",
      "IBB Silivrikapı Olympic Rink – Istanbul Metropolitan Municipality",
      "Novada Mall Ice Rink – Yozgat – Turnkey Natural Ice Rink (EPDM Matt)",
    ],
  },
  {
    year: "2016",
    projects: [
      "Akmerkez Mall – Istanbul / Etiler",
      "Gökkuşağı College – Istanbul / Beylikdüzü",
      "Kentmeydanı Mall – Bursa",
      "Hatay GSGM Ice Rink – Ministry of Sports",
      "Atlantis Ice Rink – Kurtköy / Istanbul",
      "Sewda Center Ice Rink – Awaza / Turkmenistan",
      "Metrogarden Mall – Sur Yapı",
      "Axis Mall – Sur Yapı",
    ],
  },
  {
    year: "2015",
    projects: [
      "Alexandroupolis Ice Rink – Greece",
      "Melitopol Ice Rink – Ukraine",
      "Doğa College – İzmit Yeniköy Campus",
      "Afyon Park Mall Ice Rink – Afyon",
      "M1 Real Mall – Adana",
      "Sivas Yıldızdağı Ice Rink – Sivas Provincial Administration",
      "Silivrikapı Olympic Ice Rink – Istanbul Metropolitan Municipality",
    ],
  },
  {
    year: "2014",
    projects: [
      "Doğa College – Bursa Özlüce Campus",
      "Doğa College – Yalova Campus",
      "Şemkir Entertainment World – Azerbaijan",
    ],
  },
  {
    year: "2013",
    projects: [
      "Piazza Mall Ice Rink – Samsun",
      "Piazza Mall Ice Rink – Kahramanmaraş",
      "Piazza Mall Ice Rink – Şanlıurfa",
    ],
  },
  {
    year: "2012",
    projects: [
      "Megufun Ice Rink – Baku / Azerbaijan",
      "Ankara Music Festival – Congresium / Ankara",
      "326 Mall Ice Rink – Osmaniye",
    ],
  },
  {
    year: "2011",
    projects: [
      "Municipal Social Project – Zeytinburnu / Istanbul",
      "Municipal Social Project – Beyoğlu / Istanbul",
      "Doğa College – Avcılar / Istanbul",
      "Highway Mall – Bolu",
      "Lapis Mall – Karataş / Gaziantep",
    ],
  },
  {
    year: "2010",
    projects: [
      "Anatolium Mall – Osmangazi / Bursa",
      "Airport Mall Ice Rink – Yenibosna / Istanbul",
      "Koç University – Sarıyer / Istanbul",
      "City Ice Rink – Osh / Kyrgyzstan",
      "Municipal Social Project – Zeytinburnu / Istanbul",
      "Lapis Mall – Karataş / Gaziantep",
    ],
  },
  {
    year: "2009",
    projects: [
      "Koç University – Sarıyer / Istanbul",
      "Kanyon Mall – Levent / Istanbul",
      "Goldcity Hotel – Alanya / Antalya",
      "Uşak Ice Rink – Uşak",
      "Ajar Ice Rink – Astana / Kazakhstan",
      "Forum Istanbul Mall – Bayrampaşa / Istanbul",
      "Akçay Summer Project – Edremit / Balıkesir",
      "Ramadan Festival Area – Bağcılar / Istanbul",
    ],
  },
  {
    year: "2008",
    projects: [
      "Kanyon Mall – Levent / Istanbul",
      "City Square – Lüleburgaz / Kırklareli",
      "Meydan Mall – Ümraniye / Istanbul",
      "Kemer City Square – Kemer / Antalya",
      "City Amusement Park – Alanya / Antalya",
      "Akçay Summer Project – Edremit / Balıkesir",
      "Aka College – Bahçelievler / Istanbul",
      "Panora Mall – Oran / Ankara",
    ],
  },
  {
    year: "2007",
    projects: [
      "Kanyon Mall – Levent / Istanbul",
      "Cyprus Iceworld – Nicosia / TRNC",
      "Pony Entertainment Center – Vişnelik / Eskişehir",
    ],
  },
];

// Her 4 yıl grubundan sonra gösterilecek fotoğraf grupları
const photoChunks = [
  photos.slice(0, 4),
  photos.slice(4, 8),
  photos.slice(8, 12),
  photos.slice(12, 16),
  photos.slice(16, 20),
];

function YearGroup({ group }: { group: { year: string; projects: string[] } }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-5">
        <span
          className="inline-flex items-center justify-center text-sm font-bold px-4 py-1.5 rounded-full text-white shrink-0"
          style={{ background: "var(--navy)" }}
        >
          {group.year}
        </span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5 pl-2">
        {group.projects.map((project, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 bg-sky-400" />
            <span className="text-sm text-gray-600 leading-relaxed">{project}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoStrip({ photos, alt }: { photos: string[]; alt: string }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10">
      {photos.map((src, i) => (
        <div key={i} className="group relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3]">
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-[var(--navy)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}

export default function ReferanslarPage() {
  const { t, lang } = useLanguage();
  const r = t.referanslar;

  const activeProjects = lang === "en" ? projectsByYearEn : projectsByYear;
  const yearChunks = [
    activeProjects.slice(0, 4),
    activeProjects.slice(4, 8),
    activeProjects.slice(8, 12),
    activeProjects.slice(12, 16),
    activeProjects.slice(16),
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-20 text-white" style={{ background: "var(--navy)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5">{r.eyebrow}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5">{r.heading}</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">{r.sub}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {[
              { value: "200+", label: r.statProjects },
              { value: "20+", label: r.statExperience },
              { value: "7/24", label: r.statSupport },
            ].map((s) => (
              <div key={s.label} className="px-8 py-8 text-center">
                <div className="text-3xl font-extrabold tracking-tight mb-1" style={{ color: "var(--navy)" }}>{s.value}</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proje Listesi — fotoğraflarla dağıtılmış */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <p className="text-sky-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">{r.completedWorkEyebrow}</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: "var(--navy)" }}>
              {r.projectsHeading}
            </h2>
          </div>

          {yearChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex}>
              <div className="space-y-10">
                {chunk.map((group) => (
                  <YearGroup key={group.year} group={group} />
                ))}
              </div>

              {photoChunks[chunkIndex] && (
                <PhotoStrip
                  photos={photoChunks[chunkIndex]}
                  alt={r.photoAlt}
                />
              )}

              {chunkIndex < yearChunks.length - 1 && (
                <div className="h-px bg-gray-100 my-4" />
              )}
            </div>
          ))}

          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
              <span className="font-semibold text-gray-500">{r.noteLabel}</span> {r.noteText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
