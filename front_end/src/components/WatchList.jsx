import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import { api } from '../utilities/'

function WatchList() {
    const [watchList, setWatchList] = useState([]);
  
    useEffect(() => {
      
  
      const fetchWatchList = async () => {
        try {
          const response = await api.get('watched_stocks/', {
            headers: {
              'Authorization': `Token ${localStorage.getItem('token')}` // Replace with the way you store your token
            }
          });
          const data = await response.data;
          setWatchList(data);
        } catch (error) {
          console.error('Error fetching stock positions:', error);
        }
      };
  
      fetchWatchList();
    }, []);


  
    return (
      <>
      <h1> Your Watched Stocks:</h1>
        {watchList && (
          <ListGroup as="ol" numbered className='top-form mb-5'>
            {watchList.map((item, index) => (
              <ListGroup.Item as="li" key={index}>
                {item.symbol}  {item.quantity}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        
      </>
    );
  }
  
  export default WatchList;