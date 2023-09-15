"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleOneRepositoryImpl = void 0;
const exampleOne_entity_1 = require("../entities/exampleOne.entity");
const BaseRepositoryImpl_1 = require("@/modules/base/BaseRepositoryImpl");
class ExampleOneRepositoryImpl extends BaseRepositoryImpl_1.BaseRepositoryImpl {
    constructor() {
        super("id", exampleOne_entity_1.ExampleOne);
    }
}
exports.ExampleOneRepositoryImpl = ExampleOneRepositoryImpl;
