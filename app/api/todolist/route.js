import { connectToDB } from "@utils/database";
import Todolist from "@models/todolist";

// retrieve all Todo items
export const GET = async (request) => {
    try {
        const { Todolist } = await connectToDB(process.env.dbName2);

        const todolists = await Todolist.find({}).populate('_id');
        
        // console.log(`[todolist.js]after find: ,`, todolists);

        return new Response(JSON.stringify(todolists), { status: 200 })
    } catch (error) {
        // console.error(`[todolist.js] Error fetching todo lists: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to get todolist", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

// Create a new Todo items
export const POST = async (request) => {
    const { todolist, isComplete } = await request.json();
    
    try {
        
        const { Todolist } = await connectToDB(process.env.dbName2);
        // await connectToDB(process.env.dbName2);
        const newTodolist = new Todolist({
            todolist,
            isComplete
        })

        await newTodolist.save();

        return new Response(
            JSON.stringify(newTodolist), { status: 201 }
        )

    } catch (error) {
        // console.error(`[todolist.js] Error creating todo: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to create a new todo", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }

}