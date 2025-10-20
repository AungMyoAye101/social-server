import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export const isAunthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {


        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // get access_token 

        if (!token) {
            return res.status(401).json({ message: "Token is required." })
        }
        const decoded = verifyAccessToken(token);
        req.user = decoded
        next()
    } catch (error) {
        return res.status(400).json({ message: "Invalid Credientail." })
    }
}