import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET (read request)
export const GET = async (request, { params }) => {
    try {
        const { Prompt } = await connectToDB(process.env.dbName1);

        const prompt = await Prompt.findById(params.id).populate('creator');
        
        if(!prompt) return new Response("Prompt not found", { status: 404 })

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        // console.error(`[prompt.id.js] Error fetching all prompts: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to fetch all prompts", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}


// PATCH (update request)
export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        const { Prompt } = await connectToDB(process.env.dbName1);

        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) return new Response("Prompt not found", { status: 404 });

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 });
    } catch (error) {
        // console.error(`[prompt.id.js] Error updating prompts: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to update prompt", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

// DELETE (delete request)
export const DELETE = async (request, { params }) => {
    try {
        const { Prompt } = await connectToDB(process.env.dbName1);
        // deprecated
        // await Prompt.findByIdAndRemove(params.id);
        await Prompt.findByIdAndDelete(params.id);
        
        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        // console.error(`[prompt.id.js] Error deleting prompts: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to delete prompts", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}