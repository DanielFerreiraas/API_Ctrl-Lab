export class scheduleDTO {
    id: string;
    laboratoryId: string;
    userId: string;
    courseId: string;
    date: string;
    start: string;
    end: string;
};

export type CreatescheduleDTO = Omit<scheduleDTO, 'id'>;
export type UpdatescheduleDTO = Partial<scheduleDTO>;