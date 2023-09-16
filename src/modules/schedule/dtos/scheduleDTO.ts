export class scheduleDTO {
    id: string;
    fieldOne: string;
    fieldTwo: string;
};

export type CreatescheduleDTO = Omit<scheduleDTO, 'id'>;
export type UpdatescheduleDTO = Partial<scheduleDTO>;