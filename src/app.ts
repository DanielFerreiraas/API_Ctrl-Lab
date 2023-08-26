import "reflect-metadata";

import "./config/env/dotenv";
import "./config/database/typeorm";
import "./config/container/tsyringe";

import express from "express";
import cors from "cors";

import router from '@/shared/api/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

export default app;