import multer, { StorageEngine } from "multer";
import path from "path";
import express, { Request, Response } from "express"; // Adicionando a importação de Response
import { Pictures } from "@/modules/pictures/database/repositories/entities/Pictures.entity";
import dataSource from "../database/typeorm/data-source";

const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, "uploads/");
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const saveFileToDatabase = async (req: Request, res: Response) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: "Arquivo não fornecido" });
        }

        const picturesRepository = dataSource.getRepository(Pictures);
        const newPicture = picturesRepository.create({ src: file.path });
        const savedPicture = await picturesRepository.save(newPicture);

        return res.status(201).json({ picture: savedPicture });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao salvar imagem no banco de dados", error: error.message });
    }
};

const getFileById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id; // Supondo que o ID seja passado na URL
  
      // Consultar o banco de dados para obter o caminho da imagem pelo ID
      const picturesRepository = dataSource.getRepository(Pictures);
      const picture = await picturesRepository.findOne({ where: { id } });
  
      if (!picture) {
        return res.status(404).json({ message: "Imagem não encontrada" });
      }
  
      // Retornar o caminho da imagem encontrada
      const imagePath = path.resolve(__dirname, 'uploads');

      // Enviar a imagem como resposta
      return res.sendFile(imagePath);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar a imagem", error: error.message });
    }
  };


export { upload, saveFileToDatabase, getFileById };