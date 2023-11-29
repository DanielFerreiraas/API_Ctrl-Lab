import "reflect-metadata";
import "express-async-errors";

import "./config/env/dotenv";
import "./config/database/typeorm";
import "./config/container/tsyringe";

import express from "express";
import cors from "cors";

import router from './shared/api/routes';
// import { getFileById, saveFileToDatabase, upload } from "./src/config/multer/multer";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

// app.post("/upload", upload.single("file"), saveFileToDatabase);
// app.use('/files', express.static(path.resolve(__dirname, 'uploads')));
// app.get('/files/:id', getFileById);

app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({'Erro': err.message});
});

export default app;