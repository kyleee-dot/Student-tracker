
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <section className="max-w-3xl">
        <p className="text-sm text-[#5f5d59]">
          ADV101 IT Elective 1
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#1d1d1b] sm:text-5xl">
          BSIT-1A Student Directory
        </h1>

        <p className="mt-4 max-w-lg leading-7 text-[#5f5d59]">
          Browse the students in our class and view their profiles.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link
            href="/students"
            className="text-sm font-semibold text-[#1d1d1b] underline underline-offset-4 hover:text-[#5f5d59] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2f2d]"
          >
            Browse students
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#5f5d59] transition hover:text-[#1d1d1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2f2d]"
          >
            About
          </Link>
        </div>
      </section>
    </main>
  );
}