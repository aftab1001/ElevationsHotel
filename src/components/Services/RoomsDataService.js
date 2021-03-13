import http from "./RestService";
import { apiUrl} from "./../../config.json";

let getRoomsData = () => {
  return http.get(apiUrl + "Room/GetAllRooms");
};

export default getRoomsData;
