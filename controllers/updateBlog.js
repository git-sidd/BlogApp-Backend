
import { Blog } from "../models/blog.js";

export const updateBlog=async(req,res)=>{
    try {
        const {id}=req.params
        const {title,author,description}=req.body
        const response = await Blog.findByIdAndUpdate({_id:id},
            {title,author,description})

        res.status(200).json({
            success:true,
            message:"Data Retrieved Successfully!!",
            data:response
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
}