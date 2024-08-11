import { Blog } from "../models/blog.js";
import { Comment } from "../models/comment.js";

export const addComment=async(req,res)=>{
    try {
        const {blog,commentauthor,comment}=req.body
        const blogs=await Blog.findOne({title:blog})

        if(!blogs){
            res.status(404).json(
               {
                success:false,
                message:"No Blog Found"
               }
            )
        }
        const response= await Comment.create( {blog:blog._id,commentauthor,comment})
        res.status(200).json({
            success:true,
            message:"comments added succesfully!",
            data:response
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"server error",
            error:error.message
        })
    }

}