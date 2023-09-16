import { authDTO, tokenDTO } from "../../dtos/authDTO";

export interface AuthService {
    signup(user: authDTO): Promise<tokenDTO>;
    signin(auth: authDTO): Promise<tokenDTO>;
}