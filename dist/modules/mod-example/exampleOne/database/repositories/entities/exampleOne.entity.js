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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleOne = void 0;
const exampleTwo_entity_1 = require("@/modules/mod-example/exampleTwo/database/repositories/entities/exampleTwo.entity");
const typeorm_1 = require("typeorm");
let ExampleOne = exports.ExampleOne = class ExampleOne {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExampleOne.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExampleOne.prototype, "fieldOne", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExampleOne.prototype, "fieldTwo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => exampleTwo_entity_1.ExampleTwo, exampleTwo => exampleTwo.exampleOne, { eager: true }),
    __metadata("design:type", Array)
], ExampleOne.prototype, "exampleTwoId", void 0);
exports.ExampleOne = ExampleOne = __decorate([
    (0, typeorm_1.Entity)()
], ExampleOne);
