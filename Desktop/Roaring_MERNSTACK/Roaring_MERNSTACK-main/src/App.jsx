import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import Teachers from "./pages/Teacher";
import AddTeacher from "./pages/AddTeacher";
import studentData from "./data/student.json";
import teacherData from "./data/Teacher.json";

function App() {
  const [students, setStudents] = useState(studentData);
  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("teachers");

    if (savedTeachers) {
      try {
        return JSON.parse(savedTeachers);
      } catch {
        localStorage.removeItem("teachers");
      }
    }

    return teacherData;
  });

  const addStudent = (newStudent) => {
    setStudents((currentStudents) => [...currentStudents, newStudent]);
  };

  const addTeacher = (newTeacher) => {
    setTeachers((currentTeachers) => {
      const updatedTeachers = [...currentTeachers, newTeacher];
      localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
      return updatedTeachers;
    });
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/students" element={<Students students={students} />} />

        <Route
          path="/student/:id"
          element={<StudentDetails students={students} />}
        />

        <Route
          path="/student/add"
          element={<AddStudent onAddStudent={addStudent} />}
        />

        <Route path="/teachers" element={<Teachers teachers={teachers} />} />

        <Route
          path="/add-teacher"
          element={<AddTeacher onAddTeacher={addTeacher} />}
        />

        <Route
          path="/login"
          element={
            <div className="container">
              <h1>Login</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
