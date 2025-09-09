"use client";

import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import Breadcrumb from "@/components/BreadcrumbSimple";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("پیام شما با موفقیت ارسال شد ✅");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div dir="rtl">
      <section className="bg-grayLight py-4 justify-center">
              <div className="max-w-6xl mx-auto px-4">
               <Breadcrumb items={[
                    { label: "خانه", href: "/" },
                    { label: "ارتباط با ما", href: "/contact" },
                  ]}/>
              </div>
            </section>

      {/* contact form */}
      <section className="py-20 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">سوالی دارید؟</h2>
          <p className="text-gray-600 mb-8">
            اگر پرسشی دارید یا نیاز به پشتیبانی دارید، فرم زیر را پر کنید تا با شما تماس بگیریم.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="نام"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md p-3 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="ایمیل"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md p-3 w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="تلفن"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md p-3 w-full"
              />
              <input
                type="text"
                name="subject"
                placeholder="موضوع"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-md p-3 w-full"
              />
            </div>

            <textarea
              name="message"
              placeholder="پیام"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="border rounded-md p-3 w-full"
              required
            />

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              ارسال پیام
            </button>
          </form>
        </div>

        {/* contact info */}
        <div className="space-y-6">
          <div className="p-5 bg-gray-50 rounded-lg shadow">
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <MapPin className="text-primary" /> آدرس فروشگاه
            </h4>
            <p className="text-gray-600">
              تهران، خیابان  پلاک ۱۲۳ <br /> ایران
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-lg shadow">
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <Clock className="text-primary" /> ساعات کاری
            </h4>
            <p className="text-gray-600">
              شنبه تا پنجشنبه: ۸ تا ۹ شب <br /> جمعه: ۱۰ تا ۸ شب
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-lg shadow">
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <Phone className="text-primary" /> تماس
            </h4>
            <p className="text-gray-600">
              تلفن:091233333333 <br /> ایمیل: support@yourshop.com
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
