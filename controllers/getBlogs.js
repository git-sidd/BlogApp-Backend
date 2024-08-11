
import { Blog } from "../models/blog.js";

export const getBlog=async(req,res)=>{
    try {
        const {title,author,description}=req.body
        const response=await Blog.find()

        res.status(200).json({
            success:true,
            message:"Data Retrieved Successfully!!",
            data:response
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            data:error.message
        })
    }
}