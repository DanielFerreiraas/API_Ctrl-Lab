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
exports.BaseRepositoryImpl = void 0;
const data_source_1 = __importDefault(require("@/config/database/typeorm/data-source"));
class BaseRepositoryImpl {
    constructor(primaryKey, entityType) {
        this.primaryKey = primaryKey;
        this.typeormRepository = data_source_1.default.getRepository(entityType);
    }
    ;
    getItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.typeormRepository.find();
        });
    }
    ;
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.typeormRepository.findOne({
                where: { [this.primaryKey]: id }
            });
        });
    }
    ;
    getItemByField(field, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = this.typeormRepository.findOne({
                where: { [field]: value }
            });
            if (!item) {
                throw new Error(`Register not found!`);
            }
            return item;
        });
    }
    ;
    createItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const newItem = this.typeormRepository.create(item);
            return yield this.typeormRepository.save(newItem);
        });
    }
    ;
    updateItem(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeormRepository.update(id, item);
            return yield this.getItemById(id);
        });
    }
    ;
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.getItemById(id);
            yield this.typeormRepository.delete(id);
        });
    }
    ;
}
exports.BaseRepositoryImpl = BaseRepositoryImpl;
