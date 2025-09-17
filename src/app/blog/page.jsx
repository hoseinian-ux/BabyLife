import Link from "next/link";
import Image from "next/image";
import { fetchBlogs } from "@/lib/blogs";

export const metadata = {
  title: "وبلاگ BabyLife",
  description: "جدیدترین مقالات و مطالب آموزشی درباره لباس نوزادی و سبک زندگی",
};

export default async function BlogListPage() {
  const blogPosts = await fetchBlogs();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">وبلاگ BabyLife</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                ✍️ {post.author} | 📅 {post.date}
              </p>
              <p className="text-gray-700 line-clamp-2">
                {post.content.replace(/<[^>]+>/g, "").slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
