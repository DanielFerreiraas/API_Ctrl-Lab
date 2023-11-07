import { injectable, inject } from 'tsyringe';

import { Request, Response } from 'express';
import { AuthService } from '../../../business/services/authService';   
import { AuthController } from '@/modules/auth/auth/api/controllers/authController';
import { authDTO, signupDTO } from '../../../dtos/AuthDTO';


@injectable()
export class AuthControllerImpl  implements AuthController 
        {
    
    constructor(
        @inject('AuthService')
        private authService: AuthService
    ) {
    }

    public async signin(req: Request, res: Response): Promise<Response> {
        const user = await this.authService.signin(req.body as authDTO);
        return res.json(user);
    }

    public async signup(req: Request, res: Response): Promise<Response> {

        const auth = await this.authService.signup(req.body as signupDTO);
        return res.json(auth);

    }
}