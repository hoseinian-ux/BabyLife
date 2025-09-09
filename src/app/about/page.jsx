import { Truck, DollarSign, Briefcase, RefreshCcw } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedItem from "@/components/AnimatedItem";
import BreadcrumbSimple from "@/components/BreadcrumbSimple";

export const metadata = {
  title: "درباره ما | فروشگاه لباس کودک",
  description: "معرفی فروشگاه، خدمات و مزایای خرید از ما",
};

const features = [
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "ارسال سریع",
    desc: "تحویل سریع درب منزل شما در کمترین زمان ممکن.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "بهترین قیمت",
    desc: "محصولات با کیفیت با بهترین و مناسب‌ترین قیمت.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "بسته‌بندی اختصاصی",
    desc: "بسته‌بندی زیبا و اختصاصی برای هر سفارش.",
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-primary" />,
    title: "بازگشت آسان",
    desc: "امکان بازگشت و تعویض سریع محصولات.",
  },
];

const aboutPoints = [
  {
    title: "کیفیت تضمین‌شده",
    desc: "ما بهترین پارچه‌ها و متریال را برای تولید لباس‌های کودک انتخاب می‌کنیم.",
  },
  {
    title: "تنوع محصول",
    desc: "کلکسیون گسترده‌ای برای تمامی فصل‌ها و مناسبت‌ها داریم.",
  },
  {
    title: "حمایت از تولید داخلی",
    desc: "تمامی محصولات با افتخار در داخل کشور تولید و پشتیبانی می‌شوند.",
  },
  {
    title: "تجربه خرید لذت‌بخش",
    desc: "رابط کاربری ساده و تیم پشتیبانی همیشه آماده کمک به شماست.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-grayLight py-4 justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbSimple items={[
              { label: "خانه", href: "/" },
              { label: "درباره ما", href: "/about" },
            ]} />
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            چرا <span className="text-secondary">BabyLife</span>؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, i) => (
              <AnimatedItem key={i} delay={i * 0.2}>
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-grayDark text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Banner */}
      <section className="relative bg-primary text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            حراج زمستانی شروع شد! <br />
            با تخفیف‌های <span className="text-yellowBrand">ویژه...</span>
          </h3>
          <div className="text-5xl font-extrabold mb-6">
            <span className="block">تخفیف تا</span>
            <span className="text-secondary">50%</span>
          </div>
          <Link
            href="/shop"
            className="bg-secondary text-white px-6 py-3 rounded-xl shadow-md hover:bg-yellowBrand hover:text-black transition"
          >
            خرید کنید
          </Link>
        </div>
      </section>

      {/* Brand About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            درباره برند BabyLife
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutPoints.map((point, i) => (
              <AnimatedItem key={i} delay={i * 0.2}>
                <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-grayLight">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-grayDark">{point.desc}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
