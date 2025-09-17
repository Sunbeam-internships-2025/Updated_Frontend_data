



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FormattedDate from "../../utils/FormattedDate";

// const AssignedTask = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/coordinator/assignedtasks");
//       if (res.data.status === "success") {
//         setTasks(res.data.data);
//       }
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <p>Loading assigned tasks...</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Assigned Tasks</h2>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={thStyle}>S.No.</th>
//             <th style={thStyle}>Student Name</th>
//             <th style={thStyle}>Staff Name</th>
//             <th style={thStyle}>Subject</th>
//             <th style={thStyle}>Theory</th>
//             <th style={thStyle}>Lab</th>
//             <th style={thStyle}>IA1</th>
//             <th style={thStyle}>IA2</th>
//             <th style={thStyle}>From Date</th>
//             <th style={thStyle}>Till Date</th>
//             <th style={thStyle}>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task, index) => (
//             <tr key={task.mark_id} style={{ borderBottom: "1px solid #ccc" }}>
//               <td style={tdStyle}>{index + 1}</td>
//               <td style={tdStyle}>{task.student_name}</td>
//               <td style={tdStyle}>{task.staff_name}</td>
//               <td style={tdStyle}>{task.subject_name}</td>
//               <td style={tdStyle}>{task.theory_marks}</td>
//               <td style={tdStyle}>{task.lab_marks}</td>
//               <td style={tdStyle}>{task.IA_1}</td>
//               <td style={tdStyle}>{task.IA_2}</td>
//               <td style={tdStyle}>
//                 <FormattedDate dateString={task.start_date} />
//               </td>
//               <td style={tdStyle}>
//                 <FormattedDate dateString={task.till_date} />
//               </td>
//               <td style={{
//                 ...tdStyle,
//                 color: task.status === "Completed" ? "green" : "orange",
//                 fontWeight: "bold"
//               }}>
//                 {task.status}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const thStyle = {
//   border: "1px solid #ccc",
//   padding: "8px",
//   backgroundColor: "#f5f5f5",
//   textAlign: "left"
// };

// const tdStyle = {
//   border: "1px solid #ccc",
//   padding: "8px"
// };

// export default AssignedTask;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import FormattedDate from "../../utils/FormattedDate";

// const AssignedTask = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/coordinator/assignedtasks");
//       if (res.data.status === "success") {
//         setTasks(res.data.data);
//       }
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <p style={loadingStyle}>Loading assigned tasks...</p>;

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Assigned Tasks</h2>
//       <div style={tableWrapper}>
//         <table style={tableStyle}>
//           <thead style={theadStyle}>
//             <tr>
//               {["S.No.", "Student Name", "Staff Name", "Subject", "Theory", "Lab", "IA1", "IA2", "From Date", "Till Date", "Status"].map((head, idx) => (
//                 <th key={idx} style={thStyle}>{head}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task, index) => (
//               <tr key={task.mark_id} style={{...trStyle, backgroundColor: index % 2 === 0 ? "#fcfcfc" : "#fff"}}>
//                 <td style={tdStyle}>{index + 1}</td>
//                 <td style={tdStyle}>{task.student_name}</td>
//                 <td style={tdStyle}>{task.staff_name}</td>
//                 <td style={tdStyle}>{task.subject_name}</td>
//                 <td style={tdStyle}>{task.theory_marks}</td>
//                 <td style={tdStyle}>{task.lab_marks}</td>
//                 <td style={tdStyle}>{task.IA_1}</td>
//                 <td style={tdStyle}>{task.IA_2}</td>
//                 <td style={tdStyle}><FormattedDate dateString={task.start_date} /></td>
//                 <td style={tdStyle}><FormattedDate dateString={task.till_date} /></td>
//                 <td style={{
//                   ...tdStyle,
//                   color: task.status === "Completed" ? "#28a745" : "#fd7e14",
//                   fontWeight: "600"
//                 }}>
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

// // Modern Styling
// const containerStyle = {
//   padding: "40px",
//   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   backgroundColor: "#f4f6f8",
//   minHeight: "100vh"
// };

// const headingStyle = {
//   marginBottom: "25px",
//   fontSize: "28px",
//   color: "#222",
//   fontWeight: "700"
// };

