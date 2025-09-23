



// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute"; // if using this for protection

// Existing imports...
import Home from "./pages/Home";
import Batch from "./pages/Batch";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import Group from "./pages/Group";
import Module from "./pages/Module";
import ShowallStudent from "./pages/ShowallStudent"; 

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
import AdminHome from "./pages/admin/AdminHome";
import CoordinatorHome from "./pages/Coordinator/CoordinatorHome";

// Mentor specific pages
import MentorPendingTask from "./pages/Mentor/Mentor_pendingTask";
import MentorCompletedTask from "./pages/Mentor/Mentor_completedTask";

// Coordinator specific pages
import CoordAddMarksScheme from "./pages/Coordinator/Coord_addMarksScheme";
import CoordShowStudent from "./pages/Coordinator/Coord_showStudent";

// Shared Pages
import ShowStudents from "./pages/admin/ShowStudent";
import AddMarksScheme from "./pages/shared/AddMarksScheme";
import AddEvaluation from "./pages/Coordinator/AddEvaluation";
import AssignedTask from "./pages/Coordinator/AssignedTask";
//import CompletedTask from "./pages/shared/CompletedTask";
import CompletedTask from "./pages/Coordinator/CompletedTask";


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

        {/* Student Routes */}
        <Route path="/student/studentlogin" element={<StudentLogin setStudent={setStudent} />} />
        <Route path="/student/studentregister" element={<StudentRegister />} />
        <Route path="/student/studenthome" element={<StudentHome student={student} />} />
        <Route path="/student/studentmarks" element={<StudentMarks />} />

        {/* Admin Routes */}
        <Route path="/admin/showstudents" element={<ShowStudents />} />
        <Route path="/admin/home" element={<AdminHome admin={admin} />} />
        <Route path="/admin/batch" element={<Batch />} />
        <Route path="/admin/course" element={<Course />} />

        {/* Staff Routes */}
        <Route path="/staff/stafflogin" element={<StaffLogin setStaff={setStaff} setMentor={setMentor} setCoordinator={setCoordinator} setAdmin={setAdmin} />} />
        <Route path="/staff/staffregister" element={<StaffRegister />} />
        <Route path="/staff/dashboard" element={<StaffDashboard staff={staff} />} />

        {/* Mentor Routes */}
        <Route path="/mentor/home" element={<MentorHome mentor={mentor} />} />
        <Route path="/mentor/pending-task" element={<MentorPendingTask />} />
        <Route path="/mentor/completed-task" element={<MentorCompletedTask />} />

        {/* Coordinator Routes */}
        <Route path="/coordinator/home" element={<CoordinatorHome coordinator={coordinator} />} />
        <Route path="/coordinator/show-students" element={
          <ProtectedRoute coordinator={coordinator}>
            <CoordShowStudent />
          </ProtectedRoute>
        } />
        <Route path="/coordinator/add-marks-scheme" element={
          <ProtectedRoute coordinator={coordinator}>
            <CoordAddMarksScheme />
          </ProtectedRoute>
        } />
        <Route path="/coordinator/assignedtask" element={
          <ProtectedRoute coordinator={coordinator}>
            <AssignedTask />
          </ProtectedRoute>
        } />
        <Route path="/coordinator/addevaluation" element={
          <ProtectedRoute coordinator={coordinator}>
            <AddEvaluation />
          </ProtectedRoute>
        } />
        <Route path="/coordinator/completedtask" element={
          <ProtectedRoute coordinator={coordinator}>
            <CompletedTask />
          </ProtectedRoute>
        } />

        {/* Shared Pages */}
        <Route path="/shared/addmarksscheme" element={<AddMarksScheme />} />

        {/* Miscellaneous */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/group" element={<Group />} />
        <Route path="/module" element={<Module />} />

        <Route path="/students" element={<ShowallStudent />} />

      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
