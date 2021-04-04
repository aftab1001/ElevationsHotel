import http from "./RestService";
import { apiUrl } from "../../config.json";

const getNewsData = () => {
  return http.get(apiUrl + "News/GetAll");
};
const getNewsById = (newsId) => {
  return http.get(apiUrl + "News/Get/?id=" + newsId);
};

export { getNewsData, getNewsById };
