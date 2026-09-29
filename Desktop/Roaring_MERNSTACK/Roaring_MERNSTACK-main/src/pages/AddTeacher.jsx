import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddTeacher({ onAddTeacher }) {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    id: "",
    name: "",
    specialization: "",
    department: "",
    sex: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeacher((currentTeacher) => ({
      ...currentTeacher,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddTeacher(teacher);
    navigate("/teachers");
  };

  return (
    <div className="container">
      <h1>Add Teacher</h1>
      <p>Enter the teacher's information below.</p>

      <form onSubmit={handleSubmit} className="teacher-form">
        <div className="form-group">
          <label htmlFor="id">Teacher ID</label>
          <input
            id="id"
            type="text"
            name="id"
            value={teacher.id}
            onChange={handleChange}
            placeholder="Example: T-001"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={teacher.name}
            onChange={handleChange}
            placeholder="Enter teacher name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialization">Specialization</label>
          <input
            id="specialization"
            type="text"
            name="specialization"
            value={teacher.specialization}
            onChange={handleChange}
            placeholder="Example: Programming"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            name="department"
            value={teacher.department}
            onChange={handleChange}
            placeholder="Example: IT Department"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="sex">Sex</label>
          <select
            id="sex"
            name="sex"
            value={teacher.sex}
            onChange={handleChange}
            required
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-buttons">
          <button type="submit" className="save-btn">
            Add Teacher
          </button>
          <Link to="/teachers" className="cancel-btn">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddTeacher;
