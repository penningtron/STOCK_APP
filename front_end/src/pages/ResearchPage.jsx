import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import dotenv from 'dotenv';
// dotenv.config();
// import process from 'process';
import PortfolioChart from '../components/PortfolioChart';






const ResearchPage = () => {
 

  return (
    <div>
      {/* <canvas ref={chartRef} /> */}
      <PortfolioChart />
    </div>
  );
};

export default ResearchPage;