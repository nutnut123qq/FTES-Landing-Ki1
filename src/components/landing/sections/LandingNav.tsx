"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "#intro", label: "Giới thiệu" },
  { href: "#packages", label: "Gói học" },
  { href: "#benefits", label: "Quyền lợi" },
  { href: "#mentor", label: "Mentor" },
  { href: "#faq", label: "FAQ" },
];

const FTES_FACEBOOK_URL = "https://www.facebook.com/ftes.edu";

export function LandingNav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 72;
      let current = "intro";
      for (const item of navItems) {
        const el = document.getElementById(item.href.slice(1));
        if (el && el.offsetTop <= scrollPos) {
          current = item.href.slice(1);
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setActive(href.slice(1));
  };

  const activeClass =
    "border-b-2 border-st-primary py-1 font-bold text-st-primary";
  const defaultClass =
    "py-1 text-st-on-surface-variant transition-colors hover:text-st-secondary";

  return (
    <header className="stitch-glass-header fixed top-0 z-50 w-full border-b border-st-outline-variant/10 shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 py-0 sm:px-8">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            href="#"
            className="flex h-9 shrink-0 items-center"
            aria-label="FTES Kì 1"
          >
            <Image
              src="/images/Ftes_logo.jpg"
              alt="FTES Kì 1"
              width={208}
              height={44}
              className="h-9 w-auto max-h-9 object-contain"
              style={{ width: "auto" }}
              priority
            />
          </Link>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Điều hướng"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={
                  active === item.href.slice(1) ? activeClass : defaultClass
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">

          <a
            href={FTES_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="stitch-action-gradient shrink-0 rounded-full px-5 py-2 text-sm font-bold text-white shadow-lg shadow-st-primary/20 transition-transform duration-200 hover:scale-105 sm:px-6 sm:text-base"
          >
            Đăng ký ngay
          </a>
        </div>
      </div>
    </header>
  );
}