// const tableWrapper = {
//   overflowX: "auto",
//   borderRadius: "15px",
//   boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
//   backgroundColor: "#fff",
//   padding: "15px"
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   minWidth: "950px"
// };

// const theadStyle = {
//   position: "sticky",
//   top: 0,
//   backgroundColor: "#f8f9fa",
//   zIndex: 1
// };

// const thStyle = {
//   padding: "14px 18px",
//   borderBottom: "2px solid #e0e0e0",
//   textAlign: "left",
//   fontWeight: "600",
//   color: "#555",
//   letterSpacing: "0.5px"
// };

// const tdStyle = {
//   padding: "12px 18px",
//   borderBottom: "1px solid #eee",
//   color: "#555",
//   transition: "all 0.2s ease"
// };

// const trStyle = {
//   transition: "background-color 0.3s, transform 0.2s",
//   cursor: "default",
//   ":hover": {
//     backgroundColor: "#f1f5f9",
//     transform: "scale(1.01)"
//   }
// };

// const loadingStyle = {
//   textAlign: "center",
//   marginTop: "60px",
//   fontSize: "18px",
//   color: "#777"
// };

// export default AssignedTask;




import React, { useEffect, useState } from "react";
import axios from "axios";
import FormattedDate from "../../utils/FormattedDate";

const AssignedTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:1111/coordinator/assignedtasks");
      if (res.data.status === "success") {
        // Add "approved" property to track checkbox state
        const updatedTasks = res.data.data.map(task => ({
          ...task,
          approved: false // default unchecked
        }));
        setTasks(updatedTasks);
      }
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleApproved = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].approved = !updatedTasks[index].approved;
    setTasks(updatedTasks);
  };

  if (loading) return <p style={loadingStyle}>Loading assigned tasks...</p>;

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Assigned Tasks</h2>
      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead style={theadStyle}>
            <tr>
              {["S.No.", "Student Name", "Staff Name", "Subject", "Theory", "Lab", "IA1", "IA2", "From Date", "Till Date", "Approved"].map((head, idx) => (
                <th key={idx} style={thStyle}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.mark_id} style={{...trStyle, backgroundColor: index % 2 === 0 ? "#fcfcfc" : "#fff"}}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{task.student_name}</td>
                <td style={tdStyle}>{task.staff_name}</td>
                <td style={tdStyle}>{task.subject_name}</td>
                <td style={tdStyle}>{task.theory_marks}</td>
                <td style={tdStyle}>{task.lab_marks}</td>
                <td style={tdStyle}>{task.IA_1}</td>
                <td style={tdStyle}>{task.IA_2}</td>
                <td style={tdStyle}><FormattedDate dateString={task.start_date} /></td>
                <td style={tdStyle}><FormattedDate dateString={task.till_date} /></td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={task.approved}
                    onChange={() => toggleApproved(index)}
                    style={{ width: "16px", height: "16px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Modern Styling
const containerStyle = {
  padding: "40px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: "#f4f6f8",
  minHeight: "100vh"
};

const headingStyle = {
  marginBottom: "25px",
  fontSize: "28px",
  color: "#222",
  fontWeight: "700"
};

const tableWrapper = {
  overflowX: "auto",
  borderRadius: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  padding: "15px"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "950px"
};

const theadStyle = {
  position: "sticky",
  top: 0,
  backgroundColor: "#f8f9fa",
  zIndex: 1
};

const thStyle = {
  padding: "14px 18px",
  borderBottom: "2px solid #e0e0e0",
  textAlign: "left",
  fontWeight: "600",
  color: "#555",
  letterSpacing: "0.5px"
};

const tdStyle = {
  padding: "12px 18px",
  borderBottom: "1px solid #eee",
  color: "#555",
  transition: "all 0.2s ease"
};

const trStyle = {
  transition: "background-color 0.3s, transform 0.2s",
  cursor: "default",
  ":hover": {
    backgroundColor: "#f1f5f9",
    transform: "scale(1.01)"
  }
};

const loadingStyle = {
  textAlign: "center",
  marginTop: "60px",
  fontSize: "18px",
  color: "#777"
};

export default AssignedTask;
