import { connectToDB } from "@utils/database";
import Todolist from "@models/todolist";

export const GET = async (request) => {
    try {
        await connectToDB(process.env.dbName2);

        const todolists = await Todolist.find({}).populate('_id');

        return new Response(JSON.stringify(todolists), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

export const POST = async (req) => {
    const { todolist } = await req.json();

    try {
        await connectToDB(process.env.dbName2);
        const newTodolist = new Todolist({
            todolist
        })

        await newTodolist.save();

        return new Response(
            JSON.stringify(newTodolist), { status: 201 }
        )
    } catch (error) {
        return new Response("Failed to create a new todolist", { status: 500 })
    }
}