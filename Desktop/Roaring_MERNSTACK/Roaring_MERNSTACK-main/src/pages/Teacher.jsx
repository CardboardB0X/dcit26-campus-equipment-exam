import { Link } from "react-router-dom";

function Teachers({ teachers }) {
  return (
    <div className="container">
      <h1>Teacher List</h1>
      <p>All teachers currently stored in the application.</p>

      <Link to="/add-teacher" className="button">
        Add Teacher
      </Link>

      <div className="teacher-list">
        {teachers.length === 0 ? (
          <p>No teachers have been added yet.</p>
        ) : (
          teachers.map((teacher, index) => (
            <div className="teacher-card" key={`${teacher.id}-${index}`}>
              <h2>{teacher.name}</h2>
              <p>
                <strong>Teacher ID:</strong> {teacher.id}
              </p>
              <p>
                <strong>Specialization:</strong> {teacher.specialization}
              </p>
              <p>
                <strong>Department:</strong> {teacher.department}
              </p>
              <p>
                <strong>Sex:</strong> {teacher.sex}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Teachers;
