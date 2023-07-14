require('dotenv').config();
const port=process.env.SERVER_PORT ||3002;
const mogodbURL=process.env. MONGODB_ATLAS_URL||'mongodb://localhost:27017/ecommerceMERN';
const defaultImagePath=process.env.DEFAULT_USER_IMAGE_PATH||'public/images/users/default.png';
module.exports={port, mogodbURL,defaultImagePath};