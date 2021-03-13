"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RestService = _interopRequireDefault(require("./RestService"));

var _config = require("./../../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getRoomsData = function getRoomsData() {
  return _RestService["default"].get(_config.apiUrl + "Room/GetAllRooms");
};

var _default = getRoomsData;
exports["default"] = _default;