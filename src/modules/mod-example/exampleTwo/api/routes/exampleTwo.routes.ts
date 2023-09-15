import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";

const exampleTwoRouter = Router();

const exampleTwoController = container.resolve("ExampleTwoController");

exampleTwoRouter.use("/", baseRoutes(exampleTwoController));

export default exampleTwoRouter;
