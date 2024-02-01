import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        onClick: (e) => {
            const canvasPosition = getRelativePosition(e, chart);

            // Substitute the appropriate scale IDs
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        }
    }
})

const ChartDetails = ({ output }) => {
    return (
        <div>
            {/* <canvas> */}
            <Line
                data={{
                    labels: output
                        .slice(0, 5)
                        .sort((a, b) => a.name.common.localeCompare(b.name.common))
                        .map(country => country.name.common),
                    datasets: [
                        {
                            data: output
                                .slice(0, 5)
                                .sort((a, b) => a.name.common.localeCompare(b.name.common))
                                .map(country => country.population),
                            backgroundColor: "purple",
                        },
                    ],
                }}
            />

            {/* </canvas> */}
        </div>
    )
}

export default ChartDetails;