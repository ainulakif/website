import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();

    try {
        const { Prompt } = await connectToDB(process.env.dbName1);
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(
            JSON.stringify(newPrompt), { status: 201 }
        )
    } catch (error) {
        console.error(`[prompt.js] Error creating new prompt: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to create a new prompt", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}