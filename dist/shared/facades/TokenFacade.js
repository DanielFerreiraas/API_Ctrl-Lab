"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("@/config/env/dotenv");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTFacade {
    static sign(payload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.sign(payload, dotenv_1.ACCESS_SECRET, options);
        });
    }
    static refresh(payload, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.sign(payload, dotenv_1.REFRESH_SECRET, options);
        });
    }
    static verifyAccess(token, audience) {
        return jsonwebtoken_1.default.verify(token, dotenv_1.ACCESS_SECRET, { audience });
    }
    static verifyRefresh(token, audience) {
        return jsonwebtoken_1.default.verify(token, dotenv_1.REFRESH_SECRET, { audience });
    }
}
exports.default = JWTFacade;
