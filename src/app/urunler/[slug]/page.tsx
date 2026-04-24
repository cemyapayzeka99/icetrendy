import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import UrunDetayContent from "../UrunDetayContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.title, description: product.shortDesc };
}

export default async function UrunDetayPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return <UrunDetayContent slug={slug} />;
}
