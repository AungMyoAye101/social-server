import express from "express"
import { login, logout, register } from "../controllers/auth"
import { verifyUser } from "../middleware/verifyUser"
import { Request, Response } from "express"
import { AuthRequest } from "../types"
const authRouter = express.Router()

authRouter.post("/register", register)

authRouter.post("/login", login)

authRouter.post("/logout", logout)

authRouter.get('/me', verifyUser, async (req: AuthRequest, res: Response) => {
    console.log(req.user)
    res.status(200).json({ message: "meme" })
})

export default authRouter