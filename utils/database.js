import mongoose from "mongoose";
import PromptSchema from "@models/prompt";
import TodolistSchema from "@models/todolist";
import UserSchema from "@models/user";

// let isConnected = false; // track connection status
const connections = {};

export const connectToDB = async (dbParameter) => {
    mongoose.set('strictQuery', true);

    // if(isConnected) {
    //     console.log('MongoDB is already connected to: ', dbParameter);
    // }

    // if (connections[dbParameter]) {
    //     console.log(`MongoDB is already connected to: ${dbParameter}`);
    //     // return;
    // }

    // try {
    //     await mongoose.connect(process.env.MONGODB_URI, {
    //         dbName: dbParameter,
    //         // useNewUrlParser: true,
    //         // useUnifiedTopology: true,
    //     })
    //     isConnected = true;

    try {
        // initial dB connection
        const newConnection = await mongoose.createConnection(process.env.MONGODB_URI, {
            dbName: dbParameter,
            maxPoolSize: 10
        }).asPromise();
        //.catch(err => console.log("error from Connection: ", err.reason));
        // const newConnection = await mongoose.connect(process.env.MONGODB_URI, {
        //     dbName: dbParameter,
        // });

        // connections[dbParameter] = newConnection;

        const db = newConnection.useDb(dbParameter);
        
        const User = newConnection.model('User', UserSchema);
        const Prompt = newConnection.model('Prompt', PromptSchema);
        const Todolist = newConnection.model('Todolist', TodolistSchema);


        return { User, Prompt, Todolist };
        
        //console.log("Connections: ",mongoose.connections);

        // console.log(`[db.js]MongoDB is connected to: ${dbParameter}`);
        // console.log(`[db.js]MongoDB is connected to: ${newConnection}`);
    } catch (error) {
        console.log("catched error on database.js: ",error);
    }

    //     console.log('MongoDB is connected to: ', dbParameter);
    // } catch (error) {
    //     console.log("error on database.js: ",error);
    // }
}

export const closeConnection = async (dbParameter) => {
    if (connections[dbParameter]) {
        await connections[dbParameter].close();
        delete connections[dbParameter];
        console.log(`MongoDB connection to ${dbParameter} closed`);
    }
}