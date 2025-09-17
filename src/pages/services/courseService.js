// import axios from "axios";
// const API_URL = "http://localhost:1111/course";

// export const getAllCourses = () => axios.get(`${API_URL}/`);


import axios from "axios";

const API_URL = "http://localhost:1111/course";

// Get all courses
export const getAllCourses = () => axios.get(`${API_URL}/`);

export const getCourseById = (id) => axios.get(`${API_URL}/${id}`);



