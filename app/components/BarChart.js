"use client"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    BarElement
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    BarElement
);
const BarChart = ({ labels, dataList, subtitleY, subtitleX, title }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Recipes Count',
                data: dataList,
                fill: false,
                borderColor: 'rgba(245, 40, 145, 0.8)',
                backgroundColor: 'rgba(245, 39, 145, 0.42)',
                borderWidth: 2,
                borderRadius: 20,
                borderSkipped: false,
            }
        ]
    };

    return (
        <div className="m-10">
            <h2>{title?.toUpperCase()}</h2>
            <Bar data={data} options={{
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: subtitleY
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: subtitleX,
                            color: 'pink' // Change title color here
                        }
                    }
                }
            }} />
        </div>
    );
};
export default BarChart;