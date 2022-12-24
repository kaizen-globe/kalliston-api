"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _UserService = _interopRequireDefault(require("../services/UserService"));
var _Utils = _interopRequireDefault(require("../utils/Utils"));
var util = new _Utils["default"]();
var UserController = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }
  (0, _createClass2["default"])(UserController, null, [{
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allUsers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _UserService["default"].getAllUsers();
              case 3:
                allUsers = _context.sent;
                if (allUsers.length > 0) {
                  util.setSuccess(200, 'Users retrieved', allUsers);
                } else {
                  util.setSuccess(200, 'No user found');
                }
                return _context.abrupt("return", util.send(res));
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));
              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));
      function getAllUsers(_x, _x2) {
        return _getAllUsers.apply(this, arguments);
      }
      return getAllUsers;
    }()
  }, {
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newUser, createdUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!req.body.email || !req.body.password || !req.body.gender)) {
                  _context2.next = 3;
                  break;
                }
                util.setError(400, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));
              case 3:
                newUser = req.body;
                _context2.prev = 4;
                _context2.next = 7;
                return _UserService["default"].addUser(newUser);
              case 7:
                createdUser = _context2.sent;
                util.setSuccess(201, 'User Added!', createdUser);
                return _context2.abrupt("return", util.send(res));
              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));
              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 12]]);
      }));
      function addUser(_x3, _x4) {
        return _addUser.apply(this, arguments);
      }
      return addUser;
    }()
  }, {
    key: "updatedUser",
    value: function () {
      var _updatedUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var alteredUser, id, updateUser;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredUser = req.body;
                id = req.params.id;
                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }
                util.setError(400, 'Please input a valid numeric value');
                return _context3.abrupt("return", util.send(res));
              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _UserService["default"].updateUser(id, alteredUser);
              case 8:
                updateUser = _context3.sent;
                if (!updateUser) {
                  util.setError(404, "Cannot find user with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'User updated', updateUser);
                }
                return _context3.abrupt("return", util.send(res));
              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));
              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));
      function updatedUser(_x5, _x6) {
        return _updatedUser.apply(this, arguments);
      }
      return updatedUser;
    }()
  }, {
    key: "getAUser",
    value: function () {
      var _getAUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, theUser;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }
                util.setError(400, 'Please input a valid numeric value');
                return _context4.abrupt("return", util.send(res));
              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _UserService["default"].getAUser(id);
              case 7:
                theUser = _context4.sent;
                if (!theUser) {
                  util.setError(404, "Cannot find user with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found User', theUser);
                }
                return _context4.abrupt("return", util.send(res));
              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));
              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));
      function getAUser(_x7, _x8) {
        return _getAUser.apply(this, arguments);
      }
      return getAUser;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, userToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }
                util.setError(400, 'Please provide a numeric value');
                return _context5.abrupt("return", util.send(res));
              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _UserService["default"].deleteUser(id);
              case 7:
                userToDelete = _context5.sent;
                if (userToDelete) {
                  util.setSuccess(200, 'User deleted');
                } else {
                  util.setError(404, "User with the id ".concat(id, " cannot be found"));
                }
                return _context5.abrupt("return", util.send(res));
              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));
              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));
      function deleteUser(_x9, _x10) {
        return _deleteUser.apply(this, arguments);
      }
      return deleteUser;
    }()
  }]);
  return UserController;
}();
var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=UserController.js.map