"use client";

import { useEffect, useState } from "react";

import { categories } from "@/lib/categories";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: 0,
    mainImage: null,
    gallery: [],
    colors: [],
    sizes: [],
    ageRange: "",
  });

  const [newColor, setNewColor] = useState("#000000");
  const [newSize, setNewSize] = useState("");
  const [newGalleryImage, setNewGalleryImage] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch("/api/products");
    const json = await res.json();
    setProducts(json.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      mainImage: null,
      gallery: [],
      colors: product.colors || [],
      sizes: product.sizes || [],
      ageRange: product.ageRange || "",
    });
  };

  const handleAddColor = () => {
    if (newColor && !form.colors.includes(newColor)) {
      setForm({ ...form, colors: [...form.colors, newColor] });
    }
  };

  const handleAddSize = () => {
    if (newSize && !form.sizes.includes(newSize)) {
      setForm({ ...form, sizes: [...form.sizes, newSize] });
      setNewSize("");
    }
  };

  const handleAddGalleryImage = () => {
    if (newGalleryImage) {
      setForm({ ...form, gallery: [...form.gallery, newGalleryImage] });
      setNewGalleryImage(null);
    }
  };

  const handleRemoveColor = (color) => {
    setForm({ ...form, colors: form.colors.filter((c) => c !== color) });
  };

  const handleRemoveSize = (size) => {
    setForm({ ...form, sizes: form.sizes.filter((s) => s !== size) });
  };

  const handleRemoveGalleryImage = (index) => {
    const updated = [...form.gallery];
    updated.splice(index, 1);
    setForm({ ...form, gallery: updated });
  };

  const handleSave = () => {
    alert("ددر حالت فرانت در کنسول اضافه میشه که باید بعدا وصل بشه api /api/products");
    console.log("فرم محصول:", form);
  
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">مدیریت محصولات</h1>

      {/* فرم اضافه کردن / ویرایش محصول */}
      <div className="mb-6 border p-4 rounded-md bg-gray-50 space-y-3">
        <h2 className="text-xl font-semibold mb-2">
          {editingProduct ? "ویرایش محصول" : "اضافه کردن محصول"}
        </h2>

        <input
          type="text"
          placeholder="نام"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded-md p-2 w-full"
        />

        <select
  value={form.category}
  onChange={(e) => setForm({ ...form, category: e.target.value })}
  className="border rounded-md p-2 w-full"
>
  <option value="">انتخاب دسته</option>
  {categories.map((cat) =>
    cat.subcategories.map((sub) => (
      <option key={`${cat.name}-${sub}`} value={sub}>
        {sub}
      </option>
    ))
  )}
</select>

        <textarea
          placeholder="توضیحات"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="border rounded-md p-2 w-full"
        />

        <input
          type="number"
          placeholder="قیمت"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: Number(e.target.value) })
          }
          className="border rounded-md p-2 w-full"
        />

        {/* تصویر اصلی */}
        <div>
          <label className="block mb-1 font-semibold">تصویر اصلی</label>
          <input
            type="file"
            onChange={(e) =>
              setForm({ ...form, mainImage: e.target.files[0] })
            }
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* گالری تصاویر */}
        <div>
          <label className="block mb-1 font-semibold">گالری تصاویر</label>
          <div className="flex gap-2 items-center mb-2">
            <input
              type="file"
              onChange={(e) => setNewGalleryImage(e.target.files[0])}
              className="border p-2 rounded-md w-full"
            />
            <button
              type="button"
              onClick={handleAddGalleryImage}
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              اضافه کردن عکس
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {form.gallery.map((img, index) => (
              <div key={index} className="relative">
                <span className="block p-1 border rounded-md">{img.name}</span>
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                  onClick={() => handleRemoveGalleryImage(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* رنگ ها */}
        <div className="flex gap-2 items-center mt-2">
          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
            onClick={handleAddColor}
          >
            اضافه رنگ
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {form.colors.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-1 border rounded-md p-1"
            >
              <span className="block w-5 h-5" style={{ backgroundColor: c }}></span>
              <button type="button" onClick={() => handleRemoveColor(c)}>
                ×
              </button>
            </div>
          ))}
        </div>

        {/* سایزها */}
        <div className="flex gap-2 items-center mt-2">
          <input
            type="text"
            placeholder="سایز"
            value={newSize}
            onChange={(e) => setNewSize(e.target.value)}
            className="border p-2 rounded-md"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
            onClick={handleAddSize}
          >
            اضافه سایز
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {form.sizes.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-1 border rounded-md p-1"
            >
              <span>{s}</span>
              <button type="button" onClick={() => handleRemoveSize(s)}>
                ×
              </button>
            </div>
          ))}
        </div>

        {/* رده سنی */}
        <input
          type="text"
          placeholder="رده سنی"
          value={form.ageRange}
          onChange={(e) => setForm({ ...form, ageRange: e.target.value })}
          className="border rounded-md p-2 w-full mt-2"
        />

        {/* دکمه ذخیره */}
        <button
          type="button"
          onClick={handleSave}
          className="bg-primary text-white py-2 px-4 rounded-md hover:opacity-90 mt-2"
        >
          ذخیره محصول
        </button>
      </div>

      {/* جدول محصولات */}
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : products.length === 0 ? (
        <p>محصولی وجود ندارد.</p>
      ) : (
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">نام</th>
              <th className="border px-4 py-2">دسته</th>
              <th className="border px-4 py-2">قیمت</th>
              <th className="border px-4 py-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="border px-4 py-2">{p.id}</td>
                <td className="border px-4 py-2">{p.name}</td>
                <td className="border px-4 py-2">{p.category}</td>
                <td className="border px-4 py-2">{p.price}</td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded-md"
                  >
                    ویرایش
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
