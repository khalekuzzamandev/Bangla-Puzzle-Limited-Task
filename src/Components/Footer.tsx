
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
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com",
    icon: FaWhatsapp,
  },
];

const footerPolicies = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">

          {/* Brand & Contact */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="text-[9px] font-black tracking-[3px] text-black"
            >
              THETINY.SITE
            </Link>

            <p className="mt-8 max-w-[350px] text-[15px] leading-6 text-[#626d7d]">
              The fastest way to shorten, track, and manage your URLs.
              Trusted by thousands of marketers, developers, and
              businesses across Bangladesh and beyond.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f2f4] text-[17px] text-[#4b5563] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5b21ff] hover:text-white"
                >
                  <Icon />
                </Link>
              ))}
            </div>

            {/* Contact Details */}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="mailto:banglapuzzle@gmail.com"
                className="flex items-center gap-2 text-[14px] text-[#626d7d] transition-colors hover:text-[#5b21ff]"
              >
                <MdEmail className="shrink-0 text-[19px] text-[#5b21ff]" />
                banglapuzzle@gmail.com
              </Link>

              <Link
                href="tel:+8801880811048"
                className="flex items-center gap-2 text-[14px] text-[#626d7d] transition-colors hover:text-[#5b21ff]"
              >
                <MdPhone className="shrink-0 text-[19px] text-[#5b21ff]" />
                +880 1880-811048
              </Link>
            </div>
          </div>

          {/* Product Navigation */}
          <div>
            <h3 className="mb-5 text-[13px] font-bold tracking-[1px] text-[#526071]">
              PRODUCT
            </h3>

            <ul className="flex flex-col gap-3">
              {productLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-[15px] text-[#626d7d] transition-colors duration-200 hover:text-[#5b21ff]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 className="mb-5 text-[13px] font-bold tracking-[1px] text-[#526071]">
              COMPANY
            </h3>

            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-[15px] text-[#626d7d] transition-colors duration-200 hover:text-[#5b21ff]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Policies */}
        <div className="flex flex-col justify-between gap-5 border-t border-gray-200 py-8 md:flex-row md:items-center">
          <p className="text-[14px] leading-6 text-[#626d7d]">
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-[#5b21ff] transition-colors hover:underline"
            >
              Bangla Puzzle Limited.
            </Link>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerPolicies.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-[14px] text-[#626d7d] transition-colors duration-200 hover:text-[#5b21ff]"
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
