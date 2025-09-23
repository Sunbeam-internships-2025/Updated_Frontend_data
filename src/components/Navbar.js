

// // Navbar.js
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../App.css";

// const Navbar = ({
//   student, setStudent,
//   staff, setStaff,
//   mentor, setMentor,
//   coordinator, setCoordinator,
//   admin, setAdmin
// }) => {
//   const navigate = useNavigate();

//   const handleLogout = (role) => {
//     switch (role) {
//       case "student":
//         localStorage.removeItem("studentName");
//         setStudent(null);
//         navigate("/student/studentlogin");
//         break;
//       case "staff":
//         localStorage.removeItem("staffName");
//         setStaff(null);
//         navigate("/staff/stafflogin");
//         break;
//       case "mentor":
//         localStorage.removeItem("mentorName");
//         setMentor(null);
//         navigate("/mentor/home");
//         break;
//       case "coordinator":
//         localStorage.removeItem("coordinatorName");
//         setCoordinator(null);
//         navigate("/coordinator/home");
//         break;
//       case "admin":
//         localStorage.removeItem("adminName");
//         setAdmin(null);
//         navigate("/admin/home");
//         break;
//       default:
//         break;
//     }
//   };

//   const renderCoordinatorNavbar = () => (
//     <>
//       <Link to="/coordinator/home" style={{ marginRight: "15px" }}>Home</Link>
//       <div className="dropdown" style={{ display: "inline-block", marginRight: "15px" }}>
//         <button className="dropbtn">Actions</button>
//         <div className="dropdown-content">
//           <Link to="/coordinator/show-students">Show Students</Link>
//           <Link to="/coordinator/add-marks-scheme">Add Marks Scheme</Link>
//           <Link to="/coordinator/assignedtask">Assigned Task</Link>
//           <Link to="/coordinator/addevaluation">Add Evaluation</Link>
//           <Link to="/coordinator/completedtask">Completed Tasks</Link>
//         </div>
//       </div>
//       <button className="logout-btn" onClick={() => handleLogout("coordinator")}>Logout</button>
//       <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {coordinator.name}</span>
//     </>
//   );

//   const renderAdminNavbar = () => (
//     <>
//       <Link to="/admin/home" style={{ marginRight: "15px" }}>Home</Link>
//       <div className="dropdown" style={{ display: "inline-block", marginRight: "15px" }}>
//         <button className="dropbtn">Actions</button>
//         <div className="dropdown-content">
//           <Link to="/admin/showstudents">Show Students</Link>
//           <Link to="/admin/batch">Batch</Link>
//           <Link to="/admin/course">Course</Link>
//         </div>
//       </div>
//       <button className="logout-btn" onClick={() => handleLogout("admin")}>Logout</button>
//       <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {admin.name}</span>
//     </>
//   );

//   const renderMentorNavbar = () => (
//     <>
//       <Link to="/mentor/home" style={{ marginRight: "15px" }}>Home</Link>
//       <button className="logout-btn" onClick={() => handleLogout("mentor")}>Logout</button>
//       <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {mentor.name}</span>
//     </>
//   );

//   const renderStaffNavbar = () => (
//     <>
//       <Link to="/staff/dashboard" style={{ marginRight: "15px" }}>Dashboard</Link>
//       <button className="logout-btn" onClick={() => handleLogout("staff")}>Logout</button>
//       <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {staff.name}</span>
//     </>
//   );

//   const renderStudentNavbar = () => (
//     <>
//       <Link to="/student/studenthome" style={{ marginRight: "15px" }}>Home</Link>
//       <Link to="/student/studentmarks" style={{ marginRight: "15px" }}>Show Marks</Link>
//       <button className="logout-btn" onClick={() => handleLogout("student")}>Logout</button>
//       <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {student.name}</span>
//     </>
//   );

//   const guestLinks = () => (
//     <>
//       <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
//       <Link to="/student/studentregister" style={{ marginRight: "15px" }}>Student Register</Link>
//       <Link to="/student/studentlogin" style={{ marginRight: "15px" }}>Student Login</Link>
//       <Link to="/staff/staffregister" style={{ marginRight: "15px" }}>Staff Register</Link>
//       <Link to="/staff/stafflogin" style={{ marginRight: "15px" }}>Staff Login</Link>
//     </>
//   );

