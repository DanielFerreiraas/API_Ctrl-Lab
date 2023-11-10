// import { injectable, inject } from 'tsyringe';

// import { authDTO, signupDTO, tokenDTO } from '../../../dtos/AuthDTO';
// import { AuthService } from '../authService';
// import passwordFacade from '../../facedes/PasswordFacade';
// import { UserService } from '../../../../user/business/services/UserService';
// import { sign } from 'jsonwebtoken';
// import bcrypt from "bcrypt";
// import GeneratedNumerRegister from '../../facedes/GenerateFacade';

// @injectable()
// export class AuthServiceImpl implements AuthService {

//     constructor(
//         @inject('UserService')
//         private userService: UserService
//     ) { }


//     async signup(auth: signupDTO): Promise<tokenDTO> {

//         await this.userService.createItem({
//             numberRegister: GeneratedNumerRegister.generateNumberRegister(),
//             password: passwordFacade.hash(auth.password),
//             username: auth.username, 
//             type: auth.type,
//             name: auth.name,
//             photoLink: auth.photoLink,
//             description: auth.description
//         })

//         return this,this.signin(auth);
//     }

//     async signin(auth: authDTO): Promise<tokenDTO> {
//         const user = await this.userService.getByNumberRegister(auth.numberRegister);
//         if (!user || ! await bcrypt.compareSync(auth.password, user.password)) {
//            throw new Error("numberRegister or password doesn't match");
//         }

//         const token = sign({}, process.env.TK_SECRET, {
//             subject: user.id,
//             expiresIn: '1d'
//         });

//         return {
//             token
//         }
//     }

// }