const express = require("express");
const morgan=require('morgan');
const createError = require('http-errors');
const xssClean = require('xss-clean')
const rateLimit = require('express-rate-limit')

const app=express();

const rateLimiter=rateLimit({
    windowMs:1 *60*1000,//1 min
    max: 5,
    message:'too many requests from this IP.Please try again later',

});

app.use(rateLimiter)
app.use(xssClean());
app.use(morgan("dev"));
app.use(express.json());//built in middelware for handeling json data file
app.use(express.urlencoded({extended: true}))//middleware for handeling form



app.get("/test",rateLimiter,(req,res)=>{
    res.status(200).send({
        message:`api is working fine`,
    });
});

app.get("/api/user",(req,res)=>{
    console.log(req.body.id);
    res.status(200).send({
        message:'user profile is returned',
    })
});

// client error handeling
app.use((req,res,next)=>{
    next( createError(404,'route not found'));
});

// server error handeling->all the error
app.use((err,req,res,next)=>{
    return res.status(err.status || 500).json({
        sucess: false,
        message:err.message,
    });
});

module.exports=app;