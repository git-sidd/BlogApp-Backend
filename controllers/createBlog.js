import mongoose from "mongoose";
import { Blog } from "../models/blog.js";

export const createBlog=async(req,res)=>{
    try {
        const {title,author,description}=req.body
        const response=await Blog.create({title,author,description})

        res.status(200).json({
            success:true,
            message:"Data Entered Successfully!!",
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