export class UserDTO {
  id: string;
  numberRegister: number;
  password: string;
  username: string;
  type: string;
  name: string;
  src: string;
  description: string;
}

export type CreateUserDTO = Omit<UserDTO, "id">;
export type UpdateUserDTO = Partial<UserDTO>;
