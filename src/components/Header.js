import React from 'react'
import {Container,  Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                  <LinkContainer to='./'>
  <Navbar.Brand>Expresso</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to='/home'>
      <Nav.Link ><i className="fas fa-shopping-cart"></i> Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/login'>
      <Nav.Link ><i className="fas fa-user"></i> login</Nav.Link>
      </LinkContainer>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header

