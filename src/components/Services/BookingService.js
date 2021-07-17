import http from "./RestService";
import { apiUrl } from "../../config.json";

let processBookingPaymentData = (data) => {
  return http.post(apiUrl + "Booking/ProcessBooking",data);
};
const createBooking = (data) => {
  return http.post(apiUrl + "Apartment/Create" , data);
};
export { processBookingPaymentData, createBooking };
