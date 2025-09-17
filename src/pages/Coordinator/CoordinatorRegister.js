import React, { useState } from "react";
import { toast } from "react-toastify";

const CoordinatorRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
    password: "",
    role_id: "2", // <-- Coordinator role_id
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7777/coordinator/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data.message || "Registration Failed!");
      }

      toast.success(`Coordinator Registered Successfully! Coordinator ID: ${data.coordinator_id}`);

      setFormData({
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        password: "",
        role_id: "2", // reset role_id
      });
    } catch (err) {
      toast.error("Something went wrong! Check backend or CORS.");
      console.error(err);
    }
  };

  return (
    <div className="form-container" style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Coordinator Register</h2>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required style={{ marginBottom: "15px", padding: "10px" }} />
        <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required style={{ marginBottom: "15px", padding: "10px" }} />
        <input type="text" name="mobile_number" placeholder="Mobile Number" value={formData.mobile_number} onChange={handleChange} required style={{ marginBottom: "15px", padding: "10px" }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ marginBottom: "15px", padding: "10px" }} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ marginBottom: "15px", padding: "10px" }} />
        <button type="submit" style={{ padding: "10px", fontSize: "16px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Register</button>
      </form>
    </div>
  );
};

export default CoordinatorRegister;
