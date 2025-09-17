import axios from "axios";

const API_BASE = "http://localhost:1111/staff";  // ✅ Correct base URL

export const getAllStaff = () => axios.get(`${API_BASE}/all-staff`);
export const getAllCourses = () => axios.get("http://localhost:1111/course/all-courses"); // adjust if needed
export const getAllRoles = () => axios.get("http://localhost:1111/role/all-roles"); // adjust if needed
export const updateStaff = (data) => {
    // Assuming the backend expects the staff ID in the URL and data in body
    return axios.put(`${API_BASE}/update-staff/${data.staff_id}`, data);
};




// import axios from 'axios';

// const API_BASE = "http://localhost:7777/api/staff"; // update if your backend is on another port

// export const getAllStaff = () => axios.get(`${API_BASE}/all-staff`);
// export const getAllCourses = () => axios.get(`${API_BASE}/all-courses`);
// export const getAllRoles = () => axios.get(`${API_BASE}/all-roles`);
// export const updateStaff = (data) => axios.post(`${API_BASE}/update-staff`, data);
