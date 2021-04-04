"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsById = exports.getNewsData = void 0;

var _RestService = _interopRequireDefault(require("./RestService"));

var _config = require("../../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getNewsData = function getNewsData() {
  return _RestService["default"].get(_config.apiUrl + "News/GetAll");
};

exports.getNewsData = getNewsData;

var getNewsById = function getNewsById(newsId) {
  return _RestService["default"].get(_config.apiUrl + "News/Get/?id=" + newsId);
};

exports.getNewsById = getNewsById;