import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import { api } from '../utilities/'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddStock from './AddStock';




// function PortfolioList() {
//   const [stockPositions, setStockPositions] = useState([]);

//   useEffect(() => {
    

//     const fetchStockPositions = async () => {
//       try {
//         const response = await api.get('stock_positions/', {
//           headers: {
//             'Authorization': `Token ${localStorage.getItem('token')}` // Replace with the way you store your token
//           }
//         });
//         const data = await response.data;
//         setStockPositions(data);
//       } catch (error) {
//         console.error('Error fetching stock positions:', error);
//       }
//     };

//     fetchStockPositions();
//   }, []);

//   return (
//     <>
//     <h1> Your Portfolio</h1>
//       {stockPositions && (
//         <ListGroup as="ol" numbered className='top-form mb-5'>
          
//           {stockPositions.map((item, index) => (
//             <ListGroup.Item as="li" key={index}>
//               {item.symbol} - Quantity: {item.quantity}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       )}
//     </>
//   );
// }

// export default PortfolioList;




const apiKey = import.meta.env.VITE_ALPACA_API_KEY;
const secretKey = import.meta.env.VITE_ALPACA_SECRET_KEY;

const PortfolioList = () => {
  const [stockPositions, setStockPositions] = useState([]);

  useEffect(() => {
    const fetchStockPositions = async () => {
      try {
        const response = await api.get('stock_positions/', {
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}` // Replace with the way you store your token
          }
        });
        const data = await response.data;

        const updatedPositions = await Promise.all(data.map(async (position) => {
          console.log(position);
          
          const symbolResponse = await axios.get(`https://data.alpaca.markets/v2/stocks/${position.symbol}/trades/latest?feed=iex`, {
            headers: {
              'APCA-API-KEY-ID': apiKey,
              'APCA-API-SECRET-KEY': secretKey
            }
          });
          
          console.log(symbolResponse.data.trade.p);
          const symbolData = await symbolResponse.data;
          return {
            ...position,
            lastTradePrice: symbolData.trade.p
          };
        }));

        setStockPositions(updatedPositions);
      } catch (error) {
        console.error('Error fetching stock positions:', error);
      }
    };

    fetchStockPositions();
  }, []);

  const deleteStock = async (symbol) => {
    try {
      await api.delete(`stock_positions/${symbol}`, {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}` // Replace with the way you store your token
        }
      });
      setStockPositions(stockPositions.filter(position => position.symbol !== symbol));
    } catch (error) {
      console.error(`Error deleting stock ${symbol}:`, error);
    }
  };

  return (
    <>
      <h1> Your Portfolio</h1>
      {stockPositions && (
        <ListGroup as="ol" numbered className='top-form mb-5'>
          {stockPositions.map((item, index) => (
           <ListGroup.Item as="li" key={index}>
           {item.symbol} - Quantity: {item.quantity} - Last Trade Price: ${item.lastTradePrice}
           <Button variant="danger" onClick={() => deleteStock(item.symbol)}>Delete</Button>
         </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <AddStock />
    </>
  );
};

export default PortfolioList;