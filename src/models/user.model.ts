import mongoose from "mongoose";

export interface IUser extends Document {
    username: string,
    email: string,
    password: string,
    avatar?: { url: string, public_id: string }
    bio?: string,
    posts: mongoose.Types.ObjectId[],
    followers: mongoose.Types.ObjectId[],
    following: mongoose.Types.ObjectId[]
}

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    avatar: {
        url: String,
        public_id: String
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: "post" }],
    followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "User" }]
},
    { timestamps: true }
)

const User = mongoose.model("User", userSchema)
export default User