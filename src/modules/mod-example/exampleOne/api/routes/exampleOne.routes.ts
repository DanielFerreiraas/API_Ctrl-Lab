import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";

const exampleOneRouter = Router();

const exampleOneController = container.resolve("ExampleOneController");

exampleOneRouter.use("/", baseRoutes(exampleOneController));

export default exampleOneRouter;
