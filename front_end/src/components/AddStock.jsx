import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { api } from '../utilities';

function AddStock() {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await api.post('stock_positions/', {
          symbol,
          quantity
        }, 
         
        );
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='form'>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label style={{fontSize: '25px'}}>Add A Stock</Form.Label>
        <Form.Control type="text" placeholder="Enter symbol" value={symbol} onChange={e => setSymbol(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
      </Form.Group>

      <Button className="mb-4" variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddStock;