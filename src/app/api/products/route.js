import { NextResponse } from "next/server";

const allProducts = [
  { id: 1, name: "لباس دخترانه", category: "girl", image: "/images/girl1.jpg", description: "محصول عالی" },
  { id: 2, name: "لباس پسرانه", category: "boy", image: "/images/boy1.jpg", description: "محصول عالی" },
  { id: 3, name: "کت پاییزه", category: "fall", image: "/images/fall1.jpg", description: "محصول عالی" },
  { id: 4, name: "تیشرت بهاره", category: "spring", image: "/images/spring1.jpg", description: "محصول عالی" },
  
];

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
