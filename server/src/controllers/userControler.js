const createError = require('http-errors');
const users=require('../models/userModel');
const getUser=(req,res,next)=>{
   try {
    res.status(200).send({
        message:'user profile is returned',
        users:users,
    })
   } catch (error) {
    next(error)
   }
}

module.exports={getUser};