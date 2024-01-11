import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Sample = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/teacher/homepage/cert-count');
        const data = await response.json();
  
        setChartData({
          labels: ['With Certificate', 'Without Certificate'],
          datasets: [
            {
              data: [data.withCert, data.withoutCert],
              backgroundColor: ['#36A2EB', '#FFCE56'],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    let myChart = null;
  
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
  
      // Destroy existing chart instance if it exists
      if (myChart) {
        myChart.destroy();
      }

      // Resize the canvas element
      chartRef.current.width = 300; // Set your desired width
      chartRef.current.height = 300; // Set your desired height
  
      myChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: false, // Disable automatic resizing
          },
      });
    }
  
    // Cleanup the chart instance when the component is unmounted
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [chartData]);
  

  return (
    <div className="container sample">
      <div className="legend-title">Tỉ lệ sinh viên có chứng chỉ Ngoại ngữ</div>
      <div className="container fill">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default Sample;
