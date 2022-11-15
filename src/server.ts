import express, { Request, Response } from "express";
import { Query } from 'express-serve-static-core'

const app = express()

app.get('/', (reg, res)=>{
    res.json({result: "ok 12345"})
})



app.listen(3000, ()=> console.log("Server is running..."))