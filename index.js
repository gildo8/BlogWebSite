const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    console.log("app is get in to '/' url")
})

app.listen("5000", ()=>{
    console.log("Backend is running...");
})