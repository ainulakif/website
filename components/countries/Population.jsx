"use client";

import ChartDetails from "@components/countries/ChartDetails";

const Population = ({ data }) => {
    return (
        <div>
            <div>
                <span>
                    Found {data.length} countries
                </span>
            </div>
            <ChartDetails output={data} />
            <div>
                {
                    data
                        .slice(0, 5)
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
}

export default Population