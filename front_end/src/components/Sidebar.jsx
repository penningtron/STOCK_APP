import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { userLogout } from '../utilities';
import React, { useState, useEffect } from 'react';




function NavBar({ user, setUser }) {
  
    useEffect(() => {
    const storedUser = localStorage.getItem(user);
    if (storedUser) {
      console.log(storedUser);
      setUser(storedUser);

    }
  }, []);
  // const { setUser } = useOutletContext();
  const handleLogout = () => {
    // Clear the user's session or token here
    setUser(null); // If you're storing the user in state
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('You have been logged out.'); // If you're storing the token in local storage
  };




  console.log(localStorage.getItem('user'))


  // console.log(user.email);
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark" className='bg-dark' >
        <Container >
          <Navbar.Brand as={Link} to="/homepage">SuperStockSaver</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/watch_list" className="nav-link">Watch List</Link>
            <Link to="/research" className="nav-link">Research</Link>
           
          </Nav>
          <Navbar.Brand href="#user">Welcome: { user ? user : ""}</Navbar.Brand>
          {user && (
            <Link to="/homepage">
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



