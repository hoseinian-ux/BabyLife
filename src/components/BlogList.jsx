"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // شبیه‌سازی گرفتن داده از API
    const fetchPosts = async () => {
      const res = await fetch("/api/blog"); // مسیر API خودت
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          پست‌های وبلاگ
        </h2>

        {/* grid با کانتینر محدود */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-white rounded-md hover:opacity-90 transition"
          >
            موارد بیشتر
          </Link>
        </div>
      </div>
    </section>
  );
}
