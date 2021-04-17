import http from "./RestService";
import { apiUrl } from "./../../config.json";

let getRoomsData = () => {
  return http.get(apiUrl + "Room/GetAllRooms");
};
const getRoomById = (roomId) => {
  return http.get(apiUrl + "Room/Get/?id=" + roomId);
};

export { getRoomsData, getRoomById };
