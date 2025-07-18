import axios from "axios";

const api = axios.create({
  baseURL: "https://organizr-backend.onrender.com/api",
  withCredentials: true,
});

export default api;
