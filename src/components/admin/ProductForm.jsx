"use client";
import { useState } from "react";

export default function ProductForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    priceMin: "",
    priceMax: "",
    colors: [],
    sizes: [],
    ageRange: "",
    images: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddColor = (color) => {
    setForm({ ...form, colors: [...form.colors, color] });
  };

  const handleAddImage = (file) => {
    setForm({ ...form, images: [...form.images, file] });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      <input
        name="name"
        placeholder="نام محصول"
        value={form.name}
        onChange={handleChange}
        className="border rounded-md p-2 w-full"
      />
      <textarea
        name="description"
        placeholder="توضیحات"
        value={form.description}
        onChange={handleChange}
        className="border rounded-md p-2 w-full"
      />
      <div className="grid grid-cols-2 gap-2">
        <input
          name="priceMin"
          placeholder="حداقل قیمت"
          value={form.priceMin}
          onChange={handleChange}
          className="border rounded-md p-2 w-full"
        />
        <input
          name="priceMax"
          placeholder="حداکثر قیمت"
          value={form.priceMax}
          onChange={handleChange}
          className="border rounded-md p-2 w-full"
        />
      </div>
      {/* بخش رنگ‌ها */}
      <button
        type="button"
        onClick={() => handleAddColor("#ff0000")}
        className="px-3 py-1 bg-red-500 text-white rounded-md"
      >
        افزودن رنگ قرمز
      </button>
      <div className="flex gap-2">
        {form.colors.map((c, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      {/* سایزها */}
      <input
        name="sizes"
        placeholder="سایزها (مثلاً S,M,L)"
        value={form.sizes}
        onChange={handleChange}
        className="border rounded-md p-2 w-full"
      />
      {/* سن */}
      <input
        name="ageRange"
        placeholder="مثلاً ۵ تا ۱۰ سال"
        value={form.ageRange}
        onChange={handleChange}
        className="border rounded-md p-2 w-full"
      />
      {/* تصاویر */}
      <input
        type="file"
        multiple
        onChange={(e) => {
          const files = Array.from(e.target.files);
          setForm({ ...form, images: files });
        }}
      />

      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded-md"
      >
        ذخیره محصول
      </button>
    </form>
  );
}
