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
exports.ExampleTwo = void 0;
const exampleOne_entity_1 = require("@/modules/mod-example/exampleOne/database/repositories/entities/exampleOne.entity");
const typeorm_1 = require("typeorm");
let ExampleTwo = exports.ExampleTwo = class ExampleTwo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ExampleTwo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExampleTwo.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExampleTwo.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => exampleOne_entity_1.ExampleOne, exampleOne => exampleOne.exampleTwoId),
    (0, typeorm_1.JoinColumn)({ name: "exampleOne_id" }),
    __metadata("design:type", exampleOne_entity_1.ExampleOne)
], ExampleTwo.prototype, "exampleOne", void 0);
exports.ExampleTwo = ExampleTwo = __decorate([
    (0, typeorm_1.Entity)()
], ExampleTwo);
