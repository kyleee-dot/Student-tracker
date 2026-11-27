import StudentCard from "../components/StudentCard";
import students from "../data/students";

export default function StudentsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#e5e0da] pb-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1b]">
            Students
          </h1>
        </div>
        <span className="pb-1 text-sm text-[#5f5d59]">
          {students.length} {students.length === 1 ? "student" : "students"}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </main>
  );
}
