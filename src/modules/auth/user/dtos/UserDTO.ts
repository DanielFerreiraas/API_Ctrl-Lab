export class UserDTO {
    id: string;
    idPictures: number;
    numberRegister: string;
    password: string;
    username: string;
    type: string;
    name: string;
    photoLink: string;
    description: string;
}

export type CreateUserDTO = Omit<UserDTO, 'id'>;
export type UpdateUserDTO = Partial<UserDTO>;