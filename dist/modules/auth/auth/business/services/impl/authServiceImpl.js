"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AuthServiceImpl = void 0;
const tsyringe_1 = require("tsyringe");
const PasswordFacade_1 = __importDefault(require("../../facedes/PasswordFacade"));
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = __importDefault(require("bcrypt"));
const GenerateFacade_1 = __importDefault(require("../../facedes/GenerateFacade"));
let AuthServiceImpl = exports.AuthServiceImpl = class AuthServiceImpl {
    constructor(userService) {
        this.userService = userService;
    }
    signup(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userService.createItem({
                numberRegister: GenerateFacade_1.default.generateNumberRegister(),
                password: PasswordFacade_1.default.hash(auth.password),
                username: auth.username,
                type: auth.type,
                name: auth.name,
                photoLink: auth.photoLink,
                description: auth.description
            });
            return this, this.signin(auth);
        });
    }
    signin(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getByNumberRegister(auth.numberRegister);
            if (!user || !(yield bcrypt_1.default.compareSync(auth.password, user.password))) {
                throw new Error("numberRegister or password doesn't match");
            }
            const token = (0, jsonwebtoken_1.sign)({}, process.env.TK_SECRET, {
                subject: user.id,
                expiresIn: '1d'
            });
            return {
                token
            };
        });
    }
};
exports.AuthServiceImpl = AuthServiceImpl = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserService')),
    __metadata("design:paramtypes", [Object])
], AuthServiceImpl);
