import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import dotenv from 'dotenv';
// dotenv.config();
// import process from 'process';



// Now you can use them:




const apiKey = import.meta.env.VITE_ALPACA_API_KEY;
const secretKey = import.meta.env.VITE_ALPACA_SECRET_KEY;

const StockChart = () => {
  const [data, setData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://data.alpaca.markets/v2/stocks/AAPL/bars', {
          params: {
            timeframe: '1D',
            start: '2023-01-01T00:00:00Z',
            end: '2023-01-03T00:00:00Z'
          },
          headers: {
            'APCA-API-KEY-ID': apiKey,
            'APCA-API-SECRET-KEY': secretKey
          }
        });
        setData(response.data.bars);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(item => item.t), // replace with your data's timestamp
          datasets: [{
            label: 'AAPL',
            data: data.map(item => item.c), // replace with your data's closing price
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default StockChart;