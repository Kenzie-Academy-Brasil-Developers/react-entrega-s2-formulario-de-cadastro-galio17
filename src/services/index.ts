import axios from "axios";

export interface IAxiosError {
  message: string;
  status: string;
}

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 0,
});

export default api;
