export class ExampleOneDTO {
    id: string;
    fieldOne: string;
    fieldTwo: string;
};

export type CreateExampleOneDTO = Omit<ExampleOneDTO, 'id'>;
export type UpdateExampleOneDTO = Partial<ExampleOneDTO>;