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

export const PUT = async (req) => {
    const { _id, todolist } = await req.json();

    try {
        await connectToDB(process.env.dbName2);

        const existingTodolist = await Todolist.findById(process.env.STATIC_REQUEST);
        if(!existingTodolist) {
            return new Response("Todolist not found", { status: 404 });
        }

        existingTodolist.todolist = todolist;

        // const newTodolist = new Todolist({
        //     todolist
        // })

        await existingTodolist.save();

        return new Response(
            JSON.stringify(existingTodolist), { status: 200 }
        )
    } catch (error) {
        return new Response("Failed to update the todolist", { status: 500 })
    }
}