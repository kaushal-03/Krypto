import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props) {
  const prices = [];
  const date = [];
  for(var i = 0 ; i < props.array.length ; i++)
  {
      prices.push(props.array[i][1]);
      if(props.day === "24h") date.push(new Date(props.array[i][0]).toLocaleTimeString());
      else date.push(new Date(props.array[i][0]).toLocaleDateString());

  }
  const data = {};
  return (
    <Line
      options={{ responsive: true }}
      data={{
        labels: date,
        datasets: [
          {
            label: `Price in inr`,
            data: prices,
            borderColor: "#4942E4",
            backgroundColor: "rgba(255,99,132,0.5)",
          },
        ],
      }}
    />
  );
}

export default Chart;
