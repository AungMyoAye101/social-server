import express from "express"
import { verifyUser } from "../middleware/verifyUser"
import { getAllUsers, getUserById, toFollow, unFollowUser, updateUser } from "../controllers/user"

const userRouter = express.Router()

userRouter.get("/allusers", getAllUsers) //get all user and pagination
userRouter.get('/:userId', getUserById) //get user by id 
userRouter.put('/', verifyUser, updateUser)
userRouter.post("/follow/:id", verifyUser, toFollow)
userRouter.post("/unfollow/:id", verifyUser, unFollowUser)

export default userRouter