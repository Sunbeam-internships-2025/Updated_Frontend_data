


import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css"; // import CSS file

const cardData = [
  { title: "Show Student", color: "#1abc9c" },
  { title: "Add Marks Scheme", color: "#3498db" },
  { title: "Add Evaluation", color: "#e74c3c" },
  { title: "Assigned Task", color: "#f1c40f" },
  { title: "Show Completed Task", color: "#9b59b6" },
];

const CoordinatorHome = () => {
  const [coordinatorName, setCoordinatorName] = useState("");

  useEffect(() => {
    // Replace 1 with actual coordinator id from session/login
    axios.get("http://localhost:5000/coordinator/info/1")
      .then((res) => setCoordinatorName(res.data.name))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="coordinator-home">
      <div className="container">
        <div className="welcome">
          <h2>Welcome, {coordinatorName}! This is Coordinator Home Page</h2>
        </div>
        <div className="cards">
          {cardData.map((card, index) => (
            <div key={index} className="card" style={{ backgroundColor: card.color }}>
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorHome;



// import React from "react";

// function CoordinatorHome({ coordinator }) {
//   return (
//     <main style={{ padding: "20px" }}>
//       <h1 style={{ color: "white", fontWeight: "bold" }}>Coordinator Dashboard</h1>

//       {coordinator ? (
//         <p>
//           <span style={{ color: "white", fontWeight: "bold" }}>
//             Welcome, {coordinator.name}!
//           </span>{" "}
//           Use the <b>Actions ▼</b> menu above to manage students, evaluations, and tasks.
//         </p>
//       ) : (
//         <p style={{ color: "white" }}>
//           This is Coordinator Home Page. Please log in to access features.
//         </p>
//       )}
//     </main>
//   );
// }

// export default CoordinatorHome;
