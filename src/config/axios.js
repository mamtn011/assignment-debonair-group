import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://59.152.62.177:8085/api",
});
