import { authDTO, signupDTO, tokenDTO } from "../../dtos/AuthDTO";

export interface AuthService {
    signup(auth: signupDTO): Promise<tokenDTO>;
    signin(auth: authDTO): Promise<tokenDTO>;
}