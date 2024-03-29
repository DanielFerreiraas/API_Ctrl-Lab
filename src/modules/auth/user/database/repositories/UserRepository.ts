import { 
    UserDTO, 
    CreateUserDTO, 
    UpdateUserDTO 
} from "../../dtos/UserDTO";

import { BaseRepository } from '../../../../../modules/base/BaseRepository';

export interface UserRepository 
    extends BaseRepository<UserDTO, CreateUserDTO, UpdateUserDTO> {
        getByNumberRegister(numberRegister: number): Promise<UserDTO>;
        createUser(
            numberRegister: number,
            password: string, 
            username: string, 
            type: string, 
            name: string, 
            src: string,
            description: string): Promise<UserDTO>;
    }