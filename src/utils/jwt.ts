import jwt from "jsonwebtoken";
import { JwtPayload, TokenGenerated } from "../types";
import dotenv from "dotenv"
import { Response } from "express";
dotenv.config()
const secretKey = process.env.JWT_SECRET_KEY as string
const refreshSecret = process.env.JWT_REFRESH_SECRET as string


export const generateToken = (payLoad: JwtPayload): TokenGenerated => {
    const access_token = jwt.sign(payLoad, secretKey, {
        expiresIn: "15m"
    })
    const refresh_token = jwt.sign(payLoad, refreshSecret, {
        expiresIn: "7d"
    })

    return { access_token, refresh_token }
}

export const verifyAccessToken = (token: string): JwtPayload => {
    const comparedToken = jwt.verify(token, secretKey) as JwtPayload
    console.log(comparedToken)
    return comparedToken
}
export const verifyRefreshToken = (token: string): JwtPayload => {
    const comparedToken = jwt.verify(token, refreshSecret) as JwtPayload
    console.log(comparedToken)
    return comparedToken
}
export const decodedToken = (token: string): JwtPayload => {
    return jwt.decode(token) as JwtPayload
}

export const setCookiesTokens = async (res: Response, tokens: TokenGenerated) => {
    const isProduction = process.env.NODE_ENV === "production" //for cookies security

    // for short live
    res.cookie("access_token", tokens.access_token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000, // for 15 min
        secure: isProduction,
        sameSite: isProduction ? "strict" : "lax"
    })

    //for long live
    res.cookie("refresh_token", tokens.refresh_token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // for 7 days
        secure: isProduction,
        sameSite: isProduction ? "strict" : "lax"
    })
}