import Sidebar from "../components/Sidebar"
import Dashboard from "../components/DashBoard";
import StockCard from "../components/PortfolioList";
import PortfolioChart from "../components/PortfolioChart";
import PortTable from "../components/PortfolioList";
import { useState, useEffect } from 'react'; // Add these imports
import PortfolioList from "../components/PortfolioList";



const HomePage = () => {
    const [user, setUser] = useState(null);
    console.log(user)
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch('/stock_positions'); // Replace with your API endpoint
            const userData = await response.json();
            
            setUser(userData);
            console.log(userData);
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
    
        fetchUser();
      }, []);
    
      return (
        <>
            <PortfolioList />
          <PortfolioChart />
          {user && <PortfolioChart stock_positions={user.stock_positions} />} {/* Pass stock_positions to PortfolioChart */}
        </>
      )
    }
    
    export default HomePage;