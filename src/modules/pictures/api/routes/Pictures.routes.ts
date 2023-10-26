import  { Router } from "express";

import { Pictures } from "../../database/entities/Pictures.entity"; // Importe sua entidade do TypeORM

import upload from "@/config/multer/multer"; // Importe o middleware de upload

import dataSource from '@/config/database/typeorm/data-source';

import { container } from "tsyringe";

import baseRoutes from "@/modules/base/Base.routes";
import path from "path";

const PicturesRouter = Router();

const PicturesController = container.resolve("PicturesController");

PicturesRouter.use("/", baseRoutes(PicturesController));

const pictureUpload = upload.single("file");

const uploadPicture = async (req, res) => {
  pictureUpload(req, res, async (err) => {
    if (err) {
      // Lida com erros de upload, se houverem
      return res.status(400).json({ error: err.message });
    }

    try {
      // Salva o caminho do arquivo no banco de dados
      const pictureRepository = dataSource.getRepository(Pictures);
      const newPicture = pictureRepository.create({
        src: req.file.path, // req.file.path contém o caminho do arquivo salvo pelo Multer
      });

      await pictureRepository.save(newPicture);

      return res.status(200).json({ message: "Arquivo enviado com sucesso!" });
    } catch (error) {
      // Lida com erros ao salvar no banco de dados
      return res.status(500).json({ error: "Erro ao salvar no banco de dados." });
    }
  });
};


export { uploadPicture };

export default PicturesRouter;