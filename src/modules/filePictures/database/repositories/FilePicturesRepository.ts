import { BaseRepository } from "@/modules/base/BaseRepository";
import { CreateFilePicturesDTO, UpdateFilePicturesDTO, FilePicturesDTO } from "../../dtos/FilePictureDTO";

export interface FilePicturesRepository
    extends BaseRepository<FilePicturesDTO, CreateFilePicturesDTO, UpdateFilePicturesDTO> {}