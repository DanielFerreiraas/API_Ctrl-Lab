export class LaboratoryDTO{
    id: string;
    name: string;
    src: string;
    location: string;
    hourOpen: string;
    hourClose: string;

}

export type CreateLaboratoryDTO = Omit<LaboratoryDTO, "id">
export type UpdateLaboratoryDTO = Partial<LaboratoryDTO>