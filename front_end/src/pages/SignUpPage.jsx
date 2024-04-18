import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../utilities';
import { useOutletContext } from 'react-router-dom';
import { userLogin } from '../utilities'; // Import the userLogin function
import { useNavigate } from 'react-router-dom'; // Import the navigate function
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpForm() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  

  const signupUser = async(e) => {
    e.preventDefault();
    alert("Check your phone for the verification code and input into the terminal:");
    const response = await api.post("users/signup/", { first_name, last_name, email, password, phone_number });
    
    if (response.status === 201) {
      alert("User created successfully");
      const { user } = await userLogin(email, password);
        
        
      if (user) {
        console.log(user);
        setUser(user);
        localStorage.setItem("user", user);
      
        alert("Login successful");
        navigate('/homepage');
      }
      
      
    
    }
  };

 



  return (
    <>
    <h1>Sign Up Page</h1>
    <Form onSubmit={signupUser} className='form'>
      <Form.Group className="mb-3">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" value={first_name} onChange={e => setFirstName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" value={last_name} onChange={e => setLastName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="tel" value={phone_number} onChange={e => setPhoneNumber(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default SignUpForm;