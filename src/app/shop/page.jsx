"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductsTabs from "../../components/ProductsTabs";
import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/product"; 

export const metadata = {
  title: "محصولات - فروشگاه BabyLife",
  description: "خرید عمده لباس نوزادی از 0 تا 2 سال در BabyLife",
  keywords: "لباس نوزاد, خرید عمده, BabyLife",
  openGraph: {
    title: "محصولات - فروشگاه BabyLife",
    description: "خرید عمده لباس نوزادی از 0 تا 2 سال در BabyLife",
    url: "https://www.BabyLife.com/shop",
    images: [{ url: "https://www.BabyLife.com/shop-og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function ShopPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="container mx-auto px-4 py-10">
      <ProductsTabs active={category} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p, i) => (
          <Link key={p.id} href={`/shop/${p.id}`}>
            <ProductCard product={p} index={i} />
          </Link>
        ))}
      </div>
    </div>
  );
}
