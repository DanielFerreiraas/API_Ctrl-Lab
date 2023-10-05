import { ACCESS_SECRET, REFRESH_SECRET } from "@/config/env/dotenv";

import jwt from "jsonwebtoken";

class JWTFacade {
    static async sign(payload: Object, options?: jwt.SignOptions) {
        return jwt.sign(payload, ACCESS_SECRET, options);
    }

    static async refresh(payload: Object, options?: jwt.SignOptions) {
        return jwt.sign(payload, REFRESH_SECRET, options);
    }

    static verifyAccess(token: string, audience?: string) {
        return jwt.verify(token, ACCESS_SECRET, { audience });
    }

    static verifyRefresh(token: string, audience?: string) {
        return jwt.verify(token, REFRESH_SECRET, { audience });
    }
}

export default JWTFacade;