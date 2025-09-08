import { notFound } from "next/navigation";
import Link from "next/link";
import ProductsTabs from "@/components/ProductsTabs";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import { fetchProducts } from "@/lib/product";

export default async function CategoryPage({ params, searchParams }) {
  const category = params.category || "all";
  const page = parseInt(searchParams?.page || "1");

  const data = await fetchProducts(category, page);

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb category={category} />

      <div className="container mx-auto px-4 py-10">
        <ProductsTabs active={category} />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.data.map((product, i) => (
            <Link key={product.id} href={`/shop/product/${product.id}`}>
              <ProductCard product={product} index={i} />
            </Link>
          ))}
        </div>

        {/* صفحه‌بندی */}
        <div className="flex justify-center mt-10 gap-2">
          {/* دکمه قبلی */}
          {page > 1 && (
            <Link
              href={`/shop/${category}?page=${page - 1}`}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              قبلی
            </Link>
          )}

          {/* شماره صفحات */}
          {[...Array(data.totalPages)].map((_, i) => (
            <Link
              key={i}
              href={`/shop/${category}?page=${i + 1}`}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-[#9eaa92] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </Link>
          ))}

          {/* دکمه بعدی */}
          {page < data.totalPages && (
            <Link
              href={`/shop/${category}?page=${page + 1}`}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              بعدی
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
