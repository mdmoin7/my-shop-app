import Axios from "axios";

const AxiosInstance = Axios.create({
  baseURL: "http://localhost:5000",
});

AxiosInstance.interceptors.request.use((config) => {
  let data = localStorage.getItem("persist:@my-app");
  if (data) {
    data = JSON.parse(data);
    config.headers["Authorization"] = `Bearer ${JSON.parse(data.user)}`;
  }
  return config;
});

const get = (url) => {
  return AxiosInstance.get(url);
};

const post = (url, data) => {
  return AxiosInstance.post(url, data);
};

const ApiService = { get, post };
export default ApiService;
