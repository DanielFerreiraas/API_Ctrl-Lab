import { BaseService } from "@/modules/base/BaseService";
import { CreateLaboratoryDTO, LaboratoryDTO, UpdateLaboratoryDTO } from "../../dtos/LaboratoryDto";

export interface LaboratoryService 
    extends BaseService<LaboratoryDTO, CreateLaboratoryDTO, UpdateLaboratoryDTO> {}