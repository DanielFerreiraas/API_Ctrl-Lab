import { inject, injectable } from "tsyringe";

import { PicturesRepository } from "../../../database/repositories/PicturesRepository";

import { BaseServiceImpl } from "../../../../base/BaseServiceImpl";

import { CreatePicturesDTO, PicturesDTO, UpdatePicturesDTO } from "../../../dtos/PicturesDTO";

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