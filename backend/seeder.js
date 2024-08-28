const mongoose= require("mongoose");
const dotenv= require("dotenv");
const users= require("./data/user");
const products= require("./data/products");
const User= require("./models/userModel");
const Product= require("./models/productModel");
const Order =require("./models/orderModule");
const connectDB = require("./config/db");

dotenv.config();
connectDB();


const importData=async()=>{
    try{
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        const createdUsers=await User.insertMany(users);
        const adminUser=createdUsers[0]._id;

        const sampleProducts=products.map((product)=>{
            return {...product,user:adminUser}
        })

        await Product.insertMany(sampleProducts);
        console.log("Data iserted to database");
        process.exit()
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}



const destroyData=async()=>{
    try{
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        console.log("Data destroyed");
        process.exit()
    }catch(err){
        console.log(err)
        process.exit(1)
    }

}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}