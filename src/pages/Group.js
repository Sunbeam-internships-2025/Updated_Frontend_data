

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function StudentGroups() {
//   const [groups, setGroups] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [filters, setFilters] = useState({ batchId: "", courseId: "" });
//   const [newGroupName, setNewGroupName] = useState("");
//   const [error, setError] = useState("");

//   // Fetch all student groups
//   const fetchGroups = async () => {
//     try {
//       let query = "";
//       if (filters.batchId) query += `&batchId=${filters.batchId}`;
//       if (filters.courseId) query += `&courseId=${filters.courseId}`;

//       const res = await axios.get(
//         `http://localhost:1111/student_group?${query}`
//       );
//       setGroups(Array.isArray(res.data.data) ? res.data.data : []);
//     } catch (err) {
//       console.error("Error fetching groups:", err);
//       setGroups([]);
//     }
//   };

//   // Fetch all batches
//   const fetchBatches = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/admin/all-batch");
//       setBatches(res.data.data || []);
//     } catch (err) {
//       console.error("Error fetching batches:", err);
//     }
//   };

//   // Fetch courses for selected batch
//   const fetchCourses = async (batchId) => {
//     if (!batchId) {
//       setCourses([]);
//       return;
//     }
//     try {
//       const res = await axios.get(
//         `http://localhost:1111/course/get-course-by-batch/${batchId}`
//       );
//       setCourses(Array.isArray(res.data.data) ? res.data.data : [res.data.data]);
//     } catch (err) {
//       console.error("Error fetching courses:", err);
//       setCourses([]);
//     }
//   };

//   // Add new group
//   const handleAddGroup = async () => {
//     if (!filters.courseId) {
//       setError("Please select a course before adding a group.");
//       return;
//     }
//     if (!newGroupName.trim()) {
//       setError("Group name cannot be empty.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:1111/admin/add-student-group", {
//         group_name: newGroupName,
//         course_id: filters.courseId,
//       });
//       setNewGroupName("");
//       setError("");
//       fetchGroups();
//     } catch (err) {
//       console.error("Error adding group:", err);
//       setError(err.response?.data?.error || "Error adding group");
//     }
//   };

//   // Delete group
//   const handleDeleteGroup = async (groupId) => {
//     if (!window.confirm("Are you sure you want to delete this group?")) return;
//     try {
//       await axios.delete(`http://localhost:1111/admin/delete-group/${groupId}`);
//       fetchGroups();
//     } catch (err) {
//       console.error("Error deleting group:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBatches();
//     fetchGroups();
//   }, []);

//   useEffect(() => {
//     fetchGroups();
//   }, [filters]);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Student Groups</h1>

//       {/* Filters + Add Group */}
//       <div className="flex items-center space-x-4">
//         <select
//           value={filters.batchId}
//           onChange={(e) => {
//             const batchId = e.target.value;
//             setFilters({ batchId, courseId: "" });
//             fetchCourses(batchId);
//           }}
//           className="px-3 py-2 border rounded w-1/4"
//         >
//           <option value="">-- Select Batch --</option>
//           {batches.map((b) => (
//             <option key={b.batch_id} value={b.batch_id}>
//               {b.batch_name}
//             </option>
//           ))}
//         </select>

//         <select
//           value={filters.courseId}
//           onChange={(e) =>
//             setFilters({ ...filters, courseId: e.target.value })
//           }
//           className="px-3 py-2 border rounded w-1/4"
//           disabled={!filters.batchId}
//         >
//           <option value="">-- Select Course --</option>
//           {courses.map((c) => (
//             <option key={c.course_id} value={c.course_id}>
//               {c.course_name}
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Enter Group Name"
//           value={newGroupName}
//           onChange={(e) => setNewGroupName(e.target.value)}
//           className="px-3 py-2 border rounded w-1/4"
//         />

//         <button
//           onClick={handleAddGroup}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//         >
//           + Add Group
//         </button>
//       </div>

//       {error && <p className="text-red-600 text-sm">{error}</p>}

//       {/* Groups Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 border">ID</th>
//               <th className="p-2 border">Group Name</th>
//               <th className="p-2 border">Course</th>
//               <th className="p-2 border">Batch</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {groups.length > 0 ? (
//               groups.map((g) => (
//                 <tr key={g.group_id} className="text-center">
//                   <td className="p-2 border">{g.group_id}</td>
//                   <td className="p-2 border">{g.group_name}</td>
//                   <td className="p-2 border">{g.course_name}</td>
//                   <td className="p-2 border">{g.batch_name}</td>
//                   <td className="p-2 border">
//                     <button
//                       onClick={() => handleDeleteGroup(g.group_id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="p-4 text-center text-gray-500">
//                   No groups found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default StudentGroups;












import React, { useEffect, useState } from "react";
import axios from "axios";
//import "../group.css"
import "../group.css"

function StudentGroups() {
  const [groups, setGroups] = useState([]);
  const [batches, setBatches] = useState([]);
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({ batchId: "", courseId: "" });
  const [newGroupName, setNewGroupName] = useState("");
  const [error, setError] = useState("");

  // Fetch all student groups based on filters
  const fetchGroups = async () => {
    try {
      let query = "";
      if (filters.batchId) query += `&batchId=${filters.batchId}`;
      if (filters.courseId) query += `&courseId=${filters.courseId}`;

      const res = await axios.get(
        `http://localhost:1111/student_group?${query}`
      );
      setGroups(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error("Error fetching groups:", err);
      setGroups([]);
    }
  };

  // Fetch all batches
  const fetchBatches = async () => {
    try {
      const res = await axios.get("http://localhost:1111/admin/all-batch");
      setBatches(res.data.data || []);
    } catch (err) {
      console.error("Error fetching batches:", err);
    }
  };

  // Fetch courses for selected batch
  const fetchCourses = async (batchId) => {
    if (!batchId) {
      setCourses([]);
      return;
    }
    try {
      const res = await axios.get(
        `http://localhost:1111/course/get-course-by-batch/${batchId}`
      );
      const data = res.data?.data;
      if (!data) setCourses([]);
      else if (Array.isArray(data)) setCourses(data);
      else setCourses([data]);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setCourses([]);
    }
  };

  // Add new group
  const handleAddGroup = async () => {
    if (!filters.courseId) {
      setError("Please select a course before adding a group.");
      return;
    }
    if (!newGroupName.trim()) {
      setError("Group name cannot be empty.");
      return;
    }

    try {
      await axios.post("http://localhost:1111/admin/add-student-group", {
        group_name: newGroupName,
        course_id: filters.courseId,
      });
      setNewGroupName("");
      setError("");
      fetchGroups();
    } catch (err) {
      console.error("Error adding group:", err);
      setError(err.response?.data?.error || "Error adding group");
    }
  };

  // Delete group
  const handleDeleteGroup = async (groupId) => {
    if (!window.confirm("Are you sure you want to delete this group?")) return;
    try {
      await axios.delete(`http://localhost:1111/admin/delete-group/${groupId}`);
      fetchGroups();
    } catch (err) {
      console.error("Error deleting group:", err);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchBatches();
    fetchGroups();
  }, []);

  // Fetch groups when filters change
  useEffect(() => {
    fetchGroups();
  }, [filters]);

  // Fetch courses when batchId changes
  useEffect(() => {
    if (filters.batchId) {
      fetchCourses(filters.batchId);
    } else {
      setCourses([]);
    }
    // Reset courseId when batch changes
    setFilters((prev) => ({ ...prev, courseId: "" }));
  }, [filters.batchId]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Student Groups</h1>

      {/* Filters + Add Group */}
      <div className="flex items-center space-x-4">
        <select
          value={filters.batchId}
          onChange={(e) => setFilters({ batchId: e.target.value, courseId: "" })}
          className="px-3 py-2 border rounded w-1/4"
        >
          <option value="">-- Select Batch --</option>
          {batches.map((b) => (
            <option key={b.batch_id} value={b.batch_id}>
              {b.batch_name}
            </option>
          ))}
        </select>

        <select
          value={filters.courseId}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, courseId: e.target.value }))
          }
          className="px-3 py-2 border rounded w-1/4"
          disabled={!filters.batchId}
        >
          <option value="">-- Select Course --</option>
          {courses.map((c) => (
            <option key={c.course_id} value={c.course_id}>
              {c.course_name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter Group Name"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="px-3 py-2 border rounded w-1/4"
        />

        <button
          onClick={handleAddGroup}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Add Group
        </button>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* Groups Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Group Name</th>
              <th className="p-2 border">Course</th>
              <th className="p-2 border">Batch</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.length > 0 ? (
              groups.map((g) => (
                <tr key={g.group_id} className="text-center">
                  <td className="p-2 border">{g.group_id}</td>
                  <td className="p-2 border">{g.group_name}</td>
                  <td className="p-2 border">{g.course_name}</td>
                  <td className="p-2 border">{g.batch_name}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => handleDeleteGroup(g.group_id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No groups found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentGroups;
