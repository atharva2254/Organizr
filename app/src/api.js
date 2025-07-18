import axios from "axios";

const api = axios.create({
  baseURL: "https://organizr-production.up.railway.app/api",
  withCredentials: true,
});

export default api;
