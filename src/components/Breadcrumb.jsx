// src/components/Breadcrumb.jsx
"use client";
import Link from "next/link";

export default function Breadcrumb({ category, productName }) {
  const items = [
    { label: "خانه", href: "/" },
    category && { label: category, href: `/shop/${category}` },
    productName && { label: productName, href: null },
  ].filter(Boolean);

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center text-gray-600 text-sm space-x-2 rtl:space-x-reverse">
          {items.map((item, index) => (
            <span key={index} className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-gray-800">
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && (
                <span className="mx-2 text-gray-400">›</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
