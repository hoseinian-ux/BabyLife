import { NextResponse } from "next/server";
import { allProducts } from "@/lib/fakeProducts";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "all";
  const page = parseInt(searchParams.get("page") || "1", 10);

  // فیلتر دسته
  const filtered =
    category === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === category);

  // صفحه‌بندی (۲ محصول در هر صفحه برای تست)
  const pageSize = 2;
  const start = (page - 1) * pageSize;
  const paginated = filtered.slice(start, start + pageSize);

  return NextResponse.json({
    data: paginated,
    totalPages: Math.ceil(filtered.length / pageSize),
  });
}


export async function POST(req) {
  try {
    const body = await req.json();

    // ساخت محصول جدید با id یکتا
    const newProduct = {
      id: Date.now().toString(),
      name: body.name,
      category: body.category,
      description: body.description || "",
      price: body.price || 0,
      colors: body.colors || [],
      sizes: body.sizes || [],
      ageRange: body.ageRange || "",
      images: body.images || [],
      gallery: body.gallery || [],
    };

    const updated = [...products, newProduct];
    setProducts(updated);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }
}
