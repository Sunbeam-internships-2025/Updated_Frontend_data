
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// //import { toast } from "react-toastify";
// import { toast, ToastContainer } from "react-toastify";

// const StudentLogin = ({ setStudent }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:1111/student/login", {
//         email: email.trim(),
//         password: password.trim(),
//       });

//       if (response.data.status === "Success") {
//         const studentData = response.data.user;

//         const student = {
//           id: studentData.user_id,
//           name: studentData.first_name + " " + studentData.last_name,
//           email: studentData.email,
//         };

//         // Save in localStorage
//         localStorage.setItem("studentName", student.name);
//         localStorage.setItem("studentId", student.id);

//         // Update App state
//         setStudent(student);

//         // Show success toast
//         toast.success("Login successful!");

//         // Redirect to /student/home
//         navigate("/student/home");
//       } else {
//         toast.error(response.data.message || "Invalid email or password");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Student Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//            style={{
//             width: "380px",
//           }}
          
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{
//             width: "380px",
//           }}
//         />
//         <button type="submit">Login</button>
//       </form>

//        {/* Toast container */}
//             <ToastContainer 
//             />
            
//     </div>
//   );
// };

// export default StudentLogin;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentLogin = ({ setStudent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1111/student/login", {
        email: email.trim(),
        password: password.trim(),
      });

      if (response.data.status === "Success") {
        const studentData = response.data.data; // ✅ Correct key

        const student = {
          id: studentData.user_id,
          name: studentData.first_name + " " + studentData.last_name,
          email: studentData.email,
        };

        // Save in localStorage
        localStorage.setItem("studentName", student.name);
        localStorage.setItem("studentId", student.id);

        // Update App state
        setStudent(student);

        // Show success toast
        toast.success("Login successful!");

        // Redirect to /student/home
        navigate("/student/home");
      } else {
        toast.error(response.data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error.response || error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container" style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "380px", marginBottom: "10px", padding: "8px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "380px", marginBottom: "10px", padding: "8px" }}
        />
        <br />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>Login</button>
      </form>

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default StudentLogin;
