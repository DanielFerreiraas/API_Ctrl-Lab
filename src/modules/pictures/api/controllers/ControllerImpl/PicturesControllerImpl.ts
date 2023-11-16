import { inject, injectable } from "tsyringe";

import { PicturesService } from "../../../../../modules/pictures/business/services/PicturesService";

import { BaseControllerImpl } from "../../../../../modules/base/BaseControllerimpl";

import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "../../../../../modules/pictures/dtos/PicturesDTO";

@injectable()
export class PicturesControllerImpl 
    extends BaseControllerImpl<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO> {

        constructor(
            @inject("PicturesService")
            picturesService: PicturesService 
        ){
            super(picturesService)
        }
        
    }