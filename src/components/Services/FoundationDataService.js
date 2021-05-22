import http from "./RestService";
import { apiUrl } from "../../config.json";

let getFoundationsData = () => {
  return http.get(apiUrl + "Foundation/GetAll");
};

export { getFoundationsData};
