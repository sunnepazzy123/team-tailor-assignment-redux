import React from 'react'
import {Nav, Navbar, Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"  //this wrap up bootstrap component


const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/" >
                <Navbar.Brand >TeamTailor</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to="/documentation">
                <Nav.Link href="/documentation"><i className="fas fa-shopping-cart" />Documentation</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/watched">
                <Nav.Link href="/watched"><i className="fas fa-user" />Watched</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/add">
                <Nav.Link href="/add"><i className="fas fa-user" />add</Nav.Link>
                </LinkContainer>
                </Nav>
                </Navbar.Collapse>  
                </Container>
           
                </Navbar>
        </div>
    )
}

export default Header
