import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log("connected to mongoDB.")
    } catch (error) {
        console.warn(error)

    }

}