//   return (
//     <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#004080", color: "white" }}>
//       <div className="navbar-left" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
//         <Link to="/" style={{ color: "white", textDecoration: "none" }}>Online Mark Entry Portal</Link>
//       </div>
//       <div className="navbar-right" style={{ display: "flex", alignItems: "center" }}>
//         {coordinator ? renderCoordinatorNavbar() :
//           admin ? renderAdminNavbar() :
//           mentor ? renderMentorNavbar() :
//           staff ? renderStaffNavbar() :
//           student ? renderStudentNavbar() :
//           guestLinks()
//         }
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = ({
  student, setStudent,
  staff, setStaff,
  mentor, setMentor,
  coordinator, setCoordinator,
  admin, setAdmin
}) => {
  const navigate = useNavigate();

  const handleLogout = (role) => {
    switch (role) {
      case "student":
        localStorage.removeItem("studentName");
        setStudent(null);
        navigate("/student/studentlogin");
        break;
      case "staff":
        localStorage.removeItem("staffName");
        setStaff(null);
        navigate("/staff/stafflogin");
        break;
      case "mentor":
        localStorage.removeItem("mentorName");
        setMentor(null);
        navigate("/mentor/home");
        break;
      case "coordinator":
        localStorage.removeItem("coordinatorName");
        setCoordinator(null);
        navigate("/coordinator/home");
        break;
      case "admin":
        localStorage.removeItem("adminName");
        setAdmin(null);
        navigate("/admin/home");
        break;
      default:
        break;
    }
  };

  const renderMentorNavbar = () => (
    <>
      <Link to="/mentor/home" style={{ marginRight: "15px" }}>Home</Link>
      <div className="dropdown" style={{ display: "inline-block", marginRight: "15px" }}>
        <button className="dropbtn">Actions</button>
        <div className="dropdown-content">
          <Link to="/mentor/pending-task">Pending Task</Link>
          <Link to="/mentor/completed-task">Completed Task</Link>
        </div>
      </div>
      <button className="logout-btn" onClick={() => handleLogout("mentor")}>Logout</button>
      <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {mentor.name}</span>
    </>
  );

  const renderCoordinatorNavbar = () => (
    <>
      <Link to="/coordinator/home" style={{ marginRight: "15px" }}>Home</Link>
      <div className="dropdown" style={{ display: "inline-block", marginRight: "15px" }}>
        <button className="dropbtn">Actions</button>
        <div className="dropdown-content">
          <Link to="/coordinator/show-students">Show Students</Link>
          <Link to="/coordinator/add-marks-scheme">Add Marks Scheme</Link>
          <Link to="/coordinator/assignedtask">Assigned Task</Link>
          <Link to="/coordinator/addevaluation">Add Evaluation</Link>
          <Link to="/coordinator/completedtask">Completed Tasks</Link>
        </div>
      </div>
      <button className="logout-btn" onClick={() => handleLogout("coordinator")}>Logout</button>
      <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {coordinator.name}</span>
    </>
  );

  const renderAdminNavbar = () => (
    <>
      <Link to="/admin/home" style={{ marginRight: "15px" }}>Home</Link>
      <div className="dropdown" style={{ display: "inline-block", marginRight: "15px" }}>
        <button className="dropbtn">Actions</button>
        <div className="dropdown-content">
          <Link to="/admin/showstudents">Show Students</Link>
          <Link to="/admin/batch">Batch</Link>
          <Link to="/admin/course">Course</Link>
        </div>
      </div>
      <button className="logout-btn" onClick={() => handleLogout("admin")}>Logout</button>
      <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {admin.name}</span>
    </>
  );

  const renderStaffNavbar = () => (
    <>
      <Link to="/staff/dashboard" style={{ marginRight: "15px" }}>Dashboard</Link>
      <button className="logout-btn" onClick={() => handleLogout("staff")}>Logout</button>
      <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {staff.name}</span>
    </>
  );

  const renderStudentNavbar = () => (
    <>
      <Link to="/student/studenthome" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/student/studentmarks" style={{ marginRight: "15px" }}>Show Marks</Link>
      <button className="logout-btn" onClick={() => handleLogout("student")}>Logout</button>
      <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>Welcome, {student.name}</span>
    </>
  );

  const guestLinks = () => (
    <>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/student/studentregister" style={{ marginRight: "15px" }}>Student Register</Link>
      <Link to="/student/studentlogin" style={{ marginRight: "15px" }}>Student Login</Link>
      <Link to="/staff/staffregister" style={{ marginRight: "15px" }}>Staff Register</Link>
      <Link to="/staff/stafflogin" style={{ marginRight: "15px" }}>Staff Login</Link>
    </>
  );

  return (
    <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#004080", color: "white" }}>
      <div className="navbar-left" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Online Mark Entry Portal</Link>
      </div>
      <div className="navbar-right" style={{ display: "flex", alignItems: "center" }}>
        {coordinator ? renderCoordinatorNavbar() :
          admin ? renderAdminNavbar() :
          mentor ? renderMentorNavbar() :
          staff ? renderStaffNavbar() :
          student ? renderStudentNavbar() :
          guestLinks()
        }
      </div>
    </nav>
  );
};

export default Navbar;











