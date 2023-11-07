"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Laboratory_routes_1 = __importDefault(require("@/modules/laboratory/api/routes/Laboratory.routes"));
const Course_routes_1 = __importDefault(require("@/modules/course/api/routes/Course.routes"));
const schedule_routes_1 = __importDefault(require("@/modules/schedule/api/routes/schedule.routes"));
const auth_routes_1 = __importDefault(require("@/modules/auth/auth/api/routes/auth.routes"));
const user_route_1 = __importDefault(require("@/modules/auth/user/api/routes/user.route"));
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
// router.use(ensureIsAuthenticated);
router.use('/user', user_route_1.default);
router.use('/laboratory', Laboratory_routes_1.default);
router.use('/course', Course_routes_1.default);
router.use('/schedule', schedule_routes_1.default);
exports.default = router;
