import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import dotenv from 'dotenv';
// dotenv.config();
// import process from 'process';
import PortfolioChart from '../components/PortfolioChart';
import 'bootstrap/dist/css/bootstrap.min.css';





const apiKey = import.meta.env.VITE_ALPACA_API_KEY;
const secretKey = import.meta.env.VITE_ALPACA_SECRET_KEY;

const StockChart = () => {
  const [data, setData] = useState(null);
  const chartRef = useRef(null);
  const [symbol, setSymbol] = useState('AAPL');
  const [loading, setLoading] = useState(true);
  const [chartInstance, setChartInstance] = useState(null);
  const [inputValue, setInputValue] = useState(symbol);
  const [companyName, setCompanyName] = useState(null);
  const [exchange, setExchange] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value); // update inputValue when the input changes
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSymbol(inputValue); // update symbol when the form is submitted
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
      const day = String(date.getDate()).padStart(2, '0');
      // format to YYYY-MM-DD
      const currentDate = `${year}-${month}-${day}T00:00:00Z`;
      const response = await axios.get(`https://data.alpaca.markets/v2/stocks/${symbol}/bars`, {
        params: {
          timeframe: '1D',
          start: '2024-01-01T00:00:00Z',
          end: currentDate
        },
        headers: {
          'APCA-API-KEY-ID': apiKey,
          'APCA-API-SECRET-KEY': secretKey
        }
      });
      
      setData(response.data.bars);
      console.log(response.data);

      // get the compnay name
      const companyNameResponse = await axios.get(`https://paper-api.alpaca.markets/v2/assets/${symbol}`, {
        headers: {
          'APCA-API-KEY-ID': apiKey,
          'APCA-API-SECRET-KEY': secretKey
        }
      });
      setCompanyName(companyNameResponse.data.name);
      setExchange(companyNameResponse.data.exchange);
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  

 



  useEffect(() => {
    if (!loading && data && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      // create a new chart instence
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(item => {
            const date = new Date(item.t);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
            const year = date.getFullYear();
          
            return `${month}/${day}/${year}`;
          }), 
          datasets: [{
            label: `${symbol} : ${companyName} : Exchange - ${exchange}`,
            data: data.map(item => item.c), // replace with your data's closing price
            fill: false,
            borderColor: getRandomColor(),
            tension: 0.1
          }]
        }
      });
      //call the new chart instance
      setChartInstance(newChartInstance);
    }
  }, [loading, data, symbol, companyName]);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
          <div>
            <form onSubmit={handleSubmit} className='top-form'>
        <div className="mb-3 mt-4 form-group">
          <label style={{fontSize: '25px'}} htmlFor="exampleInputEmail1">Search for a symbol:</label>
          <div>
          <input type="text" className="form-control" value={inputValue} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="SYMBOL"/>
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <small id="emailHelp" className="form-text text-muted">Ensure symbol is in all caps</small>
          
        </div>
        
        
       
      
        
      </form>
      
      
      {/* <form onSubmit={handleSubmit}>
        <input type = "text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>

      </form> */}
      <br></br>
      <canvas ref={chartRef} />
      {/* <PortfolioChart /> */}
    </div>
  );
};

export default StockChart;


