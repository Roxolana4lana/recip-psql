"use client"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);
const ChartTest = ({ labels, dataList }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Recipes Count',
                data: dataList,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1
            }
        ]
    };

    return (
        <div>
            <h2>Line Example</h2>
            <Line data={data} />
        </div>
    );
};
export default ChartTest;