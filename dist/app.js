"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("./src/config/env/dotenv");
require("./src/config/database/typeorm");
require("./src/config/container/tsyringe");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./src/shared/api/routes"));
const multer_1 = require("./src/config/multer/multer");
const path_1 = __importDefault(require("path"));
const multerUser_1 = require("@/config/multer/multerUser");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.put("/pictureUser/:id", multer_1.upload.single("file"), multerUser_1.updateFileUser);
app.put("/upload/:id", multer_1.upload.single("file"), multer_1.updateFileInDatabase);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, 'uploads')));
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ 'Erro': err.message });
});
exports.default = app;
