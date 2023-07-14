const mongoose=require("mongoose");
const { mogodbURL } = require("../secret");
const connectDB=async(options={})=>{
    try {
        await mongoose.connect(mogodbURL,options);
        console.log("connection sucessful");

        mongoose.connection.on('error',(error)=>{
            console.error('DB connection error: ',error);
        });
    } catch (error) {
        console.error('could not connect DB : ',error.toString());
}
};

module.exports=connectDB;