import Features from "@/Components/Home/Features";

const Testimonials = () => {
  return (
    <>
      <section
        className="bg-[#f7f8fc] px-5 py-16 sm:py-20"
        id="testimonials"
        aria-labelledby="testimonials-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center sm:mb-14">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
              Testimonials
            </p>
            <h2
              className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl"
              id="testimonials-title"
            >
              Loved by 80,000+ users worldwide.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div
                className="flex gap-0.5 text-lg leading-none text-[#6024ff]"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-6 text-[#111318]">
                &quot;A good platform for Link management.&quot;
              </blockquote>
              <div className="mt-5">
                <p className="text-sm font-bold text-[#111318]">Nadim Majid</p>
                <p className="mt-0.5 text-xs text-slate-500">User</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default Testimonials;
