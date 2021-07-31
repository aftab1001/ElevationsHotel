import http from "./RestService";
import { apiUrl } from "../../config.json";

let processBookingPaymentData = (data) => {
  return http.post(apiUrl + "Booking/ProcessBooking",data);
};
const createBooking = (data) => {
  return http.post(apiUrl + "Apartment/Create" , data);
};
const GetBookingStatus = (itemId,fromDate,toDate) => {
  return http.get(apiUrl + "Booking/GetBookingStatus?itemId="+itemId+"&bookingType=0&fromDate="+fromDate+"&toDate="+toDate+"");

};
export { processBookingPaymentData, createBooking, GetBookingStatus };
