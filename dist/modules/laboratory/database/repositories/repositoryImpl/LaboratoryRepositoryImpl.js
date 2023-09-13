"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratoryRepositoryImpl = void 0;
const Laboratory_entity_1 = require("../entities/Laboratory.entity");
const BaseRepositoryImpl_1 = require("@/modules/base/BaseRepositoryImpl");
class LaboratoryRepositoryImpl extends BaseRepositoryImpl_1.BaseRepositoryImpl {
    constructor() {
        super("id", Laboratory_entity_1.Laboratory);
    }
}
exports.LaboratoryRepositoryImpl = LaboratoryRepositoryImpl;
