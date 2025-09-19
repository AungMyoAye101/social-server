
import express from "express"
import { Request, Response } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route"
import cors from "cors"
dotenv.config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(cors({
    credentials: true
}))

app.use('/api/v1/auth', authRouter)
app.get('/', (req: Request, res: Response) => {
    res.send("sever is running..")
})
app.listen(port, () => console.log("Server is listening on port " + port))