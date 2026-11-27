
import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <section className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1b]">
          About this site
        </h1>
        <p className="mt-4 leading-7 text-[#5f5d59]">
          This is a directory for BSIT-1A. Browse the student list to view each
          person&apos;s profile, year and section, and course.
        </p>
        <Link
          href="/students"
          className="mt-6 inline-block text-sm text-[#3e3d3a] underline underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2f2d]"
        >
          View students
        </Link>
      </section>
    </main>
  );
}