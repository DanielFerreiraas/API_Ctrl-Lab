import multer, { StorageEngine } from "multer";
import path from "path";
import { Request, Response } from "express"; // Adicionando a importação de Response
import dataSource from "../database/typeorm/data-source";
import { User } from "@/modules/auth/user/database/repositories/impl/typeorm/entities/user.entity";

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

const updateFileUser = async (req: Request, res: Response) => {
  try {
      const file = req.file;
      const { id } = req.params; // ID do laboratório a ser atualizado

      if (!file) {
          return res.status(400).json({ message: "Arquivo não fornecido" });
      }

      const userRepository = dataSource.getRepository(User);

      // Verificar se o laboratório com o ID fornecido existe
      const existingUser = await userRepository.findOne({ where: {id}});
      if (!existingUser) {
          return res.status(404).json({ message: "Laboratório não encontrado" });
      }

      // Atualizar o caminho da imagem no laboratório existente
      existingUser.src = file.path;
      const updatedUser = await userRepository.save(existingUser);

      return res.status(200).json({ user: updatedUser });
  } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar imagem no banco de dados", error: error.message });
  }
};

export { upload, updateFileUser  };