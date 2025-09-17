"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  // بررسی نام درست فیلد تصویر
  const imgSrc = post.featuredImage || "/imgs/blog/default.jpg";

  return (
    <div className="group flex flex-row items-start gap-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 p-4">
      <div className="relative w-1/3 h-32 flex-shrink-0 overflow-hidden rounded-lg">
        <Image src={post.image}
          alt={post.title || "تصویر پست"}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {post.excerpt || post.content?.replace(/<[^>]+>/g, "").slice(0, 100)}
        </p>

        {/* لینک با بررسی slug */}
        {post.slug ? (
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block text-primary font-semibold relative transition duration-300
                     after:content-[''] after:absolute after:left-0 after:-bottom-1 
                     after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300
                     hover:after:w-full"
          >
            بیشتر بخوانید →
          </Link>
        ) : (
          <span className="text-gray-400">لینک موجود نیست</span>
        )}
      </div>
    </div>
  );
}
