// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const OrangeLineChart = () => {
  const data = {
    labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        label: "Weekly Sales",
        data: [0, 4, 3, 5, 3, 4, 1],
        fill: true,
        backgroundColor: "rgba(255, 160, 82, 0.2)",
        borderColor: "#ffa052",
        borderWidth: 2,
        tension: 0,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#ffa052",
        pointBorderWidth: 2,
        pointRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          title: function(tooltipItems) {
            return tooltipItems[0].label;
          },
          label: function(tooltipItem) {
            const datasetLabel = tooltipItem.dataset.label || '';
            return `${datasetLabel}: ${tooltipItem.raw}`;
          },
          labelPointStyle: function(tooltipItem) {
            return {
              pointStyle: 'rectRounded',
              rotation: 0,
              backgroundColor: tooltipItem.dataset.borderColor,
            };
          },
        },
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 12,
        },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 5,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ height: '100px', width: '344px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default OrangeLineChart;
