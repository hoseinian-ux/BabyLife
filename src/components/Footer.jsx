"use client";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "../lib/footerData";
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const iconMap = {
  FaTwitter: FaTwitter,
  FaFacebookF: FaFacebookF,
  FaYoutube: FaYoutube,
  FaLinkedinIn: FaLinkedinIn,
};

export default function Footer() {
  const { logo, shopInfo, account, contact, socialLinks } = footerData;

  return (
    <footer className="relative w-full mt-14">
      {/* تصویر بک‌گراند */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/footer.jpg"
          alt="Footer Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto py-12 text-white lg:pr-10">
        {/* لوگو، ایمیل، شبکه اجتماعی */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between border-b border-yellow-400/50 pb-6 mb-6 gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl text-primary font-bold mb-1">{logo.title}</h1>
            <p className="text-gray-300 mb-0">{logo.subtitle}</p>
          </div>

          <div className="relative w-full lg:w-1/2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-3 px-4 rounded-full text-black"
            />
            <button className="absolute top-0 right-0 py-3 px-6 bg-primary text-white rounded-full">
              Subscribe Now
            </button>
          </div>

          <div className="flex gap-2 justify-center lg:justify-end">
            {socialLinks.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <IconComponent className="text-white w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* ستون‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop Info */}
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold mb-3">اطلاعات فروشگاه</h4>
            {shopInfo.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-gray-300 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Account */}
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold mb-3">حساب کاربری</h4>
            {account.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-gray-300 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-semibold mb-3">تماس با ما</h4>
            <p className="text-gray-300 mb-1">آدرس: {contact.address}</p>
            <p className="text-gray-300 mb-1">ایمیل: {contact.email}</p>
            <p className="text-gray-300 mb-1">تلفن: {contact.phone}</p>
          </div>

          {/* Why People Like Us */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold mb-3">چرا ما را انتخاب می‌کنند؟</h4>
            <p className="text-gray-300 mb-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            </p>
            <a href="#" className="inline-block px-4 py-2 border border-yellow-400 rounded-full text-yellow-400">
             بیشتر بدانید
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
