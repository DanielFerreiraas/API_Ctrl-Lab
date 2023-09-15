import { BaseService } from "@/modules/base/BaseService";
import { CreateLaboratoryDTO, LaboratoryDTO, UpdateLaboratoryDTO } from "../../dtos/LaboratoryDTO";

export interface LaboratoryService 
    extends BaseService<LaboratoryDTO, CreateLaboratoryDTO, UpdateLaboratoryDTO> {}