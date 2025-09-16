"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  const mainMenu = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/shop" },
    { name: "درباره ما", href: "/about" },
    { name: "ارتباط با ما", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const offset = menuRef.current.getBoundingClientRect().top;
        setIsSticky(window.scrollY > menuRef.current.offsetTop);
      }
    };

    // ذخیره ارتفاع منو برای placeholder
    if (menuRef.current) {
      setMenuHeight(menuRef.current.offsetHeight);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full" dir="rtl">
      {/* ---------------- TOP BAR ---------------- */}
      <div className="w-full bg-primary text-white">
        <div className="max-w-[1300px] mx-auto px-4 flex items-center justify-between py-2">
          {/* Desktop logo */}
          <div className="justify-center hidden md:flex">
            <Image
              src="/imgs/logo.jfif"
              alt="logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop main nav */}
          <nav className="hidden md:flex items-center gap-6">
            {mainMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-semibold hover:text-secondary px-4 py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

{/* Desktop login و search */}
<div className="hidden md:flex items-center gap-3">
  {/* Search */}
  <button aria-label="search" className="p-1 text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
         viewBox="0 0 24 24" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-4.35-4.35M4.5 10.5a6 6 0 1112 0 6 6 0 01-12 0z" />
    </svg>
  </button>

  {/* Login */}
  <Link href="/login" className="flex items-center gap-1 font-semibold text-white">
    ورود
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
         viewBox="0 0 24 24" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </Link>
</div>



          {/* Mobile row */}
          <div className="flex justify-between items-center w-full md:hidden">
            <div className="flex items-center gap-2">
              <button className="p-1" aria-label="search">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M4.5 10.5a6 6 0 1112 0 6 6 0 01-12 0z"
                  />
                </svg>
              </button>
              <button className="p-1" aria-label="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9"
                  />
                </svg>
              </button>
            </div>

            <Image
              src="/imgs/logo.jfif"
              alt="logo"
              width={120}
              height={50}
              className="h-10 w-auto"
            />

            <button
              aria-label="menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-1"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden bg-primary">
            <div className="max-w-[1300px] mx-auto px-4 py-3 flex flex-col gap-3">
              <MegaMenu isMobile />
              {mainMenu.map((item) => (
                <Link key={item.name} href={item.href} className="font-semibold">
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/20">
                <Link href="/login">
                  <span className="font-semibold">ورود</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------------- BOTTOM BAR ---------------- */}
      <div className="bg-white border-t">
        <div className="max-w-[1300px] mx-auto px-4 py-3">
          <div className="flex justify-center pt-5">
            <h1 className="text-4xl font-extrabold tracking-wide flex gap-1">
              {"EFILYBAB".split("").map((letter, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-[#a09748] via-[#545454] via-[#b6aa53] via-[#813e08] to-[#deceaa] bg-clip-text text-transparent animate-shine"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* ---------------- STICKY MegaMenu ---------------- */}
      {/** placeholder برای جلوگیری از jump */}
      {isSticky && <div style={{ height: menuHeight }} />}

      <div
        ref={menuRef}
        className={`hidden md:block w-full bg-white ${
          isSticky ? "fixed top-0 left-0 z-50" : "relative"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4">
          <MegaMenu isMobile={false} />
        </div>
      </div>
    </header>
  );
}
