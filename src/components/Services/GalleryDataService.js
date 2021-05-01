import http from "./RestService";
import { apiUrl } from "../../config.json";

let getGalleryData = () => {
  return http.get(apiUrl + "Room/GetAllGallery");
};

export default getGalleryData;
