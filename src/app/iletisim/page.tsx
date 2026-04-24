import type { Metadata } from "next";
import IletisimContent from "./IletisimContent";

export const metadata: Metadata = {
  title: "Contact | İletişim",
  description: "Contact IceTrendy for your ice rink project. Free consultation available.",
};

export default function IletisimPage() {
  return <IletisimContent />;
}
