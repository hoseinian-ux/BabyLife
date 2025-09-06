"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="group flex flex-row items-start gap-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 p-4">
      {/* تصویر سمت چپ */}
      <div className="relative w-1/3 h-32 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* محتوای سمت راست */}
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#9eaa92] transition">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.id}`}
          className="inline-block text-[#9eaa92] font-semibold relative transition duration-300
                     after:content-[''] after:absolute after:left-0 after:-bottom-1 
                     after:w-0 after:h-[2px] after:bg-[#9eaa92] after:transition-all after:duration-300
                     hover:after:w-full"
        >
          بیشتر بخوانید →
        </Link>
      </div>
    </div>
  );
}
