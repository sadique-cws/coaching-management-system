import mongoose from "mongoose";

async function connectDb(){
    try{
        const client = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err.message);
    }
}

export default connectDb;