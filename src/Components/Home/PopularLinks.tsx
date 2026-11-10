"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck, FiMousePointer } from "react-icons/fi";
import { MdQrCode2 } from "react-icons/md";

export type PopularLink = {
  id: string;
  shortUrl: string;
  originalUrl: string;
  clicks: number;
};

const defaultLinks: PopularLink[] = [
  {
    id: "1",
    shortUrl: "https://thetiny.site/ARLSeN",
    originalUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+customer",
    clicks: 419,
  },
  {
    id: "2",
    shortUrl: "https://thetiny.site/BArxCj",
    originalUrl: "https://leena45945.softr.app",
    clicks: 269,
  },
  {
    id: "3",
    shortUrl: "https://thetiny.site/kLrnXd",
    originalUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code-generator",
    clicks: 85,
  },
  {
    id: "4",
    shortUrl: "https://thetiny.site/qQNTp0",
    originalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBliGp4uunkBsQVLy_zLWcwkWhRq2/viewform",
    clicks: 64,
  },
  {
    id: "5",
    shortUrl: "https://thetiny.site/k4dIp8",
    originalUrl: "https://solverfirm.com/",
    clicks: 33,
  },
];

type Props = {
  links?: PopularLink[];
  onQrClick?: (link: PopularLink) => void;
};

const PopularLinks = ({ links = defaultLinks, onQrClick }: Props) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (link: PopularLink) => {
    try {
      await navigator.clipboard.writeText(link.shortUrl);
      setCopiedId(link.id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="w-full bg-white px-5 py-14 font-['Inter',sans-serif]">
      <div className="mx-auto w-full max-w-[1152px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="m-0 text-[32px] font-extrabold leading-10 tracking-[-0.02em] text-[#111111]">
            Most Popular Links
          </h2>
          <p className="mt-3 mb-0 text-[16px] font-normal leading-6 text-[#6b7280]">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* List */}
        <div className="mt-10 flex flex-col gap-4">
          {links.map((link) => {
            const copied = copiedId === link.id;

            return (
              <div
                key={link.id}
                className="flex min-h-[78px] flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-[#f9fafb] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                {/* Links */}
                <div className="min-w-0">
                  <a
                    href={link.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-mono text-[13px] font-medium leading-5 !text-[#5f20f5] no-underline hover:underline"
                  >
                    {link.shortUrl}
                  </a>
                  <p
                    className="m-0 mt-1 max-w-full truncate text-[12px] font-normal leading-4 text-[#9ca3af] sm:max-w-[480px]"
                    title={link.originalUrl}
                  >
                    {link.originalUrl}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-3">
                  <div className="flex h-7 items-center gap-1.5 rounded-lg bg-white px-3 text-[14px] font-bold text-[#374151]">
                    <FiMousePointer className="h-3.5 w-3.5 text-[#4b5563]" />
                    <span>{link.clicks} clicks</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(link)}
                    className="flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border-0 bg-[#5f20f5] px-3 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-[#4f14dc]"
                  >
                    {copied ? (
                      <FiCheck className="h-4 w-4" />
                    ) : (
                      <FiCopy className="h-4 w-4" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </button>

                  <button
                    type="button"
                    onClick={() => onQrClick?.(link)}
                    className="flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border-0 bg-[#e5e7eb] px-3 text-[14px] font-bold text-[#5f20f5] transition-colors duration-200 hover:bg-[#d9dce1]"
                  >
                    <MdQrCode2 className="h-4 w-4" />
                    QR
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularLinks;