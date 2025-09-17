
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../AddEvaluation.css"; // import the CSS file

// const AddEvaluation = () => {
//   const [subjectList, setSubjectList] = useState([]);
//   const [groupList, setGroupList] = useState([]);
//   const [staffList, setStaffList] = useState([]);

//   const [form, setForm] = useState({
//     module_id: "",
//     group_id: "",
//     staff_id: "",
//     types: [],
//     start_date: "",
//     end_date: "",
//   });

//   useEffect(() => {
//     getAllSubjects();
//     getAllGroups();
//     getAllStaffs();
//   }, []);

//   const getAllSubjects = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/module/all-modules");
//       setSubjectList(res.data.data || []);
//     } catch (err) {
//       console.error("Error fetching subjects:", err);
//     }
//   };

//   const getAllGroups = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/student_group/all-groups");
//       setGroupList(res.data.data || []);
//     } catch (err) {
//       console.error("Error fetching groups:", err);
//     }
//   };

//   const getAllStaffs = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/staff/all-staff");
//       setStaffList(res.data.data || []);
//     } catch (err) {
//       console.error("Error fetching staffs:", err);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleCheckboxChange = (type) => {
//     const updated = form.types.includes(type)
//       ? form.types.filter((t) => t !== type)
//       : [...form.types, type];
//     setForm({ ...form, types: updated });
//   };

//   const mapTypes = (types) => {
//     return types.map((t) => (t === "IA1" ? "IA-1" : t === "IA2" ? "IA-2" : t));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { module_id, group_id, staff_id, types, start_date, end_date } = form;
//     if (!module_id || !group_id || !staff_id || !types.length || !start_date || !end_date) {
//       alert("All fields are required.");
//       return;
//     }

//     const payload = { ...form, types: mapTypes(types) };

//     try {
//       const res = await axios.post("http://localhost:1111/coordinator/assign-tasks", payload);
//       alert("Task Assigned Successfully!");
//       console.log("Response:", res.data);
//     } catch (err) {
//       console.error("Error submitting form:", err.response?.data || err);
//       alert("Something went wrong while assigning task.");
//     }
//   };

//   return (
//     <div className="add-evaluation-container">
//       <h2 className="add-evaluation-title">Add Evaluation</h2>
//       <form onSubmit={handleSubmit} className="add-evaluation-form">

//         {/* Subject */}
//         <div className="form-group">
//           <label>Subject:</label>
//           <select name="module_id" value={form.module_id} onChange={handleChange}>
//             <option value="">Select a subject</option>
//             {subjectList.map((subj) => (
//               <option key={subj.module_id} value={subj.module_id}>
//                 {subj.module_name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Group */}
//         <div className="form-group">
//           <label>Group:</label>
//           <select name="group_id" value={form.group_id} onChange={handleChange}>
//             <option value="">Select a group</option>
//             {groupList.map((group) => (
//               <option key={group.group_id} value={group.group_id}>
//                 {group.group_name} ({group.course_name})
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Staff */}
//         <div className="form-group">
//           <label>Staff Member:</label>
//           <select name="staff_id" value={form.staff_id} onChange={handleChange}>
//             <option value="">Select a staff member</option>
//             {staffList.map((staff) => (
//               <option key={staff.staff_id} value={staff.staff_id}>
//                 Staff ID: {staff.staff_id}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Types */}
//         <div className="form-group">
//           <label>Select Type:</label>
//           <div className="checkbox-group">
//             {["Theory", "Lab", "IA1", "IA2"].map((type) => (
//               <label key={type}>
//                 <input
//                   type="checkbox"
//                   checked={form.types.includes(type)}
//                   onChange={() => handleCheckboxChange(type)}
//                 />
//                 <span>{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Dates */}
//         <div className="date-group form-group">
//           <div className="flex-1">
//             <label>Start Date:</label>
//             <input type="date" name="start_date" value={form.start_date} onChange={handleChange} />
//           </div>
//           <div className="flex-1">
//             <label>Till Date:</label>
//             <input type="date" name="end_date" value={form.end_date} onChange={handleChange} />
//           </div>
//         </div>

