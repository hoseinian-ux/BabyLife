"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // اضافه کردن استایل Autoplay اگر نیاز بود
import { Navigation, Autoplay } from "swiper/modules";
import { specialOffers } from "../lib/specialOffers";

export default function SpecialOffersCarousel() {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-14 mb-14">
          پیشنهادات ویژه
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]} // اضافه کردن Autoplay
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000, // هر ۳ ثانیه اسلاید بعدی
            disableOnInteraction: false, // اگر کاربر اسلاید را حرکت دهد، autoplay ادامه یابد
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {specialOffers.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
                <div className="absolute top-0 left-0 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-br-xl z-10">
                  {product.discount}
                </div>
                <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-contain"
  />
</div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
