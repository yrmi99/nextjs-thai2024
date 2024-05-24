// pages/trackfundraising.tsx

import React from "react";
import { FundsChart } from "C:/Users/grace/OneDrive - Georgia Institute of Technology/Projects/thai2024/src/app/components/fundschart"; // Adjust the path accordingly
import { CategoryScale, Chart } from "chart.js";

Chart.register(CategoryScale);

const FundsChartPage: React.FC = () => {
  return (
    <div>
      <h1>Track Progress</h1>
      <FundsChart />
    </div>
  );
}

export default FundsChartPage;
