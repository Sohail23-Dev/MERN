import express from 'express'
import mongoose from 'mongoose';

const app = express();

const PORT = 3005;
app.get("/", (req,res)=>{
    res.end ("Hello from the server");
})

mongoose.connect("mongodb+srv://sohailshaikh778822:ShopThings@shopthings.yyssty9.mongodb.net/").then(()=>{
    console.log(`Database is Connected`)
}).catch((e)=>{
    console.log(`${e}`)
});
app.listen(PORT, ()=>{
    console.log(`Server is Listening to ${PORT}`)
})