//same as prompt/route
//modified to fetch the specific creators

import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
    try {
        const { Prompt } = await connectToDB(process.env.dbName1);

        const prompts = await Prompt.find({
            //[id] as dynamic paramter
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response(
            // console.error(`[users.id.js] Error fetching all prompts: ${error.message}`),
            JSON.stringify({ error: "Failed to fetch all prompts", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}