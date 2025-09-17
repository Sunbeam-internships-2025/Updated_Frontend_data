// import React from "react";
// import Navbar from "../components/Navbar";
// import "../App.css";

// const StaffDashboard = () => {
//   const staffName = localStorage.getItem("staffName");

//   return (
//     <div>
//       <Navbar />
//       <div className="staff-dashboard">
//         <h1>Welcome to Staff Dashboard</h1>
//         <p>Hello {staffName}, you are logged in as Staff.</p>
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;




// import React from "react";
// import Navbar from "../components/Navbar";
// import "../App.css";

// const StaffDashboard = ({ staff, setStaff }) => {
//   const staffName = localStorage.getItem("staffName");

//   return (
//     <div>
//       {/* Pass staff state to Navbar */}
//       <Navbar staff={staff} setStaff={setStaff} />
//       <div className="staff-dashboard">
//         <h1>Welcome to Staff Dashboard</h1>
//         <p>Hello {staffName}, you are logged in as Staff.</p>
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;



import React from "react";
import "../../App.css";

const StaffDashboard = ({ staff }) => {
  const staffName = staff?.name || localStorage.getItem("staffName");

  return (
    <div className="staff-dashboard">
      <h1>Welcome to Staff Dashboard</h1>
      <p>Hello {staffName}, you are logged in as Staff.</p>
    </div>
  );
};

export default StaffDashboard;
