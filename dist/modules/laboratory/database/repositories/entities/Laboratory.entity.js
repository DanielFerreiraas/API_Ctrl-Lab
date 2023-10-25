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
exports.Laboratory = void 0;
const schedule_entity_1 = require("@/modules/schedule/database/repositories/entities/schedule.entity");
const typeorm_1 = require("typeorm");
let Laboratory = exports.Laboratory = class Laboratory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Laboratory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Laboratory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Laboratory.prototype, "photoLink", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Laboratory.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Laboratory.prototype, "hourOpen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Laboratory.prototype, "hourClose", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => schedule_entity_1.schedule, (schedule) => schedule.laboratoryId),
    __metadata("design:type", schedule_entity_1.schedule)
], Laboratory.prototype, "schedules", void 0);
exports.Laboratory = Laboratory = __decorate([
    (0, typeorm_1.Entity)()
], Laboratory);
