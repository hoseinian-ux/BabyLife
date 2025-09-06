"use client";
import { motion } from "framer-motion";

const gradients = [
  "from-yellow-100 to-yellow-200",
  "from-blue-100 to-blue-200",
  "from-green-100 to-green-200",
  "from-pink-100 to-pink-200",
];

export default function ProductCard({ product, index }) {
  const bgGradient = gradients[index % gradients.length];

  return (
    <div className="w-full h-[400px] perspective">
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d rounded-xl shadow-lg cursor-pointer"
        initial={{ rotateY: 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.7 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden flex flex-col justify-end items-center">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
          />
          <a
            href="/cart"
            className="mb-6 bg-[#9eaa92] text-white px-6 py-3 rounded-md shadow-lg z-10"
          >
            مشاهده جزییات
          </a>
        </div>

        {/* Back */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br ${bgGradient}`}
        >
          <h3 className="text-3xl font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
