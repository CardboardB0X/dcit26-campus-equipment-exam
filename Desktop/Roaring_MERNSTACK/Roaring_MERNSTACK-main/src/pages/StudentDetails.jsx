import { Link, useParams } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();

  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return (
      <div className="container">
        <h1>Student Not Found</h1>

        <Link to="/students" className="button">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Student Details</h1>

      <div className="details-card">
        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Student Number:</strong> {student.studentNumber}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

        <p>
          <strong>Year & Section:</strong> {student.yearSection}
        </p>

        <p>
          <strong>Sex:</strong> {student.sex}
        </p>

        <Link to="/students" className="button">
          Back to Students
        </Link>
      </div>
    </div>
  );
}

export default StudentDetails;