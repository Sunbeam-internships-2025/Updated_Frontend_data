



import React, { useState, useEffect } from "react";
import {
  getAllStudents,
  assignCourse,
  getStudentsByCourse,
} from "../../pages/services/studentService";
import { getAllCourses } from "../../pages/services/courseService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import "../../showStudents.css";
import "../../showStudents.css"

export default function ShowStudents() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({});
  const [editableRows, setEditableRows] = useState({});
  const [selectedCourse, setSelectedCourse] = useState("");
  const [studentsByCourse, setStudentsByCourse] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getAllStudents();
      setStudents(res.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load students");
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await getAllCourses();
      setCourses(res.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load courses");
    }
  };

  const handleAssignCourse = async (student_id) => {
    const course_id = selectedCourses[student_id];
    if (!course_id) {
      toast.error("Please select a course");
      return;
    }

    try {
      await assignCourse({ student_id, course_id });
      toast.success("Course assigned successfully");

      setEditableRows({ ...editableRows, [student_id]: false });
      fetchStudents();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to assign course");
    }
  };

  const handleShowStudentsByCourse = async () => {
    if (!selectedCourse) {
      toast.error("Please select a course");
      return;
    }
    try {
      const res = await getStudentsByCourse(selectedCourse);
      setStudentsByCourse(res.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to fetch students for this course"
      );
    }
  };

  return (
    <div className="container" style={{ maxWidth: "1000px", margin: "auto", padding: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* All Students Section */}
      <h2 style={{ marginBottom: "20px", color: "#111623ff" }}>All Students</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <thead style={{ backgroundColor: "#132346ff", color: "#fff", textAlign: "left" }}>
          <tr>
            <th style={{ padding: "12px" }}>PRN Number</th>
            <th style={{ padding: "12px" }}>Student Name</th>
            <th style={{ padding: "12px" }}>Email</th>
            <th style={{ padding: "12px" }}>Assign Course</th>
            <th style={{ padding: "12px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.student_id} style={{ borderBottom: "1px solid #e0e0e0", transition: "background 0.3s", cursor: "default" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f3f4f6"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              <td style={{ padding: "10px" }}>{stu.prn_number || "Not assigned"}</td>
              <td style={{ padding: "10px" }}>{`${stu.first_name} ${stu.last_name}`}</td>
              <td style={{ padding: "10px" }}>{stu.email}</td>
              <td style={{ padding: "10px" }}>
                <select
                  value={selectedCourses[stu.student_id] || stu.course_id || ""}
                  onChange={(e) => {
                    const courseId = e.target.value;
                    setSelectedCourses({ ...selectedCourses, [stu.student_id]: courseId });
                    setEditableRows({ ...editableRows, [stu.student_id]: !!courseId });
                  }}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "5px",
                    border: "1px solid #cbd5e1",
                    minWidth: "160px",
                    fontSize: "14px",
                    outline: "none",
                  }}
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course.course_id} value={course.course_id}>
                      {course.course_name}
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => handleAssignCourse(stu.student_id)}
                  disabled={!editableRows[stu.student_id]}
                  style={{
                    padding: "6px 14px",
                    backgroundColor: editableRows[stu.student_id] ? "#1a62fcff" : "#94a3b8",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: editableRows[stu.student_id] ? "pointer" : "not-allowed",
                    transition: "background 0.3s",
                  }}
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Students By Course Section */}
      <h2 style={{ marginTop: "50px", marginBottom: "20px", color: "#1E3A8A" }}>
        Show Students Of Selected Course
      </h2>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{
            padding: "6px 12px",
            minWidth: "200px",
            borderRadius: "5px",
            border: "1px solid #cbd5e1",
            fontSize: "14px",
            outline: "none",
          }}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.course_id} value={course.course_id}>
              {course.course_name}
            </option>
          ))}
        </select>

        <button
          onClick={handleShowStudentsByCourse}
          style={{
            padding: "6px 20px",
            backgroundColor: "#2563EB",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Show Students
        </button>
      </div>

      {studentsByCourse.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", marginTop: "10px" }}>
          <thead style={{ backgroundColor: "#132346ff", color: "#fff", textAlign: "left" }}>
            <tr>
              <th style={{ padding: "12px" }}>PRN Number</th>
              <th style={{ padding: "12px" }}>Student Name</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {studentsByCourse.map((stu) => (
              <tr key={stu.student_id} style={{ borderBottom: "1px solid #e0e0e0", transition: "background 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#f3f4f6"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <td style={{ padding: "10px" }}>{stu.prn_number || "Not assigned"}</td>
                <td style={{ padding: "10px" }}>{stu.student_name}</td>
                <td style={{ padding: "10px" }}>{stu.email}</td>
                <td style={{ padding: "10px" }}>{stu.course_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

































