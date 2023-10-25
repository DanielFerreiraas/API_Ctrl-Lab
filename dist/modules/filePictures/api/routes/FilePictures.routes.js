"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const Base_routes_1 = __importDefault(require("@/modules/base/Base.routes"));
const FilePicturesRouter = (0, express_1.Router)();
const FilePicturesController = tsyringe_1.container.resolve("FilePicturesController");
FilePicturesRouter.use("/", (0, Base_routes_1.default)(FilePicturesController));
exports.default = FilePicturesRouter;
