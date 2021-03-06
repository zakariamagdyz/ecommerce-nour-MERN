import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? `${process.env.REACT_APP_API_URL_DEV}/lamaApi/v1`
    : `${process.env.REACT_APP_API_URL_PROD}/lamaApi/v1`;

export const publicUrl =
  process.env.NODE_ENV !== "production"
    ? `${process.env.REACT_APP_API_URL_DEV}`
    : `${process.env.REACT_APP_API_URL_PROD}`;

const axiosApp = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosApp;
