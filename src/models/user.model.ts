import mongoose from "mongoose";

export interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    avatar?: { url: string, public_id: string }
    bio?: string,
    role: 'admin' | "user",
    refreshToken: string | null,
    posts: mongoose.Types.ObjectId[],
    followers: mongoose.Types.ObjectId[],
    following: mongoose.Types.ObjectId[]
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
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
    refreshToken: { type: String, default: null },
    role: { type: String, default: "user" },
    posts: [{ type: mongoose.Types.ObjectId, ref: "post" }],
    followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "User" }]
},
    { timestamps: true }
)

const User = mongoose.model("User", userSchema)
export default User