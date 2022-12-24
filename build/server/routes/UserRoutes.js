"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _UserController = _interopRequireDefault(require("../controllers/UserController"));
var router = (0, _express.Router)();
router.get('/', _UserController["default"].getAllUsers);
router.post('/', _UserController["default"].addUser);
router.get('/:id', _UserController["default"].getAUser);
router.put('/:id', _UserController["default"].updatedUser);
router["delete"]('/:id', _UserController["default"].deleteUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=UserRoutes.js.map