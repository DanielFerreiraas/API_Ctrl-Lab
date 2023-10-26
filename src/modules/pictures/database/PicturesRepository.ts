import { BaseRepository } from "@/modules/base/BaseRepository";
import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "../dtos/PicturesDTO";

export interface PicturesRepository 
    extends BaseRepository<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO> {}