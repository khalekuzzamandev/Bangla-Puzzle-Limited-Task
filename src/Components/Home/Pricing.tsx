import React from "react";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "FREE",
    price: "$0",
    period: "/forever",
    description: "Great for individuals and casual use.",
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
    cta: "Get Started Free",
    href: "/signup",
  },
  {
    name: "PRO",
    price: "$9",
    period: "/per month",
    description: "For creators, marketers, and power users.",
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
    cta: "Start 14-Day Trial",
    href: "/signup?plan=pro",
    featured: true,
  },
  {
    name: "BUSINESS",
    price: "$29",
    period: "/per month",
    description: "For teams and growing companies.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
    cta: "Subscribe Now",
    href: "/signup?plan=business",
  },
];

const Pricing = () => {
  return (
    <section className="w-full bg-white font-['Inter',sans-serif] px-6 py-20">
      <div className="mx-auto w-full max-w-[1152px]">
        {/* Heading */}
        <div className="text-center">
          <p className="m-0 text-[12px] font-medium uppercase leading-4 tracking-[0.1em] text-[#6b7280]">
            Pricing
          </p>
          <h2 className="mt-3 mb-0 text-[40px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#111111] sm:text-[44px]">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 mb-0 text-[16px] font-normal leading-6 text-[#6b7280]">
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[52px] grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const featured = plan.featured;

            return (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl border p-8 ${featured
                    ? "border-[#5f20f5] bg-[#5f20f5] shadow-[0_12px_48px_rgba(95,32,245,0.28)]"
                    : "border-[#e5e7eb] bg-white"
                  }`}
              >
                {/* Plan name */}
                <p
                  className={`m-0 text-[12px] font-bold uppercase leading-4 tracking-[0.08em] ${featured ? "text-[#d6c8ff]" : "text-[#6b7280]"
                    }`}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mt-2.5 flex items-baseline gap-2">
                  <span
                    className={`text-[48px] font-black leading-[48px] tracking-[-0.03em] ${featured ? "text-white" : "text-[#111111]"
                      }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-[14px] font-normal ${featured ? "text-[#d6c8ff]" : "text-[#6b7280]"
                      }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`mt-[11px] mb-0 text-[15px] font-normal leading-[22px] ${featured ? "text-[#e6dcff]" : "text-[#6b7280]"
                    }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="m-0 mt-6 flex-1 list-none p-0">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="mb-3 flex items-center gap-3 last:mb-0"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured
                            ? "bg-[#ddd2ff] text-[#5f20f5]"
                            : "bg-[#ede9fe] text-[#5f20f5]"
                          }`}
                      >
                        <FiCheck className="h-[11px] w-[11px]" strokeWidth={3} />
                      </span>
                      <span
                        className={`text-[15px] font-medium leading-[21px] ${featured ? "text-white" : "text-[#1f2937]"
                          }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`mt-8 flex h-[46px] w-full items-center justify-center gap-2 rounded-[10px] text-[15px] font-bold no-underline transition-all duration-200 ${featured
                      ? "bg-white !text-[#5f20f5] hover:bg-[#f3efff]"
                      : "bg-[#5f20f5] !text-white hover:bg-[#4f14dc]"
                    }`}
                >
                  {plan.cta}
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;