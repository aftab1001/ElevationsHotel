import http from "./RestService";
import { apiUrl } from "../../config.json";

let getResturantData = () => {
  return http.get(apiUrl + "Restaurant/GetAll");
};

export default getResturantData;
