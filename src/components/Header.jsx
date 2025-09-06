"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainMenu = [
    { name: "خانه", href: "#" },
    { name: "محصولات", href: "#" },
    { name: "درباره ما", href: "#" },
    { name: "ارتباط با ما", href: "#" },
  ];

  return (
    <header className="w-full" dir="rtl">
      {/* TOP BAR (green full width) */}
      <div className="w-full bg-[#9eaa92] text-white">
        <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between py-2">
          {/* Desktop: main nav */}
          <nav className="hidden md:flex items-center gap-6">
            {mainMenu.map((item) => (
              <Link key={item.name} href={item.href} className="font-semibold hover:text-[#e1d0b4] px-4 py-2">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop login */}
          <div className="hidden md:flex items-center gap-3">
            <button className="font-semibold">ورود</button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* Mobile row */}
          <div className="flex justify-between items-center w-full md:hidden">
            <div className="flex items-center gap-2">
              <button className="p-1" aria-label="search">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M4.5 10.5a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </button>
              <button className="p-1" aria-label="cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9" />
                </svg>
              </button>
            </div>

            <Image src="/imgs/logo.svg" alt="logo" width={96} height={32} className="h-8 w-auto" />

            <button aria-label="menu" onClick={() => setMobileOpen((v) => !v)} className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#807b4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden bg-[#9eaa92]">
            <div className="max-w-[1300px] mx-auto px-4 py-3 flex flex-col gap-3">
              <MegaMenu isMobile />
              {mainMenu.map((item) => (
                <Link key={item.name} href={item.href} className="font-semibold">{item.name}</Link>
              ))}
              <div className="pt-2 border-t border-white/20">
                <button className="font-semibold">ورود</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM BAR (white in container) */}
      <div className="bg-white border-t">
        <div className="max-w-[1300px] mx-auto px-4 py-3">
          <div className="grid grid-cols-3 items-center">
            {/* right: search input (desktop) */}
            <div className="flex justify-end">
              <div className="hidden md:block relative">
                <input type="text" placeholder="جستجو در محصولات..." className="px-3 py-2 pr-10 rounded-md border w-72 text-black focus:outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M4.5 10.5a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              </div>
            </div>

            {/* center: logo */}
            <div className="justify-center hidden md:flex">
              <Image src="/imgs/logo.svg" alt="logo" width={120} height={40} className="h-12 w-auto" />
            </div>

            {/* left: cart (desktop) */}
            <div className="flex justify-end md:justify-end">
              <button className="hidden md:inline-flex items-center p-1" aria-label="cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9eaa92]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9" />
                </svg>
              </button>
            </div>
          </div>

          {/* MegaMenu desktop */}
          <div className="hidden md:block mt-4">
            <MegaMenu isMobile={false} />
          </div>
        </div>
      </div>
    </header>
  );
}
