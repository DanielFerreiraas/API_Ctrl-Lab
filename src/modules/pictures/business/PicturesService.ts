import { BaseService } from "@/modules/base/BaseService";
import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "../dtos/PicturesDTO";

export interface PicturesService 
    extends BaseService<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO> {}