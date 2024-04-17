
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { userLogin } from '../utilities';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useOutletContext();
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        const { user } = await userLogin(email, password);
        
        
        if (user) {
          console.log(user);
          setUser(user);
          localStorage.setItem("user", user);
          //comment the line below to get it kind of working
            // localStorage.setItem("user", JSON.stringify(user));
            alert("Login successful");
            navigate('/homepage');
        }
    
    }






return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LogIn;