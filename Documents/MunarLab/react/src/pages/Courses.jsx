import PageHeader from "../components/PageHeader.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { courses } from "../data/courses.js";

export default function Courses() {
  return (
    <section>
      <PageHeader
        title="Courses"
        description={`${courses.length} courses are open for enrollment this term.`}
      />

      {/* One CourseCard is reused for every item in the array */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.code}
            code={course.code}
            title={course.title}
            instructor={course.instructor}
            units={course.units}
            schedule={course.schedule}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
}
