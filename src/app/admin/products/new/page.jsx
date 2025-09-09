"use client";
import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  const handleSubmit = async (data) => {
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) alert("✅ محصول اضافه شد");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">افزودن محصول جدید</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}
