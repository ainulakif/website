import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDB = async (dbParameter) => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected to: ', dbParameter);
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: dbParameter,
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB is connected to: ', dbParameter);
    } catch (error) {
        console.log("error on database.js: ",error);
    }
}