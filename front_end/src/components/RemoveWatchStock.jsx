import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function RemoveWatchStock() {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/watched_stocks/${symbol}/`, {
        
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }
        });
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='form'>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label style={{fontSize: '25px'}}>Stock to remove</Form.Label>
        <Form.Control type="text" placeholder="Enter symbol" value={symbol} onChange={e => setSymbol(e.target.value)} />
      </Form.Group>

      

      <Button variant="danger" type="submit">
        Remove
      </Button>
    </Form>
  );
}

export default RemoveWatchStock;