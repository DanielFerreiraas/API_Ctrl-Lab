import { Pictures } from "../entities/Pictures.entity";

import { BaseRepositoryImpl } from "../../../../base/BaseRepositoryImpl";

import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "../../../dtos/PicturesDTO" ;

export class PicturesRepositoryImpl 
    extends BaseRepositoryImpl<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO> {

        constructor(){
            super("id", Pictures)
        }

}