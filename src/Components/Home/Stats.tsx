import React from "react";

const stats = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

const Stats = () => {
  return (
    <section className="w-full bg-[#5f20f5] px-6 pt-10 pb-12 font-['Inter',sans-serif]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-x-6 gap-y-8 text-center md:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="m-0 text-[36px] font-black leading-[48px] tracking-[-0.02em] text-white md:text-[40px]">
              {value}
            </p>
            <p className="m-0 text-[14px] font-normal leading-5 text-[#e3d9ff]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;