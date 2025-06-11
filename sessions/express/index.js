import fs from "fs"
import express from "express"

const app = express();
const PORT = 5000;
const isLoggedIN= true;

app.use((req,res,next)=>{
    req.userName = "Sohail"
    console.log(`Middle Ware 1: Sets username to : ${req.userName}`)
    next();
})
app.use((req,res,next)=>{
   if(isLoggedIN){
    next();
   }
   else{
    res.send("You are not Logged In")
   }
})

app.get("/",(req,res)=>{
    const user = req.userName || "Guest"
    res.end(`Welcome, ${user}`)
})

app.listen(PORT, ()=>{
    console.log(`Listening to ${PORT}`)
})