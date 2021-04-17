import http from "./RestService";
import { apiUrl } from "../../config.json";

let getApartmentsData = () => {
  return http.get(apiUrl + "Apartment/GetAllApartment");
};
const getApartmentById = (apartmentId) => {
  return http.get(apiUrl + "Apartment/Get/?id=" + apartmentId);
};
export { getApartmentsData, getApartmentById };
