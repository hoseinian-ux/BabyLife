"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/dashboard"); // ریدایرکت بعد از ورود موفق
    } else {
      const data = await res.json();
      alert(data.error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">ورود به پنل</h1>

        <input
          type="text"
          name="username"
          placeholder="نام کاربری"
          value={form.username}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
