import Sidebar from "../components/Sidebar"
import Dashboard from "../components/DashBoard";
import StockCard from "../components/PortfolioList";
import PortfolioChart from "../components/PortfolioChart";
import PortTable from "../components/PortfolioList";
import { useState, useEffect } from 'react'; // Add these imports
import PortfolioList from "../components/PortfolioList";
import AddStock from "../components/AddStock";
import RemoveStock from "../components/RemoveStock";
import ChangeStockQuantity from "../components/ChangeQuantity";



const HomePage = () => {
    const [user, setUser] = useState(null);
    console.log(user)
    useEffect(() => {
        const fetchUser = async () => {
            try {
              const response = await fetch('http://127.0.0.1:8000/api/v1/stock_positions/', {
                headers: {
                  'Authorization': `Token ${localStorage.getItem('token')}` // Replace with the way you store your token
                }
              });
              const userData = await response.json();
              
              setUser(userData);
              console.log(userData);
            } catch (error) {
              console.error('Error fetching user:', error);
            }
          };
    
        fetchUser();
      }, []);

      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);
    
      return (
        <>
            <AddStock />
        
            <PortfolioList data={user} />
            <ChangeStockQuantity />
          
          <RemoveStock />
          
        </>
      )
    }
    
    export default HomePage;