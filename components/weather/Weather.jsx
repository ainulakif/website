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

    // console.log("Current Weather Response: ", currentWeather);

    return (
        <>
            <Searchbar onSearchChange={handleOnSearchChange} />
            {currentWeather &&
                <div className="prompt_card">
                    <CurrentWeather data={currentWeather} />
                </div>
            }
        </>
    )
}

export default Weather