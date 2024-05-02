"use client";

import { useState, useEffect } from "react";
import ChartDetails from "@components/countries/ChartDetails";

const TabbedChart = () => {

    const [result, setResult] = useState([])

    useEffect(() => {
        const getCountriesDetails = async () => {
            try {
                const response = await fetch('api/countries')
                const data = await response.json();

                setResult(data);
            } catch (error) {
                console.log(error);
            }
        }
        getCountriesDetails();
    }, []);

    // useEffect(() => {
    //   console.log("[TabbedChart] Countries data: ", result);

    // }, [result])
    
    // console.log(result);
    // console.log("name: ", result[0].name.common);
    // console.log("population: ", result[0].population);
    // console.log("length of array: ", result.length);
    return (
        <section className="w-full flex-center flex-col" style={{ height: "80vh" }}>
            <ChartDetails output={result} />
        </section>
    )
}

export default TabbedChart