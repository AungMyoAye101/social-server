import { Request, Response } from "express"
import mongoose from "mongoose"
import User from "../models/user.model"
import { JwtPayload } from "jsonwebtoken"
import { AuthRequest } from "../types"

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
    const { page = 1, limit = 1 } = req.query

    const currpage = Number(page)
    const limitRate = Number(limit)
    try {
        const total = await User.countDocuments()
        const totalPages = Math.ceil(total / limitRate)
        const skip = (currpage - 1) * limitRate
        const hasNextPage = currpage < totalPages
        const hasPrevPage = currpage > 1

        const users = await User.find().select("-password").skip(skip).limit(Number(limit)).sort({ createdAt: -1 })

        return res.status(200).json({ message: "success", users, pagination: { page: currpage, hasNextPage, hasPrevPage, totalPages } })

    } catch (error) {
        return res.status(500).json({ message: "Internal server error." })
    }
}

export const updateUser = async (req: AuthRequest, res: Response) => {
    const { userId } = req.user as JwtPayload

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid userId!" })
    }

    try {
        const user = await User.findByIdAndUpdate(userId, req.body, { new: true }).select('-password')

        if (!user) {
            return res.status(404).json({ message: "User not found ." })
        }
        return res.status(200).json({ message: "user updated", user })

    } catch (error) {
        console.warn(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

export const toFollow = async (req: AuthRequest, res: Response) => {
    const { userId } = req.user as JwtPayload
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid userId!" })
    }
    if (userId === id) {
        return res.status(400).json({ message: "You can't follow yourself" })
    }
    try {
        const followUser = await User.findByIdAndUpdate(id, {
            $addToSet: { followers: userId }
        }, { new: true })
        const user = await User.findByIdAndUpdate(userId, {
            $addToSet: { following: id }
        }, { new: true })

        if (!user || !followUser) {
            return res.status(404).json({ message: "User not found." })
        }

        return res.status(200).json({ mesage: 'following user success', })
    } catch (error) {
        console.warn(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

export const unFollowUser = async (req: AuthRequest, res: Response) => {
    const { userId } = req.user as JwtPayload
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid userId!" })
    }
    if (userId === id) {
        return res.status(400).json({ message: "You can't unfollow yourself." })
    }
    try {
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({ message: "User not found." })
        }
        console.log("finded usesr")
        if (!user.followers.includes(userId)) {
            return res.status(400).json({ message: "You are not following user" })
        }
        await User.findByIdAndUpdate(id, { $pull: { followers: userId } }, { new: true })
        console.log("pull user id from follower ")
        await User.findByIdAndUpdate(userId, { $pull: { following: id } }, { new: true })
        console.log("pull user id from followeing ")
        return res.status(200).json({ mesage: 'unFlowing success' })
    } catch (error) {
        console.warn(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

