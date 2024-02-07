"use client";

import { useState, useEffect } from "react";
import Population from "@components/countries/Population";
import ChartDetails from "@components/countries/ChartDetails";

const TabbedChart = () => {

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
        <section className="w-full flex-center flex-col" style={{ height: "80vh" }}>
            {/* <Population data={{}} /> */}
            <ChartDetails output={result} />
        </section>
    )
    //   https://restcountries.com/v3.1/all?fields=name,population
}

export default TabbedChart