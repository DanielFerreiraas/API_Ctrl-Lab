import { PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO } from "../../dtos/PicturesDTO";

import { BaseRepository } from "../../../base/BaseRepository";

export interface PicturesRepository 
    extends BaseRepository<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO>{
}