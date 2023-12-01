import "reflect-metadata";
import "express-async-errors";

import "./src/config/env/dotenv";
import "./src/config/database/typeorm";
import "./src/config/container/tsyringe";

import express from "express";
import cors from "cors";

import router from './src/shared/api/routes';
import {  updateFileInDatabase, upload } from "./src/config/multer/multer";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

app.put("/upload/:id", upload.single("file"), updateFileInDatabase);
app.use('/files', express.static(path.resolve(__dirname, 'uploads')));

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({'Erro': err.message});
});

export default app;