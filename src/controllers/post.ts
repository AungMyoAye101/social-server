import { Request, Response } from "express";
import { AuthRequest, JwtPayload } from "../types";
import Post from "../models/post.model";
import mongoose from "mongoose";
import User from "../models/user.model";

export const create_post = async (req: AuthRequest, res: Response) => {
    const { content } = req.body
    const { userId } = req.user as JwtPayload // get from middleware
    try {
        const post = await Post.create({ author: userId, content })

        return res.status(201).json({ message: "Post created successfull.", post })
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Internal server error." })
    }
}

export const update_post = async (req: Request, res: Response) => {
    const { postId } = req.params
    const { content } = req.body

    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ message: "Invalid post Id." })
    }

    try {
        const post = await Post.findByIdAndUpdate(postId, { content }, { new: true })

        return res.status(201).json({ message: "Post updated successfull.", post })
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Internal server error." })
    }
}

export const delete_post = async (req: AuthRequest, res: Response) => {
    const { userId } = req.user as JwtPayload // get from middleware

    const { postId } = req.params
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ message: "Invalid post Id." })
    }

    try {
        await Post.findByIdAndDelete(postId)
        await User.findByIdAndUpdate(userId, { $pull: { posts: postId } })
        return res.status(200).json({ message: "Post was deleted." })
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Internal server error." })
    }
}