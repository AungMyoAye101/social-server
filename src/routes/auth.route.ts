import express from "express"
import { login, logout, me, register } from "../controllers/auth"
import { verifyUser } from "../middleware/verifyUser"
import { Request, Response } from "express"
import { AuthRequest, JwtPayload } from "../types"
import User from "../models/user.model"
const authRouter = express.Router()

authRouter.post("/register", register)

authRouter.post("/login", login)

authRouter.post("/logout", logout)

authRouter.get('/me', verifyUser, me)

export default authRouter