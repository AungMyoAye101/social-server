import { Request, Response, NextFunction, RequestHandler } from "express"
import { AuthRequest } from "../types"
import { decodedToken, verifyAccessToken } from "../utils/jwt"
import User from "../models/user.model"


export const verifyUser = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {

        const { access_token } = req.cookies
        if (!access_token) {
            res.status(400).json({ message: "Your are nor authorized!" })
            return;
        }
        const decoded = verifyAccessToken(access_token)
        const user = await User.findById(decoded.userId)
        if (user) {

            req.user = decoded
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }

}



