"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("./config/env/dotenv");
require("./config/database/typeorm");
require("./config/container/tsyringe");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("@/shared/api/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ 'Erro': err.message });
});
exports.default = app;
