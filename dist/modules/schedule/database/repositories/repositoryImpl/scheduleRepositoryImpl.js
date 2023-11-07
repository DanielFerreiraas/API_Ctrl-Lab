"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRepositoryImpl = void 0;
const schedule_entity_1 = require("../entities/schedule.entity");
const BaseRepositoryImpl_1 = require("@/modules/base/BaseRepositoryImpl");
class scheduleRepositoryImpl extends BaseRepositoryImpl_1.BaseRepositoryImpl {
    constructor() {
        super("id", schedule_entity_1.schedule);
    }
}
exports.scheduleRepositoryImpl = scheduleRepositoryImpl;
