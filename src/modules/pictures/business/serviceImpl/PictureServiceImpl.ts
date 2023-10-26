import { inject, injectable } from "tsyringe";

import { PicturesRepository } from "@/modules/pictures/database/PicturesRepository";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "@/modules/pictures/dtos/PicturesDTO";

@injectable()
export class PicturesServiceImpl 
    extends BaseServiceImpl<PicturesDTO, CreatePicturesDTO, UpdatePicturesDTO> {

        constructor(
            @inject("PicturesRepository")
            picturesRepository: PicturesRepository
        ) {
            super(picturesRepository)
        }
        
}