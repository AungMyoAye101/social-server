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

        jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '24h'
        })

        return res.status(201).json({ message: 'User created successful.', user: newUser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error!' })
    }
}
