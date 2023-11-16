import { 
    UserDTO, 
    CreateUserDTO, 
    UpdateUserDTO 
} from "../../dtos/UserDTO";

import { BaseRepository } from '../../../../../modules/base/BaseRepository';

export interface UserRepository 
    extends BaseRepository<UserDTO, CreateUserDTO, UpdateUserDTO> {
        getByNumberRegister(numberRegister: string): Promise<UserDTO>;
        createUser(
            numberRegister: string,
            password: string, 
            username: string, 
            type: string, 
            name: string, 
            photoLink: string, 
            description: string): Promise<UserDTO>;
    }