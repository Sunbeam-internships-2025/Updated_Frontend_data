// // src/pages/coordinator/CompletedTaskPage.jsx
// import React, { useEffect, useState } from "react";

// const CompletedTaskPage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCompletedTasks = async () => {
//       try {
//         const res = await fetch("http://localhost:1111/coordinator/completedtasks");
//         const data = await res.json();

//         if (data.status === "success") {
//           setTasks(data.data);
//         } else {
//           setError("Failed to load tasks");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompletedTasks();
//   }, []);

//   if (loading) return <p className="p-4">Loading completed tasks...</p>;
//   if (error) return <p className="p-4 text-red-600">{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">✅ Completed Tasks</h1>

//       <div className="overflow-x-auto shadow rounded-lg">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="px-4 py-2 border">ID</th>
//               <th className="px-4 py-2 border">Student</th>
//               <th className="px-4 py-2 border">Staff</th>
//               <th className="px-4 py-2 border">Subject</th>
//               <th className="px-4 py-2 border">Theory</th>
//               <th className="px-4 py-2 border">Lab</th>
//               <th className="px-4 py-2 border">IA-1</th>
//               <th className="px-4 py-2 border">IA-2</th>
//               <th className="px-4 py-2 border">Start Date</th>
//               <th className="px-4 py-2 border">Till Date</th>
//               <th className="px-4 py-2 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task.mark_id} className="text-center hover:bg-gray-50">
//                 <td className="px-4 py-2 border">{task.mark_id}</td>
//                 <td className="px-4 py-2 border">{task.student_name}</td>
//                 <td className="px-4 py-2 border">{task.staff_name}</td>
//                 <td className="px-4 py-2 border">{task.subject_name}</td>
//                 <td className="px-4 py-2 border">{task.theory_marks}</td>
//                 <td className="px-4 py-2 border">{task.lab_marks}</td>
//                 <td className="px-4 py-2 border">{task.IA_1}</td>
//                 <td className="px-4 py-2 border">{task.IA_2}</td>
//                 <td className="px-4 py-2 border">
//                   {new Date(task.start_date).toLocaleDateString()}
//                 </td>
//                 <td className="px-4 py-2 border">
//                   {new Date(task.till_date).toLocaleDateString()}
//                 </td>
//                 <td className="px-4 py-2 border text-green-600 font-semibold">
//                   {task.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CompletedTaskPage;





// src/pages/coordinator/CompletedTaskPage.jsx
import React, { useEffect, useState } from "react";
import "../../CompletedTask.css"; // Import CSS file

const CompletedTaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const res = await fetch("http://localhost:1111/coordinator/completedtasks");
        const data = await res.json();

        if (data.status === "success") {
          setTasks(data.data);
        } else {
          setError("Failed to load tasks");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCompletedTasks();
  }, []);

  if (loading) return <p className="loading">Loading completed tasks...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="completed-task-container">
      <h1 className="page-title"> Completed Tasks</h1>

      <div className="table-wrapper">
        <table className="task-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Staff</th>
              <th>Subject</th>
              <th>Theory</th>
              <th>Lab</th>
              <th>IA-1</th>
              <th>IA-2</th>
              <th>Start Date</th>
              <th>Till Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.mark_id}>
                <td>{task.mark_id}</td>
                <td>{task.student_name}</td>
                <td>{task.staff_name}</td>
                <td>{task.subject_name}</td>
                <td>{task.theory_marks}</td>
                <td>{task.lab_marks}</td>
                <td>{task.IA_1}</td>
                <td>{task.IA_2}</td>
                <td>{new Date(task.start_date).toLocaleDateString()}</td>
                <td>{new Date(task.till_date).toLocaleDateString()}</td>
                <td className="status">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedTaskPage;
