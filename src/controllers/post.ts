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
        return res.status(500).json({ message: "Internal server error." })
    }
}

//update post 
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

//delete post 
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

//get all posts 

export const getAllPosts = async (req: Request, res: Response) => {

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 5

    const skip = (page - 1) * limit

    try {
        const posts = await Post.find().skip(skip).limit(limit).sort({ createdAt: -1 })

        const total = await Post.countDocuments()
        const totalPages = Math.ceil(total / limit)
        const hasNextPage = page > totalPages
        const hasPrevPage = page > 1

        return res.status(200).json({
            message: "success", result: {
                posts, page, hasNextPage, hasPrevPage, totalPages
            }
        })
    } catch (error) {
        console.warn(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}

//get post detail by post id

export const postDetail = async (req: Request, res: Response) => {
    const { postId } = req.params
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).json({ message: "Invalid post id!" })
    }
    try {
        const post = await Post.findById(postId)
        if (!post) {
            return res.status(404).json({ message: "Post not found." })
        }
        return res.status(200).json({ message: "success", result: { post } })
    } catch (error) {
        console.warn(error)
        return res.status(500).json({ message: "Internal server error." })
    }
}