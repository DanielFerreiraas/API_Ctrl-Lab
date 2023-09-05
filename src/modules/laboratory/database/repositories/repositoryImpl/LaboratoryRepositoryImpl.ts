import { Laboratory } from "../entities/Laboratory.entity";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

import { CreateLaboratoryDTO, LaboratoryDTO, UpdateLaboratoryDTO } from "@/modules/laboratory/dtos/LaboratoryDto";

export class LaboratoryRepositoryImpl 
    extends BaseRepositoryImpl<LaboratoryDTO, CreateLaboratoryDTO, UpdateLaboratoryDTO> {

        constructor(){
            super("id", Laboratory)
        }

}