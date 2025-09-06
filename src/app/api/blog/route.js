export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "نکات طلایی برای خرید لباس کودک",
      excerpt: "در این مقاله چند راهکار ساده برای انتخاب لباس مناسب کودکان را مرور می‌کنیم...",
      image: "/imgs/blog/blog-1.jpg",
    },
    {
      id: 2,
      title: "ترندهای بهاره پوشاک بچه‌گانه",
      excerpt: "بهار امسال چه رنگ‌ها و طرح‌هایی برای کودکان محبوب شده است؟",
      image: "/imgs/blog/blog-4.jpg",
    },
    {
      id: 3,
      title: "راهنمای سایزبندی برای خرید آنلاین",
      excerpt: "چطور بدون پرو کردن لباس، سایز درست برای فرزندمان انتخاب کنیم؟",
      image: "/imgs/blog/blog-3.jpg",
    },
  ]);
}
