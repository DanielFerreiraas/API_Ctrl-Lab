import { Pictures } from "../entities/Pictures.entity";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "@/modules/pictures/dtos/PicturesDTO";

export class PicturesRepositoryImpl 
    extends BaseRepositoryImpl<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO> {

        constructor(){
            super("id", Pictures)
        }

}