import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myUChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          '1h',
          '10 m',
          '50 m',
          '30 m',
          '40 m',
          '20 m',
          '30 m',
          '25 m',
          '20 m',
          '5 m',
          '10 m'
        ],
        datasets: [
          {
            label: '',
            data: [15, 30, 27, 43, 39, 18, 42, 25, 13, 18, 59],
            backgroundColor: '#ed2a26',
            barThickness: 10, // Try setting this to a smaller value for thinner bars
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
              drawBorder: true,
              display: false
            },
            ticks: {
              fontColor: '#686f7a',
              fontFamily: 'Roboto, sans-serif',
              display: false,
              beginAtZero: true,
              callback: function(tick, index, array) {
                return index % 2 ? '' : tick;
              }
            },
          
            maxBarThickness: 15,
            minBarLength: 2
          },
          y: {
            grid: {
              drawBorder: true,
              display: true,
              color: '#efefef',
              zeroLineColor: '#efefef'
            },
            ticks: {
              fontColor: '#686f7a',
              fontFamily: 'Roboto, sans-serif',
              display: true,
              beginAtZero: true
            }
          }
        },
        tooltips: {
          mode: 'index',
          titleFontColor: '#333',
          bodyFontColor: '#686f7a',
          titleFontSize: 12,
          bodyFontSize: 14,
          backgroundColor: 'rgba(256,256,256,0.95)',
          displayColors: true,
          xPadding: 10,
          yPadding: 7,
          borderColor: 'rgba(220, 220, 220, 0.9)',
          borderWidth: 2,
          caretSize: 6,
          caretPadding: 5
        }
      }
    });

    return () => {
      myUChart.destroy();
    };
  }, []);

  return (
    <div style={{ height: '300px', width: '309px' }}>
      <canvas style={{ height: '100%', width: '100%' }} ref={chartRef} id="currentUser" />
    </div>
  );
};

export default BarChart2;
