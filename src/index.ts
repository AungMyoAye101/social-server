
import express from "express"
import { Request, Response } from "express"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send("sever is running..")
})
app.listen(port, () => console.log("Server is listening on port " + port))