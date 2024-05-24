import React, { useState, useEffect } from 'react';
import { Chart, BarController, CategoryScale, LinearScale } from 'chart.js';

function GraphPage() {
  const [graphData, setGraphData] = useState([]);
  const labels = ['Label 1', 'Label 2', 'Label 3', /* ... */];

  useEffect(() => {
    Chart.register(BarController, CategoryScale, LinearScale); // Register all three

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar', // Now Chart.js recognizes 'bar'
      data: {
        labels: labels,
        datasets: [{
          label: 'My Dataset',
          data: graphData, // Array of your data points
          // ... other bar-specific properties (optional)
        }]
      },
      // ... rest of your options configuration
    });
  }, [graphData], []);

  // ... rest of your component code
}

export default GraphPage;
