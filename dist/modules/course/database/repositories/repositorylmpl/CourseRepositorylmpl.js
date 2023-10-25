"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepositoryImpl = void 0;
const Course_entity_1 = require("../entities/Course.entity");
const BaseRepositoryImpl_1 = require("@/modules/base/BaseRepositoryImpl");
class CourseRepositoryImpl extends BaseRepositoryImpl_1.BaseRepositoryImpl {
    constructor() {
        super("id", Course_entity_1.Course);
    }
}
exports.CourseRepositoryImpl = CourseRepositoryImpl;
