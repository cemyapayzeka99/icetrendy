export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDesc: string;
  image: string;
  imageExt?: string;
  features?: string[];
}

export interface Reference {
  id: string;
  name: string;
  location: string;
  year: number;
  type: "dogal" | "sentetik" | "olimpik" | "kiralik";
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  mobile?: string;
  address?: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface Stat {
  value: string;
  label: string;
}
