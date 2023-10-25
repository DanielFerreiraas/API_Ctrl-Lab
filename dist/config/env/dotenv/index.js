"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_TOKEN_EXPIRATION = exports.TOKEN_EXPIRATION = exports.REFRESH_SECRET = exports.ACCESS_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ACCESS_SECRET = process.env.AUTH_ACCESS_SECRET || "auth";
exports.REFRESH_SECRET = process.env.AUTH_REFRESH_SECRET || "secret";
exports.TOKEN_EXPIRATION = process.env.AUTH_TOKEN_EXPIRATION || "1h";
exports.REFRESH_TOKEN_EXPIRATION = process.env.AUTH_REFRESH_TOKEN_EXPIRATION || "24h";
