"use client";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer group">
      {/* تصویر */}
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* لایه بلور روی هاور */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center px-4 text-center">
        <p className="text-white text-sm">{product.description}</p>
      </div>

      {/* عنوان ثابت روی عکس */}
<div className="absolute bottom-4 left-0 w-full">
  <div className="backdrop-blur-sm bg-white/40 border-y border-white/50 py-2">
    <h3 className="text-center text-lg font-bold text-secondary drop-shadow-md">
      {product.name}
    </h3>
  </div>
</div>

    </div>
  );
}
