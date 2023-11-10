import { BaseControllerImpl } from "../../../../../../modules/base/BaseControllerimpl";
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "../../../dtos/UserDTO";
import { inject, injectable } from "tsyringe";
import { UserController } from "../userController";
import { UserService } from "../../../business/services/UserService";

@injectable()
export class UserControllerImpl extends BaseControllerImpl<UserDTO, CreateUserDTO, UpdateUserDTO> {

    constructor(
        @inject("UserService")
        userService: UserService
    ){
        super(userService)
    }
}