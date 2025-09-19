import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import mongoose from "mongoose";
import { Request, Response } from "express";
import User from "../models/user.model";

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body
    try {
        const userExit = await User.findOne({ $or: [{ email }, { username }] })
        if (userExit) {
            return res.status(400).json({ message: "Username or Email already exit!" })
        }
        const hashed_password = await bcrypt.hash(password, 10)
        const newUser = await User.create({ password: hashed_password, username, email })

        const token = jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '24h'
        })
        res.cookie("access_token", token, {
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60 * 1000, //24 hour
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "lax" : "none"
        })
        return res.status(201).json({ message: 'User created successful.', user: newUser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
    }
}

//login
export const login = async (req: Request, res: Response) => {
    const { username, email, password } = req.body

    try {
        const userExit = await User.findOne({ $or: [{ username }, { email }] })
        console.log(userExit)
        if (!userExit) {
            return res.status(400).json({ message: 'No user found!' })
        }

        const compared_password = await bcrypt.compare(userExit.password, password)
        if (!compared_password) {
            return res.status(400).json({ message: 'Incorrect password!' })
        }

        const token = jwt.sign({ userId: userExit._id, role: userExit.role }, process.env.JWT_SECRET_KEY as string, { expiresIn: "24h" })
        res.cookie("access_token", token, {
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60 * 1000, //24 hour
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "lax" : "none"
        })
        return res.status(200).json({ message: 'Login successfull.', user: userExit })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("access_token")
        return res.status(200).json({ message: 'User logout' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
    }

}