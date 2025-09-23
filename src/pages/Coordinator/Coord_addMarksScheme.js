

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../AddMarksScheme.css"

// const AddMarksScheme = () => {
//   const [modules, setModules] = useState([]);
//   const [marksSchemes, setMarksSchemes] = useState([]);

//   const [formData, setFormData] = useState({
//     module_id: "",
//     theory_marks: "",
//     lab_marks: "",
//     IA_1: "",
//     IA_2: "",
//   });

//   // ✅ Fetch all modules
//   const fetchModules = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/marks-scheme/modules");
//       setModules(res.data.data || []);
//     } catch (error) {
//       toast.error("Failed to load modules ❌");
//       console.error(error);
//     }
//   };

//   // ✅ Fetch all marks schemes
//   const fetchMarksSchemes = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/marks-scheme/all");
//       setMarksSchemes(res.data.data || []);
//     } catch (error) {
//       toast.error("Failed to load marks schemes ❌");
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchModules();
//     fetchMarksSchemes();
//   }, []);

//   // ✅ Handle form input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.module_id) {
//       return toast.error("Please select a module ⚠️");
//     }
//     try {
//       await axios.post("http://localhost:1111/marks-scheme/add", formData);
//       toast.success("Marks scheme added successfully ✅");

//       // Refresh table
//       fetchMarksSchemes();

//       // Reset form
//       setFormData({
//         module_id: "",
//         theory_marks: "",
//         lab_marks: "",
//         IA_1: "",
//         IA_2: "",
//       });
//     } catch (error) {
//       toast.error("Failed to add marks scheme ❌");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 grid grid-cols-2 gap-6">
//       <ToastContainer />

//       {/* Section 1: Show All Marks Schemes */}
//       <div className="bg-white p-6 rounded-2xl shadow-lg">
//         <h2 className="text-xl font-bold mb-4">All Marks Schemes</h2>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Module Name</th>
//               <th className="border p-2">Theory Marks</th>
//               <th className="border p-2">Lab Marks</th>
//               <th className="border p-2">IA 1</th>
//               <th className="border p-2">IA 2</th>
//             </tr>
//           </thead>
//           <tbody>
//             {marksSchemes.length > 0 ? (
//               marksSchemes.map((ms) => (
//                 <tr key={ms.id}>
//                   <td className="border p-2">{ms.module_name}</td>
//                   <td className="border p-2">{ms.theory_marks}</td>
//                   <td className="border p-2">{ms.lab_marks}</td>
//                   <td className="border p-2">{ms.IA_1}</td>
//                   <td className="border p-2">{ms.IA_2}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center p-2">
//                   No marks schemes found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Section 2: Add Marks To Module */}
//       <div className="bg-white p-6 rounded-2xl shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Add Marks To Module</h2>
//         <form onSubmit={handleSubmit} className="grid gap-4">
//           {/* Module Dropdown */}
//           <select
//             name="module_id"
//             value={formData.module_id}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           >
//             <option value="">Select Module</option>
//             {modules.map((m) => (
//               <option key={m.module_id} value={m.module_id}>
//                 {m.module_name}
//               </option>
//             ))}
//           </select>

//           {/* Marks Inputs */}
//           <input
//             type="number"
//             name="theory_marks"
//             placeholder="Theory Marks"
//             value={formData.theory_marks}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="number"
//             name="lab_marks"
//             placeholder="Lab Marks"
//             value={formData.lab_marks}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             type="number"
//             name="IA_1"
//             placeholder="IA 1"
//             value={formData.IA_1}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//           <input
//             type="number"
//             name="IA_2"
//             placeholder="IA 2"
//             value={formData.IA_2}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddMarksScheme;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../AddMarksScheme.css";

const AddMarksScheme = () => {
  const [modules, setModules] = useState([]);
  const [marksSchemes, setMarksSchemes] = useState([]);

  const [formData, setFormData] = useState({
    module_id: "",
    theory_marks: "",
    lab_marks: "",
    IA_1: "",
    IA_2: "",
  });

  // ✅ Fetch all modules
  const fetchModules = async () => {
    try {
      const res = await axios.get("http://localhost:1111/marks-scheme/modules");
      setModules(res.data.data || []);
    } catch (error) {
      toast.error("Failed to load modules ❌");
      console.error(error);
    }
  };

  // ✅ Fetch all marks schemes
  const fetchMarksSchemes = async () => {
    try {
      const res = await axios.get("http://localhost:1111/marks-scheme/all");
      setMarksSchemes(res.data.data || []);
    } catch (error) {
      toast.error("Failed to load marks schemes ❌");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchModules();
    fetchMarksSchemes();
  }, []);

  // ✅ Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.module_id) {
      return toast.error("Please select a module ⚠️");
    }
    try {
      await axios.post("http://localhost:1111/marks-scheme/add", formData);
      toast.success("Marks scheme added successfully ✅");

      // Refresh table
      fetchMarksSchemes();

      // Reset form
      setFormData({
        module_id: "",
        theory_marks: "",
        lab_marks: "",
        IA_1: "",
        IA_2: "",
      });
    } catch (error) {
      toast.error("Failed to add marks scheme ❌");
      console.error(error);
    }
  };

  return (
    <div className="add-marks-scheme-container">
      <ToastContainer />

      <div className="marks-sections">
        {/* Section 1: Show All Marks Schemes */}
        <div className="marks-card">
          <h2 className="marks-title">All Marks Schemes</h2>
          <div className="table-wrapper">
            <table className="marks-table">
              <thead>
                <tr>
                  <th>Module Name</th>
                  <th>Theory Marks</th>
                  <th>Lab Marks</th>
                  <th>IA 1</th>
                  <th>IA 2</th>
                </tr>
              </thead>
              <tbody>
                {marksSchemes.length > 0 ? (
                  marksSchemes.map((ms) => (
                    <tr key={ms.id}>
                      <td>{ms.module_name}</td>
                      <td>{ms.theory_marks}</td>
                      <td>{ms.lab_marks}</td>
                      <td>{ms.IA_1}</td>
                      <td>{ms.IA_2}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No marks schemes found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Add Marks To Module */}
        <div className="marks-card">
          <h2 className="marks-title">Add Marks To Module</h2>
          <form onSubmit={handleSubmit} className="add-marks-form">
            <div className="form-group">
              <label>Select Module</label>
              <select
                name="module_id"
                value={formData.module_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Module</option>
                {modules.map((m) => (
                  <option key={m.module_id} value={m.module_id}>
                    {m.module_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Theory Marks</label>
              <input
                type="number"
                name="theory_marks"
                value={formData.theory_marks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Lab Marks</label>
              <input
                type="number"
                name="lab_marks"
                value={formData.lab_marks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>IA 1</label>
              <input
                type="number"
                name="IA_1"
                value={formData.IA_1}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>IA 2</label>
              <input
                type="number"
                name="IA_2"
                value={formData.IA_2}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMarksScheme;
