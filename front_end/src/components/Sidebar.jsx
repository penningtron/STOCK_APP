import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { userLogout } from '../utilities';
import React, { useEffect } from 'react';


function NavBar({ user, setUser }) {
  const handleLogout = () => {
    // Clear the user's session or token here
    setUser(null); // If you're storing the user in state
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('You have been logged out.'); // If you're storing the token in local storage
  };


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  // console.log(user.email);
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/homepage">SuperStockSaver</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Watch List</Nav.Link>
            <Link to="/research" className="nav-link">Research</Link>
           
          </Nav>
          <Navbar.Brand href="#user">Welcome: { user ? user : ""}</Navbar.Brand>
          {user && (
            <Link to="/">
              <Button variant="outline-light" onClick={() => handleLogout()}>Log Out</Button>
            </Link>
          )}
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default NavBar;



