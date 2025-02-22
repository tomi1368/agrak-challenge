import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const apiInstance = axios.create({ baseURL: BASE_URL });
