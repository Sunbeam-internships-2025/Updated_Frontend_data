// src/pages/Coordinator/Coord_showStudent.js

import React from "react";

const CoordShowStudent = () => {
  // Example data, replace with API or state management later
  const students = [
    { id: 1, name: "Ravi Patil" },
    { id: 2, name: "Sneha Kulkarni" },
    { id: 3, name: "Amit Deshmukh" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Students List</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead style={{ backgroundColor: "#004080", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoordShowStudent;
