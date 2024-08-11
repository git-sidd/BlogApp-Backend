import mongoose from "mongoose";

import { Blog } from "../models/blog.js";

const commentSchema=new mongoose.Schema({
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Blog
    },
    commentauthor:{
        type:String,
       maxLength:50
    },
    comment:{
        type:String,
        maxLength:100,
    }
},{timestamps:true})

export const Comment=mongoose.model("Comment",commentSchema) 