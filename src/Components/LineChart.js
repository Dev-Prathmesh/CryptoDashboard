// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartFilter from './ChartFilter';
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Crypto Coin",
      backgroundColor: "rgb(0,0,255)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const LineChart = () => {
  return (
    <div class="text-right bg-white p-5 h-100 xl:w-2/3">
     <ChartFilter/>
      <Line 
        data={data}
      />
    </div>
  );
};

export default LineChart;