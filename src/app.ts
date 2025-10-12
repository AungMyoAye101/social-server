import express from "express"
import { Request, Response } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route"
import cors from "cors"
import userRouter from "./routes/user.routes"
import postRouter from "./routes/post.route"

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(cors({
    origin: [
        'http://localhost:3000'
    ],
    credentials: true
}))

app.use('/api/v1/auth', authRouter) //authentication
app.use('/api/v1/user', userRouter) //get users

app.use('/api/v1/post', postRouter) // CRUD & get post
app.get('/', (req: Request, res: Response) => {
    res.send("sever is running..")
})

export default app