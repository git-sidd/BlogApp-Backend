import { Router } from "express";
import { createBlog } from "../controllers/createBlog.js";
import { getBlog } from "../controllers/getBlogs.js";
import { updateBlog } from "../controllers/updateBlog.js";
import { addComment } from "../controllers/addComments.js";

const router=Router()

router.post("/posts/createBlog",createBlog)
router.get("/posts/getBlog",getBlog)
router.put("/posts/updateBlog/:id",updateBlog)
router.post("/comments/create",addComment)



export default router;