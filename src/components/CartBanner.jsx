"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { cartBannerData } from "../lib/cartBanner";

// شمارشگر فقط سمت کلاینت
const CountdownTimer = dynamic(() => import("./CountdownTimer"), { ssr: false });

export default function CartBanner() {
  const {
    image,
    discount,
    discountText,
    title,
    productName,
    description,
    countdownDate,
    cartLink,
  } = cartBannerData;

  // ریفرنس سکشن برای گرفتن اسکرول داخلی
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // وقتی سکشن وارد و خارج ویو میشه
  });

  // حرکت عمودی تصویر برای پارالاکس (بیشترش کردم)
  const y = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg"
    >
      {/* بک‌گراند با افکت پارالاکس */}
      <motion.img
        src={image}
        alt={productName}
        style={{ y }}
        className="absolute inset-0 w-full h-full object-cover scale-110" // بزرگتر از کادر
      />

      {/* لایه محتوای وسط */}
      <div className="relative z-10 rounded-xl p-6 md:p-10 max-w-xl text-center flex flex-col items-center ">
        <span className="text-secondary text-lg md:text-2xl font-bold mb-2 transition-all duration-300">
          {discount} {discountText}
        </span>
        <h3 className="text-2xl md:text-4xl font-bold mb-2 transition-all duration-300">
          {title}
        </h3>
        <h4 className="text-xl md:text-3xl font-semibold mb-4 transition-all duration-300">
          {productName}
        </h4>
        <p className="text-sm md:text-base text-gray-700 mb-4 transition-all duration-300">
          {description}
        </p>

        <CountdownTimer targetDate={countdownDate} />

        <a
          href={cartLink}
          className="mt-4 text-secondary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          افزودن به سبد خرید
        </a>
      </div>
    </section>
  );
}
