import { connectToDB, closeConnection } from "@utils/database";
// import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        const { Prompt } = await connectToDB(process.env.dbName1);

        // registering model
        const prompts = await Prompt.find({}).populate('creator');

        // await closeConnection(process.env.dbName1);

        // console.log(`[prompt.js]after find: ,`, prompts);

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.error(`[prompt.js] Error fetching all prompts: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to fetch all prompts", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}