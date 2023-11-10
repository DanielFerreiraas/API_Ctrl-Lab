import { inject, injectable } from "tsyringe";

import { LaboratoryService } from "../../../../../modules/laboratory/business/services/LaboratoryService";

import { BaseControllerImpl } from "../../../../../modules/base/BaseControllerimpl";

import { CreateLaboratoryDTO, LaboratoryDTO, UpdateLaboratoryDTO } from "../../../../../modules/laboratory/dtos/LaboratoryDTO";

@injectable()
export class LaboratoryControllerImpl 
    extends BaseControllerImpl<LaboratoryDTO, CreateLaboratoryDTO, UpdateLaboratoryDTO> {

        constructor(
            @inject("LaboratoryService")
            laboratoryService: LaboratoryService 
        ){
            super(laboratoryService)
        }
        
    }