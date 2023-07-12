
const express=require("express");
const { getUser } = require("../controllers/userControler");
const userRouter=express.Router();
const users=[
    {id:1,name:'sudip Ghosh'},
    {id:2,name:'suraj Ghosh'},
    {id:3,name:'samrat Ghosh'},
]

userRouter.get("/",getUser);

module.exports=userRouter;