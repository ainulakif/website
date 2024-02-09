import { connectToDB } from "@utils/database";
import Todolist from "@models/todolist";

// Delete a Todo items
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB(process.env.dbName2);
        await Todolist.findByIdAndDelete(params.id);

        return new Response("Todolist deleted successfully", { status: 200 })
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to delete todo item" }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}