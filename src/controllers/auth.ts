import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import mongoose from "mongoose";
import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import { AuthRequest, JwtPayload, TokenGenerated } from "../types";
import { generateToken, setCookiesTokens, verifyRefreshToken } from "../utils/jwt";
import { validationResult } from "express-validator";
import { successResponse } from "../utils/custom-response";
import { NotFoundError } from "../common/error";
import { registerService } from "../service/auth.service";




export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { user, tokens } = await registerService(req.body)
        setCookiesTokens(res, tokens)

        return successResponse(res, 201, true, "User register successfull",
            {
                user: {
                    _id: user._id,
                    email: user.email
                },
                access_token: tokens.access_token
            })
    } catch (error) {
        return next(error)
    }
}

//login
export const login = async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (!user) {
            throw new NotFoundError("User not found.")
        }

        const compared_password = await bcrypt.compare(password, user.password)

        if (!compared_password) {
            return res.status(400).json({ message: 'Incorrect password!' })
        }
        // generate jwt token for both access and refresh
        const tokens = generateToken({ userId: user._id.toString(), email: user.email })

        //set cookies
        setCookiesTokens(res, tokens)
        return successResponse(res, 200, true, "Login success", { token: tokens.access_token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("access_token")
        res.clearCookie("refresh_token")
        return res.status(200).json({ message: 'User logout' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
    }

}

export const me = async (req: AuthRequest, res: Response) => {
    const { userId } = req.user as JwtPayload
    if (!userId) return
    try {
        const user = await User.findById(userId).select("-password")
        return res.status(200).json({ message: 'user authenticated.', user })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

//Refresh token 
export const refreshToken = async (req: Request, res: Response) => {
    try {

        const refresh_token = req.cookies.refresh_token;
        if (!refresh_token) {
            return res.status(401).json({ message: "No token." })
        };

        const { userId, email } = verifyRefreshToken(refresh_token);
        const tokens = generateToken({ userId, email })
        console.log("generated", tokens)
        return successResponse(res, 200, true, "Generated new tokens successfull.", { token: tokens.access_token })
    } catch (error) {
        return res.status(403).json({ message: "Invalid refresh token" })
    }
}