import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Logo from './Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
       <Navbar>
                <Navbar.Brand href="/home"><img src={Logo} width='16%' alt="" /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                    </Form>
                </Nav>
                <Nav>                       {/* This are our navigation bar */}
                    <Nav.Link href="/hotel">Destination</Nav.Link>
                    <Nav.Link href="/hotel">Blog</Nav.Link>
                    <Nav.Link href="/hotel">Hotel</Nav.Link>
                    <Nav.Link href="/login"><Button variant="warning">Login</Button></Nav.Link>
                </Nav>
            </Navbar>
    </div>
  );
};

export default Header;