"use client";

import { useState, useEffect } from "react";
import Population from "@components/countries/Population";

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
            <Population data={result} />
        </div>
    )
    //   https://restcountries.com/v3.1/all?fields=name,population
}

export default Countries