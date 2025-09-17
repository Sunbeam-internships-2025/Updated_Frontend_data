// import React, { useEffect, useState } from "react";
// import { getAllModules, getModulesByCourseId, addModule, deleteModule } from "./services/moduleService";
// import { getAllCourses } from "./services/courseService";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// function Module() {
//   const [modules, setModules] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newModule, setNewModule] = useState({
//     module_name: "",
//     course_id: "",
//   });

//   // Fetch all modules
//   const fetchAllModules = async () => {
//     try {
//       const res = await getAllModules();
//       setModules(res.data.data || []);
//     } catch (err) {
//       toast.error("Error fetching modules");
//     }
//   };

//   // Fetch all courses
//   const fetchAllCourses = async () => {
//     try {
//       const res = await getAllCourses();
//       setCourses(res.data.data || []);
//     } catch (err) {
//       toast.error("Error fetching courses");
//     }
//   };

//   // Filter modules by course
//   const handleCourseChange = async (courseId) => {
//     if (courseId) {
//       try {
//         const res = await getModulesByCourseId(courseId);
//         setModules(res.data.data || []);
//       } catch (err) {
//         toast.error("Error fetching modules by course");
//       }
//     } else {
//       fetchAllModules();
//     }
//   };

//   // Add new module
//   const handleAddModule = async (e) => {
//     e.preventDefault();
//     try {
//       await addModule(newModule);
//       toast.success("Module added successfully");
//       await fetchAllModules();
//       setIsModalOpen(false);
//       setNewModule({ module_name: "", course_id: "" });
//     } catch (err) {
//       toast.error(err.response?.data?.error || "Error adding module");
//     }
//   };

//   // Delete module with toast confirmation
//   const handleDeleteModule = async (moduleId) => {
//     toast.info("Deleting module...");
//     try {
//       await deleteModule(moduleId);
//       toast.success("Module deleted successfully");
//       await fetchAllModules();
//     } catch (err) {
//       toast.error(err.response?.data?.error || "Error deleting module");
//     }
//   };

//   useEffect(() => {
//     fetchAllModules();
//     fetchAllCourses();
//   }, []);

//   return (
//     <div className="p-6">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Modules</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//         >
//           + Add Module
//         </button>
//       </div>

//       {/* Filter by Course */}
//       <div className="mb-4">
//         <select
//           onChange={(e) => handleCourseChange(e.target.value)}
//           className="border rounded px-3 py-2 w-64"
//         >
//           <option value="">All Courses</option>
//           {courses.map((course) => (
//             <option key={course.course_id} value={course.course_id}>
//               {course.course_name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Module Table */}
//       <div className="overflow-x-auto rounded-lg shadow">
//         <table className="min-w-full bg-white border">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border">#</th>
//               <th className="px-4 py-2 border">Module ID</th>
//               <th className="px-4 py-2 border">Module Name</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {modules.map((mod, index) => (
//               <tr key={mod.module_id} className="text-center">
//                 <td className="px-4 py-2 border">{index + 1}</td>
//                 <td className="px-4 py-2 border">{mod.module_id}</td>
//                 <td className="px-4 py-2 border">{mod.module_name}</td>
//                 <td className="px-4 py-2 border">
//                   <button
//                     onClick={() => handleDeleteModule(mod.module_id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {modules.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center py-4 text-gray-500">
//                   No modules found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Add Module Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Add New Module</h2>
//             <form onSubmit={handleAddModule} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Module Name
//                 </label>
//                 <input
//                   type="text"
//                   value={newModule.module_name}
//                   onChange={(e) =>
//                     setNewModule({ ...newModule, module_name: e.target.value })
//                   }
//                   className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Select Course
//                 </label>
//                 <select
//                   value={newModule.course_id}
//                   onChange={(e) =>
//                     setNewModule({ ...newModule, course_id: e.target.value })
//                   }
//                   className="w-full border rounded px-3 py-2"
//                   required
//                 >
//                   <option value="">-- Select Course --</option>
//                   {courses.map((course) => (
//                     <option key={course.course_id} value={course.course_id}>
//                       {course.course_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex justify-end gap-3 mt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 border rounded-lg hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                 >
//                   Add Module
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Module;






// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Module() {
//   const [modules, setModules] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newModule, setNewModule] = useState({
//     module_name: "",
//     course_id: "",
//   });

//   // Fetch all modules
//   const fetchAllModules = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/module/all-modules");
//       setModules(res.data.data || []);
//     } catch (err) {
//       toast.error("Error fetching modules");
//     }
//   };

//   // Fetch all courses
//   const fetchAllCourses = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/admin/all-courses");
//       setCourses(res.data.data || []);
//     } catch (err) {
//       toast.error("Error fetching courses");
//     }
//   };

//   // Open modal and fetch courses
//   const openModal = () => {
//     fetchAllCourses(); // fetch courses when modal opens
//     setIsModalOpen(true);
//   };

//   // Filter modules by course
//   const handleCourseChange = async (courseId) => {
//     if (courseId) {
//       try {
//         const res = await axios.get(
//           `http://localhost:1111/module/all/course/${courseId}`
//         );
//         setModules(res.data.data || []);
//       } catch (err) {
//         toast.error("Error fetching modules by course");
//       }
//     } else {
//       fetchAllModules();
//     }
//   };

//   // Add new module
//   const handleAddModule = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:1111/module/add-module", newModule);
//       toast.success("Module added successfully");
//       setIsModalOpen(false);
//       setNewModule({ module_name: "", course_id: "" });
//       fetchAllModules();
//     } catch (err) {
//       toast.error(err.response?.data?.error || "Error adding module");
//     }
//   };

//   // Delete module
//   const handleDeleteModule = async (moduleId) => {
//     try {
//       await axios.delete(
//         `http://localhost:1111/module/delete-module/${moduleId}`
//       );
//       toast.success("Module deleted successfully");
//       fetchAllModules();
//     } catch (err) {
//       toast.error(err.response?.data?.error || "Error deleting module");
//     }
//   };

//   useEffect(() => {
//     fetchAllModules();
//   }, []);

//   return (
//     <div className="p-6">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Modules</h1>
//         <button
//           onClick={openModal} // open modal and fetch courses
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//         >
//           + Add Module
//         </button>
//       </div>

//       {/* Filter by Course */}
//       <div className="mb-4">
//         <select
//           onChange={(e) => handleCourseChange(e.target.value)}
//           className="border rounded px-3 py-2 w-64"
//         >
//           <option value="">All Courses</option>
//           {courses.map((course) => (
//             <option key={course.course_id} value={course.course_id}>
//               {course.course_name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Module Table */}
//       <div className="overflow-x-auto rounded-lg shadow">
//         <table className="min-w-full bg-white border">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border">#</th>
//               <th className="px-4 py-2 border">Module ID</th>
//               <th className="px-4 py-2 border">Module Name</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {modules.length > 0 ? (
//               modules.map((mod, index) => (
//                 <tr key={mod.module_id} className="text-center">
//                   <td className="px-4 py-2 border">{index + 1}</td>
//                   <td className="px-4 py-2 border">{mod.module_id}</td>
//                   <td className="px-4 py-2 border">{mod.module_name}</td>
//                   <td className="px-4 py-2 border">
//                     <button
//                       onClick={() => handleDeleteModule(mod.module_id)}
//                       className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center py-4 text-gray-500">
//                   No modules found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Add Module Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Add New Module</h2>
//             <form onSubmit={handleAddModule} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Module Name
//                 </label>
//                 <input
//                   type="text"
//                   value={newModule.module_name}
//                   onChange={(e) =>
//                     setNewModule({ ...newModule, module_name: e.target.value })
//                   }
//                   className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Select Course
//                 </label>
//                 <select
//                   value={newModule.course_id}
//                   onChange={(e) =>
//                     setNewModule({ ...newModule, course_id: e.target.value })
//                   }
//                   className="w-full border rounded px-3 py-2"
//                   required
//                 >
//                   <option value="">-- Select Course --</option>
//                   {courses.map((course) => (
//                     <option key={course.course_id} value={course.course_id}>
//                       {course.course_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex justify-end gap-3 mt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 border rounded-lg hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                 >
//                   Add Module
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Module;











