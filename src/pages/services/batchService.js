import axios from "axios";

const API_URL = "http://localhost:1111/batch";

// Get all batches
export const getAllBatches = () => axios.get(`${API_URL}/all-batch`);

// Get batch by ID
export const getBatchById = (batchId) =>
  axios.get(`${API_URL}/get-batch/${batchId}`);

// Add new batch
export const addBatch = (batchData) =>
  axios.post(`${API_URL}/add-batch`, batchData);

// Update batch
export const updateBatch = (batchId, batchData) =>
  axios.put(`${API_URL}/update-batch/${batchId}`, batchData);

// Delete batch
export const deleteBatch = (batchId) =>
  axios.delete(`${API_URL}/delete-batch/${batchId}`);
