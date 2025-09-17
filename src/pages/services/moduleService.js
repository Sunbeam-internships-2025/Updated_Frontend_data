
import axios from "axios";

const API_URL = "http://localhost:1111/module";

// Get all modules
export const getAllModules = () => axios.get(`${API_URL}/all-modules`);

// Get modules by course ID
export const getModulesByCourseId = (courseId) =>
  axios.get(`${API_URL}/all/course/${courseId}`);

// Add new module
export const addModule = (moduleData) =>
  axios.post(`${API_URL}/add-module`, moduleData);

// Delete module
export const deleteModule = (moduleId) =>
  axios.delete(`${API_URL}/delete-module/${moduleId}`);
