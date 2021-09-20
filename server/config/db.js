
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const mongoose=require("mongoose");






const connectDB= async()=>{

    try {
        await mongoose.connect("mongodb://localhost:27017/MyDb",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('db connected');
    } catch (error) {
        console.log("connection failed");
        console.log(error);
        
        process.exit(1);
    }
}  

module.exports= connectDB;