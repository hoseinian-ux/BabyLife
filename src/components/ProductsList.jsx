import ProductCard from "./ProductCard";
import { products } from "../lib/products";
import Link from "next/link";

export default function ProductsList() {
  return (
    <section className="product-section mt-16 mb-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">
          <span className="text-secondary">محصولات</span>
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          بهترین محصولات با کیفیت بالا برای شما انتخاب شده‌اند.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Link key={p.id} href={`/shop/${p.category}`}>
            <ProductCard product={p} index={i} />
          </Link>
        ))}
      </div>
    </section>
  );
}
