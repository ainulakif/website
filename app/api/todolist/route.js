import { connectToDB } from "@utils/database";
import Todolist from "@models/todolist";

// retrieve all Todo items
export const GET = async (request) => {
    try {
        await connectToDB(process.env.dbName2);

        const todolists = await Todolist.find({}).populate('_id');

        return new Response(JSON.stringify(todolists), { status: 200 })
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to create a new todo" }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

// Create a new Todo items
export const POST = async (request) => {
    const { todolist, isComplete } = await request.json();
    
    try {
        await connectToDB(process.env.dbName2);
        const newTodolist = new Todolist({
            todolist,
            isComplete
        })

        await newTodolist.save();

        return new Response(
            JSON.stringify(newTodolist), { status: 201 }
        )

    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to create a new todo" }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }

}