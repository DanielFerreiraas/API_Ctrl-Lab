import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";

const LaboratoryRouter = Router();

const LaboratoryController = container.resolve("LaboratoryController");

LaboratoryRouter.use("/", baseRoutes(LaboratoryController));

export default LaboratoryRouter;