import { User } from "../entities/user.entity";

import { UserDTO, CreateUserDTO, UpdateUserDTO } from "../../../../../../../../modules/auth/user/dtos/UserDTO";

import { BaseRepositoryImpl } from '../../../../../../../../modules/base/BaseRepositoryImpl';

export class UserRepositoryImpl 
    extends BaseRepositoryImpl<UserDTO, CreateUserDTO, UpdateUserDTO>{
    
    constructor() {
        super('id', User);
    }

     async getByNumberRegister(numberRegister: string): Promise<UserDTO> {
        const user =  await this.typeormRepository.findOne({ 
            where: { numberRegister }
        });
        
        return user;

    }

    async createUser(numberRegister: string, password: string, username: string, type: string, name: string, photoLink: string, description: string): Promise<UserDTO> {
        const user = this.typeormRepository.create({
            numberRegister,
            password, 
            username, 
            type, 
            name, 
            photoLink, 
            description
        });

        return await this.typeormRepository.save(user);
        
    }
}