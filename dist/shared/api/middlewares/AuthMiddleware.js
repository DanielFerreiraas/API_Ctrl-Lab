"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureIsAuthenticated = void 0;
const TokenFacade_1 = __importDefault(require("@/shared/facades/TokenFacade"));
const ensureIsAuthenticated = (req, res, next) => {
    try {
        verifyToken(req);
        return next();
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.ensureIsAuthenticated = ensureIsAuthenticated;
const getToken = (req) => {
    var _a;
    const auth = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    return auth;
};
const verifyToken = (req) => {
    const token = getToken(req);
    return TokenFacade_1.default.verifyAccess(token);
};
