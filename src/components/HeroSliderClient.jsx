"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { heroSlides } from "../lib/heroSlides";

export default function HeroSliderClient() {
  const [ref, slider] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: { perView: 1 },
  });

  // autoplay
  useEffect(() => {
    if (!slider) return;
    const t = setInterval(() => slider.current?.next(), 4000);
    return () => clearInterval(t);
  }, [slider]);

  return (
    <div ref={ref} className="keen-slider relative overflow-visible">
      {heroSlides.map((slide) => (
        <div
          key={slide.id}
          className="keen-slider__slide relative h-[420px] md:h-[520px] overflow-visible"
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
                className="inline-block bg-[#9eaa92] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
              >
                {slide.ctaText}
              </a>
            </div>
          </div>

          {/* دکور: بالن و ستاره */}
          {slide.deco?.map((d, i) => (
            <img
              key={i}
              src={d.src}
              alt=""
              width={100}
              className={`${d.className} ${d.anim} z-50 pointer-events-none select-none`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
