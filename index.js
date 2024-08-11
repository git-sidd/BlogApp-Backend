import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import router from "./routes/router.js";



dotenv.config({
    path:"./.env",
})

const app= express();
app.use(express.json())

app.use("/api/v1",router)
app.listen(process.env.PORT,()=>{
    console.log(`Server Started at Port ${process.env.PORT}`)
})
connectDB();


