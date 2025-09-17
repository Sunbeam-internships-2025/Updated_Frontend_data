// import React from "react";

// const Home = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>Welcome To Online Mark Entry Portal</h1>
//       <p>This application allows you to easily manage and enter marks for students.</p>
//       <p>You can navigate through different functionality by login.</p>
//     </div>
//   );
// };

// export default Home;






// import React from "react";

// const Home = () => {
//   return (
//     <main
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "40px 20px",
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//       }}
//     >
//       {/* Header Section */}
//       <header style={{ textAlign: "center", marginBottom: "40px" }}>
//         <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#6156a9ff" }}>
//           Online Mark Entry Portal
//         </h1>
//         <p
//           style={{
//             fontSize: "18px",
//             color: "#555",
//             maxWidth: "700px",
//             margin: "10px auto",
//           }}
//         >
//           A simple and secure platform to manage student performance, streamline
//           assessments, and make academic management more efficient for staff,
//           mentors, and coordinators.
//         </p>
//       </header>

//       {/* Features Section */}
//       <section
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "25px",
//           width: "100%",
//           maxWidth: "1000px",
//         }}
//       >
//         {/* Card 1 */}
//         <div
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             padding: "25px",
//             textAlign: "center",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "22px",
//               color: "#7d5bb1ff",
//               marginBottom: "10px",
//             }}
//           >
//             Role-based Access
//           </h2>
//           <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
//             Login as Staff, Mentor, Coordinator, or Admin with secured
//             authentication and personalized dashboards.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             padding: "25px",
//             textAlign: "center",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "22px",
//               color: "#7d5bb1ff",
//               marginBottom: "10px",
//             }}
//           >
//             Manage Marks
//           </h2>
//           <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
//             Easily add, update, and monitor student mark schemes with full
//             accuracy and efficiency.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             padding: "25px",
//             textAlign: "center",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "22px",
//               color: "#7d5bb1ff",
//               marginBottom: "10px",
//             }}
//           >
//             Track Performance
//           </h2>
//           <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
//             Get a clear overview of student performance through structured data
//             and reporting.
//           </p>
//         </div>
//       </section>

//       {/* Centered Card 4 */}
//       <section
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//           marginTop: "25px",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "12px",
//             padding: "25px",
//             textAlign: "center",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             maxWidth: "350px",
//             width: "100%",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "22px",
//               color: "#7d5bb1ff",
//               marginBottom: "10px",
//             }}
//           >
//             Easy Navigation
//           </h2>
//           <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
//             User-friendly design ensures quick access to all features with
//             minimal effort.
//           </p>
//         </div>
//       </section>

     
//     </main>
//   );
// };

// export default Home;



import React from "react";

const Home = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#6156a9ff" }}>
          Online Mark Entry Portal
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "700px",
            margin: "10px auto",
          }}
        >
          A simple and secure platform to manage student performance, streamline
          assessments, and make academic management more efficient for staff,
          mentors, and coordinators.
        </p>
      </header>

      {/* Features Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #000",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              color: "#7d5bb1ff",
              marginBottom: "10px",
            }}
          >
            Role-based Access
          </h2>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
            Login as Staff, Mentor, Coordinator, or Admin with secured
            authentication and personalized dashboards.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #000",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              color: "#7d5bb1ff",
              marginBottom: "10px",
            }}
          >
            Manage Marks
          </h2>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
            Easily add, update, and monitor student mark schemes with full
            accuracy and efficiency.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #000",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              color: "#7d5bb1ff",
              marginBottom: "10px",
            }}
          >
            Track Performance
          </h2>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
            Get a clear overview of student performance through structured data
            and reporting.
          </p>
        </div>
      </section>

      {/* Centered Card 4 */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #000",
            maxWidth: "350px",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              color: "#7d5bb1ff",
              marginBottom: "10px",
            }}
          >
            Easy Navigation
          </h2>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
            User-friendly design ensures quick access to all features with
            minimal effort.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
