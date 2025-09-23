import { useState, useEffect } from "react";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState([]); // unassigned/partially assigned
  const [assigned, setAssigned] = useState([]); // fully assigned
  const [batches, setBatches] = useState([]);
  const [coursesByBatch, setCoursesByBatch] = useState([]); // courses for selected batch (filter)
  const [filterBatch, setFilterBatch] = useState("");
  const [filterCourse, setFilterCourse] = useState("");
  const [coursesByStudent, setCoursesByStudent] = useState({}); // student->courses map
  const [allCourses, setAllCourses] = useState([]);

  const [prnInputs, setPrnInputs] = useState({}); // temp PRN input per student

  // 🔹 Fetch batches
  const fetchBatches = async () => {
    try {
      const res = await axios.get("/api/admin/all-batch");
      setBatches(res.data.data || []);
    } catch (err) {
      console.error("Error fetching batches:", err);
    }
  };

  // 🔹 Fetch all courses (for bottom table display)
  const fetchAllCourses = async () => {
    try {
      const res = await axios.get("/api/admin/all-courses");
      setAllCourses(res.data.data || []);
    } catch (err) {
      console.error("Error fetching all courses:", err);
    }
  };

  // 🔹 Fetch students with filters
  const fetchStudents = async () => {
    try {
      let url = "/api/admin/allStudents";
      const params = [];
      if (filterBatch) params.push(`batch_id=${filterBatch}`);
      if (filterCourse) params.push(`course_id=${filterCourse}`);
      if (params.length > 0) url += `?${params.join("&")}`;

      const res = await axios.get(url);
      const all = res.data.students || [];

      const unassigned = all.filter(
        (s) => !s.batch_id || !s.course_id || !s.prn_number
      );
      const assignedStudents = all.filter(
        (s) => s.batch_id && s.course_id && s.prn_number
      );

      setStudents(unassigned);
      setAssigned(assignedStudents);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  // 🔹 Fetch courses for selected batch (for filter dropdown)
  const fetchCoursesByBatch = async (batchId) => {
    try {
      if (!batchId) {
        setCoursesByBatch([]);
        return;
      }
      const res = await axios.get(`/api/course/get-course-by-batch/${batchId}`);
      setCoursesByBatch(res.data.data || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  // 🔹 Fetch courses per student (for assignment dropdowns)
  const fetchCoursesForStudent = async (studentId, batchId) => {
    try {
      if (!batchId) {
        setCoursesByStudent((prev) => ({ ...prev, [studentId]: [] }));
        return;
      }
      const res = await axios.get(`/api/course/get-course-by-batch/${batchId}`);
      setCoursesByStudent((prev) => ({
        ...prev,
        [studentId]: res.data.data || [],
      }));
    } catch (err) {
      console.error("Error fetching courses by batch:", err);
    }
  };

  useEffect(() => {
    fetchBatches();
    fetchAllCourses();
  }, []);

  // when filterBatch changes, reload its courses
  useEffect(() => {
    fetchCoursesByBatch(filterBatch);
    setFilterCourse(""); // reset course when batch changes
  }, [filterBatch]);

  // when filter changes, reload students
  useEffect(() => {
    fetchStudents();
  }, [filterBatch, filterCourse]);

  // 🔹 Handle dropdown changes for student assignments
  const handleStudentChange = (id, field, value) => {
    const parsed = value === "" ? "" : Number(value);
    setStudents((prev) =>
      prev.map((s) =>
        s.student_id === id
          ? field === "batch_id"
            ? { ...s, batch_id: parsed, course_id: "" }
            : { ...s, [field]: parsed }
          : s
      )
    );
    if (field === "batch_id") {
      fetchCoursesForStudent(id, parsed);
    }
  };

  // 🔹 Save PRN
  const handleSavePrn = async (studentId, prnNumber) => {
    try {
      if (!prnNumber) {
        alert("❌ Please enter a PRN before saving");
        return;
      }

      await axios.put("/api/admin/assign-prn", {
        student_id: studentId,
        prn_number: prnNumber,
      });

      alert(`✅ PRN ${prnNumber} assigned successfully`);
      setPrnInputs((prev) => {
        const copy = { ...prev };
        delete copy[studentId];
        return copy;
      });
      fetchStudents(); // refresh list
    } catch (err) {
      console.error("PRN save error:", err);
      alert("❌ Failed to assign PRN");
    }
  };

  // 🔹 Save assignments
  const handleSave = async (student) => {
    try {
      if (student.batch_id) {
        await axios.post("/api/admin/add-student-to-batch", {
          student_id: student.student_id,
          batch_id: student.batch_id,
        });
      }
      if (student.course_id) {
        await axios.put("/api/admin/assign-student-course", {
          student_id: student.student_id,
          course_id: student.course_id,
        });
      }
      alert(`Saved Student ${student.student_name} in Batch & Course `);
      fetchStudents(); 
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed Batch Is InActive");
    }
  };

  const getBatchName = (id) =>
    batches.find((b) => b.batch_id === id)?.batch_name || "-";
  const getCourseName = (id) =>
    allCourses.find((c) => c.course_id === id)?.course_name || "-";

  return (
    <div className="p-6 space-y-8">
      {/* 🔹 Unassigned/Partially Assigned Students */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">📋 Students To Assign</h2>
        {students.length === 0 ? (
          <p className="text-gray-500">No students found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 rounded-lg">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="border p-3">ID</th>
                  <th className="border p-3">PRN</th>
                  <th className="border p-3">Name</th>
                  <th className="border p-3">Batch</th>
                  <th className="border p-3">Course</th>
                  <th className="border p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.student_id} className="hover:bg-gray-50">
                    <td className="border p-3">{s.student_id}</td>

                    {/* ✅ PRN Column */}
                    <td className="border p-3">
                      {s.prn_number ? (
                        <span className="text-gray-700">{s.prn_number}</span>
                      ) : (
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            className="border rounded-lg p-2 w-28"
                            placeholder="Enter PRN"
                            value={prnInputs[s.student_id] ?? ""}
                            onChange={(e) =>
                              setPrnInputs((prev) => ({
                                ...prev,
                                [s.student_id]: e.target.value,
                              }))
                            }
                          />
                          <button
                            className="bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700"
                            onClick={() =>
                              handleSavePrn(s.student_id, prnInputs[s.student_id])
                            }
                          >
                            Save
                          </button>
                        </div>
                      )}
                    </td>

                    <td className="border p-3">{s.student_name}</td>
                    <td className="border p-3">
                      <select
                        className="border rounded-lg p-2 w-full"
                        value={s.batch_id ?? ""}
                        onChange={(e) =>
                          handleStudentChange(s.student_id, "batch_id", e.target.value)
                        }
                        disabled={!s.prn_number} // 🔹 Disable until PRN assigned
                      >
                        <option value="">-- Select Batch --</option>
                        {batches.map((b) => (
                          <option key={b.batch_id} value={b.batch_id}>
                            {b.batch_name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border p-3">
                      <select
                        className="border rounded-lg p-2 w-full"
                        value={s.course_id ?? ""}
                        onChange={(e) =>
                          handleStudentChange(s.student_id, "course_id", e.target.value)
                        }
                        disabled={!s.batch_id || !s.prn_number}
                      >
                        <option value="">
                          {s.batch_id ? "-- Select Course --" : "Select batch first"}
                        </option>
                        {(coursesByStudent[s.student_id] || []).map((c) => (
                          <option key={c.course_id} value={c.course_id}>
                            {c.course_name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border p-3 text-center">
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                        onClick={() => handleSave(s)}
                        disabled={!s.prn_number}
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 🔹 Filter Section */}
      <div className="bg-white p-4 rounded-xl shadow-md flex space-x-4">
        <div>
          <label className="block font-semibold mb-1">Batch</label>
          <select
            className="border rounded-lg p-2 w-48"
            value={filterBatch}
            onChange={(e) => setFilterBatch(e.target.value)}
          >
            <option value="">-- All Batches --</option>
            {batches.map((b) => (
              <option key={b.batch_id} value={b.batch_id}>
                {b.batch_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Course</label>
          <select
            className="border rounded-lg p-2 w-48"
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            disabled={!filterBatch}
          >
            <option value="">
              {filterBatch ? "-- All Courses --" : "Select batch first"}
            </option>
            {coursesByBatch.map((c) => (
              <option key={c.course_id} value={c.course_id}>
                {c.course_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 🔹 Assigned Students */}
      {assigned.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">✅ Assigned Students</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200 rounded-lg">
              <thead className="bg-green-100 text-gray-700">
                <tr>
                  <th className="border p-3">ID</th>
                  <th className="border p-3">PRN</th>
                  <th className="border p-3">Name</th>
                  <th className="border p-3">Batch</th>
                  <th className="border p-3">Course</th>
                </tr>
              </thead>
              <tbody>
                {assigned.map((s) => (
                  <tr key={s.student_id} className="hover:bg-green-50">
                    <td className="border p-3">{s.student_id}</td>
                    <td className="border p-3">{s.prn_number}</td>
                    <td className="border p-3">{s.student_name}</td>
                    <td className="border p-3">{getBatchName(s.batch_id)}</td>
                    <td className="border p-3">{getCourseName(s.course_id)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Student;
