import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from 'react-router-bootstrap'
import './Nav.css'




function MainNav() {
    return (
        <div className="header">
           <Navbar bg="light" expand="lg">
           <LinkContainer to="/"><Navbar.Brand className="logo">CULTURD</Navbar.Brand></LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto navbar">
          <LinkContainer to="/"><Nav.Link className="nav-color">Home</Nav.Link></LinkContainer>
            <NavDropdown className="nav-color" title="Products" >
                 <NavDropdown.Item  className="nav-color" to="/link_to_somewhere" >Indonesian Avond</NavDropdown.Item>
                 <NavDropdown.Item className="nav-color" to="/link_to_somewhere" >chinese Newyear</NavDropdown.Item>
             </NavDropdown>
             <LinkContainer to="/about_us"><Nav.Link className="nav-color">About Us</Nav.Link></LinkContainer>
            <Nav.Link className="nav-color" href="#foo">Register</Nav.Link>
            <Nav.Link className="nav-color" href="#foo">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      </div>

    )
}

export default MainNav
