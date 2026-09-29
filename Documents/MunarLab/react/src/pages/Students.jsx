import PageHeader from "../components/PageHeader.jsx";
import StudentCard from "../components/StudentCard.jsx";
import { students } from "../data/students.js";

export default function Students() {
  return (
    <section>
      <PageHeader
        title="Students"
        description={`${students.length} students are enrolled this term.`}
      />

      {/* One StudentCard is reused for every item in the array */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            id={student.id}
            program={student.program}
            year={student.year}
            email={student.email}
          />
        ))}
      </div>
    </section>
  );
}
