import http from "./RestService";
import { apiUrl } from "../../config.json";

let getGalleryData = () => {
  return http.get(apiUrl + "Gallery/GetAll");
};

export default getGalleryData;
