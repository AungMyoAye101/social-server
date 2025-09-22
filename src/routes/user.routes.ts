import express from "express"
import { verifyUser } from "../middleware/verifyUser"
import { Request, Response } from "express"
import { AuthRequest } from "../types"
import { getAllUsers, getUserById, toFollow, unFollowUser } from "../controllers/user"

const userRouter = express.Router()

userRouter.get("/allusers", getAllUsers) //get all user and pagination
userRouter.get('/:userId', getUserById) //get user by id 
userRouter.post("/follow/:id", verifyUser, toFollow)
userRouter.post("/unfollow/:id", verifyUser, unFollowUser)

export default userRouter