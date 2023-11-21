import { BaseService } from '../../../../../modules/base/BaseService';
import { 
    UserDTO,  
    CreateUserDTO, 
    UpdateUserDTO 
} from '../../dtos/UserDTO';

export interface UserService 
    extends BaseService<UserDTO, CreateUserDTO, UpdateUserDTO> {
        getByNumberRegister(numberRegister: number): Promise<UserDTO>;
}