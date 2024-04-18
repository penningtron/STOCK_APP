import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { api } from '../utilities';

function AddWatchedStock() {
  const [symbol, setSymbol] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await api.post('watched_stocks/', {
          symbol,
          
        }, 
         
        );
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='form'>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label style={{fontSize: '25px'}}>Add a stock to watch:</Form.Label>
        <Form.Control type="text" placeholder="Enter symbol" value={symbol} onChange={e => setSymbol(e.target.value)} />
      </Form.Group>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddWatchedStock;