import { Request } from "express"

export interface JwtPayload {
    userId: string,
    email: string,
}
export interface TokenGenerated {
    access_token: string, refresh_token: string
}

export interface AuthRequest extends Request {
    user?: JwtPayload,
    cookies: {
        access_token?: string,
        refresh_token?: string,
    }
}