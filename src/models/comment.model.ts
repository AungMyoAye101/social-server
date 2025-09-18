import mongoose, { Schema } from "mongoose";

export interface IComment extends Document {
    postId: mongoose.Types.ObjectId,
    author: mongoose.Types.ObjectId,
    content: string,
}
export interface IShare extends Document {
    postId: mongoose.Types.ObjectId,
    content: string
}
const commentSchema = new mongoose.Schema<IComment>({
    postId: { type: Schema.Types.ObjectId, ref: 'Post' },
    author: { type: Schema.Types.ObjectId, ref: 'Post' },
    content: { type: String, trim: true, required: true }
})

const shareSchema = new mongoose.Schema<IShare>({
    postId: { type: Schema.Types.ObjectId, ref: 'Post' },
    content: { type: String, trime: true }
})

export const comment = mongoose.model<IComment>("Comment", commentSchema)
export const share = mongoose.model<IShare>("share", shareSchema)

