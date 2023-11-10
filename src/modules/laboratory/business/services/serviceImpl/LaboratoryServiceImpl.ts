import { inject, injectable } from "tsyringe";

import { LaboratoryRepository } from "../../../../../modules/laboratory/database/repositories/LaboratoryRepository";

import { BaseServiceImpl } from "../../../../../modules/base/BaseServiceImpl";

import { CreateLaboratoryDTO, LaboratoryDTO, UpdateLaboratoryDTO } from "../../../../../modules/laboratory/dtos/LaboratoryDTO";

@injectable()
export class LaboratoryServiceImpl 
    extends BaseServiceImpl<LaboratoryDTO, CreateLaboratoryDTO, UpdateLaboratoryDTO> {

        constructor(
            @inject("LaboratoryRepository")
            laboratoryRepository: LaboratoryRepository
        ) {
            super(laboratoryRepository)
        }
        
}