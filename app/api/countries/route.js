export const GET = async () => {
    // https://restcountries.com/v3.1/all?fields=name,population
    try {
        const response = await fetch(process.env.COUNTRIES_API_URL);
        const data = await response.json();

        // console.log("[countries api] response: ", JSON.stringify(response));
        // console.log("[countries api] response: ", response.json());
        // console.log("[countries api] data: ", data);
        
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error(`[countries.js] Error fetching from countries API: ${error.message}`);
        return new Response(
            JSON.stringify({ error: "Failed to fetch countries' data", details: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}