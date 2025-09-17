import Image from "next/image";
import Link from "next/link";
import { fetchBlogBySlug, fetchBlogs } from "@/lib/blogs";
import Comments from "@/components/Comments";

export async function generateMetadata({ params }) {
  const post = await fetchBlogBySlug(params.slug);
  if (!post) return { title: "مقاله یافت نشد" };

  return {
    title: post.title,
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 150),
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]+>/g, "").slice(0, 150),
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await fetchBlogBySlug(params.slug);

  if (!post) {
    return <div className="container mx-auto py-10">پست یافت نشد</div>;
  }

  // گرفتن همه مقالات برای مطالب مرتبط
  const allPosts = await fetchBlogs();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      {/* Featured Image */}
      <div className="mb-6">
        <Image
          src={post.featuredImage}
          alt={post.title}
          width={1200}
          height={600}
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

      {/* Meta */}
      <div className="text-sm text-gray-500 mb-6 flex gap-4">
        <span>✍️ {post.author}</span>
        <span>📅 {post.date}</span>
        <span>📂 {post.category}</span>
      </div>

      {/* Content */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share */}
      <div className="mt-10 border-t pt-6">
        <p className="font-semibold mb-3">به اشتراک‌گذاری:</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Facebook
          </button>
          <button className="px-4 py-2 bg-sky-400 text-white rounded-lg">
            Twitter
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
            WhatsApp
          </button>
        </div>
      </div>

      {/* بخش دیدگاه‌ها */}
      <Comments slug={post.slug} />

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">مطالب مرتبط</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="block border rounded-xl overflow-hidden shadow hover:shadow-md transition"
              >
                <Image
                  src={item.featuredImage}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
