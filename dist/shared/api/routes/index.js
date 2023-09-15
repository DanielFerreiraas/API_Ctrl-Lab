"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleOne_routes_1 = __importDefault(require("@/modules/mod-example/exampleOne/api/routes/exampleOne.routes"));
const exampleTwo_routes_1 = __importDefault(require("@/modules/mod-example/exampleTwo/api/routes/exampleTwo.routes"));
const Laboratory_routes_1 = __importDefault(require("@/modules/laboratory/api/routes/Laboratory.routes"));
const router = (0, express_1.Router)();
router.use('/exampleOne', exampleOne_routes_1.default);
router.use('/exampleTwo', exampleTwo_routes_1.default);
router.use('/laboratory', Laboratory_routes_1.default);
exports.default = router;
