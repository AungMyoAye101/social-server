import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import mongoose from "mongoose";
import { Request, Response } from "express";
import User from "../models/user.model";
import { AuthRequest, JwtPayload, TokenGenerated } from "../types";
import { generateToken, verifyRefreshToken } from "../utils/jwt";
import { validationResult } from "express-validator";
import { successResponse } from "../utils/custom-response";


const setCookiesTokens = async (res: Response, tokens: TokenGenerated) => {
    const isProduction = process.env.NODE_ENV === "production" //for cookies security

    //for short live
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

export const register = async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body
    try {
        const userExit = await User.findOne({ $or: [{ email }, { name }] })
        if (userExit) {
            return res.status(400).json({ message: "Username or Email already exit!" })
        }
        const hashed_password = await bcrypt.hash(password, 12)
        const user = new User({ password: hashed_password, name, email })

        const tokens = generateToken({
            userId: user._id.toString(),
            email: user.email,
        })
        setCookiesTokens(res, tokens)
        user.refreshToken = tokens.refresh_token
        await user.save()
        return successResponse(res, 201, true, "User register successfull",
            {
                user: {
                    _id: user._id,
                    refreshToken: user.refreshToken
                }
            })
        // return res.status(201).json({ message: 'User created successful.', user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
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
            return res.status(404).json({ message: 'No user found!' })
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
        console.log("Cookies", req.cookies)
        const refresh_token = req.cookies.refresh_token;
        console.log(refresh_token)
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