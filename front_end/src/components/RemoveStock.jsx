import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function RemoveStock() {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await axios.delete('http://127.0.0.1:8000/api/v1/stock_positions/', {
          data: {
            symbol
          
        }, 
          headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
          }
        });
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Stock to remove</Form.Label>
        <Form.Control type="text" placeholder="Enter symbol" value={symbol} onChange={e => setSymbol(e.target.value)} />
      </Form.Group>

      

      <Button variant="primary" type="submit">
        Remove
      </Button>
    </Form>
  );
}

export default RemoveStock;