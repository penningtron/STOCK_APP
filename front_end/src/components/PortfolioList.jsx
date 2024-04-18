import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import { api } from '../utilities/'

// function PortfolioList() {
//   return (
//     <ListGroup as="ol" numbered>
//       <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
//       <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
//       <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
//     </ListGroup>
//   );
// }

// export default PortfolioList;


function PortfolioList() {
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
        setStockPositions(data);
      } catch (error) {
        console.error('Error fetching stock positions:', error);
      }
    };

    fetchStockPositions();
  }, []);

  return (
    <>
    <h1> Your Portfolio</h1>
      {stockPositions && (
        <ListGroup as="ol" numbered className='top-form mb-5'>
          
          {stockPositions.map((item, index) => (
            <ListGroup.Item as="li" key={index}>
              {item.symbol} - Quantity: {item.quantity}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default PortfolioList;






// function PortfolioList({ userData }) {
//   console.log(userData)
//   return (
//     <>
//       {userData && (
//         <ListGroup as="ol" numbered>
//           {userData.map((item, index) => (
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