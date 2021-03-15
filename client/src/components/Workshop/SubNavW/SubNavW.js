import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {LinkContainer} from 'react-router-bootstrap'

function SubNavW() {
    return (
      <div className="container-navbar">
      <Navbar bg="light fixed-top">
          <LinkContainer to="/"><Navbar.Brand className="logo">CULTURD</Navbar.Brand></LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto navbar">
              <LinkContainer to="/"><Nav.Link className="nav-color">Home</Nav.Link></LinkContainer>
              <NavDropdown className="nav-color" title="Products" >
              <LinkContainer to="/workshop"><NavDropdown.Item  className="nav-color">CULTURD WORKSHOP</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/food"><NavDropdown.Item className="nav-color" to="/food" >CULTURD KITCHING</NavDropdown.Item></LinkContainer>
             </NavDropdown>
                <LinkContainer to="/workshop/about_us"><Nav.Link className="nav-color">About Us</Nav.Link></LinkContainer>
                <LinkContainer to="/workshop/Pricing"><Nav.Link className="nav-color">Pricing</Nav.Link></LinkContainer>
                <NavDropdown className="nav-color" title="Events List" >
              <LinkContainer to="/workshop"><NavDropdown.Item  className="nav-color">Indonesia</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/food"><NavDropdown.Item className="nav-color" to="/food" >Congo</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/workshop"><NavDropdown.Item  className="nav-color">Afganistan</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/food"><NavDropdown.Item className="nav-color" to="/food" >Chinese</NavDropdown.Item></LinkContainer>
             </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
}
export default SubNavW
