import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from 'react-router-bootstrap'

function SubNavW() {

    return (
      <div className="container-navbar">
      <Navbar bg="white fixed-top" expand="lg">
      <LinkContainer to="/"><Navbar.Brand className="logo">CULTURD</Navbar.Brand></LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto navbar">
              <LinkContainer to="/workshop"><Nav.Link className="nav-color">Home</Nav.Link></LinkContainer>
              <NavDropdown className="nav-color" title="Worskhops" >
                <LinkContainer to="/food"><NavDropdown.Item className="nav-color" to="/food" >Afganistan</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/food"><NavDropdown.Item className="nav-color" to="/food" >Congo</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/food"><NavDropdown.Item className="nav-color" to="/food" >Chinese</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/food"><NavDropdown.Item className="nav-color" to="/food" >Indonesia</NavDropdown.Item></LinkContainer>
             </NavDropdown>
                <LinkContainer to="/workshop/about_us"><Nav.Link className="nav-color">Worskhops</Nav.Link></LinkContainer>
                <LinkContainer to="/workshop/bookform"><Nav.Link className="nav-color">BOOK NOW</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
}
export default SubNavW
