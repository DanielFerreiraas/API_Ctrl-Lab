import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";

const UserRouter = Router();

const UserController = container.resolve("UserController");

UserRouter.use("/", baseRoutes(UserController));

export default UserRouter;