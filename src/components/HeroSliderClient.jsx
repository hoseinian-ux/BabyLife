"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { heroSlides } from "../lib/heroSlides";
import { motion } from "framer-motion";

export default function HeroSliderClient() {
  const [ref, slider] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: { perView: 1 },
  });

  const [scrolled, setScrolled] = useState(false);
  const [positions, setPositions] = useState([]);

  // autoplay
  useEffect(() => {
    if (!slider) return;
    const t = setInterval(() => slider.current?.next(), 4000);
    return () => clearInterval(t);
  }, [slider]);

  // scroll handler
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // تولید موقعیت تصادفی برای دکور هر اسلاید
  useEffect(() => {
    const allPositions = heroSlides.map((slide) =>
      slide.deco.map(() => ({
        top: Math.random() * 400,
        left: Math.random() * 1000,
        size: Math.random() > 0.5 ? 400 : 300,
      }))
    );
    setPositions(allPositions);
  }, []);

  return (
    <div className="relative w-full">
      <div ref={ref} className="keen-slider relative">
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            className="keen-slider__slide relative h-[420px] md:h-[520px] !overflow-visible"
          >
            {/* پس‌زمینه */}
            <img
              src={slide.bg}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* متن */}
            <div className="relative z-10 h-full max-w-[1300px] mx-auto px-4 flex items-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm md:text-base text-gray-700 mb-4">{slide.subtitle}</p>
                <a
                  href={slide.ctaHref}
                  className="inline-block bg-primary text-white px-5 py-2 rounded-md hover:opacity-90 transition"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>

            {/* دکورهای همان اسلاید */}
            {!scrolled && positions[slideIndex] && (
  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
    {slide.deco.map((d, i) => (
      <motion.img
        key={i}
        src={d.src}
        alt=""
        style={{
          position: "absolute",
          top: positions[slideIndex][i].top,
          left: positions[slideIndex][i].left,
          width: positions[slideIndex][i].size * 0.6, // بزرگ‌تر برای دسکتاپ
          height: "auto",
        }}
        className={d.anim}
        animate={{
          x: [0, 30, -30, 0], // حرکت افقی
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}
  </div>
)}

          </div>
        ))}
      </div>
    </div>
  );
}
