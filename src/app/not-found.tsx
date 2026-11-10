import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#f7f8fc] px-5 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        <div
          aria-hidden="true"
          className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-[#eee8ff] text-3xl font-extrabold text-[#6024ff]"
        >
          404
        </div>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#6024ff]">
          Page not found
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111318] sm:text-5xl">
          Looks like this link is broken.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to shortening links.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#5b20f5] px-6 text-sm font-bold text-white transition-colors hover:bg-[#4815d3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b20f5]"
            href="/"
          >
            Back to Home
          </Link>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-bold text-[#111318] transition-colors hover:border-[#6024ff] hover:text-[#6024ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b20f5]"
            href="/#features"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </main>
  );
}
