import mongoose, { connection } from "mongoose";

// MONGO_URI=mongodb+srv://nextjs:KCR7YceSxIB4ZQji@cluster0.uoqoyom.mongodb.net/

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("MongoDB connected successfully")
        })

        connection.on("error",(err)=>{
            console.log('MongoDB connection error. Please make sure MongoDB is running. '+err);
            process.exit();
        })
    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}