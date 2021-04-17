"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApartmentById = exports.getApartmentsData = void 0;

var _RestService = _interopRequireDefault(require("./RestService"));

var _config = require("../../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getApartmentsData = function getApartmentsData() {
  return _RestService["default"].get(_config.apiUrl + "Apartment/GetAllApartment");
};

exports.getApartmentsData = getApartmentsData;

var getApartmentById = function getApartmentById(apartmentId) {
  return _RestService["default"].get(_config.apiUrl + "Apartment/Get/?id=" + apartmentId);
};

exports.getApartmentById = getApartmentById;