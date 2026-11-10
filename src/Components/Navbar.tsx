"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Terms", href: "/terms-and-conditions" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white font-['Inter',sans-serif]">
      <div className="mx-auto flex h-[63px] w-full max-w-[1100px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-['Courier_New',monospace] text-[11px] font-bold uppercase leading-4 tracking-[3px] !text-[#111827] no-underline"
        >
          thetiny.site
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`text-[15px] font-medium leading-[22px] no-underline transition-colors duration-200 hover:!text-[#5f20f5] ${isActive(href) ? "!text-[#5f20f5]" : "!text-[#6b7280]"
                }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="flex h-[37px] items-center rounded-lg border border-[#e5e7eb] bg-white px-4 text-[14px] font-semibold !text-[#111827] no-underline transition-colors duration-200 hover:bg-[#f9fafb]"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="flex h-[37px] items-center rounded-lg bg-[#5f20f5] px-[18px] text-[14px] font-bold !text-white no-underline transition-colors duration-200 hover:bg-[#4f14dc]"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent text-[#111827] md:hidden"
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#e5e7eb] bg-white px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-medium no-underline ${isActive(href) ? "!text-[#5f20f5]" : "!text-[#6b7280]"
                  }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex h-[42px] items-center justify-center rounded-lg border border-[#e5e7eb] bg-white text-[14px] font-semibold !text-[#111827] no-underline"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="flex h-[42px] items-center justify-center rounded-lg bg-[#5f20f5] text-[14px] font-bold !text-white no-underline"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;