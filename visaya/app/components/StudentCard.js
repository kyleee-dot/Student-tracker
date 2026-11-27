
import Link from "next/link";

export default function StudentCard({ id, name, yearSection, course }) {
  return (
    <article className="rounded-md border border-[#e5e0da] bg-white p-5">
      <h2 className="text-base font-semibold text-[#1d1d1b]">{name}</h2>
      <p className="mt-1 text-sm text-[#5f5d59]">{yearSection}</p>
      <p className="mt-1 text-sm text-[#5f5d59]">{course}</p>
      <Link
        href={`/students/${id}`}
        className="mt-3 inline-block text-sm text-[#3e3d3a] underline underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2f2d]"
      >
        View profile
      </Link>
    </article>
  );
}