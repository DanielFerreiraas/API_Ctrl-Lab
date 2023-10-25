import { BaseService } from "@/modules/base/BaseService";
import { CreateFilePicturesDTO, FilePicturesDTO, UpdateFilePicturesDTO } from "../dtos/FilePictureDTO";

export interface FilePicturesService 
    extends BaseService<FilePicturesDTO, CreateFilePicturesDTO, UpdateFilePicturesDTO> {}