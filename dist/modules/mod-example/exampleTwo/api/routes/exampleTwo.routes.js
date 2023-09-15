"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const Base_routes_1 = __importDefault(require("@/modules/base/Base.routes"));
const exampleTwoRouter = (0, express_1.Router)();
const exampleTwoController = tsyringe_1.container.resolve("ExampleTwoController");
exampleTwoRouter.use("/", (0, Base_routes_1.default)(exampleTwoController));
exports.default = exampleTwoRouter;
