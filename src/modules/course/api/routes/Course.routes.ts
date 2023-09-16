import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";

const CourseRouter = Router();

const CourseController = container.resolve("CourseController");

CourseRouter.use("/", baseRoutes(CourseController));

export default CourseRouter;