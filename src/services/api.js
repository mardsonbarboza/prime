import axios from "axios";
const baseURL = process.env.BASE_URL;
const Api = axios.create({
  baseURL: baseURL,
});

export default Api;