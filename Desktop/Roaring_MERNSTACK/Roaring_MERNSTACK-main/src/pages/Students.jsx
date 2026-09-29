import { Link } from "react-router-dom";
import Student from "../components/Student";

function Students({ students }) {
  return (
    <div className="container">
      <h1>Students</h1>

      <Link to="/student/add" className="button">
        Add Student
      </Link>

      <div className="students-list">
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;