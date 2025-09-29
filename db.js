const mongoose =require('mongoose');// commion js
require('dotenv').config();
async function connectDB (){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoseDB connected");
}
module.exports={connectDB, mongoose};

