"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const authRouter = (0, express_1.Router)();
const AuthController = tsyringe_1.container.resolve('AuthController');
authRouter.post('/signup', (req, res) => AuthController.signup(req, res));
authRouter.post('/signin', (req, res) => AuthController.signin(req, res));
exports.default = authRouter;
