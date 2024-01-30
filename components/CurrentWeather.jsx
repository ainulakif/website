import Image from "next/image";


const CurrentWeather = ({ data }) => {
    return (
        <>
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center cursor-pointer">
                    <Image
                        src={`/assets/weather-icons/${data?.weather[0].icon}.png`}
                        alt="user_image"
                        width={80}
                        height={80}
                        className="
                object-contain
                my-0 mx-0 mt-0
                px-0 py-0"
                    />

                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">
                            {Math.round(data.main.temp)}°C
                        </h3>
                        <p className="m-0 leading-1 text-sm font-bold">
                            {data.weather[0].description}
                        </p>
                        {/* <p className="font-inter text-sm text-gray-500">
                    Desc
                </p> */}
                    </div>
                </div>
            </div>

            <p className="my-4 font-satoshi text-sm text-gray-700">
                Details
            </p>
            <div className="text-sm">
                <div className="flex justify-between">
                    <span className="text-left font-normal">Feels like</span>
                    <span className="text-right font-semibold">{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-left font-normal">Wind</span>
                    <span className="text-right font-semibold">{data.wind.speed} m/s</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-left font-normal">Pressure</span>
                    <span className="text-right font-semibold">{data.main.pressure} hpa</span>
                </div>
            </div>

        </>

        // <div className="weather">
        //     <div className="top">
        //         <div>
        //             <p className="city">{data.city}</p>
        //             <p className="weather-description">{data.weather[0].description}</p>
        //         </div>
        //         <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
        //     </div>
        //     <div className="bottom">
        //         <p className="temperature">{Math.round(data.main.temp)}°C</p>
        //         <div className="details">
        //             <div className="parameter-row">
        //                 <span className="parameter-label">Details</span>
        //             </div>
        //             <div className="parameter-row">
        //                 <span className="parameter-label">Feels like</span>
        //                 <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
        //             </div>
        //             <div className="parameter-row">
        //                 <span className="parameter-label">Wind</span>
        //                 <span className="parameter-value">{data.wind.speed} m/s</span>
        //             </div>
        //             <div className="parameter-row">
        //                 <span className="parameter-label">Humidity</span>
        //                 <span className="parameter-value">{data.main.humidity}%</span>
        //             </div>
        //             <div className="parameter-row">
        //                 <span className="parameter-label">Pressure</span>
        //                 <span className="parameter-value">{data.main.pressure} hPa</span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default CurrentWeather;