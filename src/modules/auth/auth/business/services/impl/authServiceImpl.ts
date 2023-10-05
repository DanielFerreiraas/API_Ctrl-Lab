import { injectable, inject } from 'tsyringe';

import { authDTO, signupDTO, tokenDTO } from '../../../dtos/authDTO';
import { AuthService } from '../authService';
import passwordFacade from '../../facedes/PasswordFacade';
import { UserService } from '@/modules/auth/user/business/services/UserService';
import { sign } from 'jsonwebtoken';
import JWTFacade from '@/shared/facades/TokenFacade';
import { TOKEN_EXPIRATION } from '@/config/env/dotenv';

@injectable()
export class AuthServiceImpl implements AuthService {

    constructor(
        @inject('UserService')
        private userService: UserService
    ) { }


    async signup(auth: signupDTO): Promise<tokenDTO> {
        const userExists = await this.userService.getByNumberRegister(auth.numberRegister);

        if (userExists) {
            throw new Error("this numberRegister already exists");
        }

        await this.userService.createItem({
            numberRegister: auth.numberRegister,
            password: passwordFacade.hash(auth.password),
            username: auth.username,
            type: auth.type,
            name: auth.name,
            photoLink: auth.photoLink,
            description: auth.description
        })

        return this,this.signin(auth);
    }

    async signin(auth: authDTO): Promise<tokenDTO> {
        const user = await this.userService.getByNumberRegister(auth.numberRegister);

        if (!user || !passwordFacade.compare(auth.password, user.password)) {
           throw new Error("numberRegister or password doesn't match");
        }

        const simpleUser = JSON.parse(JSON.stringify(user));

        return { token: await JWTFacade.sign(simpleUser, { expiresIn: TOKEN_EXPIRATION }) };
    }


}