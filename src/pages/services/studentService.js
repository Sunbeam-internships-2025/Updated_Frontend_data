// import axios from "axios";
// const API_URL = "http://localhost:1111/student";

// export const getAllStudents = () => axios.get(`${API_URL}/`);
// export const assignCourse = (data) => axios.post(`${API_URL}/assign-course`, data);
// export const getStudentsByCourse = (course_id) => axios.get(`${API_URL}/by-course/${course_id}`);


import axios from "axios";

const API_URL = "http://localhost:1111/student";

// Get all students
export const getAllStudents = () => axios.get(`${API_URL}/`);

// Assign course to student
export const assignCourse = (data) => axios.post(`${API_URL}/assign-course`, data);

// Get students by specific course
export const getStudentsByCourse = (course_id) =>
  axios.get(`${API_URL}/by-course/${course_id}`);
