// import axios from "axios";

// const API_URL = "http://localhost:1111/student_group";

// // Get all student groups (with optional query parameters)
// export const getAllStudentGroups = (params = "") =>
//   axios.get(`${API_URL}?${params}`);

// // Get student group by ID
// export const getStudentGroupById = (groupId) =>
//   axios.get(`${API_URL}/${groupId}`);

// // Add new student group
// export const addStudentGroup = (groupData) =>
//   axios.post(`${API_URL}/add-student-group`, groupData);

// // Update student group
// export const updateStudentGroup = (groupId, groupData) =>
//   axios.put(`${API_URL}/update-student-group/${groupId}`, groupData);

// // Delete student group
// export const deleteStudentGroup = (groupId) =>
//   axios.delete(`${API_URL}/delete-group/${groupId}`);






import axios from "axios";

// Base URL for student group APIs
const API_URL = "http://localhost:1111/student_group";

// Get all student groups with optional query parameters
// Example: getAllStudentGroups("batchId=1&courseId=2")
export const getAllStudentGroups = (params = "") =>
  axios.get(`${API_URL}?${params}`);

// Get a single student group by its ID
export const getStudentGroupById = (groupId) =>
  axios.get(`${API_URL}/${groupId}`);

// Add a new student group
export const addStudentGroup = (groupData) =>
  axios.post(`${API_URL}/add-student-group`, groupData);

// Update an existing student group
export const updateStudentGroup = (groupId, groupData) =>
  axios.put(`${API_URL}/update-student-group/${groupId}`, groupData);

// Delete a student group by its ID
export const deleteStudentGroup = (groupId) =>
  axios.delete(`${API_URL}/delete-group/${groupId}`);





















