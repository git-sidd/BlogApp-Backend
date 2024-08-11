import mongoose from "mongoose";

const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB Server connected!!")
    })
    .catch((error)=>{
        console.error(error)
        console.log("MOngoDB connection Failed ",error)
    })
}
export default connectDB;