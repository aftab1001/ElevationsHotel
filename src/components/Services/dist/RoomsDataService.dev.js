"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoomById = exports.getRoomsData = void 0;

var _RestService = _interopRequireDefault(require("./RestService"));

var _config = require("./../../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getRoomsData = function getRoomsData() {
  return _RestService["default"].get(_config.apiUrl + "Room/GetAllRooms");
};

exports.getRoomsData = getRoomsData;

var getRoomById = function getRoomById(roomId) {
  return _RestService["default"].get(_config.apiUrl + "Room/Get/?id=" + roomId);
};

exports.getRoomById = getRoomById;