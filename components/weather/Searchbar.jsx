"use client";

import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const Searchbar = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            // console.log("Check geo api url: ", process.env.GEO_API_URL)
            // console.log("Check weather api url: ", process.env.WEATHER_API_URL)
            // const response = await fetch(`${process.env.GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
            const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputValue}`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'bba172f4camshd895f5a7da611b2p1e4c87jsnb67d0d70cf77',
                        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                        // 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                        // 'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
                    }
                });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return {
                options: data.data.map((city) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`
                }))
            };
        } catch (error) {
            console.log("Fetch Error: ", error)
        }

    }

    const handleonChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#3699FF' : null,
            color: state.isFocused ? 'white' : null,
        }),
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleonChange}
            loadOptions={loadOptions}
            styles={customStyles}
        // value={search}
        // onChange={handleonChange}
        // loadOptions={loadOptions}
        />
    )
}

export default Searchbar