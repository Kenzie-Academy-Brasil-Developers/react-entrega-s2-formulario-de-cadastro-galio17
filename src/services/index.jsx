import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 0,
});

export default api;
