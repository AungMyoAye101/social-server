import mongoose, { Schema } from "mongoose";

export interface IPost extends Document {
    author: mongoose.Types.ObjectId,
    content: string,
    likes: mongoose.Types.ObjectId[],
    comments: mongoose.Types.ObjectId[],
    shares: mongoose.Types.ObjectId[],
}

const postSchema = new mongoose.Schema<IPost>({
    author: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    shares: [{ type: Schema.Types.ObjectId, ref: "Share" }],
},
    { timestamps: true }
)
const Post = mongoose.model("Post", postSchema)

export default Post