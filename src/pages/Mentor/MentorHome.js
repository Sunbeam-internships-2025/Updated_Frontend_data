


// import React from "react";

// function MentorHome({ mentor }) {
//   return (
//     <main style={{ padding: "20px" }}>
//       <h1 style={{ color: "white", fontWeight: "bold" }}>Mentor Dashboard</h1>
//       {mentor ? (
//         <p>
//           <span style={{ color: "white", fontWeight: "bold" }}>
//             Welcome, {mentor.name}!
//           </span>{" "}
//           Use the <b>Actions ▼</b> menu above to manage students and marks.
//         </p>
//       ) : (
//         <p style={{ color: "white" }}>
//           This is Mentor Home Page. Please log in to access features.
//         </p>
//       )}
//     </main>
//   );
// }

// export default MentorHome;


// import React from "react";

// function MentorHome({ mentor }) {
//   return (
//     <main style={{ padding: "20px" }}>
//       <h1 style={{ color: "Black", fontWeight: "bold" }}>Mentor Dashboard</h1>

//       {mentor ? (
//         <p>
//           <span style={{ color: "Black", fontWeight: "bold" }}>
//             Welcome, {mentor.name}!
//           </span>{" "}
//           This is mentor Home Page
//         </p>
//       ) : (
//         <p style={{ color: "Black" }}>
//           This is Mentor Home Page. Please log in to access features.
//         </p>
//       )}
//     </main>
//   );
// }

// export default MentorHome;







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

const MentorHome = () => {
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
          <h2>Welcome, {coordinatorName}! This is Mentor Home Page</h2>
          <p
            style={{
              fontSize: "18px",
              color: "#555",
              maxWidth: "700px",
              margin: "10px auto",
              textAlign: "center",
              paddingBottom: "20px"
            }}
          >
            If you want to go this pages then please click action in Navbar.
          </p>

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

export default MentorHome;

