import React, { useState } from "react";
import { Line } from "react-chartjs-2";
// Ensure the path is correct for your project structure
import { CategoryScale, Chart } from "chart.js";

Chart.register(CategoryScale);

export const FundsChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>({
    datasets: [
      {
        label: "Raised Amount",
        data: [10000, 20000, 15000, 25000, 18000, 22000, 30000],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
    options: {
      scales: {
        x: {
          title: 'Month', // Optional x-axis title
        },
      },
    },
  });

  return (
    <div>
      <h1>Funds Raised Chart</h1>
      <Line data={chartData} />
    </div>
  );
};

// ... rest of your code (pages/trackfundraising.tsx)
