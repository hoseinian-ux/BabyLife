import { NextResponse } from "next/server";

// دیتای فیک — می‌تونی بعدا از DB بیاری
const allProducts = [
  {
    id: "1",
    name: "لباس دخترانه",
    category: "girl",
    description: "لباس دخترانه شیک و باکیفیت",
    price: 250000,
    images: ["/images/girl1.jpg", "/images/girl2.jpg"],
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [
      { user: "زهرا", comment: "خیلی عالی بود 👌" },
      { user: "نگین", comment: "جنس خوب، ارسال سریع" },
    ],
  },
  {
    id: "2",
    name: "لباس پسرانه",
    category: "boy",
    description: "لباس راحت و شیک برای پسران",
    price: 200000,
    images: ["/images/boy1.jpg", "/images/boy2.jpg"],
    colors: ["#000", "#555"],
    sizes: ["M", "L"],
    reviews: [],
  },
];

export async function GET(req, { params }) {
  const { id } = params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
