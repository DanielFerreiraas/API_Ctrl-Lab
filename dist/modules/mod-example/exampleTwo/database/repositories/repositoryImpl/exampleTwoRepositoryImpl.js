"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTwoRepositoryImpl = void 0;
const exampleTwo_entity_1 = require("../entities/exampleTwo.entity");
const BaseRepositoryImpl_1 = require("@/modules/base/BaseRepositoryImpl");
class ExampleTwoRepositoryImpl extends BaseRepositoryImpl_1.BaseRepositoryImpl {
    constructor() {
        super("id", exampleTwo_entity_1.ExampleTwo);
    }
}
exports.ExampleTwoRepositoryImpl = ExampleTwoRepositoryImpl;
