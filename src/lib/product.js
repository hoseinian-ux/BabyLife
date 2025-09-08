// src/lib/products.js
export const products = [
  {
    id: 1,
    name: "پیراهن دخترانه ۱",
    description: "لباس دخترانه شیک",
    price: 250000,
    category: "girl",
    image: "/imgs/products/girl/1/girl-1.jpg",
    images: [
      "/imgs/products/girl/1/girl-1-1.jpg",
      "/imgs/products/girl/1/girl-1-2.jpg",
      "/imgs/products/girl/1/girl-1-3.jpg",
    ],
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    sizes: ["S", "M", "L"],
    reviews: [],
  },
  {
    id: 2,
    name: "پیراهن دخترانه ۲",
    description: "لباس دخترانه مجلسی",
    price: 320000,
    category: "girl",
    image: "/imgs/products/girl/2/girl-2.jpg",
    images: [
      "/imgs/products/girl/2/girl-2-1.jpg",
      "/imgs/products/girl/2/girl-2-2.jpg",
      "/imgs/products/girl/2/girl-2-3.jpg",
    ],
    colors: ["#ff8800", "#0000ff"],
    sizes: ["S", "M"],
    reviews: [],
  },
  {
    id: 3,
    name: "پیراهن پسرانه ۱",
    description: "لباس پسرانه شیک",
    price: 210000,
    category: "boy",
    image: "/imgs/products/boy/1/boy-1.jpg",
    images: [
      "/imgs/products/boy/1/boy-1-1.jpg",
      "/imgs/products/boy/1/boy-1-2.jpg",
    ],
    colors: ["#123456", "#654321"],
    sizes: ["M", "L"],
    reviews: [],
  },
  {
    id: 4,
    name: "پیراهن بهاره ۱",
    description: "لباس بهاره شیک",
    price: 210000,
    category: "spring",
    image: "/imgs/products/spring/1/spring-1.jpg",
    images: [
      "/imgs/products/spring/1/spring-1-1.jpg",
      "/imgs/products/spring/1/spring-1-2.jpg",
    ],
    colors: ["#123456", "#654321"],
    sizes: ["M", "L"],
    reviews: [],
  },
  {
    id: 5,
    name: "پیراهن بهاره ۱",
    description: "لباس بهاره شیک",
    price: 210000,
    category: "spring",
    image: "/imgs/products/spring/2/spring-2.jpg",
    images: [
      "/imgs/products/spring/2/spring-2-1.jpg",
      "/imgs/products/spring/2/spring-2-2.jpg",
    ],
    colors: ["#123456", "#654321"],
    sizes: ["M", "L"],
    reviews: [],
  },

  {
    id: 6,
    name: "پیراهن پاییزه ۱",
    description: "لباس پاییزه شیک",
    price: 210000,
    category: "autumn",
    image: "/imgs/products/autumn/1/autumn-1.jpg",
    images: [
      "/imgs/products/autumn/1/autumn-1-1.jpg",
      "/imgs/products/autumn/1/autumn-1-2.jpg",
    ],
    colors: ["#123456", "#654321"],
    sizes: ["M", "L"],
    reviews: [],
  },

  {
    id: 7,
    name: "پیراهن پاییزه ۱",
    description: "لباس پاییزه شیک",
    price: 210000,
    category: "autumn",
    image: "/imgs/products/autumn/2/autumn-2.jpg",
    images: [
      "/imgs/products/autumn/2/autumn-2-1.jpg",
      "/imgs/products/autumn/2/autumn-2-2.jpg",
    ],
    colors: ["#123456", "#654321"],
    sizes: ["M", "L"],
    reviews: [],
  },
];

// شبیه‌سازی API
export async function fetchProducts(category = "all", page = 1, limit = 6) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered =
        category && category !== "all"
          ? products.filter((p) => p.category === category)
          : products;

      const start = (page - 1) * limit;
      const paginated = filtered.slice(start, start + limit);

      resolve({
        data: paginated,
        total: filtered.length,
        page,
        totalPages: Math.ceil(filtered.length / limit),
      });
    }, 300);
  });
}
