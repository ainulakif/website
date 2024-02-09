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

// Update an existing Todo items
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

// Create a new Todo items
export const POST = async (request) => {
    const { todolist, isComplete } = await request.json();
    // console.log("-title: ", title, "-isComplete: ", isComplete);

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

// Delete a Todo items
export const DELETE = async () => {
    
}