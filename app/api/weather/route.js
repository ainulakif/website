// export const geoAPIoptions = {
//     method: 'GET',
// 	headers: {
//         'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
// 		'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
// 	}
// };

// export const GET = async (request) => {
//     try {
//         const response = await fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoAPIoptions);

//         return new Response(JSON.stringify(prompts), { status: 200 })
//     } catch (error) {
//         return new Response("Failed to fetch all prompts", { status: 500 })
//     }
// };