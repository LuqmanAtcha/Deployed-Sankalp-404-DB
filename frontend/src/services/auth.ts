import axios from "axios";
import { LoginCredentials, LoginResponse } from "../types/auth.js";

const API = axios.create({
  baseURL: "https://deployed-sankalp-404-db.onrender.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
export const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const response = await API.post("/login", credentials); // ✅ CORRECT
  return response.data;
};
export default API;
