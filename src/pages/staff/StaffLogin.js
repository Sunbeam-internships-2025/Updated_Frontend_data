
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const StaffLogin = ({ setStaff, setMentor, setCoordinator, setAdmin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please enter email and password");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:7777/staff/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const { role_id, first_name } = data.staff;

//         toast.success(`Welcome ${first_name}!`);

//         // Save user in localStorage
//         localStorage.setItem("user", JSON.stringify(data.staff));

//         // Redirect & set state based on role
//         switch (role_id) {
//           case 2: // staff
//             setStaff({ name: first_name });
//             navigate("/staff/dashboard");
//             break;
//           case 3: // mentor
//             setMentor({ name: first_name });
//             navigate("/mentor/home");
//             break;
//           case 4: // coordinator
//             setCoordinator({ name: first_name });
//             navigate("/coordinator/home");
//             break;
//           case 5: // admin
//             setAdmin({ name: first_name });
//             navigate("/admin/home");
//             break;
//           default:
//             toast.error("Unauthorized role");
//             navigate("/");
//         }
//       } else {
//         toast.error(data.message || "Invalid credentials!");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="form-container" style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Staff / Mentor / Coordinator / Admin Login</h2>
//       <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
//         <input 
//           type="email" 
//           placeholder="Email"
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//           style={{ marginBottom: "15px", padding: "10px", fontSize: "16px" }}
//         />
//         <input 
//           type="password" 
//           placeholder="Password"
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//           style={{ marginBottom: "15px", padding: "10px", fontSize: "16px" }}
//         />
//         <button type="submit" style={{ padding: "10px", fontSize: "16px", backgroundColor: "#1e90ff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StaffLogin;







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const StaffLogin = ({ setStaff, setMentor, setCoordinator, setAdmin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please enter email and password");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:7777/staff/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const { role_id, first_name } = data.staff;

//         // Role-based handling
//         switch (role_id) {
//           case 2: // staff
//             localStorage.setItem("staffName", first_name);
//             setStaff({ name: first_name });
//             toast.success(`Welcome Staff ${first_name}!`);
//             navigate("/staff/dashboard");
//             break;
//           case 3: // mentor
//             localStorage.setItem("mentorName", first_name);
//             setMentor({ name: first_name });
//             toast.success(`Welcome Mentor ${first_name}!`);
//             navigate("/mentor/home");
//             break;
//           case 4: // coordinator
//             localStorage.setItem("coordinatorName", first_name);
//             setCoordinator({ name: first_name });
//             toast.success(`Welcome Coordinator ${first_name}!`);
//             navigate("/coordinator/home");
//             break;
//           case 5: // admin
//             localStorage.setItem("adminName", first_name);
//             setAdmin({ name: first_name });
//             toast.success(`Welcome Admin ${first_name}!`);
//             navigate("/admin/home");
//             break;
//           default:
//             toast.error("Unauthorized role! Please login with a valid staff/mentor/coordinator/admin account.");
//             break;
//         }
//       } else {
//         toast.error(data.message || "Invalid credentials!");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="form-container" style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Staff / Mentor / Coordinator / Admin Login</h2>
//       <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{ marginBottom: "15px", padding: "10px", fontSize: "16px" }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ marginBottom: "15px", padding: "10px", fontSize: "16px" }}
//         />
//         <button type="submit" style={{ padding: "10px", fontSize: "16px", backgroundColor: "#1e90ff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StaffLogin;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StaffLogin = ({ setStaff, setMentor, setCoordinator, setAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      // const response = await fetch(/*"http://localhost:7777/staff/login"*/  "http://localhost:1111/staff/login", {
       const response = await fetch("http://localhost:1111/staff/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { role_id, first_name } = data.staff;

        switch (role_id) {
          case 1: // Admin
            localStorage.setItem("adminName", first_name);
            setAdmin({ name: first_name });
            toast.success(`Welcome Admin ${first_name}!`);
            navigate("/admin/home");
            break;
          case 2: // Coordinator
            localStorage.setItem("coordinatorName", first_name);
            setCoordinator({ name: first_name });
            toast.success(`Welcome Coordinator ${first_name}!`);
            navigate("/coordinator/home");
            break;
          case 3: // Mentor
            localStorage.setItem("mentorName", first_name);
            setMentor({ name: first_name });
            toast.success(`Welcome Mentor ${first_name}!`);
            navigate("/mentor/home");
            break;
          case 4: // Staff
            localStorage.setItem("staffName", first_name);
            setStaff({ name: first_name });
            toast.success(`Welcome Staff ${first_name}!`);
            navigate("/staff/dashboard");
            break;
          default:
            toast.error("Unauthorized role!");
        }

      } else {
        toast.error(data.message || "Invalid credentials!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="form-container" style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Staff Member Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "15px", padding: "10px", fontSize: "16px", width:"385px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "15px", padding: "10px", fontSize: "16px", width:"385px" }}
        />
        <button type="submit" style={{ padding: "10px", fontSize: "16px", backgroundColor: "#004080", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default StaffLogin;
