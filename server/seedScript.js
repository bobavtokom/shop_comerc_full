require("dotenv").config();

const productsData=require("./data/products");
const connectDB=require("./config/db");
const Product=require("./models/Product");


connectDB();

const importData=async ()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("succsess insert data");
        process.exit();
    } catch (error) {
        console.log("error data insert");
        console.log(error);
        process.exit(1)
    }
}

importData();