import { injectable, inject } from 'tsyringe';

import { BaseServiceImpl } from '@/modules/base/BaseServiceImpl';
import { UserRepository } from '../../../database/repositories/UserRepository';

import {
    UserDTO,
    CreateUserDTO,
    UpdateUserDTO
} from '../../../dtos/UserDTO';

@injectable()
export class UserServiceImpl
    extends BaseServiceImpl<UserDTO, CreateUserDTO, UpdateUserDTO>   {

    constructor(
        @inject('UserRepository')
        private userRepository: UserRepository
    ) {
        super(userRepository);
    }
    async getByNumberRegister(numberRegister: number): Promise<UserDTO> {
        return this.userRepository.getByNumberRegister(numberRegister);
    }
    }   