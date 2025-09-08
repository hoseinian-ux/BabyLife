"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/product"; // آرایه کامل محصولات
import Breadcrumb from "@/components/Breadcrumb";

export default function ProductDetailPage() {
  const { id } = useParams();
  const prodId = parseInt(id, 10);
  const productDetail = products.find((p) => p.id === prodId);

  const [selectedImage, setSelectedImage] = useState(
    productDetail?.images[0] || ""
  );
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!productDetail)
    return <p className="text-center mt-10">محصول یافت نشد.</p>;

  return (
   <div>
    <Breadcrumb category={productDetail.category} productName={productDetail.name} />
     <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
     {/* گالری تصاویر */}
<div>
  <img
    src={selectedImage}
    alt={productDetail.name}
    className="w-full h-96 object-cover rounded-lg shadow-md"
  />
  <div className="flex gap-3 mt-4">
    {productDetail.images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`preview-${i}`}
        className={`w-20 h-20 object-cover cursor-pointer rounded-md border ${
          selectedImage === img ? "border-[#9eaa92]" : "border-gray-300"
        }`}
        onClick={() => setSelectedImage(img)}
      />
    ))}
  </div>
</div>


      {/* اطلاعات محصول */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">{productDetail.name}</h1>
          <p className="text-gray-600 mt-2">{productDetail.description}</p>
          <p className="text-2xl font-bold text-[#9eaa92] mt-4">
            {productDetail.price.toLocaleString()} تومان
          </p>

          {/* رنگ‌ها */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">انتخاب رنگ:</h3>
            <div className="flex gap-3">
              {productDetail.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === c ? "ring-2 ring-[#9eaa92]" : ""
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* سایز‌ها */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">انتخاب سایز:</h3>
            <div className="flex gap-3">
              {productDetail.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === s
                      ? "bg-[#9eaa92] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-[#9eaa92] text-white rounded-md hover:opacity-90 transition">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
   </div>
  );
}
