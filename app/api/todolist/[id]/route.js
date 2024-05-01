import { connectToDB } from "@utils/database";
import Todolist from "@models/todolist";

// Delete a Todo items
export const DELETE = async (request, { params }) => {
    try {
        const { Todolist } = await connectToDB(process.env.dbName2);
        // await connectToDB(process.env.dbName2);
        await Todolist.findByIdAndDelete(params.id);

        return new Response("Todolist deleted successfully", { status: 200 })
    } catch (error) {
        console.error(`[todolist.id.js] Error deleting todo: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to delete todo item", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

// Update toggle items
export const PUT = async (request, { params }) => {
    const { isComplete } = await request.json();

    try {
        const { Todolist } = await connectToDB(process.env.dbName2);

        const updatingToggle = await Todolist.findByIdAndUpdate(params.id);

        if (!updatingToggle) {
            return new Response(
                JSON.stringify({ error: "List not found "}),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
        }

        updatingToggle.isComplete = isComplete;

        await updatingToggle.save();

        return new Response(JSON.stringify(updatingToggle), { status: 200 })
    } catch (error) {
        console.error(`[todolist.id.js] Error updating todo: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to update toggle item", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}