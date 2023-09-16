import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";

const scheduleRouter = Router();

const scheduleController = container.resolve("scheduleController");

scheduleRouter.use("/", baseRoutes(scheduleController));

export default scheduleRouter;