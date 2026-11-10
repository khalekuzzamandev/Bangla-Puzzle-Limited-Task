"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const productLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "API Docs", href: "/api-docs" },
  { name: "Browser Extension", href: "/extension" },
  { name: "Report Malicious URL", href: "/report-malicious-url" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { name: "WhatsApp", href: "https://whatsapp.com", icon: FaWhatsapp },
];

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const navLink =
  "inline-block text-[15px] font-normal leading-[22px] text-[#626d7d] no-underline transition-colors duration-200 hover:text-[#5b1fe0]";

const colHeading =
  "mb-[14px] text-[12px] font-semibold leading-4 tracking-[0.08em] text-[#526071] uppercase";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-['Inter',sans-serif] text-[#626d7d] px-6 pt-10 pb-0 max-[768px]:pt-[35px] max-[480px]:px-5 max-[480px]:pt-8">
      <div className="w-full max-w-[1104px] mx-auto">
        {/* Main Footer */}
        <div className="grid grid-cols-[572px_286px_1fr] pb-10 max-[1150px]:grid-cols-[2fr_1fr_1fr] max-[1150px]:gap-[30px] max-[768px]:grid-cols-2 max-[768px]:gap-x-6 max-[768px]:gap-y-10 max-[480px]:grid-cols-1 max-[480px]:gap-8">
          {/* Brand */}
          <div className="max-[768px]:col-span-full max-[480px]:col-auto">
            <Link
              href="/"
              className="inline-block mt-0.5 ml-[14px] font-['Courier_New',monospace] text-[8px] font-bold leading-[12px] tracking-[2px] text-[#111827] uppercase no-underline"
            >
              thetiny.site
            </Link>

            <p className="max-w-[322px] mt-9 mb-0 text-[15px] font-normal leading-[24.5px] text-[#626d7d] max-[768px]:max-w-[380px] max-[480px]:mt-7 max-[480px]:text-[14px]">
              The fastest way to shorten, track, and manage
              your URLs. Trusted by thousands of marketers,
              developers, and businesses across Bangladesh
              and beyond.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-[25px] max-[480px]:gap-[13px]">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-[#f1f2f4] text-[#4b5563] no-underline transition-[background,color] duration-[250ms] ease-in-out hover:bg-[#5b1fe0] hover:text-white"
                >
                  <Icon className="w-[17px] h-[17px]" />
                </Link>
              ))}
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-[9px] mt-[21px]">
              <Link
                href="mailto:banglapuzzle@gmail.com"
                className="flex items-center gap-2 text-[14px] font-normal leading-5 text-[#626d7d] no-underline transition-colors duration-200 hover:text-[#5b1fe0]"
              >
                <MdEmail className="w-4 h-4 shrink-0 text-[#5b1fe0]" />
                <span>banglapuzzle@gmail.com</span>
              </Link>

              <Link
                href="tel:+8801880811048"
                className="flex items-center gap-2 text-[14px] font-normal leading-5 text-[#626d7d] no-underline transition-colors duration-200 hover:text-[#5b1fe0]"
              >
                <MdPhone className="w-4 h-4 shrink-0 text-[#5b1fe0]" />
                <span>+880 1880-811048</span>
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className={colHeading}>PRODUCT</h4>
            <ul className="list-none m-0 p-0">
              {productLinks.map(({ name, href }) => (
                <li key={name} className="mb-[11.5px]">
                  <Link href={href} className={navLink}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={colHeading}>COMPANY</h4>
            <ul className="list-none m-0 p-0">
              {companyLinks.map(({ name, href }) => (
                <li key={name} className="mb-[11.5px]">
                  <Link href={href} className={navLink}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="min-h-[81px] flex flex-wrap items-center justify-between gap-4 border-t border-[#e1e5eb] py-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:py-[25px]">
          <p className="m-0 text-[14px] font-normal leading-5 text-[#626d7d] max-[480px]:text-[13px]">
            © 2026{" "}
            <Link href="/" className="!text-[#5b1fe0] no-underline hover:underline">
              Bangla Puzzle Limited.
            </Link>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 max-[768px]:gap-x-[22px] max-[768px]:gap-y-4 max-[480px]:gap-x-[18px] max-[480px]:gap-y-[14px]">
            {footerLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-[14px] font-normal leading-5 text-[#626d7d] no-underline transition-colors duration-200 hover:text-[#5b1fe0] max-[480px]:text-[13px]"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;