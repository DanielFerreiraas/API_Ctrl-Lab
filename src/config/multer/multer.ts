import multer, { StorageEngine } from "multer";
import path from "path";
import { Request, Response } from "express"; // Adicionando a importação de Response
import dataSource from "../database/typeorm/data-source";
import { Laboratory } from "@/modules/laboratory/database/repositories/entities/Laboratory.entity";

const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
      cb(null, "uploads/");
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = path.extname(file.originalname);
      cb(null, uniqueSuffix + fileExtension);
  }
});

const upload = multer({ storage });

const updateFileInDatabase = async (req: Request, res: Response) => {
  try {
      const file = req.file;
      const { id } = req.params; // ID do laboratório a ser atualizado

      if (!file) {
          return res.status(400).json({ message: "Arquivo não fornecido" });
      }

      const laboratoryRepository = dataSource.getRepository(Laboratory);

      // Verificar se o laboratório com o ID fornecido existe
      const existingLaboratory = await laboratoryRepository.findOne({ where: {id}});
      if (!existingLaboratory) {
          return res.status(404).json({ message: "Laboratório não encontrado" });
      }

      // Atualizar o caminho da imagem no laboratório existente
      existingLaboratory.src = file.path;
      const updatedLaboratory = await laboratoryRepository.save(existingLaboratory);

      return res.status(200).json({ laboratory: updatedLaboratory });
  } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar imagem no banco de dados", error: error.message });
  }
};

export { upload, updateFileInDatabase  };