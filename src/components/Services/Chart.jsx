import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const BarChart = () => {
  const chartRef = useRef();
  const [chartInstance, setChartInstance] = useState(null);
  const [chartData, setChartData] = useState({
    labels: ['Imigani migufi', 'Ibisakuzo', 'Incamarenga'],
    datasets: [{
      label: 'Content Added',
      data: [0, 0, 0],
      backgroundColor: ['lightblue', 'lightcoral', 'lightskyblue'],
      borderColor: ['blue', 'red', 'deepskyblue'],
      borderWidth: 1,
    }]
  });

  

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(myChartRef, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setChartInstance(newChartInstance);
    }
  }, [chartData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('http://localhost:4050/api/imigani/imigani/count'),
          axios.get('http://localhost:4050/api/ibisakuzo/ibisakuzo/count'),
          axios.get('http://localhost:4050/api/incamarenga/incamarenga/count'),
        ]);

        const newData = responses.map(response => response.data.count);

        setChartData(prevChartData => ({
          ...prevChartData,
          datasets: [{
            ...prevChartData.datasets[0],
            data: newData,
          }]
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
