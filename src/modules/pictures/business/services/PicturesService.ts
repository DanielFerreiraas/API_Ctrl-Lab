import { BaseService } from "../../../base/BaseService";
import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "../../dtos/PicturesDTO";

export interface PicturesService 
    extends BaseService<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO> {}