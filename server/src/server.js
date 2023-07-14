const app=require('./app');
const connectDB = require('./config/db');
const {port}=require('./secret');
app.listen(port,async()=>{
    console.log(`server is runninng at http://localhost:${port}`);
    await connectDB();
});