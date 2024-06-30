// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure this is pointing to your backend server
});

export const registerUser = async (userData) => {
  return await api.post("/user/register", userData);
};

export const loginUser = async (userData) => {
  return await api.post("/user/login", userData);
};

export const registerAdmin = async (adminData) => {
  return await api.post("/admin/register", adminData);
};

export const loginAdmin = async (adminData) => {
  return await api.post("/admin/login", adminData);
};
