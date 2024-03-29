import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET (read request)
export const GET = async (request, { params }) => {
    try {
        await connectToDB(process.env.dbName1);

        const prompt = await Prompt.findById(params.id).populate('creator');
        
        if(!prompt) return new Response("Prompt not found", { status: 404 })

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompt", { status: 500 })
    }
}


// PATCH (update request)
export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB(process.env.dbName1);

        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) return new Response("Prompt not found", { status: 404 });

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to update prompt", { status: 500 });
    }
}

// DELETE (delete request)
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB(process.env.dbName1);
        // deprecated
        // await Prompt.findByIdAndRemove(params.id);
        await Prompt.findByIdAndDelete(params.id);
        
        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        console.log("entering error");
        return new Response("Failed to delete prompt", { status: 500 });
    }
}