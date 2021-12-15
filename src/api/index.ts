import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { getItem, removeItem } from "utils/storage";

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 8000,
});
request.interceptors.request.use((req: any) => {
  const token: any = getItem("token");
  req.headers.Authorization = `Bearer ${token}`; // 给指定请求带上token
  return req;
});
request.interceptors.response.use(
  (res: AxiosResponse) => {
    // 在2xx范围内的任何状态代码都会触发此函数，这里主要用于处理响应数据
    return res; // 这里可以设置返回的内容，可以只返回res.data
  },
  (err: any) => {
    // 任何超出2xx范围的状态码都会触发此函数，这里主要用于处理响应错误
    if (err.response.status && err.response.status === 401) {
      const navigate = useNavigate();
      navigate("/login");
      removeItem("clearToken");
    }
  }
);

export default request;