import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../module.css";


function Module() {
  const [modules, setModules] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newModule, setNewModule] = useState({
    module_name: "",
    course_id: "",
  });

  // Fetch all modules
  const fetchAllModules = async () => {
    try {
      const res = await axios.get("http://localhost:1111/module/all-modules");
      setModules(res.data.data || []);
    } catch (err) {
      toast.error("Error fetching modules");
    }
  };

  // Fetch all courses
  const fetchAllCourses = async () => {
    try {
      const res = await axios.get("http://localhost:1111/admin/all-courses");
      setCourses(res.data.data || []);
    } catch (err) {
      toast.error("Error fetching courses");
    }
  };

  // Open modal and fetch courses
  const openModal = () => {
    fetchAllCourses();
    setIsModalOpen(true);
  };

  // Filter modules by course
  const handleCourseChange = async (courseId) => {
    if (courseId) {
      try {
        const res = await axios.get(
          `http://localhost:1111/module/all/course/${courseId}`
        );
        setModules(res.data.data || []);
      } catch (err) {
        toast.error("Error fetching modules by course");
      }
    } else {
      fetchAllModules();
    }
  };

  // Add new module
  const handleAddModule = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1111/module/add-module", newModule);
      toast.success("Module added successfully");
      setIsModalOpen(false);
      setNewModule({ module_name: "", course_id: "" });
      fetchAllModules();
    } catch (err) {
      toast.error(err.response?.data?.error || "Error adding module");
    }
  };

  // Delete module
  const handleDeleteModule = async (moduleId) => {
    try {
      await axios.delete(
        `http://localhost:1111/module/delete-module/${moduleId}`
      );
      toast.success("Module deleted successfully");
      fetchAllModules();
    } catch (err) {
      toast.error(err.response?.data?.error || "Error deleting module");
    }
  };

  useEffect(() => {
    fetchAllModules();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Modules</h1>
        <button onClick={openModal} className="btn-primary">
          + Add Module
        </button>
      </div>

      {/* Filter by Course */}
      <div className="mb-4">
        <select
          onChange={(e) => handleCourseChange(e.target.value)}
          className="select-input"
        >
          <option value="">All Courses</option>
          {courses.map((course) => (
            <option key={course.course_id} value={course.course_id}>
              {course.course_name}
            </option>
          ))}
        </select>
      </div>

      {/* Module Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Module ID</th>
              <th>Module Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {modules.length > 0 ? (
              modules.map((mod, index) => (
                <tr key={mod.module_id} className="text-center">
                  <td>{index + 1}</td>
                  <td>{mod.module_id}</td>
                  <td>{mod.module_name}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteModule(mod.module_id)}
                      className="btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No modules found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Module Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Module</h2>
            <form onSubmit={handleAddModule} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Module Name
                </label>
                <input
                  type="text"
                  value={newModule.module_name}
                  onChange={(e) =>
                    setNewModule({ ...newModule, module_name: e.target.value })
                  }
                  className="select-input"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Course
                </label>
                <select
                  value={newModule.course_id}
                  onChange={(e) =>
                    setNewModule({ ...newModule, course_id: e.target.value })
                  }
                  className="select-input"
                  required
                >
                  <option value="">-- Select Course --</option>
                  {courses.map((course) => (
                    <option key={course.course_id} value={course.course_id}>
                      {course.course_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn-cancel"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-success">
                  Add Module
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Module;














