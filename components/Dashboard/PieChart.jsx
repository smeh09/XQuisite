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

export default function PieChart({ unit1, unit2, unit3, unit4 }) {
  const data = {
    labels: ["Living Room", "Dining Room", "Bedroom 1 ", "Bedroom 2"],
    datasets: [
      {
        label: "August Month Data",
        data: [unit1, unit2, unit3, unit4],
        backgroundColor: [
          "rgb(160,126,255)",
          "rgb(120,126,255)",
          "rgb(10,126,255)",
          "rgb(260,126,255)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    elements: {
      arc: {
        weight: 1,
        borderWidth: 1,
      },
    },
    cutout: 150,
  };
  return (
    <div className={styles.doughnutCont}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
