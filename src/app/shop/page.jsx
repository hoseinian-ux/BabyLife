"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductsTabs from "../../components/ProductsTabs";
import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/product"; // <-- حتما products

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
