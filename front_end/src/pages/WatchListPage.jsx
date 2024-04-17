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
import { useOutletContext } from "react-router-dom";
import WatchList from "../components/WatchList";



const WatchListPage = () => {
    // const [user, setUser] = useState(null);
    const {user} = useOutletContext();
 
    
      return (
        <>
            
        
            <WatchList data={user} />
            
          
          
          
        </>
      )
    }
    
    export default WatchListPage;