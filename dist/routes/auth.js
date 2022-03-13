"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const auth = (0, express_1.Router)();
auth.get('/', authController_1.authController.index);
exports.default = auth;
