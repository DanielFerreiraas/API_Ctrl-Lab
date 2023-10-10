import dotenv from "dotenv";

dotenv.config();

export const ACCESS_SECRET = process.env.AUTH_ACCESS_SECRET || "auth";
export const REFRESH_SECRET = process.env.AUTH_REFRESH_SECRET || "secret";
export const TOKEN_EXPIRATION = process.env.AUTH_TOKEN_EXPIRATION || "1h";
export const REFRESH_TOKEN_EXPIRATION = process.env.AUTH_REFRESH_TOKEN_EXPIRATION || "24h";