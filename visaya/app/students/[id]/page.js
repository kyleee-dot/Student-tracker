
import Link from "next/link";
import students from "../../data/students";

export default async function StudentProfile({ params }) {
  const { id } = await params;
  const student = students.find((student) => student.id === id);

  if (!student) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-[#5f5d59]">
          Student not found.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/students"
        className="text-sm text-[#5f5d59] underline underline-offset-4 hover:text-black"
      >
        <span aria-hidden="true">←</span> Back to students
      </Link>

      <div className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1b]">
          {student.name}
        </h1>
        <dl className="mt-6 divide-y divide-[#e5e0da] border-y border-[#e5e0da]">
          <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-[#5f5d59]">Year and section</dt>
            <dd className="text-sm text-[#1d1d1b]">{student.yearSection}</dd>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-[#5f5d59]">Course</dt>
            <dd className="text-sm text-[#1d1d1b]">{student.course}</dd>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-[#5f5d59]">Student ID</dt>
            <dd className="text-sm text-[#1d1d1b]">{student.id}</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}