


import React, { useState } from "react";
import { toast } from "react-toastify";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Register student
      const response = await fetch("http://localhost:1111/student/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.message || "Registration Failed!");
      }

      // ✅ Only show registration success
      toast.success(`Registration Successful! Student ID: ${data.student_id}`);

      // Optional: Reset form
      setFormData({
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        password: "",
      });

    } catch (err) {
      toast.error("Something went wrong! Check backend or CORS.");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Student Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegister;
















