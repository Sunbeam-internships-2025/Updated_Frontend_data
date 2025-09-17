


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


  const renderRoleNavbar = (role, name, homePath) => (
  <>
    <Link to={homePath} style={{ marginRight: "15px" }}>Home</Link>
    
    <div className="dropdown" style={{ display: "inline-block", marginRight: "15px" }}>
      <button className="dropbtn">Actions</button>
      <div className="dropdown-content">
        <Link to="/admin/showstudents">Show Student</Link>
        <Link to="/shared/addmarksscheme">Add Marks Scheme</Link>

        {role === "coordinator" ? (
          <>
            {/* <Link to="/coordinator/addevaluation">Add Evaluation</Link> */}
            <Link to="/coordinator/assignedtask">Assigned Task</Link>
            <Link to="/coordinator/addevaluation">Add Evaluation</Link>
            <Link to="/coordinator/completedtask">Show Completed Task</Link>
          </>
        ) : (
          <>
            {/* <Link to="/shared/addevaluation">Add Evaluation</Link> */}
            <Link to="/shared/assignedtask">Assigned Task</Link>
            {/* <Link to="/shared/completedtask">Show Completed Task</Link> */}
          </>
        )}
      </div>
    </div>

    <button className="logout-btn" onClick={() => handleLogout(role)}>Logout</button>
    <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>
      Welcome, {name}
    </span>
  </>
);


  // const renderRoleNavbar = (role, name, homePath) => (
  //   <>
  //     <Link to={homePath} style={{ marginRight: "15px" }}>Home</Link>
      
  //     <div className="dropdown" style={{ display: "inline-block", marginRight: "15px" }}>
  //       <button className="dropbtn">Actions</button>
  //       <div className="dropdown-content">
  //         <Link to="/admin/showstudents">Show Student</Link>
  //         <Link to="/shared/addmarksscheme">Add Marks Scheme</Link>
  //         {/* <Link to="/shared/addevaluation">Add Evaluation</Link> */}
  //         <Link to="/coordinator/addevaluation">Add Evaluation</Link>
  //         <Link to="/shared/assignedtask">Assigned Task</Link>
  //         <Link to="/shared/completedtask">Show Completed Task</Link>
  //       </div>
  //   </div>
  //     <button className="logout-btn" onClick={() => handleLogout(role)}>Logout</button>
  //     <span style={{ marginLeft: "15px", color: "white", fontWeight: "bold" }}>
  //       Welcome, {name}
  //     </span>
  //   </>
  // );

// Links for guests (not logged in)
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
  <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: /*#1F2937*/ "#004080", color: "white" }}>
    <div className="navbar-left" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Online Mark Entry Portal</Link>
    </div>

    <div className="navbar-right" style={{ display: "flex", alignItems: "center" }}>
      {admin ? renderRoleNavbar("admin", admin.name, "/admin/home") :
        coordinator ? renderRoleNavbar("coordinator", coordinator.name, "/coordinator/home") :
          mentor ? renderRoleNavbar("mentor", mentor.name, "/mentor/home") :
            staff ? renderRoleNavbar("staff", staff.name, "/staff/dashboard") :
              student ? (
                <>
                  <Link to="/student/studenthome" style={{ marginRight: "15px" }}>Home</Link>
                  <Link to="/student/studentmarks" style={{ marginRight: "15px" }}>Show Marks</Link>
                  <button className="logout-btn" onClick={() => handleLogout("student")}>Logout</button>
                </>
              ) : guestLinks()
      }
    </div>
  </nav>
);
};

export default Navbar;
