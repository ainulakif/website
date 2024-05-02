import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels"

// uninstall the package
import { faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

export const options = {

    maintainAspectRatio: false,
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    scales: {
        x: {
            ticks: {
                callback: function (value, index, values) {
                    // return '$' + value;
                    let number = value;
                    let roundedAndFormatted = number >= 1000000
                        ? Math.floor(number / 1000000) + 'M'
                        : number >= 1000
                            ? Math.floor(number / 1000) + ' thousand'
                            : Math.floor(number).toString();

                    return roundedAndFormatted; // Return the rounded and formatted value as the x-axis label
                }
            }
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Population by Country Chart',
        },
        datalabels: {
            align: 'end',
            anchor: 'end',
            color: 'gray',
            formatter: function (value) {
                let number = value;

                let roundedAndFormatted = number >= 1000000
                    ? Math.floor(number / 1000000) + 'M'
                    : number >= 1000
                        ? Math.floor(number / 1000) + 'k'
                        : Math.floor(number).toString();

                return roundedAndFormatted;
            },
        }
    },
};


const ChartDetails = ({ output }) => {
    return (
        <div className="graph_card">
            {/* <div  className="h-600 w-600"> */}
            <Bar
                options={options}
                data={{
                    labels: output
                        .sort((a, b) => b.population - a.population)
                        .slice(3, 33)
                        .map(country => country.name.common),
                    datasets: [
                        {
                            label: "Population",
                            data: output
                                .sort((a, b) => b.population - a.population)
                                .slice(3, 33)
                                .map(country => country.population),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                    datalabels: {
                        anchor: 'end',
                        align: 'start',
                    }
                }}
            />
        </div>
    )
}

export default ChartDetails;