// src/pages/coordinator/CompletedTask.js
import React, { useEffect, useState } from "react";
import axios from "axios";
//import "../../completed-task"; // use your existing CSS for styling
import "../../completed-task.css";


const CompletedTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  const fetchCompletedTasks = async () => {
    try {
      // Replace with your actual backend API endpoint for completed tasks
      const res = await axios.get("http://localhost:8080/api/completedtasks");
      setTasks(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching completed tasks:", error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading completed tasks...</p>;

  return (
    <div className="table-container">
      <h2>Completed Tasks</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Student Name</th>
            <th>Group Name</th>
            <th>Module Name</th>
            <th>Theory Marks</th>
            <th>Lab Marks</th>
            <th>IA 1</th>
            <th>IA 2</th>
            <th>Start Date</th>
            <th>Till Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="10">No completed tasks found</td>
            </tr>
          ) : (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.staff_name}</td>
                <td>{task.student_name}</td>
                <td>{task.group_name}</td>
                <td>{task.module_name}</td>
                <td>{task.theory_marks}</td>
                <td>{task.lab_marks}</td>
                <td>{task.IA_1}</td>
                <td>{task.IA_2}</td>
                <td>{task.start_date}</td>
                <td>{task.till_date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTask;
