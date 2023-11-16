import { Router } from "express";
import { container } from "tsyringe";
import { saveFileToDatabase } from "../../../../config/multer/multer"; // Importe a função para salvar arquivos
import baseRoutes from "@/modules/base/Base.routes";

const PicturesRouter = Router();

const PicturesController = container.resolve("PicturesController");

PicturesRouter.use("/", baseRoutes(PicturesController));

export default PicturesRouter;
