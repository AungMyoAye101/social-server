import express from "express"
import { login, logout, me, refreshToken, register } from "../controllers/auth"
import { verifyUser } from "../middleware/verifyUser"

import { loginValidator, signupValidator } from "../config/validator"

const authRouter = express.Router()

authRouter.post("/register", signupValidator, register)

authRouter.post("/login", loginValidator, login)

authRouter.post("/logout", logout)

authRouter.get("/me", verifyUser, me)

authRouter.post("/refresh", refreshToken)

export default authRouter