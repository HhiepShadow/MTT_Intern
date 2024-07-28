import axios from "axios";

const api = axios.create({
  baseURL: "https://vapi.vnappmob.com/api/province",
});

export default api;
