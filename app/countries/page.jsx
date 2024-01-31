"use client";

import { useState, useEffect } from "react";

const Countries = () => {

    const [result, setResult] = useState([])

    useEffect(() => {
        const getCountriesDetails = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population')
                const data = await response.json();

                setResult(data);
            } catch (error) {
                console.log(error);
            }
        }
        getCountriesDetails();
    }, []);

    // console.log(result);
    // console.log("name: ", result[0].name.common);
    // console.log("population: ", result[0].population);
    // console.log("length of array: ", result.length);
    return (
        <div>
            <div>Countries</div>
            <div>
                <span>
                    Found {result.length} countries
                </span>
            </div>
            <div>
                {
                    result
                        .sort((a, b) => a.name.common.localeCompare(b.name.common))
                        .map((country, index) => (
                            <div key={index}>
                                <span>
                                    {country.name.common}
                                </span>
                                <span>
                                    {country.population}
                                </span>
                            </div>
                        ))
                }
            </div>
        </div>
    )
    //   https://restcountries.com/v3.1/all?fields=name,population
}

export default Countries