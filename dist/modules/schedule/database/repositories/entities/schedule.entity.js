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
exports.schedule = void 0;
const user_entity_1 = require("@/modules/auth/user/database/repositories/impl/typeorm/entities/user.entity");
const Course_entity_1 = require("@/modules/course/database/repositories/entities/Course.entity");
const Laboratory_entity_1 = require("@/modules/laboratory/database/repositories/entities/Laboratory.entity");
const typeorm_1 = require("typeorm");
let schedule = exports.schedule = class schedule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], schedule.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], schedule.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], schedule.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Laboratory_entity_1.Laboratory, (laboratory) => laboratory.schedules, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "laboratory_id" }),
    __metadata("design:type", Laboratory_entity_1.Laboratory)
], schedule.prototype, "laboratoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Course_entity_1.Course, (course) => course.schedules, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "course_id" }),
    __metadata("design:type", Laboratory_entity_1.Laboratory)
], schedule.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.schedules, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], schedule.prototype, "userId", void 0);
exports.schedule = schedule = __decorate([
    (0, typeorm_1.Entity)()
], schedule);
