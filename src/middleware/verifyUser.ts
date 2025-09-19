import { Request, Response, NextFunction } from "express"
import { AuthRequest } from "../types"
import { decodedToken, verifyAccessToken } from "../utils/jwt"
export const verifyUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { access_token } = req.cookie
    if (!access_token) {
        return res.status(400).json({ message: "Your are nor authorized!" })
    }
    try {

        const verifyToken = verifyAccessToken(access_token)
        const decoded = decodedToken(access_token)
        req.user = decoded
        console.log(decoded)
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" })
    }

}