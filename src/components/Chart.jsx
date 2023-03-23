import React from "react";
import Data from "../data.json";
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale, Title);
ChartJS.defaults.font.family = "DM Sans";

const day = Data.map((x) => x.day);
const amount = Data.map((x) => x.amount);
const currentDay = new Date().getDay() - 1;

function Chart() {
  const data = {
    labels: day,
    datasets: [
      {
        data: amount,
        backgroundColor: (color) => {
          const colors = color.index === currentDay ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";
          return colors;
        },
        borderRadius: 3,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: -10,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        border: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
          },
          color: "hsl(28, 10%, 53%)",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
    },
    animations: {
      y: {
        duration: 5000,
      },
    },
  };

  return (
    <Bar
      data={data}
      options={options}
      role="img"
      aria-label="Data showing how much you have spent in the last 7 days"
    />
  );
}

export default Chart;
