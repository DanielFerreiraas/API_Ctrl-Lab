import { LabDTO, tokenDTO } from "../../dtos/LabDTO";

export interface LabService {
    createLabs(lab: LabDTO): Promise<tokenDTO>;
}