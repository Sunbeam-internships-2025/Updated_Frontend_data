



// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// //import Footer from "./components/Footer";
// import Home from "./pages/Home";

// // Student Pages
// import StudentLogin from "./pages/student/StudentLogin";
// import StudentRegister from "./pages/student/StudentRegister";
// import StudentHome from "./pages/student/StudentHome";
// import StudentMarks from "./pages/student/StudentMarks";

// // Staff / Mentor / Coordinator / Admin Pages
// import StaffLogin from "./pages/staff/StaffLogin";
// import StaffRegister from "./pages/staff/StaffRegister";
// import StaffDashboard from "./pages/staff/StaffDashboard";
// import MentorHome from "./pages/Mentor/MentorHome";
// import CoordinatorHome from "./pages/Coordinator/CoordinatorHome";
// import AdminHome from "./pages/admin/AdminHome";

// // Shared Pages
// import ShowStudents from "./pages/shared/ShowStudent";
// import AddMarksScheme from "./pages/shared/AddMarksScheme";
// import AddEvaluation from "./pages/shared/AddEvaluation";
// import AssignedTask from "./pages/shared/AssignedTask";
// import CompletedTask from "./pages/shared/CompletedTask";

// // Toastify
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [student, setStudent] = useState(null);
//   const [staff, setStaff] = useState(null);
//   const [mentor, setMentor] = useState(null);
//   const [coordinator, setCoordinator] = useState(null);
//   const [admin, setAdmin] = useState(null);

//   // Load roles from localStorage to persist sessions
//   useEffect(() => {
//     const studentName = localStorage.getItem("studentName");
//     const staffName = localStorage.getItem("staffName");
//     const mentorName = localStorage.getItem("mentorName");
//     const coordinatorName = localStorage.getItem("coordinatorName");
//     const adminName = localStorage.getItem("adminName");

//     if (studentName) setStudent({ name: studentName });
//     if (staffName) setStaff({ name: staffName });
//     if (mentorName) setMentor({ name: mentorName });
//     if (coordinatorName) setCoordinator({ name: coordinatorName });
//     if (adminName) setAdmin({ name: adminName });
//   }, []);

//   return (
//     <Router>
//       {/* Navbar visible for all roles */}
//       <Navbar
//         student={student} setStudent={setStudent}
//         staff={staff} setStaff={setStaff}
//         mentor={mentor} setMentor={setMentor}
//         coordinator={coordinator} setCoordinator={setCoordinator}
//         admin={admin} setAdmin={setAdmin}
//       />

//       <Routes>
//         {/* General Home */}
//         <Route path="/" element={<Home />} />

//         {/* Student */}
//         <Route path="/student/studentlogin" element={<StudentLogin setStudent={setStudent} />} />
//         <Route path="/student/studentregister" element={<StudentRegister />} />
//         <Route path="/student/studenthome" element={<StudentHome student={student} />} />
//         <Route path="/student/studentmarks" element={<StudentMarks />} />

//         {/* Staff / Mentor / Coordinator / Admin Login */}
//         <Route
//           path="/staff/stafflogin"
//           element={
//             <StaffLogin
//               setStaff={setStaff}
//               setMentor={setMentor}
//               setCoordinator={setCoordinator}
//               setAdmin={setAdmin}
//             />
//           }
//         />
//         <Route path="/staff/staffregister" element={<StaffRegister />} />
//         <Route path="/staff/dashboard" element={<StaffDashboard staff={staff} />} />

//         {/* Mentor */}
//         <Route path="/mentor/home" element={<MentorHome mentor={mentor} />} />

//         {/* Coordinator */}
//         <Route path="/coordinator/home" element={<CoordinatorHome coordinator={coordinator} />} />

//         {/* Admin */}
//         <Route path="/admin/home" element={<AdminHome admin={admin} />} />

//         {/* Shared Pages */}
//         <Route path="/shared/showstudents" element={<ShowStudents />} />
//         <Route path="/shared/addmarksscheme" element={<AddMarksScheme />} />
//         <Route path="/shared/addevaluation" element={<AddEvaluation />} />
//         <Route path="/shared/assignedtask" element={<AssignedTask />} />
//         <Route path="/shared/completedtask" element={<CompletedTask />} />
//       </Routes>

//       {/* <Footer /> */}

//       <ToastContainer />
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Batch from "./pages/Batch";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import Group from "./pages/Group";
import Module from "./pages/Module";

