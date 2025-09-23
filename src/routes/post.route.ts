import express from "express"
import { verifyUser } from "../middleware/verifyUser"
import { create_post, delete_post, update_post } from "../controllers/post"
const postRouter = express()

postRouter.post('/', verifyUser, create_post) //create post
postRouter.put("/:postId", update_post)
postRouter.delete(":/postId", delete_post)

export default postRouter