//         {/* Submit */}
//         <button type="submit" className="submit-button">
//           Assign Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddEvaluation;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../AddEvaluation.css";

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
      const res = await axios.get("http://localhost:1111/module/all-modules");
      setSubjectList(res.data.data || []);
    } catch (err) {
      console.error("Error fetching subjects:", err);
      toast.error("Failed to fetch subjects");
    }
  };

  const getAllGroups = async () => {
    try {
      const res = await axios.get("http://localhost:1111/student_group/all-groups");
      setGroupList(res.data.data || []);
    } catch (err) {
      console.error("Error fetching groups:", err);
      toast.error("Failed to fetch groups");
    }
  };

  const getAllStaffs = async () => {
    try {
      const res = await axios.get("http://localhost:1111/staff/all-staff");
      setStaffList(res.data.data || []);
    } catch (err) {
      console.error("Error fetching staffs:", err);
      toast.error("Failed to fetch staff members");
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
    return types.map((t) => (t === "IA1" ? "IA-1" : t === "IA2" ? "IA-2" : t));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { module_id, group_id, staff_id, types, start_date, end_date } = form;
    if (!module_id || !group_id || !staff_id || !types.length || !start_date || !end_date) {
      toast.warn("All fields are required");
      return;
    }

    const payload = { ...form, types: mapTypes(types) };

    try {
      const res = await axios.post("http://localhost:1111/coordinator/assign-tasks", payload);
      toast.success("Task Assigned Successfully!");
      console.log("Response:", res.data);
      setForm({
        module_id: "",
        group_id: "",
        staff_id: "",
        types: [],
        start_date: "",
        end_date: "",
      }); // reset form
    } catch (err) {
      console.error("Error submitting form:", err.response?.data || err);
      toast.error("Something went wrong while assigning task");
    }
  };

  return (
    <div className="add-evaluation-container">
      <h2 className="add-evaluation-title">Add Evaluation</h2>
      <form onSubmit={handleSubmit} className="add-evaluation-form">
        {/* Subject */}
        <div className="form-group">
          <label>Module:</label>
          <select name="module_id" value={form.module_id} onChange={handleChange}>
            <option value="">Select a Module</option>
            {subjectList.map((subj) => (
              <option key={subj.module_id} value={subj.module_id}>
                {subj.module_name}
              </option>
            ))}
          </select>
        </div>

        {/* Group */}
        <div className="form-group">
          <label>StudentGroup_name</label>
          <select name="group_id" value={form.group_id} onChange={handleChange}>
            <option value="">Select a StudentGroup_name</option>
            {groupList.map((group) => (
              <option key={group.group_id} value={group.group_id}>
                {group.group_name} ({group.course_name})
              </option>
            ))}
          </select>
        </div>

        {/* Staff */}
        <div className="form-group">
          <label>Staff Member:</label>
          <select name="staff_id" value={form.staff_id} onChange={handleChange}>
            <option value="">Select a staff member</option>
            {staffList.map((staff) => (
              <option key={staff.staff_id} value={staff.staff_id}>
                {staff.staff_name}
              </option>
            ))}
          </select>
        </div>

        {/* Types */}
        <div className="form-group">
          <label>Select Type:</label>
          <div className="checkbox-group">
            {["Theory", "Lab", "IA1", "IA2"].map((type) => (
              <label key={type}>
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
        <div className="date-group form-group">
          <div className="flex-1">
            <label>Start Date:</label>
            <input type="date" name="start_date" value={form.start_date} onChange={handleChange} />
          </div>
          <div className="flex-1">
            <label>Till Date:</label>
            <input type="date" name="end_date" value={form.end_date} onChange={handleChange} />
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="submit-button">
          Assign Task
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AddEvaluation;
