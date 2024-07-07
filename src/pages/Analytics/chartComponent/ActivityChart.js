import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const activityData = [
  {
    first: [0, 65, 52, 115, 98, 165, 125],
    second: [45, 38, 100, 87, 152, 187, 85]
  },
  {
    first: [0, 65, 77, 33, 49, 100, 100],
    second: [88, 33, 20, 44, 111, 140, 77]
  },
  {
    first: [0, 40, 77, 55, 33, 116, 50],
    second: [55, 32, 20, 55, 111, 134, 66]
  },
  {
    first: [0, 44, 22, 77, 33, 151, 99],
    second: [60, 32, 120, 55, 19, 134, 88]
  }
];

const ActivityChart = ({ activeIndex }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.data.datasets[0].data = activityData[activeIndex].first;
      chartInstance.data.datasets[1].data = activityData[activeIndex].second;
      chartInstance.update();
    }
  }, [activeIndex, chartInstance]);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["4 Apr", "5 Apr", "6 Apr", "7 Apr", "8 Apr", "9 Apr", "10 Apr"],
        datasets: [
          {
            label: "New",
            backgroundColor: "transparent",
            borderColor: "rgb(237, 42, 38)",
            data: activityData[0].first,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointHoverBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 1
          },
          {
            label: "Old",
            backgroundColor: "transparent",
            borderColor: "rgb(255, 193, 54)",
            data: activityData[0].second,
            lineTension: 0,
            borderDash: [10, 5],
            borderWidth: 1,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointHoverBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              fontColor: "#686f7a",
            },
          },
          y: {
            grid: {
              color: "#efefef",
              zeroLineColor: "#efefef"
            },
            ticks: {
              stepSize: 50,
              fontColor: "#686f7a"
            }
          }
        },
        tooltips: {
          mode: "index",
          intersect: false,
          titleFontColor: "#333",
          bodyFontColor: "#686f7a",
          titleFontSize: 12,
          bodyFontSize: 15,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: true,
          xPadding: 10,
          yPadding: 7,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2,
          caretSize: 6,
          caretPadding: 5
        }
      }
    });
    setChartInstance(newChartInstance);

    return () => {
      newChartInstance.destroy();
    };
  }, []);

  return (
    <div style={{ height: '350px', width: '779px',  padding: "1.5rem" }}>
      <canvas style={{ height: '100%', width: '100%' }} ref={chartRef} id="activity" />
    </div>
  );
};

export default ActivityChart;
