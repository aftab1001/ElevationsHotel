import http from "./RestService";
import { apiUrl} from "../../config.json";

let getApartmentsData = () => {
  return http.get(apiUrl + "News/GetAll");
};

export default getApartmentsData;
