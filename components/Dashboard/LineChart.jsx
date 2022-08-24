import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Bar, Line, Scatter, Bubble, Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);
import styles from "../../styles/dashboard.module.css";

export default function LineChart({
  title1,
  title2,
  title3,
  title4,
  xAxis,
  yAxis,
  unit1,
  unit2,
  unit3,
  unit4,
}) {
  const data = {
    labels: [title1, title2, title3, title4],
    datasets: [
      {
        data: [unit1, unit2, unit3, unit4],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgb(160,126,255)",
        fill: "start",
        backgroundColor: "rgb(160,126,255)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        title: { display: true, text: xAxis },
      },
      yAxis: {
        title: { display: true, text: yAxis },
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
}
