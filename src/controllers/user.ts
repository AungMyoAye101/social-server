import { Request, Response } from "express"
import mongoose from "mongoose"
import User from "../models/user.model"

//get user by id
export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID." })
        }

        const user = await User.findById(userId).select("-password")
        if (!user) {
            return res.status(404).json({ message: "No user found." })
        }
        return res.status(200).json({ message: "Success", user })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

//get all user 

export const getAllUsers = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.params

    try {
        const total = await User.countDocuments()
        const totalPages = Math.floor(total / Number(limit))
        const skip = (Number(page) - 1) * Number(limit)
        const hasNextPage = Number(page) <= totalPages
        const hasPrevPage = Number(page) >= 1

        const users = await User.find().select("-password").skip(skip).limit(Number(limit)).sort({ createdAt: -1 })

        return res.status(200).json({ message: "success", users, hasNextPage, hasPrevPage, totalPages })

    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}