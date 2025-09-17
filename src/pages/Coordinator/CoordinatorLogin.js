import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CoordinatorLogin = ({ setCoordinator }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCoordinatorLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:7777/coordinator/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`Welcome ${data.coordinator.first_name}!`);
        // Save coordinator info to localStorage
        localStorage.setItem("coordinatorName", data.coordinator.first_name);
        localStorage.setItem("coordinatorId", data.coordinator.coordinator_id);
        setCoordinator(data.coordinator.first_name); // update navbar state

        // Redirect to coordinator dashboard/page
        navigate("/coordinator");
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Coordinator Login</h2>
      <form onSubmit={handleCoordinatorLogin} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "15px", padding: "10px", fontSize: "16px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "15px", padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "10px", fontSize: "16px", backgroundColor: "#1e90ff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default CoordinatorLogin;
