import express from "express";
import path from 'path';
import isAuth from './middleware/isAuth.js';

const __dirname=path.dirname(new URL(import.meta.url).pathname)
const app=express()

app.use(isAuth)


app.get("/",(req,res)=>{
    res.sendFile(__dirname.slice(3) + '/public/index.html');
    })


app.get("/contact",(req,res)=>{
    res.sendFile(__dirname.slice(3) + '/public/contact.html');
    })

app.get("/services",(req,res)=>{
    res.sendFile(__dirname.slice(3) + '/public/our server.html');
    })


const PORT =5000;

app.listen(PORT ,(err)=>err?console.log(err):console.log(`server is running in port ${PORT}`))


