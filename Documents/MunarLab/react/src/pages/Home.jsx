import { Link } from "react-router-dom";
import { students } from "../data/students.js";
import { courses } from "../data/courses.js";

const primaryBtn =
  "rounded-md bg-highlight px-5 py-3 font-semibold text-ink transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const secondaryBtn =
  "rounded-md px-5 py-3 font-semibold text-ink ring-1 ring-ink/30 transition-colors hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export default function Home() {
  const totalUnits = courses.reduce((sum, course) => sum + course.units, 0);

  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-sky px-6 py-12 sm:px-12 sm:py-16">
        <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Find any student or course in seconds.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-text">
          Look up enrolled students, check this term&apos;s course schedule, and
          learn how the portal works.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/students" className={primaryBtn}>
            View students
          </Link>
          <Link to="/courses" className={secondaryBtn}>
            Browse courses
          </Link>
        </div>
      </section>

      <section aria-label="Portal summary" className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Enrolled students", value: students.length },
          { label: "Courses offered", value: courses.length },
          { label: "Total units", value: totalUnits },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm"
          >
            <p className="font-display text-4xl font-extrabold">{stat.value}</p>
            <p className="mt-1 text-slate-text">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
