export class CourseDTO {
    id: string;
    name: string;
    idClass?: string;
    period: number;
};

export type CreatecourseDTO = Omit<CourseDTO, 'id'>;
export type UpdatecourseDTO = Partial<CourseDTO>;