// Student Pages
import StudentLogin from "./pages/student/StudentLogin";
import StudentRegister from "./pages/student/StudentRegister";
import StudentHome from "./pages/student/StudentHome";
import StudentMarks from "./pages/student/StudentMarks";


// Staff / Mentor / Coordinator / Admin Pages
import StaffLogin from "./pages/staff/StaffLogin";
import StaffRegister from "./pages/staff/StaffRegister";
import StaffDashboard from "./pages/staff/StaffDashboard";
import MentorHome from "./pages/Mentor/MentorHome";
import CoordinatorHome from "./pages/Coordinator/CoordinatorHome";
import AdminHome from "./pages/admin/AdminHome";

// Shared Pages
import ShowStudents from "./pages/admin/ShowStudent";
import AddMarksScheme from "./pages/shared/AddMarksScheme";

//import AddEvaluation from "./pages/shared/AddEvaluation";
import AddEvaluation from "./pages/Coordinator/AddEvaluation";

//import AssignedTask from "./pages/shared/AssignedTask";
import AssignedTask from "./pages/Coordinator/AssignedTask";

import CompletedTask from "./pages/shared/CompletedTask";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [student, setStudent] = useState(null);
  const [staff, setStaff] = useState(null);
  const [mentor, setMentor] = useState(null);
  const [coordinator, setCoordinator] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const studentName = localStorage.getItem("studentName");
    const staffName = localStorage.getItem("staffName");
    const mentorName = localStorage.getItem("mentorName");
    const coordinatorName = localStorage.getItem("coordinatorName");
    const adminName = localStorage.getItem("adminName");

    if (studentName) setStudent({ name: studentName });
    if (staffName) setStaff({ name: staffName });
    if (mentorName) setMentor({ name: mentorName });
    if (coordinatorName) setCoordinator({ name: coordinatorName });
    if (adminName) setAdmin({ name: adminName });
  }, []);

  return (
    <Router>
      <Navbar
        student={student} setStudent={setStudent}
        staff={staff} setStaff={setStaff}
        mentor={mentor} setMentor={setMentor}
        coordinator={coordinator} setCoordinator={setCoordinator}
        admin={admin} setAdmin={setAdmin}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Student */}
        <Route path="/student/studentlogin" element={<StudentLogin setStudent={setStudent} />} />
        <Route path="/student/studentregister" element={<StudentRegister />} />
        <Route path="/student/studenthome" element={<StudentHome student={student} />} />
        <Route path="/student/studentmarks" element={<StudentMarks />} />

        <Route path="/admin/showstudents" element={<ShowStudents />} />

        {/* Staff / Mentor / Coordinator / Admin */}
        <Route path="/staff/stafflogin" element={<StaffLogin setStaff={setStaff} setMentor={setMentor} setCoordinator={setCoordinator} setAdmin={setAdmin} />} />
        <Route path="/staff/staffregister" element={<StaffRegister />} />
        <Route path="/staff/dashboard" element={<StaffDashboard staff={staff} />} />
        <Route path="/mentor/home" element={<MentorHome mentor={mentor} />} />
        <Route path="/coordinator/home" element={<CoordinatorHome coordinator={coordinator} />} />
        <Route path="/admin/home" element={<AdminHome admin={admin} />} />

        <Route path="/coordinator/assignedtask" element={<AssignedTask />} />
        <Route path="/coordinator/addevaluation" element={<AddEvaluation />} />
        <Route path="/coordinator/completedtask" element={<CompletedTask />} />



        {/* Batch and Course routes */}
        <Route path="/admin/batch" element={<Batch />} />
        <Route path="/admin/course" element={<Course />} />

        {/* Shared Pages */}
        <Route path="/admin/showstudents" element={<ShowStudents />} />
        <Route path="/shared/addmarksscheme" element={<AddMarksScheme />} />
        {/* <Route path="/shared/addevaluation" element={<AddEvaluation />} /> */}
        {/* <Route path="/shared/assignedtask" element={<AssignedTask />} /> */}
        {/* <Route path="/shared/completedtask" element={<CompletedTask />} /> */}

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="staff" element={<Staff />} />
        <Route path="batch" element={<Batch />} />
        <Route path="course" element={<Course />} />
        <Route path="group" element={<Group />} />
        <Route path="module" element={<Module/>}/>

      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
