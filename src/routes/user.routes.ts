import express from "express"
import { verifyUser } from "../middleware/verifyUser"
import { Request, Response } from "express"
import { AuthRequest } from "../types"

const userRouter = express.Router()

// userRouter.post('/me', verifyUser, async (req: Request, res: Response) => {
//     res.status(200).json({ message: "User authenticated." })
// })