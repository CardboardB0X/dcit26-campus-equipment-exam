import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent({ onAddStudent }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [course, setCourse] = useState("");
  const [yearSection, setYearSection] = useState("");
  const [sex, setSex] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name,
      studentNumber: studentNumber,
      course: course,
      yearSection: yearSection,
      sex: sex,
    };

    onAddStudent(newStudent);

    navigate("/students");
  };

  return (
    <div className="container">
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit} className="details-card">
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Student Number</label>
          <br />
          <input
            type="text"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Course</label>
          <br />
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Year and Section</label>
          <br />
          <input
            type="text"
            value={yearSection}
            onChange={(e) => setYearSection(e.target.value)}
            placeholder="Example: 2A"
            required
          />
        </div>
        <br />
        <div>
          <label>Sex</label>
          <br />

          <select value={sex} onChange={(e) => setSex(e.target.value)} required>
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <br />
        <button type="submit" className="button">
          Add Student
        </button>{" "}
        <Link to="/students" className="button">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default AddStudent;