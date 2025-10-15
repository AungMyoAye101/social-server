import { Request, Response } from "express"

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

export type successResponseType = {

    res: Response,
    statusCode: number,
    success: boolean,
    result: any,
    message: string,
    pagination?: pagination
}
export type pagination = {
    total: number,
    currentPage: number,
    hasNextPage: boolean,
    hasPrevPage: boolean,
    limit: number
}