import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthController } from "../../../../../modules/auth/auth/api/controllers/AuthController";

const authRouter = Router();
const AuthController:AuthController = container.resolve('AuthController');

authRouter.post('/signup', (req,res) => AuthController.signup(req,res));
authRouter.post('/signin', (req, res) => AuthController.signin(req ,res));

export default authRouter;