import type { Metadata } from "next";
import UrunlerContent from "./UrunlerContent";

export const metadata: Metadata = {
  title: "Products & Services | Ürün ve Hizmetlerimiz",
  description: "IceTrendy ice rink products and services: natural, synthetic, rental, Olympic projects, maintenance and more.",
};

export default function UrunlerPage() {
  return <UrunlerContent />;
}
