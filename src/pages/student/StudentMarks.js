


// // src/pages/student/StudentMarks.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../grade_see.css"; // optional for styling

// const StudentMarks = () => {
//   const [marks, setMarks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMarks = async () => {
//       try {
//         const response = await axios.get("http://localhost:1111/"); // update with your backend URL
//         setMarks(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching marks:", error);
//         setLoading(false);
//       }
//     };

//     fetchMarks();
//   }, []);

//   if (loading) {
//     return <p>Loading marks...</p>;
//   }

//   return (
//     <div className="student-marks-container">
//       <h2>Student Marks</h2>
//       <table className="marks-table">
//         <thead>
//           <tr>
//             <th>Student Name</th>
//             <th>Group Name</th>
//             <th>Module Name</th>
//             <th>Theory Marks</th>
//             <th>Lab Marks</th>
//             <th>IA 1</th>
//             <th>IA 2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marks.length > 0 ? (
//             marks.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.student_name}</td>
//                 <td>{item.group_name}</td>
//                 <td>{item.module_name}</td>
//                 <td>{item.theory_marks}</td>
//                 <td>{item.lab_marks}</td>
//                 <td>{item.IA_1}</td>
//                 <td>{item.IA_2}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7">No marks found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentMarks;






// src/pages/student/StudentMarks.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../grade_see.css"; // optional for styling

const StudentMarks = () => {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        // Correct backend endpoint
        const response = await axios.get("http://localhost:1111/student/marks");
        // Access the "data" array inside the response
        setMarks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching marks:", error);
        setLoading(false);
      }
    };

    fetchMarks();
  }, []);

  if (loading) {
    return <p>Loading marks...</p>;
  }

  return (
    <div className="student-marks-container">
      <h2>Student Marks</h2>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Module Name</th>
            <th>Theory Marks</th>
            <th>Lab Marks</th>
            <th>IA 1</th>
            <th>IA 2</th>
          </tr>
        </thead>
        <tbody>
          {marks && marks.length > 0 ? (
            marks.map((item, index) => (
              <tr key={index}>
                <td>{item.student_name || "-"}</td>
                <td>{item.course_name || "-"}</td>
                <td>{item.module_name || "-"}</td>
                <td>{item.theory_marks ?? "-"}</td>
                <td>{item.lab_marks ?? "-"}</td>
                <td>{item.IA_1 ?? "-"}</td>
                <td>{item.IA_2 ?? "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No marks found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;
