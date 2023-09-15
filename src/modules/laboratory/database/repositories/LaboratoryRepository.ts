import { BaseRepository } from "@/modules/base/BaseRepository";
import { CreateLaboratoryDTO, LaboratoryDTO, UpdateLaboratoryDTO } from "../../dtos/LaboratoryDTO";

export interface LaboratoryRepository 
    extends BaseRepository<LaboratoryDTO, CreateLaboratoryDTO, UpdateLaboratoryDTO> {}