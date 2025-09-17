// import React from 'react';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';

// const StudentHome = ({ student }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // clear localStorage or token
//     localStorage.removeItem('studentToken');
//     navigate('/student/login');
//   };

//   const handleShowMarks = () => {
//     navigate('/student/marks');
//   };

//   return (
//     <div>
//       <Navbar studentName={student.name} onLogout={handleLogout} />
//       <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
//         <div>
//           <h2>Welcome, {student.name}</h2>
//           <p>This is the Home page!</p>
//           <p>If you want to check marks, then click "Show Marks".</p>
//         </div>
//         <div>
//           {/* Placeholder for additional info or sidebar */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentHome;


// src/pages/StudentHome.js
import React from "react";

const StudentHome = ({ student }) => {
  // Fallback to localStorage if state is null (refresh scenario)
  const studentName = student?.name || localStorage.getItem("studentName") || "Student";

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
          Welcome, {studentName}!
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          This is your Home page.
        </p>
        <p style={{ fontSize: "18px", color: "#555" }}>
            If You want to check your marks Please click show marks 
        </p>
      </div>
    </div>
  );
};

export default StudentHome;
