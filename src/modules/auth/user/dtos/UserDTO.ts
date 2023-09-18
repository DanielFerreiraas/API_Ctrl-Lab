export class UserDTO {
    id: string;
    // username: string;
    numberRegister: string;
    password: string;
    // type: string;
    // name: string;
    // photoLink: string;
    // description: string;
}

export type CreateUserDTO = Omit<UserDTO, 'id'>;
export type UpdateUserDTO = Partial<UserDTO>;