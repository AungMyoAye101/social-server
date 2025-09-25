import express from "express"
import { login, logout, me, register } from "../controllers/auth"
import { verifyUser } from "../middleware/verifyUser"

import { loginValidator, signupValidator } from "../config/validator"

const authRouter = express.Router()

authRouter.post("/register", signupValidator, register)

authRouter.post("/login", loginValidator, login)

authRouter.post("/logout", logout)

authRouter.get('/me', verifyUser, me)

export default authRouter