import { Router } from "express";

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";

const FilePicturesRouter = Router();

const FilePicturesController = container.resolve("FilePicturesController");

FilePicturesRouter.use("/", baseRoutes(FilePicturesController));

export default FilePicturesRouter;