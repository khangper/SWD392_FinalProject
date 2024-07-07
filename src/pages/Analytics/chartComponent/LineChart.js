// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { color } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Old",
        data: [0, 4, 3, 5, 3, 7, 0],
        fill: false,
        borderColor: "#ffc136",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#ffc136",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: "New",
        data: [0, 2, 4.3, 8, 5, 1.8, 2.2],
        fill: false,
        borderColor: "#ed2a26",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#ed2a26",
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

export default LineChart;
