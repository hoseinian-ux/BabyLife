"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Baby, Shirt, Gift } from "lucide-react";
import Image from "next/image";

const icons = [
  { id: 1, label: "خرید", icon: ShoppingCart },
  { id: 2, label: "نوزاد", icon: Baby },
  { id: 3, label: "لباس", icon: Shirt },
  { id: 4, label: "هدیه", icon: Gift },
];

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 200); // وقتی بیشتر از 200px اسکرول شد
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* 🔹 اسلایدر (الان ساده با یک عکس نمایشی) */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/imgs/slider/slide1.jpg"
          alt="slider"
          fill
          className="object-cover"
        />
      </div>

      {/* 🔹 آیکن‌ها روی اسلایدر */}
      {!scrolled && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {icons.map(({ id, label, icon: Icon }) => (
            <motion.div
              key={id}
              className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-white/90 shadow-xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="w-8 h-8 text-gray-800 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* 🔹 آیکن‌ها جمع‌شده زیر اسلایدر */}
      {scrolled && (
        <motion.div
          className="sticky top-0 z-50 bg-white shadow-md flex justify-center gap-6 py-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {icons.map(({ id, icon: Icon }) => (
            <Icon key={id} className="w-6 h-6 text-gray-700" />
          ))}
        </motion.div>
      )}
    </div>
  );
}
