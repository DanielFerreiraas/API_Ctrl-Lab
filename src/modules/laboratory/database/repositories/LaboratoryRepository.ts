import { BaseRepository } from "@/modules/base/BaseRepository";
import { CreateLaboratoryDTO, LaboratoryDTO, UpdateLaboratoryDTO } from "../../dtos/LaboratoryDto";

export interface LaboratoryRepository 
    extends BaseRepository<LaboratoryDTO, CreateLaboratoryDTO, UpdateLaboratoryDTO> {}