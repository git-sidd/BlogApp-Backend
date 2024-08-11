import mongoose from "mongoose";


const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        
    },
   
},{timestamps:true})

export const Blog=mongoose.model("Blog",blogSchema)