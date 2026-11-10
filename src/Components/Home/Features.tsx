const features = [
  {
    title: "Lightning Fast",
    description: "Shorten URLs instantly with our optimized infrastructure",
    icon: (
      <path d="M13 2 3 14h8l-1 8 11-13h-8l1-7Z" />
    ),
  },
  {
    title: "Detailed Analytics",
    description: "Track clicks, referrers, locations, and devices",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </>
    ),
  },
  {
    title: "Global CDN",
    description: "Fast redirects from anywhere in the world",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </>
    ),
  },
  {
    title: "QR Codes",
    description: "Generate QR codes for any shortened link",
    icon: (
      <>
        <path d="M3 3h7v7H3z" />
        <path d="M14 3h2v2h-2zM19 3h2v7h-7V8" />
        <path d="M3 14h7v7H3zM14 14h3v3h-3zM20 14h1v2h-1zM18 19h3v2h-3zM14 19h2v2h-2z" />
      </>
    ),
  },
  {
    title: "Secure",
    description: "All links are encrypted and malware scanned",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: "Expiration Control",
    description: "Set expiry dates or click limits",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
];

const Features = () => {
  return (
    <section
      className="bg-[#f8f9fb] px-5 py-16 sm:py-20"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-14">
          <h2
            className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl"
            id="features-title"
          >
            Why Choose Our Platform?
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Everything you need to manage and track your links
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
              key={feature.title}
            >
              <svg
                aria-hidden="true"
                className="size-8 text-[#6024ff]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {feature.icon}
              </svg>
              <h3 className="mt-4 text-base font-bold text-[#111318]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-slate-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
