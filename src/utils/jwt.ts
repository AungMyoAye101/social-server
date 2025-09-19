import jwt from "jsonwebtoken";
import { JwtPayload, TokenGenerated } from "../types";
import dotenv from "dotenv"
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