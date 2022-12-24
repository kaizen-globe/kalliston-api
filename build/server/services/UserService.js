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
var _models = _interopRequireDefault(require("../src/models"));
var UserService = /*#__PURE__*/function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }
  (0, _createClass2["default"])(UserService, null, [{
    key: "getAllUsers",
    value: function () {
      var _getAllUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].User.findAll();
              case 3:
                return _context.abrupt("return", _context.sent);
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;
              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));
      function getAllUsers() {
        return _getAllUsers.apply(this, arguments);
      }
      return getAllUsers;
    }()
  }, {
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newUser) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].User.create(newUser);
              case 3:
                return _context2.abrupt("return", _context2.sent);
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));
      function addUser(_x) {
        return _addUser.apply(this, arguments);
      }
      return addUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, _updateUser) {
        var userToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    id: Number(id)
                  }
                });
              case 3:
                userToUpdate = _context3.sent;
                if (!userToUpdate) {
                  _context3.next = 8;
                  break;
                }
                _context3.next = 7;
                return _models["default"].User.update(_updateUser, {
                  where: {
                    id: Number(id)
                  }
                });
              case 7:
                return _context3.abrupt("return", _updateUser);
              case 8:
                return _context3.abrupt("return", null);
              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;
              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));
      function updateUser(_x2, _x3) {
        return _updateUser2.apply(this, arguments);
      }
      return updateUser;
    }()
  }, {
    key: "getAUser",
    value: function () {
      var _getAUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var theUser;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    id: Number(id)
                  }
                });
              case 3:
                theUser = _context4.sent;
                return _context4.abrupt("return", theUser);
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;
              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));
      function getAUser(_x4) {
        return _getAUser.apply(this, arguments);
      }
      return getAUser;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var userToDelete, deletedUser;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].User.findOne({
                  where: {
                    id: Number(id)
                  }
                });
              case 3:
                userToDelete = _context5.sent;
                if (!userToDelete) {
                  _context5.next = 9;
                  break;
                }
                _context5.next = 7;
                return _models["default"].User.destroy({
                  where: {
                    id: Number(id)
                  }
                });
              case 7:
                deletedUser = _context5.sent;
                return _context5.abrupt("return", deletedUser);
              case 9:
                return _context5.abrupt("return", null);
              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;
              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }));
      function deleteUser(_x5) {
        return _deleteUser.apply(this, arguments);
      }
      return deleteUser;
    }()
  }]);
  return UserService;
}();
var _default = UserService;
exports["default"] = _default;
//# sourceMappingURL=UserService.js.map