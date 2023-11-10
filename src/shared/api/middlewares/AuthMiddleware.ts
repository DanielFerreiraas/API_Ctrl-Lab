import { NextFunction, Request, Response } from "express";

import JWTFacade from "../../../shared/facades/TokenFacade";

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    try{
        verifyToken(req);
        return next();
    }catch(error){
        throw new Error(error.message);
    }

};

const getToken = (req: Request) => {
    const auth = req.headers.authorization?.split(" ")[1];
    return auth as string;
};

const verifyToken = (req: Request) => {
    const token = getToken(req);
    return JWTFacade.verifyAccess(token);
};