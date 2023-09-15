export class ExampleTwoDTO {
    id: string;
    nome: string;
    email: string;
}

export type CreateExampleTwoDTO = Omit<ExampleTwoDTO , "id">;
export type UpdateExampleTwoDTO = Partial<ExampleTwoDTO>