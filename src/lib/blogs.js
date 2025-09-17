export const blogs = [
  {
    id: 1,
    slug: "table-size-kids",
    title: " جدول سایزبندی نوزادان",
    author: "Admin",
    date: "16 Sep 2025",
    category: "سایزبندی",
    featuredImage: "/imgs/blog/blog-1.jpg",
    content: `
      <p>این یک متن تستی است برای معرفی مقاله. 
      شما می‌توانید این بخش را از CMS یا دیتابیس بگیرید.</p>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 
      و با استفاده از طراحان گرافیک است.</p>
    `,
  },
  {
    id: 2,
    slug: "baby-clothes-trends-2025",
    title: "ترندهای لباس نوزاد ۲۰۲۵",
    author: "Editor",
    date: "01 Oct 2025",
    category: "مد و پوشاک",
    featuredImage: "/imgs/blog/blog-4.jpg",
    content: `
      <p>لباس‌های نوزادی در سال ۲۰۲۵ بیشتر روی پارچه‌های ارگانیک و 
      طرح‌های مینیمال تمرکز دارند.</p>
      <p>این مقاله جدیدترین تغییرات در بازار را بررسی می‌کند.</p>
    `,
  },
];

// فانکشن برای گرفتن همه مقالات
export async function fetchBlogs() {
  return blogs;
}

// فانکشن برای گرفتن مقاله خاص بر اساس slug
export async function fetchBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}
