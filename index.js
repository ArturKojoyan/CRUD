import express, { Router } from "express"
import mongoose  from "mongoose";
import router from "./router.js"
const DBUrl = `mongodb+srv://Artur:1111@cluster0.9peso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use("/api",router);

async function StartApp(){

 try {

 await mongoose.connect(DBUrl);
 app.listen(8000,()=>console.log("app started"));
     
 } catch (err) {
     console.log(err);
 }
 
}

StartApp();







