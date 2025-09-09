"use client";
import React, { useState } from "react";
import { categories } from "@/lib/categories";
import Link from "next/link";

export default function MegaMenu({ isMobile }) {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
        {categories.map((cat, idx) => (
          <div key={cat.name} className="flex flex-col">
            <button
              className="flex justify-between items-center font-semibold py-2 border-b"
              onClick={() => setOpenSubMenu(openSubMenu === idx ? null : idx)}
            >
              <span>{cat.icon} {cat.name}</span>
              {cat.subcategories?.length > 0 && (
                <span>{openSubMenu === idx ? "▲" : "▼"}</span>
              )}
            </button>

            {openSubMenu === idx && cat.subcategories?.length > 0 && (
              <div className="flex flex-col pl-4 mt-1 gap-1">
                {cat.subcategories.map((sub) => (
                <Link
        key={sub}
        href={`/shop/${sub.toLowerCase()}`} 
        className="py-1 text-sm hover:text-primary"
      >
        {sub}
      </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // دسکتاپ
  return (
    <div className="hidden md:flex justify-center gap-12 pt-12">
      {categories.map((cat) => (
        <div key={cat.name} className="relative group flex flex-col items-center">
          <span className="text-2xl transition-transform group-hover:-translate-y-1 duration-300">{cat.icon}</span>
          <span className="font-semibold mt-1">{cat.name}</span>

          {cat.subcategories?.length > 0 && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-white border border-primary/40 rounded-md shadow-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
              {cat.subcategories.map((sub) => (
                <a
                  key={sub}
                  href="#"
                  className="block px-4 py-2 hover:bg-accent hover:text-primary"
                >
                  {sub}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
