"use client";

const Population = ({ data }) => {
    return (
        <div>
            <div>
                <span>
                    Found {data.length} countries
                </span>
            </div>
            <div>
                {
                    data
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