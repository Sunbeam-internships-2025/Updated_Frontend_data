// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const StaffRegister = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     mobile_number: "",
//     email: "",
//     password: "",
//     role_id: "4", // Default role_id for Staff
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       // Register staff
//       const response = await fetch("http://localhost:7777/staff/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         return toast.error(data.message || "Registration Failed!");
//       }

//       toast.success(`Staff Registered Successfully! Staff ID: ${data.staff_id}`);

//       // Reset form
//       setFormData({
//         first_name: "",
//         last_name: "",
//         mobile_number: "",
//         email: "",
//         password: "",
//         role_id: "4",
//       });
//     } catch (err) {
//       toast.error("Something went wrong! Check backend or CORS.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Staff Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           name="first_name"
//           placeholder="First Name"
//           value={formData.first_name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="last_name"
//           placeholder="Last Name"
//           value={formData.last_name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="mobile_number"
//           placeholder="Mobile Number"
//           value={formData.mobile_number}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default StaffRegister;



import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../App.css"; // add custom css

const StaffRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    password: "",
    role_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1111/staff/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.message || "Registration Failed!");
      }

      toast.success(data.message);

      setFormData({
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        password: "",
        role_id: "",
      });
    } catch (err) {
      toast.error("Something went wrong! Check backend or CORS.");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Staff Member Registration</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
           style={{
            width: "380px",
          }}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
           style={{
            width: "380px",
          }}
        />
        <input
          type="text"
          name="mobile_number"
          placeholder="Mobile Number"
          value={formData.mobile_number}
          onChange={handleChange}
          required
           style={{
            width: "380px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "380px",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: "380px",
          }}
        />

        {/* Professional Dropdown */}
        <select
          className="role-dropdown"
          name="role_id"
          value={formData.role_id}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Role --</option>
          <option value="1">Admin</option>
          <option value="2">Coordinator</option>
          <option value="3">Mentor</option>
          <option value="4">Staff</option>
        </select>

        {/* Register Button */}
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default StaffRegister;
