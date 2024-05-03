export const GET = async () => {
    try {
        const response = await fetch(process.env.COUNTRIES_API_URL);
        const data = await response.json();
        
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        // console.error(`[countries.js] Error fetching from countries API: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to fetch countries' data", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}