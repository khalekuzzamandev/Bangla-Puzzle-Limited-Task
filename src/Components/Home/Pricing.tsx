import Link from "next/link";

const plans = [
  {
    name: "Free",
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
    action: "Get Started Free",
    href: "#signup",
    featured: false,
  },
  {
    name: "Pro",
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
    action: "Start 14-Day Trial",
    href: "#signup",
    featured: true,
  },
  {
    name: "Business",
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
    action: "Subscribe Now",
    href: "#signup",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section
      className="bg-white px-5 py-16 sm:py-20"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#6024ff]">
            Pricing
          </p>
          <h2
            className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl"
            id="pricing-title"
          >
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              className={`flex h-full flex-col rounded-2xl border p-7 sm:p-8 ${
                plan.featured
                  ? "border-[#5b20f5] bg-[#5b20f5] text-white shadow-[0_16px_40px_rgba(91,32,245,0.2)]"
                  : "border-slate-200 bg-white text-[#111318]"
              }`}
              key={plan.name}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.1em] ${
                  plan.featured ? "text-white/75" : "text-slate-500"
                }`}
              >
                {plan.name}
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight sm:text-[42px]">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-white/75" : "text-slate-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-3 text-sm leading-6 ${
                  plan.featured ? "text-white/85" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-3 text-sm" key={feature}>
                    <span
                      aria-hidden="true"
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full text-xs ${
                        plan.featured
                          ? "bg-white/20 text-white"
                          : "bg-[#eee8ff] text-[#6024ff]"
                      }`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.featured
                    ? "bg-white text-[#5b20f5] hover:bg-violet-50 focus-visible:outline-white"
                    : "bg-[#5b20f5] text-white hover:bg-[#4815d3] focus-visible:outline-[#5b20f5]"
                }`}
                href={plan.href}
              >
                {plan.action}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
