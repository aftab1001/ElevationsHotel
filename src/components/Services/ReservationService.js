import http from "./RestService";
import { apiUrl } from "../../config.json";

const updateReservation = (data) => {
  return http.post(apiUrl + "Reservation/BookTable", data);
};
export { updateReservation };
