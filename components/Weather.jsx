"use client";

import Searchbar from "./Searchbar";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";

function Weather() {

    const [currentWeather, setCurrentWeather] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c01ea3935a9b996af4b66cc728c6bb2f&units=metric`);

        Promise.all([currentWeatherFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();

                // console.log("Response: ", weatherResponse);

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
            })
            .catch((err) => console.log(err));
    }

    console.log("Current Weather Response: ", currentWeather);

    return (
        <div className="prompt_card">
            <Searchbar onSearchChange={handleOnSearchChange} />
           {currentWeather && <CurrentWeather data={currentWeather} />}


            {/* {session?.user.id === post.creator._id && pathName === "/profile" && ( */}
            {/* <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                <p
                    className="font-inter text-sm green_gradient cursor-pointer"
                    onClick={() => { }}
                >
                    Edit
                </p>
                <p
                    className="font-inter text-sm orange_gradient cursor-pointer"
                    onClick={() => { }}
                >
                    Delete
                </p>
            </div> */}
            {/* )} */}
        </div>
    )
}

export default Weather