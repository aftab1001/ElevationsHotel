import http from "./RestService";
import { apiUrl} from "../../config.json";

let getApartmentsData = () => {
  return http.get(apiUrl + "Apartment/GetAllApartment");
};

export default getApartmentsData;
