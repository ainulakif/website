import mongoose from "mongoose";

// let isConnected = false; // track connection status
const connections = {};

export const connectToDB = async (dbParameter) => {
    mongoose.set('strictQuery', true);

    // if(isConnected) {
    //     console.log('MongoDB is already connected to: ', dbParameter);
    // }
    if (connections[dbParameter]) {
        console.log(`MongoDB is already connected to: ${dbParameter}`);
        return;
    }

    // try {
    //     await mongoose.connect(process.env.MONGODB_URI, {
    //         dbName: dbParameter,
    //         // useNewUrlParser: true,
    //         // useUnifiedTopology: true,
    //     })
    //     isConnected = true;

    try {
        const newConnection = await mongoose.createConnection(process.env.MONGODB_URI, {
            dbName: dbParameter,
        })

        connections[dbParameter] = newConnection;

        console.log(`MongoDB is connected to: ${dbParameter}`);
    } catch (error) {
        console.log("error on database.js: ",error);
    }

    //     console.log('MongoDB is connected to: ', dbParameter);
    // } catch (error) {
    //     console.log("error on database.js: ",error);
    // }
}