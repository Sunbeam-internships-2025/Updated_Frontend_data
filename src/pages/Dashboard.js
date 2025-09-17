import React from 'react';

// Sample dashboard stats (replace with API data)
const dashboardStats = [
  { title: "Total Students", value: 120, color: "#4F46E5" },
  { title: "Total Staff", value: 25, color: "#10B981" },
  { title: "Total Courses", value: 8, color: "#F59E0B" },
  { title: "Pending Marks", value: 18, color: "#EF4444" },
];

// Sample recent activities
const recentActivities = [
  { activity: "New student registration", user: "Amit Sharma", date: "2025-08-05", status: "Completed" },
  { activity: "Marks submitted", user: "Priya Patil", date: "2025-08-21", status: "Pending" },
  { activity: "New staff added", user: "Rohit Deshmukh", date: "2025-08-11", status: "Completed" },
];

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", marginBottom: "40px" }}>
        {dashboardStats.map((stat, index) => (
          <div key={index} style={{ backgroundColor: stat.color, color: "white", padding: "20px", borderRadius: "12px" }}>
            <h3>{stat.title}</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{stat.value}</p>
          </div>
        ))}
      </div>
      <h3>Recent Activity</h3>
      <table style={{ width: "100%", backgroundColor: "#374151", color: "white", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#111827" }}>
          <tr>
            <th style={{ padding: "10px" }}>Activity</th>
            <th style={{ padding: "10px" }}>User</th>
            <th style={{ padding: "10px" }}>Date</th>
            <th style={{ padding: "10px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentActivities.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#1F2937" : "transparent" }}>
              <td style={{ padding: "10px" }}>{item.activity}</td>
              <td style={{ padding: "10px" }}>{item.user}</td>
              <td style={{ padding: "10px" }}>{item.date}</td>
              <td style={{ padding: "10px", color: item.status === "Completed" ? "#10B981" : "#F59E0B", fontWeight: "bold" }}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
