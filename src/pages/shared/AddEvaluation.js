// import React from "react";

// function AddEvaluation() {
//   return (
//     <main style={{ padding: "20px" }}>
//       <h1 style={{ color: "Black", fontWeight: "bold" }}>Add Evaluation</h1>
//       <p style={{ color: "Balck" }}>
//         This page will allow Mentor/Coordinator/Admin to add evaluation criteria for students.
//       </p>
//     </main>
//   );
// }

// export default AddEvaluation;



import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../AddEvaluation.css';


const AddEvaluation = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [staffList, setStaffList] = useState([]);

  const [form, setForm] = useState({
    module_id: "",
    group_id: "",
    staff_id: "",
    types: [],
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    getAllSubjects();
    getAllGroups();
    getAllStaffs();
  }, []);

  const getAllSubjects = async () => {
    try {
      const res = await axios.get("/api/module/all-modules");
      setSubjectList(res.data.data);
      //   console.log("id::", res.data.data);
    } catch (err) {
      console.error("Error fetching subjects:", err);
    }
  };

  const getAllGroups = async () => {
    try {
      const res = await axios.get("/api/student_group/get-all-groups");
      setGroupList(res.data.data);
    } catch (err) {
      console.error("Error fetching groups:", err);
    }
  };

  const getAllStaffs = async () => {
    try {
      const res = await axios.get("/api/staff/all-staff");
      setStaffList(res.data.data);
    } catch (err) {
      console.error("Error fetching staffs:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (type) => {
    const updated = form.types.includes(type)
      ? form.types.filter((t) => t !== type)
      : [...form.types, type];
    setForm({ ...form, types: updated });
  };

  const mapTypes = (types) => {
    return types.map((t) => {
      if (t === "IA1") return "IA-1";
      if (t === "IA2") return "IA-2";
      return t;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { module_id, group_id, staff_id, types, start_date, end_date } = form;
    if (
      !module_id ||
      !group_id ||
      !staff_id ||
      !types.length ||
      !start_date ||
      !end_date
    ) {
      alert("All fields are required.");
      return;
    }

    const payload = {
      ...form,
      types: mapTypes(types),
    };

    try {
      const res = await axios.post("/api/coordinator/assign-tasks", payload);
      alert("Task Assigned Successfully!");
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Error submitting form:", err.response.data);
      alert("Something went wrong while assigning task.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add Evaluation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium">Subject:</label>
          <select
            name="module_id"
            value={form.module_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select a subject</option>
            {subjectList.map((subj) => (
              <option key={subj.module_id} value={subj.module_id}>
                {subj.module_name}
              </option>
            ))}
          </select>
        </div>

        {/* Group */}
        <div>
          <label className="block mb-1 font-medium">Group:</label>
          <select
            name="group_id"
            value={form.group_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select a group</option>
            {groupList.map((group) => (
              <option key={group.group_id} value={group.group_id}>
                {group.group_name}
              </option>
            ))}
          </select>
        </div>

        {/* Staff */}
        <div>
          <label className="block mb-1 font-medium">Staff Member:</label>
          <select
            name="staff_id"
            value={form.staff_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select a staff member</option>
            {staffList.map((staff) => (
              <option key={staff.staff_id} value={staff.staff_id}>
                {staff.staff_name}
              </option>
            ))}
          </select>
        </div>

        {/* Types */}
        <div>
          <label className="block mb-1 font-medium">Select Type:</label>
          <div className="flex flex-wrap gap-4">
            {["Theory", "Lab", "IA1", "IA2"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.types.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Dates */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Start Date:</label>
            <input
              type="date"
              name="start_date"
              value={form.start_date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Till Date:</label>
            <input
              type="date"
              name="end_date"
              value={form.end_date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AddEvaluation;
