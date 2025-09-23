import express from "express"
import { verifyUser } from "../middleware/verifyUser"
import { create_post, delete_post, getAllPosts, postDetail, update_post } from "../controllers/post"
const postRouter = express()

postRouter.post('/', verifyUser, create_post) //create post
postRouter.put("/:postId", update_post) //update post by post id
postRouter.delete("/delete/:postId", verifyUser, delete_post) //delete post id

postRouter.get("/", getAllPosts) // get all post with pagination 
postRouter.get('/:postId', postDetail) // get post deatial


export default postRouter