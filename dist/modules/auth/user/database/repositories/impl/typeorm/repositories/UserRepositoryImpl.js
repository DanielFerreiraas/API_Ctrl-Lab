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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
const user_entity_1 = require("../entities/user.entity");
const BaseRepositoryImpl_1 = require("@/modules/base/BaseRepositoryImpl");
class UserRepositoryImpl extends BaseRepositoryImpl_1.BaseRepositoryImpl {
    constructor() {
        super('id', user_entity_1.User);
    }
    getByNumberRegister(numberRegister) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.typeormRepository.findOne({
                where: { numberRegister }
            });
            return user;
        });
    }
    createUser(numberRegister, password, username, type, name, photoLink, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.typeormRepository.create({
                numberRegister,
                password,
                username,
                type,
                name,
                photoLink,
                description
            });
            return yield this.typeormRepository.save(user);
        });
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
