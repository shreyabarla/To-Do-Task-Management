import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all tasks
export const getTasks = () => api.get("/tasks");

// Create task
export const createTask = (task) =>
  api.post("/tasks", task);

// Update task
export const updateTask = (id, task) =>
  api.put(`/tasks/${id}`, task);

// Delete task
export const deleteTask = (id) =>
  api.delete(`/tasks/${id}`);

export default api;