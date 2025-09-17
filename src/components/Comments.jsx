"use client";

import { useState, useEffect } from "react";

export default function Comments({ slug }) {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // گرفتن کامنت‌ها
  useEffect(() => {
    fetch(`/api/comments?slug=${slug}`)
      .then((res) => res.json())
      .then(setComments);
  }, [slug]);

  // ارسال کامنت
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, slug }),
    });
    if (res.ok) {
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]); // نمایش فوری
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-4">دیدگاه‌ها</h2>

      {/* فرم ارسال کامنت */}
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-lg mb-8 bg-gray-50"
      >
        <input
          type="text"
          placeholder="نام شما"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="email"
          placeholder="ایمیل شما"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full border p-2 mb-3 rounded"
        />
        <textarea
          placeholder="متن دیدگاه..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full border p-2 mb-3 rounded"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          ارسال دیدگاه
        </button>
      </form>

      {/* لیست دیدگاه‌ها */}
      <div className="space-y-4">
        {comments.length === 0 && <p>هنوز دیدگاهی ثبت نشده است.</p>}
        {comments.map((c) => (
          <div
            key={c.id}
            className="border p-3 rounded-lg bg-white shadow-sm"
          >
            <p className="font-semibold">{c.name}</p>
            <p className="text-gray-600 text-sm">{c.date.slice(0, 10)}</p>
            <p className="mt-2">{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
