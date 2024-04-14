import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar({ user }) {
  // console.log(user.email);
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SuperStockSaver</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Watch List</Nav.Link>
           
          </Nav>
          <Navbar.Brand href="#user">Welcome: { user ? user : ""}</Navbar.Brand>
          {user && <Button variant="outline-light">Log Out</Button>}
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default NavBar;



